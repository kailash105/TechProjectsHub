import React from "react";
import { Link } from "react-router-dom";
import { FileText, BookOpen, Layers } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/ImagesServices/hero.avif')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Our Services</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Empowering students and professionals with high-quality projects and research support across all departments.
          </p>
        </div>
      </div>

      {/* Services Headline */}
      <div className="w-full flex flex-col justify-center items-center py-12">
        <h2 className="text-4xl font-bold text-center text-indigo-800 drop-shadow">What We Offer</h2>
        <p className="text-lg text-gray-700 mt-4 text-center max-w-4xl">
          At Tech Projects Hub, we provide a comprehensive suite of academic and technical services for all branches: CSE, EEE, AIML, IoT, Data Science, ECE, MECH, and more. Choose from mini or major projects, research papers, or a combo package to suit your academic needs.
        </p>
      </div>
      {/* New Services Sections */}
      <div className="flex flex-col gap-32 max-w-7xl mx-auto w-full px-2 pb-24">
        {/* PROJECTS */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4 text-indigo-800 flex items-center"><FileText className="w-8 h-8 mr-2 text-indigo-600" /> Projects</h3>
            <p className="text-lg mb-6 text-gray-700 font-medium">Get expertly crafted mini and major projects for all departments (CSE, EEE, AIML, IoT, Data Science, ECE, MECH, and more). Our projects are tailored to your curriculum and requirements, ensuring originality and technical depth.</p>
            <Link to="/projects" className="inline-block mt-2 text-indigo-700 font-semibold underline underline-offset-4 hover:text-indigo-900 transition" onClick={() => window.scrollTo(0,0)}>Explore Projects</Link>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[320px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-br from-indigo-200/70 via-white/60 to-pink-200/60 backdrop-blur-xl rounded-[2rem] z-0 shadow-2xl"></div>
            <FileText className="relative z-10 w-32 h-32 text-indigo-500" />
          </div>
        </div>
        {/* RESEARCH PAPER */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4 text-pink-700 flex items-center"><BookOpen className="w-8 h-8 mr-2 text-pink-600" /> Research Paper</h3>
            <p className="text-lg mb-6 text-gray-700 font-medium">We assist in writing, editing, and publishing research papers for all engineering and technology domains. Our experts help you meet academic standards and achieve publication in reputed journals and conferences.</p>
            <Link to="/research-paper" className="inline-block mt-2 text-pink-700 font-semibold underline underline-offset-4 hover:text-pink-900 transition" onClick={() => window.scrollTo(0,0)}>Explore Research Papers</Link>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[320px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-br from-pink-200/70 via-white/60 to-indigo-200/60 backdrop-blur-xl rounded-[2rem] z-0 shadow-2xl"></div>
            <BookOpen className="relative z-10 w-32 h-32 text-pink-500" />
          </div>
        </div>
        {/* PROJECTS + RESEARCH PAPER COMBO */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4 text-green-700 flex items-center"><Layers className="w-8 h-8 mr-2 text-green-600" /> Projects + Research Paper Combo</h3>
            <p className="text-lg mb-6 text-gray-700 font-medium">Opt for our combo package to get both a project and a research paper, perfectly aligned for your department and academic goals. Ideal for students aiming for comprehensive academic achievement.</p>
            <Link to="/projects-research-paper" className="inline-block mt-2 text-green-700 font-semibold underline underline-offset-4 hover:text-green-900 transition" onClick={() => window.scrollTo(0,0)}>Explore Combo</Link>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[320px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-br from-green-200/70 via-white/60 to-indigo-200/60 backdrop-blur-xl rounded-[2rem] z-0 shadow-2xl"></div>
            <Layers className="relative z-10 w-32 h-32 text-green-500" />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Services;
