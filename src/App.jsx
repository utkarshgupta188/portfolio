import OverlayUI from './components/OverlayUI'
import { useEffect } from 'react'
import Lenis from 'lenis'

function App() {
  useEffect(() => {
    // Smooth Scroll Initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-[#F2F2F2] selection:bg-black selection:text-white">
      {/* Background Grid Lines */}
      <div className="grid-line grid-line-1" />
      <div className="grid-line grid-line-2" />
      <div className="grid-line grid-line-3" />
      <div className="grid-line grid-line-4" />

      <OverlayUI />
    </div>
  )
}

export default App
