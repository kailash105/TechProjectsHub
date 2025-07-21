import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function WebFullStack2Months() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto w-full px-4 py-12 flex-1">
        <h1 className="text-4xl font-extrabold text-green-700 mb-6 text-center">Web Full Stack Training - 2 Months</h1>
        <div className="bg-green-50 rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Who is this for?</h2>
          <p className="text-gray-700 mb-4">Perfect for those who want a deeper dive into web full stack development, including both front-end and back-end, and a more substantial project experience.</p>
          <h2 className="text-2xl font-bold text-green-800 mb-4 mt-8">Syllabus & Schedule</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Weeks 1-2: HTML, CSS, JavaScript, front-end framework basics</li>
            <li>Weeks 3-4: Back-end basics, database integration</li>
            <li>Weeks 5-6: REST API development, authentication</li>
            <li>Weeks 7-8: Project work (building a full stack app)</li>
          </ul>
          <h2 className="text-2xl font-bold text-green-800 mb-4 mt-8">Outcomes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Build a functional full stack web application</li>
            <li>Experience with both front-end and back-end frameworks</li>
            <li>Hands-on project for your portfolio</li>
            <li>Certificate of completion</li>
          </ul>
          <div className="text-2xl font-bold text-green-700 mb-4">Fee: ₹8,999</div>
          <a href="/contact" className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition text-lg">Enroll Now</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WebFullStack2Months; 