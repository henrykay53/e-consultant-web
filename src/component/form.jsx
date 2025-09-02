import  { useState } from "react";
import { services } from "../data";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0].id);

  const submit = (e) => {
    e.preventDefault();

    // Build the message
    const selectedService = services.find((s) => s.id === service)?.title;
    const message = `Hi! I am ${name || "a customer"} I would like to get a quote for ${selectedService}. My phone number is ${phone || "N/A"}.`;

    // Replace with your business WhatsApp number (in international format, without + or spaces)
    const businessNumber = "2349056981893"; // e.g. 2348012345678 for Nigeria

    // Generate WhatsApp URL
    const whatsappUrl = `https://wa.me/${businessNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form
    setName("");
    setPhone("");
    setService(services[0].id);
  };

  return (
    <form
      onSubmit={submit}
      className="lg:w-[50%] mt-4 bg-white p-3 border rounded-md shadow-sm"
    >
      <div className="flex gap-3 flex-col">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="p-2 border rounded"
          required
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="p-2 border rounded"
          required
        />
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="p-2 border rounded"
        >
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-3 text-right">
        <button
          type="submit"
          className="px-4 py-2 rounded bg-green-600 text-white"
        >
          Request Quote
        </button>
      </div>
    </form>
  );
};

export default Form;
