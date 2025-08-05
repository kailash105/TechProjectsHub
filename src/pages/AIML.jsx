import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import aimlImg from "../assets/ImagesforTraining/AIML.png";

function AIML() {
  const location = useLocation();
  const menu = [
    { label: "1 Month", path: "/training/ai-ml/1-month" },
    { label: "2 Months", path: "/training/ai-ml/2-months" },
    { label: "3 Months", path: "/training/ai-ml/3-months" },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-blue-50 to-white relative overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-16 pb-8">
        <img src={aimlImg} alt="AI/ML" className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 drop-shadow mb-4 text-center">AI/ML Training</h1>
          <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">1/2/3 Months Options</span>
          <p className="max-w-2xl text-lg text-gray-700 mb-6 text-center font-medium">
            Master Artificial Intelligence and Machine Learning with hands-on projects, real-world datasets, and expert guidance. Choose your training duration below.
          </p>
        </div>
        <img src={aimlImg} alt="AI/ML" className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-white object-contain mt-4 mb-2 z-20" />
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
      {/* What You'll Learn Section */}
      <div className="relative z-20 max-w-2xl mx-auto w-full px-4">
        <div className="backdrop-blur-lg bg-white/70 border border-green-200 rounded-3xl shadow-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">What You'll Learn</h2>
          <ol className="relative border-l-4 border-green-300 ml-4">
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">1</span>
              <h3 className="font-semibold text-lg text-green-800">Python for AI/ML</h3>
              <p className="text-gray-600">Python basics, data preprocessing, libraries</p>
            </li>
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">2</span>
              <h3 className="font-semibold text-lg text-blue-800">Supervised & Unsupervised Learning</h3>
              <p className="text-gray-600">Regression, classification, clustering, model evaluation</p>
            </li>
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">3</span>
              <h3 className="font-semibold text-lg text-yellow-800">Neural Networks & Deep Learning</h3>
              <p className="text-gray-600">Neural networks, deep learning basics, frameworks</p>
            </li>
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">4</span>
              <h3 className="font-semibold text-lg text-purple-800">Deployment & Real-World Projects</h3>
              <p className="text-gray-600">Model deployment, cloud, capstone project</p>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AIML; 