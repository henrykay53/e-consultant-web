export default function App() {
  const [route, navigate] = useHashRoute()

  // route examples:
  // / => home
  // /services => services list
  // /services/termite-treatment => service detail
  // /pricing, /about, /tips, /contact

  useEffect(() => {
    if (!window.location.hash) window.location.hash = '/' // default
  }, [])

  // parse route
  const parts = route.split('/').filter(Boolean)

  let content = null
  if (parts.length === 0) content = <Home navigate={navigate} />
  else if (parts[0] === 'services' && parts.length === 1) content = <ServicesList navigate={navigate} />
  else if (parts[0] === 'services' && parts.length === 2) content = <ServiceDetail id={parts[1]} navigate={navigate} />
  else if (parts[0] === 'pricing') content = <Pricing />
  else if (parts[0] === 'about') content = <About />
  else if (parts[0] === 'tips') content = <Tips />
  else if (parts[0] === 'contact') content = <Contact />
  else content = <Home navigate={navigate} />

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header navigate={navigate} />
      {content}
      <Footer />

      {/* Floating WhatsApp */}
      <a href="https://wa.me/2348000000000" target="_blank" rel="noreferrer" className="fixed right-4 bottom-24 rounded-full shadow-lg p-3 bg-green-600 text-white">
        WhatsApp
      </a>

      {/* Mobile sticky call/quote bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-between items-center sm:hidden">
        <a href="tel:+2348000000000" className="px-4 py-2 rounded bg-green-50 border text-green-700">Call</a>
        <button onClick={() => navigate('/pricing')} className="px-4 py-2 rounded bg-green-600 text-white">Get Quote</button>
      </div>
    </div>
  )
}