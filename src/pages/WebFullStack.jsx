import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import webFullStackImg from "../assets/ImagesforTraining/full-stack-web-developer.png";
import { Link, useLocation } from "react-router-dom";

function WebFullStack() {
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
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 drop-shadow mb-4 text-center">Web Full Stack</h1>
          <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">1/2/3 Months Options</span>
          <p className="max-w-2xl text-lg text-gray-700 mb-6 text-center font-medium">
            Build modern web applications from scratch. Learn front-end, back-end, and deployment with hands-on projects and real-world skills.
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
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">What You'll Learn</h2>
          {/* Timeline */}
          <ol className="relative border-l-4 border-green-300 ml-4">
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">1</span>
              <h3 className="font-semibold text-lg text-green-800">Front-End Development</h3>
              <p className="text-gray-600">HTML, CSS, JavaScript, React basics</p>
            </li>
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">2</span>
              <h3 className="font-semibold text-lg text-blue-800">Back-End Development</h3>
              <p className="text-gray-600">Node.js, Express, REST APIs</p>
            </li>
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">3</span>
              <h3 className="font-semibold text-lg text-yellow-800">Database & Deployment</h3>
              <p className="text-gray-600">MongoDB, cloud deployment, authentication</p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">4</span>
              <h3 className="font-semibold text-lg text-pink-800">Capstone Project</h3>
              <p className="text-gray-600">Build and deploy a full stack web application</p>
            </li>
          </ol>
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

export default WebFullStack; 