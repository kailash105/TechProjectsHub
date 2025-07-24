import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MechMinor() {
  return (
    <div className="min-h-screen flex flex-col bg-indigo-50">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-72 flex items-center justify-center text-center overflow-hidden mb-8">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/your-image-or-video.jpg')" }}>
          {/* If you want to use a video, replace the div above with a <video> tag */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-extrabold mb-2 drop-shadow-lg">MECH Mini Projects</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">Explore a curated list of Mechanical Engineering Mini Projects for students and professionals.</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">MECH Mini Projects</h1>
        <p className="text-lg text-gray-700 mb-8">List of Mechanical Engineering Mini Projects will appear here.</p>
        <div className="overflow-x-auto w-full max-w-2xl">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">S.No</th>
                <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">Project Title</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(15)].map((_, i) => (
                <tr key={i}>
                  <td className="px-6 py-4 border-b">{i + 1}</td>
                  <td className="px-6 py-4 border-b">Sample Mini Project Title {i + 1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MechMinor; 