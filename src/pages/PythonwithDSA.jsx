import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import pythonDSAImg from "../assets/ImagesforTraining/PythonDSA.png";
import { CheckCircle, Download, Users, Award, Clock, BookOpen, Wrench, Target, Building, Star } from "lucide-react";

function PythonwithDSA() {
  const courseData = {
    title: "3-Month Python DSA Professional",
    goal: "Become a DSA expert with advanced problem-solving skills, system design knowledge, and career preparation.",
    syllabus: [
      {
        week: "Month 1: Python Fundamentals & Basic DSA",
        topics: [
          "Python Basics & Data Types",
          "Control Flow & Functions",
          "Object-Oriented Programming",
          "Arrays & Lists in Python",
          "Strings & String Manipulation",
          "Dictionaries & Sets",
          "Stacks & Queues Implementation",
          "Linked Lists in Python",
          "Trees & Binary Trees",
          "Graphs & Graph Algorithms",
          "Hash Tables & Maps",
          "Sorting Algorithms (Bubble, Quick, Merge)",
          "Searching Algorithms (Linear, Binary)",
          "Recursion & Backtracking",
          "Dynamic Programming Basics"
        ]
      },
      {
        week: "Month 2: Advanced Data Structures & Algorithms",
        topics: [
          "Advanced Trees (BST, AVL, Red-Black)",
          "Heaps & Priority Queues",
          "Advanced Graphs & Algorithms",
          "Trie Data Structure",
          "Disjoint Sets (Union-Find)",
          "Dynamic Programming Patterns",
          "Greedy Algorithms",
          "Advanced Graph Algorithms",
          "String Algorithms",
          "Bit Manipulation",
          "Time & Space Complexity Analysis",
          "Algorithm Optimization Techniques",
          "System Design Fundamentals",
          "Database Design Basics",
          "Scalability Concepts"
        ]
      },
      {
        week: "Month 3: Advanced Problem Solving & Career Prep",
        topics: [
          "Advanced Dynamic Programming",
          "Competitive Programming Techniques",
          "Advanced Graph Algorithms",
          "String Processing Algorithms",
          "Mathematical Algorithms",
          "System Design Patterns",
          "Microservices Architecture",
          "Database Design & Optimization",
          "Caching Strategies",
          "Load Balancing & Scaling",
          "Machine Learning Algorithms",
          "Data Science with Python",
          "Advanced Python Libraries",
          "Performance Optimization",
          "Code Quality & Best Practices",
          "Advanced Interview Preparation",
          "Portfolio Project Development",
          "Resume & LinkedIn Optimization",
          "Networking & Career Guidance",
          "Job Search Strategies"
        ]
      }
    ],
    outcomes: [
      "Master Python programming fundamentals",
      "Understand all core data structures",
      "Solve complex algorithmic problems",
      "Build system design expertise",
      "Excel in technical interviews",
      "Prepare for senior developer roles",
      "Launch a successful tech career"
    ]
  };

  const toolsCovered = [
    { category: "Programming", tools: ["Python 3.x", "Jupyter Notebooks", "VS Code", "PyCharm"] },
    { category: "Data Structures", tools: ["Lists", "Dictionaries", "Sets", "Tuples", "Collections"] },
    { category: "Algorithms", tools: ["Sorting", "Searching", "Dynamic Programming", "Graph Algorithms"] },
    { category: "Practice Platforms", tools: ["LeetCode", "HackerRank", "CodeForces", "GeeksforGeeks"] },
    { category: "Libraries", tools: ["NumPy", "Pandas", "Matplotlib", "SciPy"] }
  ];

  const whyChooseUs = [
    { icon: Target, title: "Interview-Focused Training", desc: "Learn exactly what top tech companies ask" },
    { icon: Wrench, title: "Modern Python Tools", desc: "Use industry-standard Python development tools" },
    { icon: Users, title: "Expert DSA Mentorship", desc: "Get guidance from experienced problem solvers" },
    { icon: BookOpen, title: "Project-Based Learning", desc: "Build real-world problem-solving skills" },
    { icon: Star, title: "Career Support", desc: "Resume building and interview preparation" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-20 pb-12">
        <img src={pythonDSAImg} alt="Python with DSA" className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 drop-shadow mb-4 text-center">Python with DSA Training Program</h1>
          <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">Comprehensive Data Structures & Algorithms Training</span>
          <p className="max-w-3xl text-lg text-gray-700 mb-6 text-center font-medium">
            Master Python programming and Data Structures & Algorithms for coding interviews. 
            Choose your training duration and build a strong foundation for technical interviews and problem solving.
          </p>
        </div>
        <img src={pythonDSAImg} alt="Python with DSA" className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-white object-contain mt-4 mb-2 z-20" />
      </div>

      {/* Course Overview Sections */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tools Covered */}
          <div className="bg-white/80 backdrop-blur-lg border border-green-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-green-800">Tools Covered</h3>
            </div>
            <p className="text-gray-600 text-sm">Python programming and DSA problem-solving tools</p>
          </div>

          {/* Ideal For */}
          <div className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Ideal For</h3>
            </div>
            <p className="text-gray-600 text-sm">Coding interview aspirants and problem solvers</p>
          </div>

          {/* About TechProjectsHub */}
          <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">About TechProjectsHub</h3>
            </div>
            <p className="text-gray-600 text-sm">A hands-on training platform for tech learners in Python, DSA, and more</p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/80 backdrop-blur-lg border border-orange-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-bold text-orange-800">Why Choose Us</h3>
            </div>
            <p className="text-gray-600 text-sm">Interview-focused learning with expert mentorship</p>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive 3-Month Program</h2>
          <p className="text-gray-600">Complete Python DSA training with advanced problem-solving skills</p>
        </div>
      </div>

      {/* Course Content Display */}
      <div className="backdrop-blur-lg bg-white/70 border border-green-200 rounded-3xl shadow-2xl p-8">
        <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">{courseData.title}</h3>
        <p className="text-gray-600 text-center mb-6 italic">{courseData.goal}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Syllabus */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-600" />
              Syllabus
            </h4>
            <div className="space-y-4">
              {courseData.syllabus.map((week, index) => (
                <div key={index} className="border-l-4 border-green-300 pl-4">
                  <h5 className="font-semibold text-green-800 mb-2">{week.week}</h5>
                  <ul className="space-y-1">
                    {week.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Outcomes
            </h4>
            <ul className="space-y-3">
              {courseData.outcomes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-6xl mx-auto w-full px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Special Limited-Time Offer</h2>
          <p className="text-xl text-gray-600 mb-2">40% Discount on Industry-Ready Python DSA Training</p>
          <p className="text-lg text-gray-500">No hidden charges, just real value crafted for future problem solvers</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* 3-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-green-200 p-8 relative overflow-hidden transform scale-105">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              40% OFF
            </div>
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-full">
              COMPREHENSIVE
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">3-Month Python DSA Professional</h3>
              <p className="text-gray-600 mb-4">Complete comprehensive training</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-green-600">₹14,000</span>
                <span className="text-lg text-gray-400 line-through ml-2">₹23,333</span>
              </div>
              <p className="text-sm text-gray-500">You save ₹9,333</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Complete Python DSA training</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Advanced problem solving</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">System design expertise</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Career guidance & placement</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Portfolio project development</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Expert Python mentorship</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Enroll Now
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            <strong>Limited Time Offer!</strong> Don't miss this opportunity to kickstart your problem-solving career.
          </p>
        </div>
      </div>

      {/* Tools Covered Section */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Technologies Covered</h2>
          <p className="text-gray-600">Master Python programming and DSA problem-solving tools</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsCovered.map((category, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg border border-green-200 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-green-800 mb-3">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, toolIndex) => (
                  <span key={toolIndex} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ideal For Section */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Ideal For</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Coding Interview Aspirants</h3>
              <p className="text-gray-600 text-sm">Prepare for technical interviews</p>
            </div>
            <div className="p-4">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Problem Solvers</h3>
              <p className="text-gray-600 text-sm">Master algorithmic thinking</p>
            </div>
            <div className="p-4">
              <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Python Developers</h3>
              <p className="text-gray-600 text-sm">Enhance programming skills</p>
            </div>
          </div>
        </div>
      </div>

      {/* About TechProjectsHub Section */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">About TechProjectsHub</h2>
          <p className="text-gray-700 text-center text-lg mb-8">
            A hands-on training platform for tech learners in Python Development, DSA, and more.
          </p>
          
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Why Choose Us?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-4">
                <item.icon className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Python DSA Journey?</h2>
          <p className="text-lg mb-6">Join our comprehensive Python DSA training program and build your problem-solving skills</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-100 transition"
            >
              Enroll Now
            </Link>
            <a
              href="/TrainingPDFS/Python_DSA.pdf"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-green-600 transition flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PythonwithDSA; 