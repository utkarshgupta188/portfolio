import { Canvas } from '@react-three/fiber'
import Scene from './components/Scene'
import OverlayUI from './components/OverlayUI'
import { Suspense, useRef, useEffect, useState, useCallback } from 'react'

function App() {
  const scrollContainerRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current
    if (!el) return
    const maxScroll = el.scrollHeight - el.clientHeight
    if (maxScroll <= 0) return
    setScrollProgress(el.scrollTop / maxScroll)
  }, [])

  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className="w-full h-[100dvh] bg-[#03050a] relative">
      {/* Fixed Three.js Canvas background */}
      <Canvas
        shadows
        camera={{ position: [0, 0, 15], fov: 50 }}
        className="!fixed !inset-0 !z-0"
      >
        <color attach="background" args={['#03050a']} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Scene scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>

      {/* Natively scrollable HTML content on top */}
      <div
        ref={scrollContainerRef}
        className="absolute inset-0 z-10 overflow-y-auto overflow-x-hidden"
      >
        <OverlayUI />
      </div>
    </div>
  )
}

export default App
