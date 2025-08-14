import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import mernImg from "../assets/ImagesforTraining/MERN.png";
import { CheckCircle, Download, Users, Award, Clock, BookOpen, Wrench, Target, Building, Star } from "lucide-react";

function MernStack() {
  const [selectedDuration, setSelectedDuration] = useState("1-month");

  const durationData = {
    "1-month": {
      title: "1-Month MERN Stack Foundation",
      goal: "Learn MongoDB, Express, React, Node.js basics and build a simple full-stack application.",
      syllabus: [
        {
          week: "Week 1: Frontend Fundamentals",
          topics: [
            "HTML5, CSS3, JavaScript ES6+",
            "React.js Components & JSX",
            "Props, State & Event Handling",
            "React Hooks (useState, useEffect)",
            "Component Lifecycle & Styling"
          ]
        },
        {
          week: "Week 2: Backend Development",
          topics: [
            "Node.js & Express.js Setup",
            "RESTful API Development",
            "Middleware & Route Handling",
            "Error Handling & Validation",
            "API Testing with Postman"
          ]
        },
        {
          week: "Week 3: Database & Integration",
          topics: [
            "MongoDB Database Setup",
            "Mongoose ODM & Schema Design",
            "CRUD Operations Implementation",
            "Frontend-Backend Integration",
            "Data Fetching with Fetch API"
          ]
        },
        {
          week: "Week 4: Project Development",
          topics: [
            "Full-stack Application Development",
            "Authentication & Authorization",
            "User Interface Enhancement",
            "Deployment Preparation",
            "Project Documentation"
          ]
        }
      ],
      outcomes: [
        "Build complete MERN stack applications",
        "Master React.js frontend development",
        "Create RESTful APIs with Express",
        "Deploy applications to cloud platforms"
      ]
    },
    "2-months": {
      title: "2-Month MERN Stack Advanced",
      goal: "Master advanced MERN concepts, authentication, state management, and build complex applications.",
      syllabus: [
        {
          week: "Month 1: Foundation Course Content",
          topics: [
            "Complete Frontend & Backend Basics",
            "Database Integration",
            "Basic Project Development"
          ]
        },
        {
          week: "Week 5: Advanced React & State Management",
          topics: [
            "Context API & Global State",
            "Redux Toolkit Implementation",
            "Advanced React Patterns",
            "Custom Hooks Development",
            "Performance Optimization"
          ]
        },
        {
          week: "Week 6: Advanced Backend Features",
          topics: [
            "JWT Authentication & Authorization",
            "File Upload & Cloud Storage",
            "Advanced MongoDB Queries",
            "API Security & Rate Limiting",
            "Error Handling & Logging"
          ]
        },
        {
          week: "Week 7: Advanced Integration",
          topics: [
            "Real-time Features with Socket.io",
            "Payment Gateway Integration",
            "Email & Notification Services",
            "Advanced UI/UX Implementation",
            "Testing & Debugging"
          ]
        },
        {
          week: "Week 8: Advanced Project",
          topics: [
            "E-commerce Platform Development",
            "Admin Dashboard Creation",
            "Advanced Authentication System",
            "Performance Optimization",
            "Deployment & CI/CD"
          ]
        }
      ],
      outcomes: [
        "Build complex full-stack applications",
        "Implement advanced authentication systems",
        "Master state management patterns",
        "Deploy production-ready applications"
      ]
    },
    "3-months": {
      title: "3-Month MERN Stack Professional",
      goal: "Become a MERN stack expert with microservices, advanced features, and enterprise-level development.",
      syllabus: [
        {
          week: "Month 1 & 2: Complete Foundation & Advanced",
          topics: [
            "Complete 1-Month Foundation Course",
            "Complete 2-Month Advanced Course"
          ]
        },
        {
          week: "Week 9: Microservices Architecture",
          topics: [
            "Microservices Design Patterns",
            "Service Communication & API Gateway",
            "Docker Containerization",
            "Kubernetes Orchestration",
            "Service Discovery & Load Balancing"
          ]
        },
        {
          week: "Week 10: Advanced Features",
          topics: [
            "GraphQL Implementation",
            "Real-time Chat & Notifications",
            "Advanced Security Features",
            "Performance Monitoring",
            "Caching Strategies"
          ]
        },
        {
          week: "Week 11: DevOps & Deployment",
          topics: [
            "CI/CD Pipeline Setup",
            "Cloud Deployment (AWS/Azure)",
            "Monitoring & Logging",
            "Database Optimization",
            "Security Best Practices"
          ]
        },
        {
          week: "Week 12: Enterprise Project",
          topics: [
            "Large-scale Application Development",
            "Team Collaboration & Git Workflow",
            "Code Review & Testing",
            "Documentation & Maintenance",
            "Career Preparation & Interview Skills"
          ]
        }
      ],
      outcomes: [
        "Build enterprise-level applications",
        "Master microservices architecture",
        "Implement advanced DevOps practices",
        "Prepare for senior developer roles"
      ]
    }
  };

  const toolsCovered = [
    { category: "Frontend", tools: ["React.js", "JavaScript ES6+", "HTML5", "CSS3"] },
    { category: "Backend", tools: ["Node.js", "Express.js", "REST APIs", "JWT Auth"] },
    { category: "Database", tools: ["MongoDB", "Mongoose", "MongoDB Atlas", "Redis"] },
    { category: "DevOps", tools: ["Docker", "Kubernetes", "AWS/Azure", "CI/CD"] },
    { category: "Testing", tools: ["Jest", "React Testing Library", "Postman", "Mocha"] }
  ];

  const whyChooseUs = [
    { icon: Target, title: "Full-Stack Development", desc: "Learn complete web development stack" },
    { icon: Wrench, title: "Modern Technologies", desc: "Use industry-standard MERN technologies" },
    { icon: Users, title: "Expert Mentorship", desc: "Get guidance from experienced developers" },
    { icon: BookOpen, title: "Project-Based Learning", desc: "Build real-world applications" },
    { icon: Star, title: "Career Support", desc: "Resume building and job preparation" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-teal-50 to-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-20 pb-12">
        <img src={mernImg} alt="MERN Stack" className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 drop-shadow mb-4 text-center">MERN Stack Training Program</h1>
          <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">Comprehensive Full-Stack Development Training</span>
          <p className="max-w-3xl text-lg text-gray-700 mb-6 text-center font-medium">
            Master the MERN stack: MongoDB, Express, React, and Node.js with hands-on projects, modern development practices, and expert guidance. 
            Choose your training duration and embark on a journey to become a full-stack web developer.
          </p>
        </div>
        <img src={mernImg} alt="MERN Stack" className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-white object-contain mt-4 mb-2 z-20" />
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
            <p className="text-gray-600 text-sm">Modern full-stack development technologies and tools</p>
          </div>

          {/* Ideal For */}
          <div className="bg-white/80 backdrop-blur-lg border border-teal-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-teal-600" />
              <h3 className="text-lg font-bold text-teal-800">Ideal For</h3>
            </div>
            <p className="text-gray-600 text-sm">Web developers, career switchers, and full-stack aspirants</p>
          </div>

          {/* About TechProjectsHub */}
          <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">About TechProjectsHub</h3>
            </div>
            <p className="text-gray-600 text-sm">A hands-on training platform for tech learners in Full Stack, Cloud, AI/ML, and more</p>
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
                    ? "bg-gradient-to-r from-green-500 to-teal-500 text-white" 
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
              <Award className="w-5 h-5 text-teal-600" />
              Outcomes
            </h4>
            <ul className="space-y-3">
              {durationData[selectedDuration].outcomes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
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
          <p className="text-xl text-gray-600 mb-2">40% Discount on Industry-Ready MERN Stack Training</p>
          <p className="text-lg text-gray-500">No hidden charges, just real value crafted for future full-stack developers</p>
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
                <span className="text-3xl font-bold text-green-600">₹8,000</span>
                <span className="text-lg text-gray-400 line-through ml-2">₹10,000</span>
              </div>
              <p className="text-sm text-gray-500">You save ₹2,000</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Full-stack project work</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">MERN technologies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Expert mentorship</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Completion certificate</span>
              </li>
            </ul>
            <button 
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-3 px-6 rounded-xl hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>

          {/* 2-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-teal-200 p-8 relative overflow-hidden transform scale-105">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              40% OFF
            </div>
            <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 text-xs font-bold rounded-full">
              POPULAR
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2-Month Advanced</h3>
              <p className="text-gray-600 mb-4">Most popular choice</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-teal-600">₹16,000</span>
                <span className="text-lg text-gray-400 line-through ml-2">₹20,000</span>
              </div>
              <p className="text-sm text-gray-500">You save ₹4,000</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-500" />
                <span className="text-gray-700">Everything in 1-Month +</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-500" />
                <span className="text-gray-700">Advanced authentication</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-500" />
                <span className="text-gray-700">State management</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-500" />
                <span className="text-gray-700">Complex project</span>
              </li>
            </ul>
            <button 
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>

          {/* 3-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              40% OFF
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">3-Month Professional</h3>
              <p className="text-gray-600 mb-4">Complete career preparation</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">₹24,000</span>
                <span className="text-lg text-gray-400 line-through ml-2">₹30,000</span>
              </div>
              <p className="text-sm text-gray-500">You save ₹6,000</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Everything in 2-Month +</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Microservices architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">DevOps & deployment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Career guidance</span>
              </li>
            </ul>
            <button 
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            <strong>Limited Time Offer!</strong> Don't miss this opportunity to kickstart your full-stack development career.
          </p>
        </div>
      </div>

      {/* Tools Covered Section */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Technologies Covered</h2>
          <p className="text-gray-600">Master modern full-stack development technologies used in professional applications</p>
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
        <div className="bg-white/80 backdrop-blur-lg border border-teal-200 rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">Ideal For</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Web Developers</h3>
              <p className="text-gray-600 text-sm">Expand skills to full-stack development</p>
            </div>
            <div className="p-4">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Career Switchers</h3>
              <p className="text-gray-600 text-sm">Transition into full-stack development</p>
            </div>
            <div className="p-4">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Full-Stack Aspirants</h3>
              <p className="text-gray-600 text-sm">Build complete web applications</p>
            </div>
          </div>
        </div>
      </div>

      {/* About TechProjectsHub Section */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">About TechProjectsHub</h2>
          <p className="text-gray-700 text-center text-lg mb-8">
            A hands-on training platform for tech learners in Full Stack Development, Cloud Computing, AI/ML, and more.
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
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Full-Stack Development Journey?</h2>
          <p className="text-lg mb-6">Join our comprehensive MERN stack training program and build your career in full-stack development</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="px-8 py-3 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-100 transition"
            >
              Enroll Now
            </button>
            <a
              href="/TrainingPDFS/MERN_StackSyllabus.pdf"
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

export default MernStack; 