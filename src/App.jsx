import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import Scene from './components/Scene'
import OverlayUI from './components/OverlayUI'
import { Suspense } from 'react'

function App() {
  return (
    <div className="w-full h-screen bg-[#03050a] overflow-hidden">
      {/* 
        ScrollControls intercepts scrolling to scrub through an animation 
        or camera proxy, rather than scrolling the document.
      */}
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 50 }}>
        <color attach="background" args={['#03050a']} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <ScrollControls pages={6.8} damping={0.15}>
            <Scene />
            {/* HTML overlays mapped to scroll progress */}
            <OverlayUI />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
