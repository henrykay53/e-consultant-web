import { useState } from "react"

const QuoteCalculator = ()=> {
  const [property, setProperty] = useState('apartment')
  const [size, setSize] = useState('small')
  const [pest, setPest] = useState('cockroach')

  const compute = () => {
    let base = 8000
    if (property === 'house') base += 8000
    if (size === 'large') base += 15000
    if (pest === 'termite') base += 15000
    return base
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
      <select value={property} onChange={(e) => setProperty(e.target.value)} className="p-2 border rounded">
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="commercial">Commercial</option>
      </select>
      <select value={size} onChange={(e) => setSize(e.target.value)} className="p-2 border rounded">
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <select value={pest} onChange={(e) => setPest(e.target.value)} className="p-2 border rounded">
        <option value="cockroach">Cockroach</option>
        <option value="termite">Termite</option>
        <option value="rodent">Rodent</option>
      </select>

      <div className="sm:col-span-3 mt-3">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">Estimated Price</div>
          <div className="text-xl font-bold">₦{compute().toLocaleString()}</div>
        </div>
      </div>
    </div>
  )
}   

export default QuoteCalculator;