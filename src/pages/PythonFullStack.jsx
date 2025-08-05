import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import pythonImg from "../assets/ImagesforTraining/Python.png";
import { CheckCircle, Download, Users, Award, Clock, BookOpen, Wrench, Target, Building, Star } from "lucide-react";

function PythonFullStack() {
  const [selectedDuration, setSelectedDuration] = useState("1-month");

  const durationData = {
    "1-month": {
      title: "1-Month Python Full Stack Foundation",
      goal: "Learn frontend, Python, Django basics + deploy a simple project. Ideal for beginners or students with limited time.",
      syllabus: [
        {
          week: "Week 1: HTML5, CSS3, Bootstrap, JavaScript",
          topics: [
            "HTML5 Structure & Semantics",
            "CSS3 Styling & Responsive Design",
            "Bootstrap Framework & Components",
            "JavaScript DOM Manipulation",
            "JavaScript Events & Form Handling"
          ]
        },
        {
          week: "Week 2: Core Python Programming",
          topics: [
            "Python Data Types & Variables",
            "Control Structures & Loops",
            "Functions & Lambda Expressions",
            "Object-Oriented Programming (OOP)",
            "File Handling & Exception Handling"
          ]
        },
        {
          week: "Week 3: Django Framework",
          topics: [
            "Django MVT Architecture",
            "Templates & Template Inheritance",
            "Views & URL Configuration",
            "Models & Database Design",
            "CRUD Operations Implementation"
          ]
        },
        {
          week: "Week 4: Database & Deployment",
          topics: [
            "MySQL Database Integration",
            "Django Authentication System",
            "Login/Signup Functionality",
            "Session Handling & Security",
            "Project Deployment on Render"
          ]
        }
      ],
      outcomes: [
        "Build 3-4 mini projects including portfolio website",
        "Master frontend technologies (HTML, CSS, Bootstrap, JS)",
        "Understand Python programming fundamentals",
        "Deploy Django applications to cloud platforms"
      ]
    },
    "2-months": {
      title: "2-Month Python Full Stack Advanced",
      goal: "Learn REST API with DRF + integrate frontend with backend. Ideal for intermediate learners or students building API skills.",
      syllabus: [
        {
          week: "Week 1-4: Full 1-Month Content",
          topics: [
            "HTML5, CSS3, Bootstrap, JavaScript",
            "Core Python Programming",
            "Django Framework & MVT Architecture",
            "MySQL Integration & Deployment"
          ]
        },
        {
          week: "Week 5: Django Intermediate",
          topics: [
            "Class-Based Views (CBV)",
            "Advanced Forms & Form Validation",
            "Email Integration & SMTP Setup",
            "Custom Template Tags & Filters",
            "Django Admin Customization"
          ]
        },
        {
          week: "Week 6: Django REST Framework",
          topics: [
            "DRF Serializers & ModelSerializers",
            "ViewSets & Router Configuration",
            "API CRUD Operations",
            "Postman API Testing",
            "API Documentation & Swagger"
          ]
        },
        {
          week: "Week 7: Authentication & Permissions",
          topics: [
            "JWT Authentication Implementation",
            "Custom Middleware Development",
            "Role-Based Permissions System",
            "Token-Based Authentication",
            "API Security Best Practices"
          ]
        },
        {
          week: "Week 8: Frontend-Backend Integration",
          topics: [
            "JavaScript fetch() API Integration",
            "Authentication Dashboard Setup",
            "API + Frontend Integration",
            "Real-time Data Updates",
            "Intermediate Project Deployment"
          ]
        }
      ],
      outcomes: [
        "Build 5-6 projects including API development",
        "Master Django REST Framework",
        "Implement JWT authentication systems",
        "Create full-stack applications with API integration"
      ]
    },
    "3-months": {
      title: "3-Month Python Full Stack Professional",
      goal: "Build & deploy a full-fledged real-world full stack application. Ideal for job seekers, freelancers, and final-year students.",
      syllabus: [
        {
          week: "Week 1-8: Full 2-Month Content",
          topics: [
            "Complete 1-Month Foundation Course",
            "Complete 2-Month Advanced Course with DRF & API Integration"
          ]
        },
        {
          week: "Week 9: Capstone Planning",
          topics: [
            "Project Wireframing & UI/UX Design",
            "Entity Relationship (ER) Diagram Design",
            "Backend API Architecture Planning",
            "Database Schema Design & Optimization",
            "Project Timeline & Milestone Planning"
          ]
        },
        {
          week: "Week 10: Full Stack Development",
          topics: [
            "Advanced CRUD Operations",
            "Authentication & Token Handling",
            "User & Admin Dashboard Development",
            "Real-time Data Synchronization",
            "Advanced Form Handling & Validation"
          ]
        },
        {
          week: "Week 11: Deployment & Hosting",
          topics: [
            "Backend Hosting on Render Platform",
            "Frontend Deployment on Netlify",
            "Domain Configuration & SSL Setup",
            "Database Setup & Migration",
            "Environment Variables & Security"
          ]
        },
        {
          week: "Week 12: Career Preparation",
          topics: [
            "Resume Building & Portfolio Development",
            "GitHub Profile Optimization",
            "Technical Interview Questions Practice",
            "Final Project Review & Documentation",
            "Job Search Strategy & Networking"
          ]
        }
      ],
      outcomes: [
        "Build 7-8 projects including capstone project",
        "Deploy real-world applications with hosting",
        "Create professional GitHub portfolio",
        "Prepare for job interviews and career opportunities"
      ]
    }
  };

  const toolsCovered = [
    { category: "Front-End", tools: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "DOM"] },
    { category: "Back-End", tools: ["Python", "Django", "Django REST Framework", "JWT Auth"] },
    { category: "Database", tools: ["MySQL", "SQLite", "Django ORM", "Migrations"] },
    { category: "Deployment", tools: ["Render", "Netlify", "Git", "GitHub"] },
    { category: "Testing", tools: ["Postman", "Django Testing", "API Testing"] }
  ];

  const whyChooseUs = [
    { icon: Target, title: "Project-Driven Learning", desc: "Learn by building real-world applications" },
    { icon: Wrench, title: "Industry-Standard Tools", desc: "Use tools used in professional development" },
    { icon: Users, title: "Expert Mentorship", desc: "Get guidance from experienced developers" },
    { icon: BookOpen, title: "Comprehensive Curriculum", desc: "Cover all aspects of full-stack development" },
    { icon: Star, title: "Career Support", desc: "Resume building and interview preparation" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-blue-50 to-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-20 pb-12">
        <img src={pythonImg} alt="Python Full Stack" className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 drop-shadow mb-4 text-center">Python Full Stack Training Program</h1>
          <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">Comprehensive Web Development Training</span>
          <p className="max-w-3xl text-lg text-gray-700 mb-6 text-center font-medium">
            Master Python full-stack development with hands-on projects, modern frameworks, and expert guidance. 
            Choose your training duration and embark on a journey to become a professional web developer.
          </p>
        </div>
        <img src={pythonImg} alt="Python Full Stack" className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-white object-contain mt-4 mb-2 z-20" />
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
            <p className="text-gray-600 text-sm">Industry-standard development tools including Django, React, Docker, and cloud platforms</p>
          </div>

          {/* Ideal For */}
          <div className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Ideal For</h3>
            </div>
            <p className="text-gray-600 text-sm">Beginners to intermediate developers, career switchers, and web development enthusiasts</p>
          </div>

          {/* About TechProjectsHub */}
          <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">About TechProjectsHub</h3>
            </div>
            <p className="text-gray-600 text-sm">A hands-on training platform for tech learners in Python, Cloud, AI/ML, and more</p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/80 backdrop-blur-lg border border-orange-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-bold text-orange-800">Why Choose Us</h3>
            </div>
            <p className="text-gray-600 text-sm">Project-driven learning with expert mentorship and career guidance</p>
          </div>
        </div>
      </div>

      {/* Duration Selection */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Training Duration</h2>
          <p className="text-gray-600">Select the program that best fits your learning goals and timeline</p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-2xl bg-white/80 shadow border border-green-200 overflow-hidden">
            {["1-month", "2-months", "3-months"].map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={`px-8 py-4 font-semibold text-lg transition-all ${
                  selectedDuration === duration 
                    ? "bg-gradient-to-r from-green-500 to-blue-500 text-white" 
                    : "text-green-700 hover:bg-green-100"
                }`}
              >
                {duration === "1-month" ? "1 Month" : duration === "2-months" ? "2 Months" : "3 Months"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Content Based on Selection */}
      <div className="backdrop-blur-lg bg-white/70 border border-green-200 rounded-3xl shadow-2xl p-8">
        <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">{durationData[selectedDuration].title}</h3>
        <p className="text-gray-600 text-center mb-6 italic">{durationData[selectedDuration].goal}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Syllabus */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-600" />
              Syllabus
            </h4>
            <div className="space-y-4">
              {durationData[selectedDuration].syllabus.map((week, index) => (
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
              {durationData[selectedDuration].outcomes.map((item, index) => (
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
          <p className="text-xl text-gray-600 mb-2">40% Discount on Industry-Ready Python Full Stack Training</p>
          <p className="text-lg text-gray-500">No hidden charges, just real value crafted for future web developers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 1-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-green-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              40% OFF
            </div>
                          <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">1-Month Foundation</h3>
                <p className="text-gray-600 mb-4">Perfect for beginners</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-green-600">₹6,000</span>
                  <span className="text-lg text-gray-400 line-through ml-2">₹8,000</span>
                </div>
                <p className="text-sm text-gray-500">You save ₹2,000</p>
              </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Hands-on project work</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Industry tools access</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Mentor support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Completion certificate</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              Enroll Now
            </button>
          </div>

          {/* 2-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-8 relative overflow-hidden transform scale-105">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              40% OFF
            </div>
            <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 text-xs font-bold rounded-full">
              POPULAR
            </div>
                          <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">2-Month Advanced</h3>
                <p className="text-gray-600 mb-4">Most popular choice</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blue-600">₹12,000</span>
                  <span className="text-lg text-gray-400 line-through ml-2">₹16,000</span>
                </div>
                <p className="text-sm text-gray-500">You save ₹4,000</p>
              </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Everything in 1-Month +</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Microservices architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Testing & CI/CD</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Advanced project</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Enroll Now
            </button>
          </div>

          {/* 3-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              40% OFF
            </div>
                          <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">3-Month Professional</h3>
                <p className="text-gray-600 mb-4">Complete career preparation</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-purple-600">₹18,000</span>
                  <span className="text-lg text-gray-400 line-through ml-2">₹24,000</span>
                </div>
                <p className="text-sm text-gray-500">You save ₹6,000</p>
              </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Everything in 2-Month +</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">System design & DevOps</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Multiple projects</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Career guidance</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
              Enroll Now
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            <strong>Limited Time Offer!</strong> Don't miss this opportunity to kickstart your web development career.
          </p>
        </div>
      </div>

      {/* Tools Covered Section */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Tools Covered</h2>
          <p className="text-gray-600">Master industry-standard development tools used in professional web development</p>
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
              <h3 className="font-bold text-gray-800 mb-2">Beginners</h3>
              <p className="text-gray-600 text-sm">Start your web development journey from scratch</p>
            </div>
            <div className="p-4">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Career Switchers</h3>
              <p className="text-gray-600 text-sm">Transition into web development from other fields</p>
            </div>
            <div className="p-4">
              <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Intermediate Developers</h3>
              <p className="text-gray-600 text-sm">Enhance skills and learn modern frameworks</p>
            </div>
          </div>
        </div>
      </div>

      {/* About TechProjectsHub Section */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">About TechProjectsHub</h2>
          <p className="text-gray-700 text-center text-lg mb-8">
            A hands-on training platform for tech learners in Python, Cloud, AI/ML, Full Stack, and more.
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
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Web Development Journey?</h2>
          <p className="text-lg mb-6">Join our comprehensive Python Full Stack training program and build your career in web development</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-100 transition"
            >
              Enroll Now
            </Link>
            <a
              href="/TrainingPDFS/PythonFullStackTraining.pdf"
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

export default PythonFullStack; 