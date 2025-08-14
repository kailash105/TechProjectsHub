import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import frontendImg from "../assets/ImagesforTraining/Frontend.png";
import { CheckCircle, Download, Users, Award, Clock, BookOpen, Wrench, Target, Building, Star } from "lucide-react";

function FrontEnd() {
  const [selectedDuration, setSelectedDuration] = useState("1-month");

  const durationData = {
    "1-month": {
      title: "1-Month Frontend Development Foundation",
      goal: "Learn HTML5, CSS3, JavaScript, and Bootstrap to create responsive and interactive websites.",
      syllabus: [
        {
          week: "Week 1: HTML5 & CSS3 Fundamentals",
          topics: [
            "HTML5 Structure & Semantic Elements",
            "CSS3 Styling & Layout Techniques",
            "Responsive Design Principles",
            "CSS Flexbox & Grid Layout",
            "CSS Animations & Transitions"
          ]
        },
        {
          week: "Week 2: JavaScript Programming",
          topics: [
            "JavaScript Variables & Data Types",
            "Control Structures & Loops",
            "Functions & Scope",
            "DOM Manipulation",
            "Event Handling"
          ]
        },
        {
          week: "Week 3: Advanced JavaScript & Bootstrap",
          topics: [
            "ES6+ Features (Arrow Functions, Destructuring)",
            "Bootstrap Framework & Components",
            "Responsive Navigation & Forms",
            "JavaScript Arrays & Objects",
            "Local Storage & Session Storage"
          ]
        },
        {
          week: "Week 4: Project Development",
          topics: [
            "Portfolio Website Development",
            "E-commerce Landing Page",
            "Interactive Web Applications",
            "Performance Optimization",
            "Deployment & Hosting"
          ]
        }
      ],
      outcomes: [
        "Build responsive and modern websites",
        "Master HTML5, CSS3, and JavaScript",
        "Create interactive user interfaces",
        "Deploy websites to live servers"
      ]
    },
    "2-months": {
      title: "2-Month Frontend Development Advanced",
      goal: "Master React.js, modern JavaScript, and build dynamic single-page applications.",
      syllabus: [
        {
          week: "Month 1: Foundation Course Content",
          topics: [
            "Complete HTML5, CSS3, JavaScript",
            "Bootstrap Framework",
            "Basic Project Development"
          ]
        },
        {
          week: "Week 5: React.js Fundamentals",
          topics: [
            "React.js Introduction & Setup",
            "Components & JSX Syntax",
            "Props & State Management",
            "Event Handling in React",
            "Conditional Rendering"
          ]
        },
        {
          week: "Week 6: React Hooks & Advanced Concepts",
          topics: [
            "useState, useEffect Hooks",
            "Custom Hooks Development",
            "React Router for Navigation",
            "Context API for State Management",
            "Component Lifecycle"
          ]
        },
        {
          week: "Week 7: API Integration & Styling",
          topics: [
            "Fetch API & Axios Integration",
            "RESTful API Consumption",
            "CSS-in-JS & Styled Components",
            "Material-UI & Component Libraries",
            "Error Handling & Loading States"
          ]
        },
        {
          week: "Week 8: Advanced Project",
          topics: [
            "Full-stack React Application",
            "Authentication & Authorization",
            "Advanced State Management",
            "Performance Optimization",
            "Deployment to Netlify/Vercel"
          ]
        }
      ],
      outcomes: [
        "Build dynamic React applications",
        "Integrate with backend APIs",
        "Implement modern state management",
        "Deploy professional web applications"
      ]
    },
    "3-months": {
      title: "3-Month Frontend Development Professional",
      goal: "Become a full-stack frontend developer with advanced frameworks and modern development practices.",
      syllabus: [
        {
          week: "Month 1 & 2: Complete Foundation & Advanced",
          topics: [
            "Complete 1-Month Foundation Course",
            "Complete 2-Month Advanced Course with React.js"
          ]
        },
        {
          week: "Week 9: Advanced React & State Management",
          topics: [
            "Redux Toolkit for State Management",
            "React Query for Server State",
            "Advanced React Patterns",
            "Performance Optimization Techniques",
            "Testing with Jest & React Testing Library"
          ]
        },
        {
          week: "Week 10: Modern Frontend Tools",
          topics: [
            "TypeScript Integration",
            "Next.js Framework",
            "Static Site Generation",
            "Server-Side Rendering",
            "Advanced Routing & Middleware"
          ]
        },
        {
          week: "Week 11: Advanced Development Practices",
          topics: [
            "Webpack & Build Tools",
            "Code Splitting & Lazy Loading",
            "Progressive Web Apps (PWA)",
            "Accessibility (a11y) Standards",
            "SEO Optimization"
          ]
        },
        {
          week: "Week 12: Career Preparation",
          topics: [
            "Portfolio Development",
            "GitHub Profile Optimization",
            "Technical Interview Preparation",
            "Freelancing & Job Search",
            "Industry Best Practices"
          ]
        }
      ],
      outcomes: [
        "Master modern frontend frameworks",
        "Build enterprise-level applications",
        "Implement advanced development practices",
        "Prepare for frontend developer roles"
      ]
    }
  };

  const toolsCovered = [
    { category: "Markup & Styling", tools: ["HTML5", "CSS3", "Sass/SCSS", "Bootstrap"] },
    { category: "JavaScript", tools: ["ES6+", "React.js", "TypeScript", "Node.js"] },
    { category: "Build Tools", tools: ["Webpack", "Vite", "Babel", "ESLint"] },
    { category: "Testing", tools: ["Jest", "React Testing Library", "Cypress"] },
    { category: "Deployment", tools: ["Netlify", "Vercel", "GitHub Pages", "AWS S3"] }
  ];

  const whyChooseUs = [
    { icon: Target, title: "Project-Driven Learning", desc: "Learn by building real-world applications" },
    { icon: Wrench, title: "Modern Development Tools", desc: "Use industry-standard tools and frameworks" },
    { icon: Users, title: "Expert Mentorship", desc: "Get guidance from experienced frontend developers" },
    { icon: BookOpen, title: "Comprehensive Curriculum", desc: "Cover all aspects of modern frontend development" },
    { icon: Star, title: "Career Support", desc: "Resume building and interview preparation" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-20 pb-12">
        <img src={frontendImg} alt="Frontend Development" className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 drop-shadow mb-4 text-center">Frontend Development Training Program</h1>
          <span className="inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">Comprehensive Web Development Training</span>
          <p className="max-w-3xl text-lg text-gray-700 mb-6 text-center font-medium">
            Master modern frontend development with HTML5, CSS3, JavaScript, React.js, and expert guidance. 
            Choose your training duration and embark on a journey to become a professional frontend developer.
          </p>
        </div>
        <img src={frontendImg} alt="Frontend Development" className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-white object-contain mt-4 mb-2 z-20" />
      </div>

      {/* Course Overview Sections */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tools Covered */}
          <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">Tools Covered</h3>
            </div>
            <p className="text-gray-600 text-sm">Modern frontend frameworks and development tools</p>
          </div>

          {/* Ideal For */}
          <div className="bg-white/80 backdrop-blur-lg border border-pink-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-pink-600" />
              <h3 className="text-lg font-bold text-pink-800">Ideal For</h3>
            </div>
            <p className="text-gray-600 text-sm">Beginners, designers, and web development enthusiasts</p>
          </div>

          {/* About TechProjectsHub */}
          <div className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">About TechProjectsHub</h3>
            </div>
            <p className="text-gray-600 text-sm">A hands-on training platform for tech learners in Frontend, Full Stack, and more</p>
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
          <div className="inline-flex rounded-2xl bg-white/80 shadow border border-purple-200 overflow-hidden">
            {["1-month", "2-months", "3-months"].map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={`px-8 py-4 font-semibold text-lg transition-all ${
                  selectedDuration === duration 
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" 
                    : "text-purple-700 hover:bg-purple-100"
                }`}
              >
                {duration === "1-month" ? "1 Month" : duration === "2-months" ? "2 Months" : "3 Months"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Content Based on Selection */}
      <div className="backdrop-blur-lg bg-white/70 border border-purple-200 rounded-3xl shadow-2xl p-8">
        <h3 className="text-2xl font-bold text-purple-700 mb-4 text-center">{durationData[selectedDuration].title}</h3>
        <p className="text-gray-600 text-center mb-6 italic">{durationData[selectedDuration].goal}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Syllabus */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-600" />
              Syllabus
            </h4>
            <div className="space-y-4">
              {durationData[selectedDuration].syllabus.map((week, index) => (
                <div key={index} className="border-l-4 border-purple-300 pl-4">
                  <h5 className="font-semibold text-purple-800 mb-2">{week.week}</h5>
                  <ul className="space-y-1">
                    {week.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
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
              <Award className="w-5 h-5 text-pink-600" />
              Outcomes
            </h4>
            <ul className="space-y-3">
              {durationData[selectedDuration].outcomes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
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
          <p className="text-xl text-gray-600 mb-2">40% Discount on Industry-Ready Frontend Development Training</p>
          <p className="text-lg text-gray-500">No hidden charges, just real value crafted for future web developers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 1-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              40% OFF
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">1-Month Foundation</h3>
              <p className="text-gray-600 mb-4">Perfect for beginners</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-purple-600">₹5,500</span>
                <span className="text-lg text-gray-400 line-through ml-2">₹7,500</span>
              </div>
              <p className="text-sm text-gray-500">You save ₹2,000</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Hands-on project work</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Modern development tools</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Mentor support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Completion certificate</span>
              </li>
            </ul>
            <button 
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>

          {/* 2-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-pink-200 p-8 relative overflow-hidden transform scale-105">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              40% OFF
            </div>
            <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 text-xs font-bold rounded-full">
              POPULAR
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2-Month Advanced</h3>
              <p className="text-gray-600 mb-4">Most popular choice</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-pink-600">₹11,000</span>
                <span className="text-lg text-gray-400 line-through ml-2">₹15,000</span>
              </div>
              <p className="text-sm text-gray-500">You save ₹4,000</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-500" />
                <span className="text-gray-700">Everything in 1-Month +</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-500" />
                <span className="text-gray-700">React.js framework</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-500" />
                <span className="text-gray-700">API integration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-500" />
                <span className="text-gray-700">Advanced project</span>
              </li>
            </ul>
            <button 
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-6 rounded-xl hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>

          {/* 3-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-red-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              40% OFF
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">3-Month Professional</h3>
              <p className="text-gray-600 mb-4">Complete career preparation</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-red-600">₹16,500</span>
                <span className="text-lg text-gray-400 line-through ml-2">₹22,500</span>
              </div>
              <p className="text-sm text-gray-500">You save ₹6,000</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">Everything in 2-Month +</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">Advanced frameworks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">Testing & deployment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">Career guidance</span>
              </li>
            </ul>
            <button 
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold py-3 px-6 rounded-xl hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            <strong>Limited Time Offer!</strong> Don't miss this opportunity to kickstart your frontend development career.
          </p>
        </div>
      </div>

      {/* Tools Covered Section */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Technologies Covered</h2>
          <p className="text-gray-600">Master modern frontend technologies and frameworks used in professional development</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsCovered.map((category, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-purple-800 mb-3">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, toolIndex) => (
                  <span key={toolIndex} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
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
        <div className="bg-white/80 backdrop-blur-lg border border-pink-200 rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-pink-800 mb-6 text-center">Ideal For</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <Users className="w-12 h-12 text-pink-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Beginners</h3>
              <p className="text-gray-600 text-sm">Start your web development journey from scratch</p>
            </div>
            <div className="p-4">
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Designers</h3>
              <p className="text-gray-600 text-sm">Learn to code and bring designs to life</p>
            </div>
            <div className="p-4">
              <BookOpen className="w-12 h-12 text-red-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Career Switchers</h3>
              <p className="text-gray-600 text-sm">Transition into web development from other fields</p>
            </div>
          </div>
        </div>
      </div>

      {/* About TechProjectsHub Section */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">About TechProjectsHub</h2>
          <p className="text-gray-700 text-center text-lg mb-8">
            A hands-on training platform for tech learners in Frontend Development, Full Stack, Cloud Computing, and more.
          </p>
          
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Why Choose Us?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-4">
                <item.icon className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Frontend Development Journey?</h2>
          <p className="text-lg mb-6">Join our comprehensive frontend development training program and build your career in web development</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="px-8 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition"
            >
              Enroll Now
            </button>
            <a
              href="/TrainingPDFS/FrontEnd_Syllabus.pdf"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-600 transition flex items-center justify-center gap-2"
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

export default FrontEnd; 