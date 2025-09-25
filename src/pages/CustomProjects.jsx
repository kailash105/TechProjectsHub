import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CustomProjects() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 pt-20">
        {/* Glassy Professional Background */}
        <div className="absolute inset-0 bg-slate-700/80 backdrop-blur-sm"></div>
        
        {/* Main Container - Rectangle 1 */}
        <div className="w-full max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 h-full items-center">
            
            {/* Rectangle 3 - Page Title Section */}
            <div className="flex justify-start">
              <div className="w-64 h-64 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/40" style={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)'
              }}>
                <h1 className="text-3xl md:text-4xl font-bold text-center">Custom</h1>
              </div>
            </div>

            {/* Rectangle 4 - Description Text Section (No Container) */}
            <div className="text-white flex flex-col justify-center h-full lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Bespoke Project Development
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl">
                Transform your unique ideas into exceptional projects with our bespoke development services. 
                Our expert team collaborates with you to create custom solutions that perfectly align with 
                your academic objectives and career aspirations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">Tailored Solutions</h3>
                  <p className="text-sm text-slate-200">Custom-built to your specifications</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">Expert Collaboration</h3>
                  <p className="text-sm text-slate-200">Work directly with industry professionals</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">End-to-End Support</h3>
                  <p className="text-sm text-slate-200">From concept to final delivery</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">Premium Quality</h3>
                  <p className="text-sm text-slate-200">Enterprise-grade development standards</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg">
                  Request Quote
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                  Discuss Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Professional Services Section */}
      <div className="max-w-7xl mx-auto w-full px-6 py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Bespoke Development Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your unique ideas into exceptional projects with our bespoke development services. 
            Our expert team collaborates with you to create custom solutions that perfectly align with 
            your academic objectives and career aspirations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Tailored Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Custom-built projects designed specifically for your requirements, 
              ensuring perfect alignment with your academic goals and career objectives.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Expert Collaboration</h3>
            <p className="text-gray-600 leading-relaxed">
              Work directly with industry professionals who bring years of experience 
              and technical expertise to your project development process.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">End-to-End Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive support from initial concept development through final implementation, 
              including complete documentation and deployment assistance.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Custom Project?</h3>
            <p className="text-gray-600 mb-6">
              Contact our expert team to discuss your project requirements and get a personalized quote. 
              We're here to help you bring your unique ideas to life.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSco8thTmyiW8Z4TPjMAcikBDkZeRSH7Hd2-UPxI2LySyikHfQ/viewform?usp=sharing&ouid=105940902219469479580"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CustomProjects; 