import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";

function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Enquiry submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white flex flex-col">
      <Navbar />

      <div className="max-w-xl mx-auto p-6 bg-gradient-to-br from-indigo-200/70 via-white/60 to-pink-200/60 backdrop-blur-xl rounded-3xl shadow-2xl mt-12">
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8 drop-shadow">Book A Demo</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full p-3 rounded-lg border border-gray-300"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-lg border border-gray-300"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full p-3 rounded-lg border border-gray-300"
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300"
          >
            <option value="">Select a Service</option>
            <option>Interior Design</option>
            <option>Construction</option>
            <option>3D Concrete Printing</option>
            <option>Project Consultancy</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message / Demo Request Details"
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-300"
          />

          <button
            type="submit"
            className="w-full bg-white hover:bg-gray-200 text-black font-bold py-3 rounded-lg shadow"
          >
            Submit Enquiry
          </button>
        </form>
      </div>

      <ToastContainer />
      
      <Footer />
    </div>
  );
}

export default EnquiryForm;
