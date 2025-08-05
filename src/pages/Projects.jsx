import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Cpu, Zap, Brain, Wifi, Database, Radio, Settings, ListChecks, Landmark } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CivilMinor from "./CivilMinor";
import CivilMajor from "./CivilMajor";

const departments = [
  { name: "CSE", icon: <Cpu className="w-12 h-12 text-indigo-600" /> },
  { name: "EEE", icon: <Zap className="w-12 h-12 text-yellow-500" /> },
  { name: "AIML", icon: <Brain className="w-12 h-12 text-pink-600" /> },
  { name: "IoT", icon: <Wifi className="w-12 h-12 text-green-600" /> },
  { name: "Data Science", icon: <Database className="w-12 h-12 text-blue-600" /> },
  { name: "ECE", icon: <Radio className="w-12 h-12 text-red-600" /> },
  { name: "MECH", icon: <Settings className="w-12 h-12 text-gray-700" /> },
  { name: "CIVIL", icon: <Landmark className="w-12 h-12 text-amber-700" /> },
];

function Projects() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-[420px] md:h-[520px] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Projects/Projects.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1 className="relative z-10 text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Find Projects by Department</h1>
        <p className="relative z-10 text-lg text-white max-w-2xl mx-auto">Hover over a department to see project options.</p>
      </div>
      {/* Department Grid */}
      <div className="max-w-6xl mx-auto w-full px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Find Projects by Category and Customized Projects Buttons */}
        <div className="col-span-full mb-4 flex flex-wrap justify-center gap-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition w-fit"
            onClick={() => navigate("/projects-category")}
          >
            <span className="inline-flex items-center gap-2"><ListChecks className="w-5 h-5" /> Find Projects by Category</span>
          </button>
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded-full font-semibold shadow hover:bg-purple-700 transition w-fit"
            onClick={() => navigate("/custom-projects")}
          >
            Customized Projects
          </button>
        </div>
        {/* Department Cards */}
        {departments.map((dept) => (
          <div
            key={dept.name}
            className="relative group rounded-3xl shadow-xl bg-white border border-gray-200 flex flex-col items-center justify-center p-8 min-h-[220px] transition-transform hover:scale-105 cursor-pointer overflow-hidden"
          >
            <div className="mb-4">{dept.icon}</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{dept.name}</h2>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <button
                className="mb-3 px-6 py-2 bg-indigo-500 text-white rounded-full font-semibold shadow hover:bg-indigo-600 transition"
                onClick={() => {
                  if (dept.name === "CSE") navigate("/cse-minor");
                  else if (dept.name === "EEE") navigate("/eee-minor");
                  else if (dept.name === "AIML") navigate("/aiml-minor");
                  else if (dept.name === "IoT") navigate("/iot-minor");
                  else if (dept.name === "Data Science") navigate("/datascience-minor");
                  else if (dept.name === "ECE") navigate("/ece-minor");
                  else if (dept.name === "MECH") navigate("/mech-minor");
                  else if (dept.name === "CIVIL") navigate("/civil-minor");
                }}
              >
                Mini Projects
              </button>
              <button
                className="px-6 py-2 bg-green-500 text-white rounded-full font-semibold shadow hover:bg-green-600 transition"
                onClick={() => {
                  if (dept.name === "CSE") navigate("/cse-major");
                  else if (dept.name === "EEE") navigate("/eee-major");
                  else if (dept.name === "AIML") navigate("/aiml-major");
                  else if (dept.name === "IoT") navigate("/iot-major");
                  else if (dept.name === "Data Science") navigate("/datascience-major");
                  else if (dept.name === "ECE") navigate("/ece-major");
                  else if (dept.name === "MECH") navigate("/mech-major");
                  else if (dept.name === "CIVIL") navigate("/civil-major");
                }}
              >
                Major Projects
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Projects; 