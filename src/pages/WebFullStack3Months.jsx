import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import webFullStackImg from "../assets/ImagesforTraining/full-stack-web-developer.png";

function WebFullStack3Months() {
  const location = useLocation();
  const menu = [
    { label: "1 Month", path: "/training/web-full-stack/1-month" },
    { label: "2 Months", path: "/training/web-full-stack/2-months" },
    { label: "3 Months", path: "/training/web-full-stack/3-months" },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-green-50 to-white relative overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-16 pb-8">
        <img src={webFullStackImg} alt="Web Full Stack" className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 drop-shadow mb-4 text-center">Web Full Stack - 3 Months</h1>
          <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">Comprehensive</span>
          <p className="max-w-2xl text-lg text-gray-700 mb-6 text-center font-medium">
            Best for those seeking a comprehensive, career-oriented program in web full stack development, including advanced topics, deployment, and placement preparation.
          </p>
        </div>
        <img src={webFullStackImg} alt="Web Full Stack" className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-white object-contain mt-4 mb-2 z-20" />
      </div>
      {/* Duration Menu */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-2xl bg-white/80 shadow border border-green-200 overflow-hidden">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-6 py-3 font-semibold text-lg transition-all ${location.pathname === item.path ? "bg-gradient-to-r from-green-500 to-blue-500 text-white" : "text-green-700 hover:bg-green-100"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Glassmorphism Card */}
      <div className="relative z-20 max-w-2xl mx-auto w-full px-4">
        <div className="backdrop-blur-lg bg-white/70 border border-green-200 rounded-3xl shadow-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Syllabus & Schedule</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Weeks 1-4: HTML, CSS, JavaScript, front-end & back-end frameworks</li>
            <li>Weeks 5-8: Advanced database, REST APIs, authentication, cloud deployment</li>
            <li>Weeks 9-12: Capstone project, interview & placement prep, advanced deployment</li>
          </ul>
          <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8 text-center">Outcomes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Build and deploy a full stack web application (end-to-end)</li>
            <li>Master advanced full stack concepts</li>
            <li>Capstone project for your portfolio</li>
            <li>Placement and interview preparation</li>
            <li>Certificate of completion</li>
          </ul>
          <div className="text-2xl font-bold text-green-700 mb-4 text-center">Fee: ₹12,999</div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="flex flex-col items-center justify-center pb-12">
        <button 
          onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
          className="px-10 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-2xl shadow-lg text-lg hover:scale-105 transition"
        >
          Enroll Now
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default WebFullStack3Months; 