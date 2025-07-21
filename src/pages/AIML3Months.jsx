import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AIML3Months() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto w-full px-4 py-12 flex-1">
        <h1 className="text-4xl font-extrabold text-green-700 mb-6 text-center">AI/ML Training - 3 Months</h1>
        <div className="bg-green-50 rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Who is this for?</h2>
          <p className="text-gray-700 mb-4">Best for those seeking a comprehensive, career-oriented program in AI/ML, including deep learning, deployment, and placement preparation.</p>
          <h2 className="text-2xl font-bold text-green-800 mb-4 mt-8">Syllabus & Schedule</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Weeks 1-4: Python, data science, supervised/unsupervised learning, neural networks</li>
            <li>Weeks 5-8: Deep learning, model deployment, advanced ML topics</li>
            <li>Weeks 9-12: Capstone project, interview & placement prep, advanced deployment</li>
          </ul>
          <h2 className="text-2xl font-bold text-green-800 mb-4 mt-8">Outcomes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Build and deploy advanced ML models</li>
            <li>Capstone project for your portfolio</li>
            <li>Placement and interview preparation</li>
            <li>Certificate of completion</li>
          </ul>
          <div className="text-2xl font-bold text-green-700 mb-4">Fee: ₹12,999</div>
          <a href="/contact" className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700 transition text-lg">Enroll Now</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AIML3Months; 