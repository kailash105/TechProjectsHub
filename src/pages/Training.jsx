import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import pythonImg from "../assets/ImagesforTraining/Python.png";
import javaImg from "../assets/ImagesforTraining/java-logo.png";
import mernImg from "../assets/ImagesforTraining/MERN.png";
import aimlImg from "../assets/ImagesforTraining/AIML.png";
import webFullStackImg from "../assets/ImagesforTraining/full-stack-web-developer.png";
import dataScienceImg from "../assets/ImagesforTraining/DataScience.webp";
import frontEndImg from "../assets/ImagesforTraining/Frontend.png";
import backEndImg from "../assets/ImagesforTraining/Backend.png";
import vlsiImg from "../assets/ImagesforTraining/VLSI.png";
import azureImg from "../assets/ImagesforTraining/Azure.png";
import blockchainImg from "../assets/ImagesforTraining/Blockchain.png";
import pythonDSAImg from "../assets/ImagesforTraining/PythonDSA.png";
import javaDSAImg from "../assets/ImagesforTraining/JavaDSA.jpg";

const trainings = [
  { title: "Python Full Stack", image: pythonImg, desc: "End-to-end web development with Python.", duration: "1/2/3 Months", route: "/training/python-full-stack" },
  { title: "Java Full Stack", image: javaImg, desc: "Comprehensive Java web development.", duration: "1/2/3 Months", route: "/training/java-full-stack" },
  { title: "MERN stack", image: mernImg, desc: "MongoDB, Express, React, Node.js mastery.", duration: "1/2/3 Months", route: "/training/mern-stack" },
  { title: "AI/ML", image: aimlImg, desc: "Artificial Intelligence & Machine Learning hands-on.", duration: "1/2/3 Months", route: "/training/ai-ml" },
  { title: "Web Full Stack", image: webFullStackImg, desc: "Modern web stack for scalable apps.", duration: "1/2/3 Months", route: "/training/web-full-stack" },
  { title: "Front End", image: frontEndImg, desc: "UI/UX and front-end frameworks.", duration: "1/2/3 Months", route: "/training/front-end" },
  { title: "Back End", image: backEndImg, desc: "Server-side programming and APIs.", duration: "1/2/3 Months", route: "/training/back-end" },
  { title: "Data Science", image: dataScienceImg, desc: "Data analysis, visualization, and ML.", duration: "1/2/3 Months", route: "/training/data-science" },
  { title: "VLSI", image: vlsiImg, desc: "Very Large Scale Integration design and implementation.", duration: "1/2/3 Months", route: "/training/vlsi" },
  { title: "Cloud Computing (Azure)", image: azureImg, desc: "Azure cloud services and deployment.", duration: "1/2/3 Months", route: "/training/cloud-computing-azure" },
  { title: "Block Chain", image: blockchainImg, desc: "Blockchain fundamentals and smart contracts.", duration: "1/2/3 Months", route: "/training/block-chain" },
  { title: "Python with DSA", image: pythonDSAImg, desc: "Python with Data Structures for coding interviews.", duration: "3 Months", route: "/training/python-with-ds" },
  { title: "Java with DSA", image: javaDSAImg, desc: "Java with Data Structures & Algorithms.", duration: "3 Months", route: "/training/java-with-dsa" },
];

function Training() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section with Video */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Training/Trainingvideo.mp4"
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
      {/* Static Training Cards Grid */}
      <div className="relative py-16 px-2 sm:px-4 bg-gradient-to-br from-green-50 via-blue-50 to-white">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {trainings.map((t) => (
            <div
              key={t.title}
              className="group rounded-3xl shadow-2xl bg-white/80 border border-transparent hover:border-green-400 hover:shadow-green-200/60 backdrop-blur-lg flex flex-col items-center justify-between p-8 min-h-[320px] transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden relative"
              style={{ boxShadow: '0 8px 32px 0 rgba(34,197,94,0.10), 0 1.5px 8px 0 rgba(59,130,246,0.08)' }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-green-300 via-blue-200 to-white blur-2xl opacity-40 z-0" />
              <div className="relative z-10 w-24 h-24 mb-4 rounded-2xl bg-white/80 border-2 border-green-200 group-hover:border-green-400 shadow-lg flex items-center justify-center overflow-hidden transition-transform group-hover:-translate-y-2">
                {t.image ? (
                  <img src={t.image} alt={t.title} className="object-contain w-20 h-20 drop-shadow-lg" />
                ) : (
                  <span className="text-gray-400 text-xs text-center">Image<br/>Placeholder</span>
                )}
              </div>
              <div className="flex flex-col items-center w-full">
                <h2 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-1 text-center drop-shadow group-hover:scale-105 transition-transform">{t.title}</h2>
                <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-2 shadow-sm">{t.duration}</span>
                <p className="text-gray-700 text-sm text-center mb-4 min-h-[40px]">{t.desc}</p>
              </div>
              {t.route && (
                <Link
                  to={t.route}
                  className="mt-auto px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-xl shadow hover:scale-105 transition"
                >
                  Know More
                </Link>
              )}
            </div>
          ))}
        </div>
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