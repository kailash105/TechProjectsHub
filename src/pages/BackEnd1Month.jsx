import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BackEnd1Month() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto w-full px-4 py-12 flex-1">
        <h1 className="text-4xl font-extrabold text-green-700 mb-6 text-center">Back End Training - 1 Month</h1>
        <div className="bg-green-50 rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Who is this for?</h2>
          <p className="text-gray-700 mb-4">Ideal for beginners or those looking for a fast-track introduction to back-end development. This intensive 1-month program covers the essentials to get you started with server-side programming and databases.</p>
          <h2 className="text-2xl font-bold text-green-800 mb-4 mt-8">Syllabus & Schedule</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Week 1: Server-side basics (Node.js/Python/Java)</li>
            <li>Week 2: Database basics (SQL/NoSQL)</li>
            <li>Week 3: REST API fundamentals</li>
            <li>Week 4: Mini project (simple back-end system)</li>
          </ul>
          <h2 className="text-2xl font-bold text-green-800 mb-4 mt-8">Outcomes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Build a basic back-end system</li>
            <li>Understand server-side programming and databases</li>
            <li>Hands-on experience with a mini project</li>
            <li>Certificate of completion</li>
          </ul>
          <div className="text-2xl font-bold text-green-700 mb-4">Fee: ₹4,999</div>
          <a href="/contact" className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition text-lg">Enroll Now</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BackEnd1Month; 