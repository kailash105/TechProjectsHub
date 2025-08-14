import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import webFullStackImg from "../assets/ImagesforTraining/full-stack-web-developer.png";
import { CheckCircle, Download, Users, Award, Clock, BookOpen, Wrench, Target, Building, Star, Code, Database, Globe, Rocket } from "lucide-react";

function WebFullStack() {
  const [selectedDuration, setSelectedDuration] = useState("1-month");

  const durationData = {
    "1-month": {
      title: "1-Month Web Full Stack Foundation",
      goal: "Learn frontend development with HTML, CSS, JavaScript, and React basics. Ideal for beginners starting their web development journey.",
      syllabus: [
        {
          week: "Week 1: HTML & CSS Essentials",
          topics: [
            "HTML structure, semantic tags, forms",
            "CSS selectors, box model, flexbox, grid",
            "Responsive design principles",
            "Mini Project: Personal portfolio webpage"
          ]
        },
        {
          week: "Week 2: JavaScript Fundamentals",
          topics: [
            "Variables, data types, operators",
            "DOM manipulation & event handling",
            "Functions, loops, conditionals",
            "Mini Project: Interactive to-do list"
          ]
        },
        {
          week: "Week 3: Advanced JavaScript + ES6",
          topics: [
            "ES6 features: arrow functions, destructuring, template literals",
            "Arrays & objects, higher-order functions",
            "LocalStorage & sessionStorage",
            "Mini Project: Expense tracker"
          ]
        },
        {
          week: "Week 4: ReactJS Basics",
          topics: [
            "Introduction to React & JSX",
            "Components, props, and state",
            "Event handling in React",
            "Mini Project: Weather app using API"
          ]
        }
      ],
      outcomes: [
        "Solid understanding of HTML, CSS, JS, and basic React",
        "Build responsive and interactive web pages",
        "Create dynamic user interfaces with React",
        "Deploy frontend applications to cloud platforms"
      ]
    },
    "2-months": {
      title: "2-Month Web Full Stack Advanced",
      goal: "Master advanced frontend and backend development with Node.js, Express, and MongoDB. Ideal for intermediate learners.",
      syllabus: [
        {
          week: "Week 1-4: Full 1-Month Content",
          topics: [
            "HTML, CSS, JavaScript fundamentals",
            "React basics and component development",
            "Frontend project development",
            "Responsive web design principles"
          ]
        },
        {
          week: "Week 5: React Advanced",
          topics: [
            "React Router for multi-page navigation",
            "Hooks (useState, useEffect)",
            "Context API for state management",
            "Mini Project: Blog website (frontend)"
          ]
        },
        {
          week: "Week 6: Node.js & Express Basics",
          topics: [
            "Introduction to Node.js & npm",
            "Setting up Express server",
            "REST API basics (GET, POST, PUT, DELETE)",
            "Mini Project: Simple API for blog posts"
          ]
        },
        {
          week: "Week 7: MongoDB & Database Integration",
          topics: [
            "MongoDB basics, collections, documents",
            "CRUD operations with Mongoose",
            "Connecting backend with MongoDB",
            "Mini Project: Blog with database"
          ]
        },
        {
          week: "Week 8: API Integration",
          topics: [
            "Fetching & posting data from frontend to backend",
            "Error handling & validation",
            "Postman for API testing",
            "Mini Project: Task manager app"
          ]
        }
      ],
      outcomes: [
        "Can build full frontend apps and basic backend APIs with database",
        "Master React advanced features and state management",
        "Create RESTful APIs with Node.js and Express",
        "Integrate frontend and backend applications"
      ]
    },
    "3-months": {
      title: "3-Month Web Full Stack Professional",
      goal: "Build complete full-stack applications with authentication, deployment, and advanced features. Ideal for job seekers and advanced learners.",
      syllabus: [
        {
          week: "Week 1-8: Full 2-Month Content",
          topics: [
            "Complete 1-Month Foundation Course",
            "Complete 2-Month Advanced Course with Backend Development"
          ]
        },
        {
          week: "Week 9: Authentication & Security",
          topics: [
            "JWT-based authentication",
            "Password hashing with bcrypt",
            "Role-based access control",
            "Mini Project: User login/signup system"
          ]
        },
        {
          week: "Week 10: Advanced Backend Features",
          topics: [
            "File upload & handling",
            "Email sending (Nodemailer)",
            "Payment gateway integration basics",
            "Mini Project: E-commerce backend"
          ]
        },
        {
          week: "Week 11: Full Stack Project Development",
          topics: [
            "Combining frontend & backend",
            "State management with Redux or Context",
            "Testing APIs",
            "Mini Project: Full stack chat app"
          ]
        },
        {
          week: "Week 12: Deployment & Final Project",
          topics: [
            "Hosting frontend on Netlify/Vercel",
            "Hosting backend on Render/Heroku",
            "Connecting production frontend & backend",
            "Final Project: Full-featured e-commerce website"
          ]
        }
      ],
      outcomes: [
        "Can create, deploy, and maintain full-stack production-level projects",
        "Implement secure authentication and authorization systems",
        "Deploy applications to cloud platforms with domain names",
        "Build complete e-commerce solutions with payment integration"
      ]
    }
  };

  const toolsCovered = [
    { category: "Frontend", tools: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"] },
    { category: "Backend", tools: ["Node.js", "Express", "REST APIs", "JWT", "bcrypt"] },
    { category: "Database", tools: ["MongoDB", "Mongoose", "CRUD Operations", "Data Modeling"] },
    { category: "Deployment", tools: ["Netlify", "Vercel", "Render", "Heroku", "Git"] },
    { category: "Tools", tools: ["Postman", "VS Code", "GitHub", "npm", "ES6"] }
  ];

  const whyChooseUs = [
    { icon: Globe, title: "Full Stack Focus", desc: "Complete web development from frontend to backend" },
    { icon: Wrench, title: "Industry-Standard Tools", desc: "Use tools and frameworks used in professional web development" },
    { icon: Users, title: "Expert Mentorship", desc: "Get guidance from experienced full-stack developers" },
    { icon: BookOpen, title: "Project-Driven Learning", desc: "Learn by building real-world web applications" },
    { icon: Star, title: "Career Support", desc: "Resume building and web development job preparation" }
  ];

  const pricing = [
    { 
      duration: "1 Month", 
      originalPrice: "₹4,050", 
      discountedPrice: "₹3,000", 
      savings: "₹1,050",
      features: ["Frontend Development", "4 Mini Projects", "React Basics", "Deployment"] 
    },
    { 
      duration: "2 Months", 
      originalPrice: "₹6,750", 
      discountedPrice: "₹5,000", 
      savings: "₹1,750",
      features: ["Full Stack Development", "6 Projects", "Database Integration", "Career Guidance"] 
    },
    { 
      duration: "3 Months", 
      originalPrice: "₹10,800", 
      discountedPrice: "₹8,000", 
      savings: "₹2,800",
      features: ["Professional Full Stack", "8+ Projects", "Authentication", "Job Placement Support"] 
    }
  ];

  const projects = [
    { month: "Month 1", title: "Portfolio Website", type: "Frontend", description: "Personal portfolio website with HTML, CSS, and JavaScript" },
    { month: "Month 2", title: "Blog App with Authentication", type: "Full Stack", description: "Complete blog application with MERN stack and user authentication" },
    { month: "Month 3", title: "E-Commerce Web App", type: "Full Stack", description: "Full-featured e-commerce website with payment integration" },
    { month: "Capstone", title: "Production-Ready App", type: "Deployment", description: "Complete full-stack application deployed with domain name" }
  ];

  const courseOutcomes = [
    "Build responsive and interactive web applications",
    "Create RESTful APIs with Node.js and Express",
    "Implement secure authentication and authorization",
    "Deploy full-stack applications to cloud platforms",
    "Work with databases and data modeling",
    "Develop production-ready web solutions"
  ];

  const projectOutcomes = [
    "Deploy frontend applications on Netlify/Vercel",
    "Create backend APIs with database storage",
    "Build complete e-commerce solutions",
    "Implement user authentication and admin dashboards"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-green-50 to-white relative overflow-x-hidden">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-20 pb-12">
        <img src={webFullStackImg} alt="Web Full Stack Development" className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 drop-shadow mb-4 text-center">Web Full Stack Development Training Program</h1>
          <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">Comprehensive Web Development Training</span>
          <p className="max-w-3xl text-lg text-gray-700 mb-6 text-center font-medium">
            Master web full-stack development with hands-on projects, modern frameworks, and expert guidance. 
            Choose your training duration and embark on a journey to become a professional web developer.
          </p>
        </div>
        <img src={webFullStackImg} alt="Web Full Stack Development" className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-white object-contain mt-4 mb-2 z-20" />
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
            <p className="text-gray-600 text-sm">Industry-standard web development tools including React, Node.js, MongoDB, and cloud platforms</p>
          </div>

          {/* Ideal For */}
          <div className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Ideal For</h3>
            </div>
            <p className="text-gray-600 text-sm">Beginners to advanced learners, web developers, and full-stack enthusiasts</p>
          </div>

          {/* About TechProjectsHub */}
          <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">About TechProjectsHub</h3>
            </div>
            <p className="text-gray-600 text-sm">A hands-on training platform for tech learners in web development, Python, Cloud, and more</p>
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
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
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
      </div>

      {/* Pricing Section */}
      <div className="max-w-6xl mx-auto w-full px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Special Limited-Time Offer</h2>
          <p className="text-xl text-gray-600 mb-2">35% Discount on Industry-Ready Web Full Stack Training</p>
          <p className="text-lg text-gray-500">No hidden charges, just real value crafted for future web developers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 1-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-green-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              35% OFF
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">1-Month Foundation</h3>
              <p className="text-gray-600 mb-4">Perfect for beginners</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-green-600">{pricing[0].discountedPrice}</span>
                <span className="text-lg text-gray-400 line-through ml-2">{pricing[0].originalPrice}</span>
              </div>
              <p className="text-sm text-gray-500">You save {pricing[0].savings}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {pricing[0].features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>

          {/* 2-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-8 relative overflow-hidden transform scale-105">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              35% OFF
            </div>
            <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 text-xs font-bold rounded-full">
              POPULAR
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2-Month Advanced</h3>
              <p className="text-gray-600 mb-4">Most popular choice</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">{pricing[1].discountedPrice}</span>
                <span className="text-lg text-gray-400 line-through ml-2">{pricing[1].originalPrice}</span>
              </div>
              <p className="text-sm text-gray-500">You save {pricing[1].savings}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {pricing[1].features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>

          {/* 3-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              35% OFF
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">3-Month Professional</h3>
              <p className="text-gray-600 mb-4">Complete career preparation</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-purple-600">{pricing[2].discountedPrice}</span>
                <span className="text-lg text-gray-400 line-through ml-2">{pricing[2].originalPrice}</span>
              </div>
              <p className="text-sm text-gray-500">You save {pricing[2].savings}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {pricing[2].features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects You'll Build</h2>
          <p className="text-gray-600">Hands-on projects to showcase your web development skills</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg border border-green-200 rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{project.month}</h3>
                <span className="text-sm text-green-600 font-semibold">{project.type}</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{project.title}</h4>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Course Outcomes Section */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Course Outcomes */}
          <div className="bg-white/80 backdrop-blur-lg border border-green-200 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-green-600" />
              Course Outcomes
            </h3>
            <div className="space-y-3">
              {courseOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Outcomes */}
          <div className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-blue-600" />
              Project Outcomes
            </h3>
            <div className="space-y-3">
              {projectOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tools Covered Section */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Tools & Technologies Covered</h2>
          <p className="text-gray-600">Master the tools used in professional web development</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {toolsCovered.map((category, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg border border-green-200 rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-green-700 mb-4 text-center">{category.category}</h3>
              <div className="space-y-2">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="text-sm text-gray-600 text-center bg-gray-50 rounded-lg py-2">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Web Full Stack Training</h2>
          <p className="text-gray-600">Discover what makes our program unique</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg border border-green-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-8 h-8 text-green-600" />
                <h3 className="font-bold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Web Development Journey?</h2>
          <p className="text-lg mb-6 opacity-90">Join our comprehensive Web Full Stack training program and become a professional web developer</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Enroll Now
            </button>
            <button
              onClick={() => window.open('/TrainingPDFS/WebFullStack_Syllabus.pdf', '_blank')}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default WebFullStack; 