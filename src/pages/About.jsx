import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/About/AboutUS.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70"></div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            <span className="text-white text-5xl">About </span>
            <span className="text-gray-500">Tech</span>
            <span className="text-white text-5xl">ProjectsHub</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-2 font-medium drop-shadow-lg">
            Empowering students and professionals with high-quality projects and research support across all departments.
          </p>
        </div>
      </div>
      {/* Simple About Section */}
      <div className="max-w-3xl mx-auto w-full px-4 py-16">
        <h2 className="text-3xl font-bold mb-4 text-indigo-800 drop-shadow">Who We Are</h2>
        <p className="text-lg text-gray-700 font-medium mb-6">
          Tech Projects Hub is dedicated to supporting students and professionals in their academic and technical journeys. We provide expertly crafted mini and major projects, research papers (including IEEE), and combo packages for all departments—CSE, EEE, AIML, IoT, Data Science, ECE, MECH, and more. <br /><br />
          <span className="font-semibold text-indigo-700">We also offer comprehensive training programs in various domains, including Full Stack Development, Machine Learning, Cloud Computing, and more, with Project-Based Learning (PBL) to ensure hands-on experience.</span> <br /><br />
          <span className="font-semibold text-green-700">Our placement training covers DSA, Aptitude, and interview preparation, helping you become industry-ready.</span> <br /><br />
          Our mission is to make high-quality, original, and impactful work accessible to everyone, helping you achieve your academic and career goals with confidence.
        </p>
        <h2 className="text-3xl font-bold mb-4 text-green-700 drop-shadow">Our Mission</h2>
        <p className="text-lg text-gray-700 font-medium mb-6">
          To empower learners and innovators by providing reliable, customized, and innovative project and research solutions, fostering growth and excellence across all fields of study.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
