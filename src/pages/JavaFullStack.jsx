import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function JavaFullStack() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto w-full px-4 py-12 flex-1">
        <h1 className="text-4xl font-extrabold text-green-700 mb-8 text-center">Java Full Stack Training</h1>
        {/* Enrollment Options Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">Choose Your Training Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 1 Month Plan */}
            <div className="rounded-3xl border-2 border-green-400 bg-green-50 p-10 flex flex-col items-center shadow-2xl min-h-[400px]">
              <h3 className="text-2xl font-bold text-green-800 mb-4">1 Month</h3>
              <ul className="text-gray-700 text-base mb-6 list-disc list-inside">
                <li>HTML, CSS, JavaScript basics</li>
                <li>Java programming essentials</li>
                <li>Mini project</li>
              </ul>
              <div className="text-3xl font-extrabold text-green-700 mb-6">₹4,999</div>
              <a href="/contact" className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold shadow-lg hover:bg-green-700 transition text-lg mb-2">Enroll Now</a>
              <a href="/training/java-full-stack/1-month" className="px-6 py-2 bg-white border border-green-600 text-green-700 rounded-xl font-semibold shadow hover:bg-green-100 transition text-base">Learn More</a>
            </div>
            {/* 2 Months Plan */}
            <div className="rounded-3xl border-2 border-green-400 bg-green-50 p-10 flex flex-col items-center shadow-2xl min-h-[400px]">
              <h3 className="text-2xl font-bold text-green-800 mb-4">2 Months</h3>
              <ul className="text-gray-700 text-base mb-6 list-disc list-inside">
                <li>Front-end with React basics</li>
                <li>Back-end with Spring Boot</li>
                <li>Database integration</li>
                <li>REST API development</li>
                <li>Project work</li>
              </ul>
              <div className="text-3xl font-extrabold text-green-700 mb-6">₹8,999</div>
              <a href="/contact" className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold shadow-lg hover:bg-green-700 transition text-lg mb-2">Enroll Now</a>
              <a href="/training/java-full-stack/2-months" className="px-6 py-2 bg-white border border-green-600 text-green-700 rounded-xl font-semibold shadow hover:bg-green-100 transition text-base">Learn More</a>
            </div>
            {/* 3 Months Plan */}
            <div className="rounded-3xl border-2 border-green-400 bg-green-50 p-10 flex flex-col items-center shadow-2xl min-h-[400px]">
              <h3 className="text-2xl font-bold text-green-800 mb-4">3 Months</h3>
              <ul className="text-gray-700 text-base mb-6 list-disc list-inside">
                <li>Full stack project (end-to-end)</li>
                <li>Advanced deployment</li>
                <li>Interview & placement prep</li>
                <li>Capstone project</li>
              </ul>
              <div className="text-3xl font-extrabold text-green-700 mb-6">₹12,999</div>
              <a href="/contact" className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold shadow-lg hover:bg-green-700 transition text-lg mb-2">Enroll Now</a>
              <a href="/training/java-full-stack/3-months" className="px-6 py-2 bg-white border border-green-600 text-green-700 rounded-xl font-semibold shadow hover:bg-green-100 transition text-base">Learn More</a>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <a href="/contact" className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">Enroll Now</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JavaFullStack; 