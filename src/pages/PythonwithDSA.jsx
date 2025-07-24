import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import pythonDSAImg from "../assets/ImagesforTraining/PythonDSA.png";

function PythonwithDSA() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-green-50 to-white relative overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-16 pb-8">
        <img src={pythonDSAImg} alt="Python with DS" className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 drop-shadow mb-4 text-center">Python with Data Science</h1>
          <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">3 Months Intensive</span>
          <p className="max-w-2xl text-lg text-gray-700 mb-6 text-center font-medium">
            Master Python programming and essential Data Science concepts in this immersive 3-month journey. Build real-world projects and launch your data science career with confidence.
          </p>
        </div>
        <img src={pythonDSAImg} alt="Python with DS" className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-white object-contain mt-4 mb-2 z-20" />
      </div>
      {/* Glassmorphism Card */}
      <div className="relative z-20 max-w-2xl mx-auto w-full px-4">
        <div className="backdrop-blur-lg bg-white/70 border border-green-200 rounded-3xl shadow-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">What You'll Learn</h2>
          {/* Timeline */}
          <ol className="relative border-l-4 border-green-300 ml-4">
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">1</span>
              <h3 className="font-semibold text-lg text-green-800">Python Programming Fundamentals</h3>
              <p className="text-gray-600">Syntax, data types, control flow, functions, OOP basics</p>
            </li>
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">2</span>
              <h3 className="font-semibold text-lg text-blue-800">Data Analysis with Pandas & NumPy</h3>
              <p className="text-gray-600">Data wrangling, cleaning, transformation, and analysis</p>
            </li>
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">3</span>
              <h3 className="font-semibold text-lg text-yellow-800">Data Visualization</h3>
              <p className="text-gray-600">Matplotlib, Seaborn, and storytelling with data</p>
            </li>
            <li className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-purple-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">4</span>
              <h3 className="font-semibold text-lg text-purple-800">Machine Learning Basics</h3>
              <p className="text-gray-600">Supervised/unsupervised learning, scikit-learn, mini-projects</p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-pink-500 rounded-full -left-5 ring-4 ring-white text-white font-bold">5</span>
              <h3 className="font-semibold text-lg text-pink-800">Portfolio Project</h3>
              <p className="text-gray-600">End-to-end data science project for your resume</p>
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

export default PythonwithDSA; 