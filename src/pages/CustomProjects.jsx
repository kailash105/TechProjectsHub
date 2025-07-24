import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CustomProjects() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-[420px] md:h-[520px] flex flex-col items-center justify-center text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Projects/CustomProjects.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1 className="relative z-10 text-5xl font-extrabold mb-4 text-white drop-shadow-lg">Customized Projects</h1>
        <p className="relative z-10 text-lg text-white max-w-2xl mx-auto">Get projects tailored to your unique requirements. Contact us for custom solutions!</p>
      </div>
      {/* Detailed Info Section */}
      <div className="max-w-3xl mx-auto w-full px-4 py-12 flex-1">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-6 text-center">Get a Project Tailored to Your Needs!</h1>
        <div className="bg-purple-50 rounded-3xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Personalized Project Solutions</h2>
          <p className="text-gray-700 mb-4">Looking for a project that perfectly matches your requirements, interests, or academic needs? We offer fully customized project solutions across a wide range of technologies and domains. Whether you have a specific idea or need help brainstorming, our expert team will work with you to deliver a unique, high-quality project.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Personalized project consultation</li>
            <li>Support for all major tech stacks and domains</li>
            <li>Guidance from ideation to implementation</li>
            <li>Timely delivery and full documentation</li>
          </ul>
          <div className="text-xl font-bold text-purple-700 mb-4">Ready to get started?</div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSco8thTmyiW8Z4TPjMAcikBDkZeRSH7Hd2-UPxI2LySyikHfQ/viewform?usp=sharing&ouid=105940902219469479580"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow hover:bg-purple-700 transition text-lg"
          >
            Contact us
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CustomProjects; 