import { useFrame } from '@react-three/fiber'
import { useScroll, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useRef } from 'react'
import * as THREE from 'three'
import NeuralNetwork from './NeuralNetwork'

// The camera path we fly through
const pathPoints = [
    new THREE.Vector3(0, 0, 15),     // Start / Home
    new THREE.Vector3(5, 5, 5),      // About Transition
    new THREE.Vector3(10, -5, -10),  // Skills / Experience
    new THREE.Vector3(-10, 0, -30),  // Projects
    new THREE.Vector3(0, 10, -50),   // Contact / Deep Network
]
const curve = new THREE.CatmullRomCurve3(pathPoints)

export default function Scene() {
    const scroll = useScroll()
    const cameraGroup = useRef()

    useFrame((state, delta) => {
        // T is scroll progress from 0 to 1
        const t = scroll.offset

        // Find position on the curve based on scroll
        const position = curve.getPoint(t)

        // Find where the camera should look (slightly ahead on the curve)
        // If we are at the very end, just look ahead slightly
        const lookAtPoint = curve.getPoint(Math.min(t + 0.05, 1.0))

        // Smoothly move the camera group
        cameraGroup.current.position.lerp(position, 4 * delta)

        // Make the camera look along the path
        const currentLookAt = new THREE.Vector3(0, 0, -1).applyQuaternion(cameraGroup.current.quaternion).add(cameraGroup.current.position)
        currentLookAt.lerp(lookAtPoint, 4 * delta)
        cameraGroup.current.lookAt(currentLookAt)
    })

    return (
        <>
            <group ref={cameraGroup}>
                <pointLight position={[0, 0, 0]} intensity={2} distance={20} color="#2dd4bf" />
            </group>

            {/* General environment lighting */}
            <directionalLight position={[10, 10, 5]} intensity={0.5} color="#c084fc" />

            {/* Deep background starfield to fill empty space */}
            <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1.5} />

            {/* The giant neural network graph containing everything (High Density) */}
            <NeuralNetwork boxSize={120} nodeCount={800} connectionDistance={18} />

            {/* Post Processing Effects */}
            <EffectComposer>
                <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} mipmapBlur />
            </EffectComposer>
        </>
    )
}
