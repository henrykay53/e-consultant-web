function useHashRoute() {
  const getHash = () => (window.location.hash ? window.location.hash.slice(1) : '/')
  const [route, setRoute] = useState(getHash())
  useEffect(() => {
    const onHash = () => setRoute(getHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return [route, (to) => (window.location.hash = to)]
}