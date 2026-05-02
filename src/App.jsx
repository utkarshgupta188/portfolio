import OverlayUI from './components/OverlayUI'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full min-h-screen bg-[#F2F2F2] selection:bg-black selection:text-white">
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
