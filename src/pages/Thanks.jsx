import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Thanks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow text-center p-10 bg-gradient-to-br from-indigo-200/70 via-white/60 to-pink-200/60 backdrop-blur-xl rounded-3xl shadow-2xl mx-4 my-12">
        <h1 className="text-5xl font-bold text-indigo-800 mb-6 drop-shadow">Thank You!</h1>
        <p className="text-xl text-gray-700 mb-8 font-medium">
          Your form has been successfully submitted. We'll get back to you soon.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Back to Home
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Thanks;
