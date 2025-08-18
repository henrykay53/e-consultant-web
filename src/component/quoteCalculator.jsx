// import { useState } from "react"

// const QuoteCalculator = ()=> {
//   const [property, setProperty] = useState('apartment')
//   const [size, setSize] = useState('small')
//   const [pest, setPest] = useState('cockroach')

//   const compute = () => {
//     let base = 8000
//     if (property === 'house') base += 8000
//     if (size === 'large') base += 15000
//     if (pest === 'termite') base += 1500
//     return base
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
//       <select value={property} onChange={(e) => setProperty(e.target.value)} className="p-2 border rounded">
//         <option value="apartment">Apartment</option>
//         <option value="house">House</option>
//         <option value="commercial">Commercial</option>
//       </select>
//       <select value={size} onChange={(e) => setSize(e.target.value)} className="p-2 border rounded">
//         <option value="small">Small</option>
//         <option value="medium">Medium</option>
//         <option value="large">Large</option>
//       </select>
//       <select value={pest} onChange={(e) => setPest(e.target.value)} className="p-2 border rounded">
//         <option value="cockroach">Cockroach</option>
//         <option value="termite">Termite</option>
//         <option value="rodent">Rodent</option>
//       </select>

//       <div className="sm:col-span-3 mt-3">
//         <div className="flex items-center justify-between">
//           <div className="text-sm text-gray-600">Estimated Price</div>
//           <div className="text-xl font-bold">₦{compute().toLocaleString()}</div>
//         </div>
//       </div>
//     </div>
//   )
// }   

// export default QuoteCalculator;




import { useState } from "react"
import { pricing } from "../data"

const QuoteCalculator = () => {
  const [houseType, setHouseType] = useState("Apartment")
  const [fumigationType, setFumigationType] = useState("bbTreatment")
  const [location, setLocation] = useState("lagosIsland")
  const [rooms, setRooms] = useState(0)

  const compute = () => {
    const house = pricing.find((p) => p.id === "houseType")
    const fumigation = pricing.find((p) => p.id === "fumigationType")
    const loc = pricing.find((p) => p.id === "location")

    let base =
      (house?.[houseType] || 0) +
      (fumigation?.[fumigationType] || 0) +
      (loc?.[location] || 0)

    // Add room charge
    base += rooms * 5000

    return base
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      {/* House Type */}
      <select
        value={houseType}
        onChange={(e) => setHouseType(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="Apartment">Apartment</option>
        <option value="Bungalow">Bungalow</option>
        <option value="Duplex">Duplex</option>
        <option value="Mansion">Mansion</option>
        <option value="Warehouse">Warehouse</option>
      </select>

      {/* Fumigation Type */}
      <select
        value={fumigationType}
        onChange={(e) => setFumigationType(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="bbTreatment">Bed Bug Treatment</option>
        <option value="termiteTreatment">Termite Treatment</option>
        <option value="rodentTreatment">Rodent Treatment</option>
        <option value="cockroachTreatment">Cockroach Treatment</option>
      </select>

      {/* Location */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="lagosIsland">Lagos Island</option>
        <option value="lagosMainland">Lagos Mainland</option>
      </select>

     <div>
       <p>Number of rooms</p>

      {/* Number of Rooms */}
      <input
        type="number"
        min="0"
        value={rooms}
        onChange={(e) => setRooms(Number(e.target.value))}
        className="p-2 border rounded w-full"
        placeholder="Number of Rooms"
      />
     </div>

      {/* Estimated Price */}
      <div className="sm:col-span-2 mt-4">
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded shadow">
          <div className="text-sm text-gray-600">Estimated Price</div>
          <div className="text-2xl font-bold text-red-700">
            ₦{compute().toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuoteCalculator
