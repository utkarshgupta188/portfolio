import { useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function NeuralNetwork({ boxSize = 100, nodeCount = 300, connectionDistance = 15 }) {
    const pointsRef = useRef()
    const linesRef = useRef()

    const raycaster = useMemo(() => new THREE.Raycaster(), [])
    const tempVec3 = useMemo(() => new THREE.Vector3(), [])
    const tempVec3ToRay = useMemo(() => new THREE.Vector3(), [])
    const closestPoint = useMemo(() => new THREE.Vector3(), [])
    const repelDir = useMemo(() => new THREE.Vector3(), [])

    // Generate random node positions within the box volume
    const [{ positions, velocities, baseVelocities }] = useState(() => {
        const positions = new Float32Array(nodeCount * 3)
        const velocities = []
        const baseVelocities = []

        for (let i = 0; i < nodeCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * boxSize
            positions[i * 3 + 1] = (Math.random() - 0.5) * boxSize
            positions[i * 3 + 2] = (Math.random() - 0.5) * boxSize

            const vel = new THREE.Vector3(
                (Math.random() - 0.5) * 0.05,
                (Math.random() - 0.5) * 0.05,
                (Math.random() - 0.5) * 0.05
            )
            velocities.push(vel.clone())
            baseVelocities.push(vel.clone())
        }
        return { positions, velocities, baseVelocities }
    })

    // Precalculate lines buffer (worst case max lines)
    const linePositions = useMemo(() => {
        // Safe bet: max connections per node is around 10
        return new Float32Array(nodeCount * 10 * 6)
    }, [nodeCount])

    useFrame((state) => {
        if (!pointsRef.current || !linesRef.current) return

        const positions = pointsRef.current.geometry.attributes.position.array
        const linePositionsBuffer = linesRef.current.geometry.attributes.position.array
        let lineIndex = 0

        // Handle mouse interaction
        raycaster.setFromCamera(state.pointer, state.camera)
        const interactionRadius = 15 // Distance of mouse effect

        // Move the particles slightly
        for (let i = 0; i < nodeCount; i++) {
            positions[i * 3] += velocities[i].x
            positions[i * 3 + 1] += velocities[i].y
            positions[i * 3 + 2] += velocities[i].z

            // Interaction: distance to ray
            tempVec3.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2])
            tempVec3ToRay.subVectors(tempVec3, raycaster.ray.origin)

            // Perpendicular distance to the ray
            const distToRay = tempVec3ToRay.clone().cross(raycaster.ray.direction).length()

            if (distToRay < interactionRadius) {
                // Find closest point on ray
                const projectedLength = tempVec3.clone().sub(raycaster.ray.origin).dot(raycaster.ray.direction)
                closestPoint.copy(raycaster.ray.origin).add(raycaster.ray.direction.clone().multiplyScalar(projectedLength))

                // Repel away from that point
                repelDir.subVectors(tempVec3, closestPoint).normalize()
                const force = (interactionRadius - distToRay) * 0.005
                velocities[i].add(repelDir.multiplyScalar(force))
            }

            // Friction/damping back to base velocity
            velocities[i].lerp(baseVelocities[i], 0.05)

            // Wrap around boundaries
            const halfBox = boxSize / 2
            if (positions[i * 3] > halfBox) positions[i * 3] = -halfBox
            if (positions[i * 3] < -halfBox) positions[i * 3] = halfBox
            if (positions[i * 3 + 1] > halfBox) positions[i * 3 + 1] = -halfBox
            if (positions[i * 3 + 1] < -halfBox) positions[i * 3 + 1] = halfBox
            if (positions[i * 3 + 2] > halfBox) positions[i * 3 + 2] = -halfBox
            if (positions[i * 3 + 2] < -halfBox) positions[i * 3 + 2] = halfBox
        }

        // Draw connections between nearby nodes
        for (let i = 0; i < nodeCount; i++) {
            const ix = positions[i * 3]
            const iy = positions[i * 3 + 1]
            const iz = positions[i * 3 + 2]

            for (let j = i + 1; j < nodeCount; j++) {
                const jx = positions[j * 3]
                const jy = positions[j * 3 + 1]
                const jz = positions[j * 3 + 2]

                const distSq = (ix - jx) ** 2 + (iy - jy) ** 2 + (iz - jz) ** 2

                if (distSq < connectionDistance ** 2) {
                    linePositionsBuffer[lineIndex++] = ix
                    linePositionsBuffer[lineIndex++] = iy
                    linePositionsBuffer[lineIndex++] = iz

                    linePositionsBuffer[lineIndex++] = jx
                    linePositionsBuffer[lineIndex++] = jy
                    linePositionsBuffer[lineIndex++] = jz
                }
            }
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true

        linesRef.current.geometry.setDrawRange(0, lineIndex / 3)
        linesRef.current.geometry.attributes.position.needsUpdate = true
    })

    return (
        <group>
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={nodeCount}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.2}
                    color="#2dd4bf"
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                />
            </points>

            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={linePositions.length / 3}
                        array={linePositions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color="#c084fc"
                    transparent
                    opacity={0.15}
                    depthWrite={false}
                />
            </lineSegments>
        </group>
    )
}
