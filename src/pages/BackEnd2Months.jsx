import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import backendImg from "../assets/ImagesforTraining/Backend.png";

function BackEnd2Months() {
  const location = useLocation();
  const menu = [
    { label: "1 Month", path: "/training/back-end/1-month" },
    { label: "2 Months", path: "/training/back-end/2-months" },
    { label: "3 Months", path: "/training/back-end/3-months" },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-blue-50 to-white relative overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-16 pb-8">
        <img src={backendImg} alt="Back End" className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 drop-shadow mb-4 text-center">Back End Training - 2 Months</h1>
          <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">Deeper Dive</span>
          <p className="max-w-2xl text-lg text-gray-700 mb-6 text-center font-medium">
            Perfect for those who want a deeper dive into back-end development, including REST APIs, authentication, and a more substantial project experience.
          </p>
        </div>
        <img src={backendImg} alt="Back End" className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-white object-contain mt-4 mb-2 z-20" />
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
          <ol className="relative border-l-4 border-green-300 ml-4">
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">1</span>
              <h3 className="font-semibold text-lg text-green-800">Server-side programming, database integration</h3>
              <p className="text-gray-600">Weeks 1-2</p>
            </li>
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">2</span>
              <h3 className="font-semibold text-lg text-blue-800">REST API development, authentication</h3>
              <p className="text-gray-600">Weeks 3-4</p>
            </li>
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">3</span>
              <h3 className="font-semibold text-lg text-yellow-800">Security, performance optimization</h3>
              <p className="text-gray-600">Weeks 5-6</p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">4</span>
              <h3 className="font-semibold text-lg text-pink-800">Project work (building a back-end system)</h3>
              <p className="text-gray-600">Weeks 7-8</p>
            </li>
          </ol>
          <h2 className="text-2xl font-bold text-green-700 mb-4 mt-8 text-center">Outcomes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Build a functional back-end system</li>
            <li>Experience with REST APIs and authentication</li>
            <li>Hands-on project for your portfolio</li>
            <li>Certificate of completion</li>
          </ul>
          <div className="text-2xl font-bold text-green-700 mb-4 text-center">Fee: ₹8,999</div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="flex flex-col items-center justify-center pb-12">
        <a href="/contact" className="px-10 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-2xl shadow-lg text-lg hover:scale-105 transition">Enroll Now</a>
      </div>
      <Footer />
    </div>
  );
}

export default BackEnd2Months; 