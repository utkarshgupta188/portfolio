import OverlayUI from './components/OverlayUI'

function App() {
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
