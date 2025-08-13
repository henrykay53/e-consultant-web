import React, { useState } from 'react'
import { services } from '../data'

const  Form = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState(services[0].id)

  const submit = (e) => {
    e.preventDefault()
    // In a real app: send to API/CRM, show success state. Here we just simulate.
    alert(`Thanks ${name || 'Customer'} — we received your request. We will call ${phone || 'you'} shortly.`)
    setName('')
    setPhone('')
  }

  return (
    <form onSubmit={submit} className="lg:w-[50%] mt-4 bg-white p-3 border rounded-md shadow-sm">
      <div className="flex gap-3 flex-col">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="p-2 border rounded" />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="p-2 border rounded" />
        <select value={service} onChange={(e) => setService(e.target.value)} className="p-2 border rounded">
          {services.map((s) => (
            <option key={s.id} value={s.id}>{s.title}</option>
          ))}
        </select>
      </div>
      <div className="mt-3 text-right">
        <button type="submit" className="px-4 py-2 rounded bg-green-600 text-white">Request Quote</button>
      </div>
    </form>
  )
}

export default Form