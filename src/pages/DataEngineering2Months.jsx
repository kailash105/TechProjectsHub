import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function DataEngineering2Months() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto w-full px-4 py-12 flex-1">
        <h1 className="text-4xl font-extrabold text-green-700 mb-6 text-center">Data Engineering Training - 2 Months</h1>
        <div className="bg-green-50 rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Who is this for?</h2>
          <p className="text-gray-700 mb-4">Perfect for those who want a deeper dive into data engineering, including advanced ETL, big data tools, and a more substantial project experience.</p>
          <h2 className="text-2xl font-bold text-green-800 mb-4 mt-8">Syllabus & Schedule</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Weeks 1-2: Data engineering fundamentals, ETL basics</li>
            <li>Weeks 3-4: Big data tools (Hadoop/Spark), cloud data platforms</li>
            <li>Weeks 5-6: Data warehousing, data modeling</li>
            <li>Weeks 7-8: Project work (building a data pipeline)</li>
          </ul>
          <h2 className="text-2xl font-bold text-green-800 mb-4 mt-8">Outcomes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Build a functional data pipeline</li>
            <li>Experience with big data and cloud tools</li>
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

export default DataEngineering2Months; 