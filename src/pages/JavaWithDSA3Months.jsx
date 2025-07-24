import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function JavaWithDSA3Months() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-r from-yellow-50 to-green-50">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Java with DSA (3 Months)</h1>
        <p className="max-w-2xl text-lg text-gray-700 mb-6 text-center">
          Learn Java programming and master Data Structures & Algorithms in this focused 3-month training. Perfect for those preparing for technical interviews and building a strong CS foundation.
        </p>
        <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-2">What you'll learn:</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Core Java programming</li>
            <li>Object-Oriented Programming concepts</li>
            <li>Data Structures (Arrays, Linked Lists, Trees, etc.)</li>
            <li>Algorithms (Sorting, Searching, etc.)</li>
            <li>Problem-solving and coding practice</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JavaWithDSA3Months; 