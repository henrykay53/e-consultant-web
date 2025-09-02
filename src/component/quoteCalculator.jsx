// import { useState } from "react"
// import { pricing } from "../data"

// const QuoteCalculator = () => {
//   const [houseType, setHouseType] = useState("Apartment")
//   const [fumigationType, setFumigationType] = useState("bbTreatment")
//   const [location, setLocation] = useState("lagosIsland")
//   const [rooms, setRooms] = useState(0)

//   const compute = () => {
//     const house = pricing.find((p) => p.id === "houseType")
//     const fumigation = pricing.find((p) => p.id === "fumigationType")
//     const loc = pricing.find((p) => p.id === "location")

//     let base =
//       (house?.[houseType] || 0) +
//       (fumigation?.[fumigationType] || 0) +
//       (loc?.[location] || 0)

//     // Add room charge
//     base += rooms * 5000

//     return base
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
//       {/* House Type */}
//       <select
//         value={houseType}
//         onChange={(e) => setHouseType(e.target.value)}
//         className="p-2 border rounded"
//       >
//         <option value="Apartment">Apartment</option>
//         <option value="Bungalow">Bungalow</option>
//         <option value="Duplex">Duplex</option>
//         <option value="Mansion">Mansion</option>
//         <option value="Warehouse">Warehouse</option>
//       </select>

//       {/* Fumigation Type */}
//       <select
//         value={fumigationType}
//         onChange={(e) => setFumigationType(e.target.value)}
//         className="p-2 border rounded"
//       >
//         <option value="bbTreatment">Bed Bug Treatment</option>
//         <option value="termiteTreatment">Termite Treatment</option>
//         <option value="rodentTreatment">Rodent Treatment</option>
//         <option value="cockroachTreatment">Cockroach Treatment</option>
//       </select>

//       {/* Location */}
//       <select
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         className="p-2 border rounded"
//       >
//         <option value="lagosIsland">Lagos Island</option>
//         <option value="lagosMainland">Lagos Mainland</option>
//       </select>

//      <div>
//        <p>Number of rooms</p>

//       {/* Number of Rooms */}
//       <input
//         type="number"
//         min="0"
//         value={rooms}
//         onChange={(e) => setRooms(Number(e.target.value))}
//         className="p-2 border rounded w-full"
//         placeholder="Number of Rooms"
//       />
//      </div>

//       {/* Estimated Price */}
//       <div className="sm:col-span-2 mt-4">
//         <div className="flex items-center justify-between bg-gray-50 p-3 rounded shadow">
//           <div className="text-sm text-gray-600">Estimated Price</div>
//           <div className="text-2xl font-bold text-red-700">
//             ₦{compute().toLocaleString()}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default QuoteCalculator



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

    base += rooms * 5000
    return base
  }

  return (
    <div className=" mt-12 mx-auto  rounded-2xl border border-gray-200 shadow-lg p-6 space-y-6">

      
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Quick Quote Calculator
      </h2>
      <p className="text-sm text-gray-500 text-center">
        Select your preferences below to get an instant estimate.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* House Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            House Type
          </label>
          <select
            value={houseType}
            onChange={(e) => setHouseType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-red-300  transition"
          >
            <option value="Apartment">Apartment</option>
            <option value="Bungalow">Bungalow</option>
            <option value="Duplex">Duplex</option>
            <option value="Mansion">Mansion</option>
            <option value="Warehouse">Warehouse</option>
          </select>
        </div>

        {/* Fumigation Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fumigation Type
          </label>
          <select
            value={fumigationType}
            onChange={(e) => setFumigationType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-red-300 transition"
          >
            <option value="bbTreatment">Bed Bug Treatment</option>
            <option value="termiteTreatment">Termite Treatment</option>
            <option value="rodentTreatment">Rodent Treatment</option>
            <option value="cockroachTreatment">Cockroach Treatment</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-red-300 transition"
          >
            <option value="lagosIsland">Lagos Island</option>
            <option value="lagosMainland">Lagos Mainland</option>
          </select>
        </div>

        {/* Number of Rooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Rooms
          </label>
          <input
            type="number"
            min="0"
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-red-300 transition"
            placeholder="e.g. 3"
          />
        </div>
      </div>

      {/* Estimated Price */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-center shadow-inner">
        <div className="text-gray-600 text-sm">Estimated Price</div>
        <div className="text-3xl font-extrabold text-red-700 mt-2">
          ₦{compute().toLocaleString()}
        </div>
      </div>
    </div>
  )
}

export default QuoteCalculator

