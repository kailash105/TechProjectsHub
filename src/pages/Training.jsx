import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const trainings = [
  { title: "Python Full Stack", image: null },
  { title: "Java Full Stack", image: null },
  { title: "MERN stack", image: null },
  { title: "AI/ML", image: null },
  { title: "Web Full Stack", image: null },
  { title: "Front End", image: null },
  { title: "Back End", image: null },
  { title: "Data Science", image: null },
  { title: "Data Engineering", image: null },
  { title: "Cloud Computing (Azure)", image: null },
  { title: "Block Chain", image: null },
];

const courseLinks = {
  "Python Full Stack": "/training/python-full-stack",
  "Java Full Stack": "/training/java-full-stack",
  "MERN stack": "/training/mern-stack",
  "AI/ML": "/training/ai-ml",
  "Web Full Stack": "/training/web-full-stack",
  "Front End": "/training/front-end",
  "Back End": "/training/back-end",
  "Data Science": "/training/data-science",
  "Data Engineering": "/training/data-engineering",
  "Cloud Computing (Azure)": "/training/cloud-computing-azure",
  "Block Chain": "/training/block-chain",
};

function Training() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section with Video */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="src/assets/Training/Trainingvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4 text-green-200 drop-shadow-lg">Training & Workshops</h1>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">Enhance your skills with our hands-on training sessions and workshops, tailored for students and professionals in all technical domains.</p>
        </div>
      </div>
      {/* Training Cards Grid */}
      <div className="max-w-6xl mx-auto w-full px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {trainings.map((t) => (
          courseLinks[t.title] ? (
            <Link to={courseLinks[t.title]} key={t.title} className="rounded-3xl shadow-xl bg-white border border-gray-200 flex flex-col items-center justify-center p-8 min-h-[220px] transition-transform hover:scale-105 cursor-pointer overflow-hidden">
              <div className="w-full aspect-square mb-4 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <span className="text-gray-400 text-xs text-center">Image<br/>Placeholder</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">{t.title}</h2>
            </Link>
          ) : (
            <div key={t.title} className="rounded-3xl shadow-xl bg-white border border-gray-200 flex flex-col items-center justify-center p-8 min-h-[220px] transition-transform hover:scale-105 cursor-pointer overflow-hidden">
              <div className="w-full aspect-square mb-4 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                <span className="text-gray-400 text-xs text-center">Image<br/>Placeholder</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">{t.title}</h2>
            </div>
          )
        ))}
      </div>
      
      {/* Benefits Section */}
      <div className="max-w-4xl mx-auto w-full px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Benefits of taking training in TechProjectsHub :</h2>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="font-semibold text-green-700 mb-2">LOR</h3>
              <p className="text-sm text-gray-600">Letter of Recommendation</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="font-semibold text-green-700 mb-2">Offer Letter</h3>
              <p className="text-sm text-gray-600">Job placement assistance</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="font-semibold text-green-700 mb-2">Certification of Completion</h3>
              <p className="text-sm text-gray-600">Official course completion certificate</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="font-semibold text-green-700 mb-2">Project Certification</h3>
              <p className="text-sm text-gray-600">Portfolio-ready project certificates</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <h3 className="font-semibold text-green-700 mb-2">Experience Letter</h3>
              <p className="text-sm text-gray-600">Professional experience documentation</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="w-full flex flex-col items-center justify-center py-8 bg-green-50">
        <h3 className="text-2xl font-bold mb-2 text-green-700">Ready to boost your skills?</h3>
        <a href="/contact" className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition">Contact Us to Enroll</a>
      </div>
      <Footer />
    </div>
  );
}

export default Training; 