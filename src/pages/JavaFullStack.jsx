import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import javaImg from "../assets/ImagesforTraining/java-logo.png";
import { CheckCircle, Download, Users, Award, Clock, BookOpen, Wrench, Target, Building, Star } from "lucide-react";

function JavaFullStack() {
  const [selectedDuration, setSelectedDuration] = useState("1-month");

  const durationData = {
    "1-month": {
      title: "1-Month Java Full Stack Foundation",
      goal: "Learn Java fundamentals, Spring Boot basics, frontend technologies, and build a simple full-stack application.",
      syllabus: [
        {
          week: "Week 1: Java Fundamentals & OOP",
          topics: [
            "Java Basics & Data Types",
            "Object-Oriented Programming (OOP)",
            "Inheritance, Polymorphism, Abstraction",
            "Exception Handling & Collections",
            "File I/O & Java 8 Features"
          ]
        },
        {
          week: "Week 2: Spring Boot & REST APIs",
          topics: [
            "Spring Framework Introduction",
            "Spring Boot Setup & Configuration",
            "RESTful API Development",
            "Spring Data JPA & Database",
            "API Testing with Postman"
          ]
        },
        {
          week: "Week 3: Frontend Development",
          topics: [
            "HTML5, CSS3, JavaScript ES6+",
            "React.js Components & State",
            "API Integration with Frontend",
            "Responsive Design & Bootstrap",
            "Frontend-Backend Integration"
          ]
        },
        {
          week: "Week 4: Project Development",
          topics: [
            "Full-stack Application Development",
            "Database Design & Implementation",
            "Authentication & Authorization",
            "Deployment Preparation",
            "Project Documentation"
          ]
        }
      ],
      outcomes: [
        "Build complete Java full-stack applications",
        "Master Spring Boot framework",
        "Create RESTful APIs and frontend interfaces",
        "Deploy applications to cloud platforms"
      ]
    },
    "2-months": {
      title: "2-Month Java Full Stack Advanced",
      goal: "Master advanced Java concepts, microservices, security, and build complex enterprise applications.",
      syllabus: [
        {
          week: "Month 1: Foundation Course Content",
          topics: [
            "Complete Java Fundamentals",
            "Spring Boot Basics",
            "Frontend Development",
            "Basic Project Development"
          ]
        },
        {
          week: "Week 5: Advanced Spring Boot",
          topics: [
            "Spring Security Implementation",
            "JWT Authentication & Authorization",
            "Spring Cloud & Microservices",
            "Advanced Database Operations",
            "Caching with Redis"
          ]
        },
        {
          week: "Week 6: Advanced Frontend",
          topics: [
            "Advanced React.js Patterns",
            "State Management (Redux/Context)",
            "Advanced CSS & Styling",
            "Performance Optimization",
            "Testing with Jest"
          ]
        },
        {
          week: "Week 7: DevOps & Deployment",
          topics: [
            "Docker Containerization",
            "CI/CD Pipeline Setup",
            "Cloud Deployment (AWS/Azure)",
            "Monitoring & Logging",
            "Security Best Practices"
          ]
        },
        {
          week: "Week 8: Advanced Project",
          topics: [
            "Enterprise-level Application",
            "Microservices Architecture",
            "Advanced Authentication System",
            "Performance Optimization",
            "Production Deployment"
          ]
        }
      ],
      outcomes: [
        "Build enterprise-level Java applications",
        "Implement microservices architecture",
        "Master DevOps and deployment practices",
        "Deploy production-ready applications"
      ]
    },
    "3-months": {
      title: "3-Month Java Full Stack Professional",
      goal: "Become a Java full-stack expert with advanced enterprise patterns, cloud-native development, and career preparation.",
      syllabus: [
        {
          week: "Month 1 & 2: Complete Foundation & Advanced",
          topics: [
            "Complete 1-Month Foundation Course",
            "Complete 2-Month Advanced Course"
          ]
        },
        {
          week: "Week 9: Enterprise Architecture",
          topics: [
            "Design Patterns & Best Practices",
            "Enterprise Integration Patterns",
            "Message Queues (RabbitMQ/Kafka)",
            "Advanced Security Patterns",
            "Performance Tuning"
          ]
        },
        {
          week: "Week 10: Cloud-Native Development",
          topics: [
            "Kubernetes Orchestration",
            "Cloud-Native Applications",
            "Serverless Architecture",
            "Advanced Monitoring",
            "Auto-scaling & Load Balancing"
          ]
        },
        {
          week: "Week 11: Advanced Technologies",
          topics: [
            "GraphQL Implementation",
            "Real-time Applications (WebSocket)",
            "Advanced Testing Strategies",
            "Code Quality & SonarQube",
            "Advanced CI/CD Pipelines"
          ]
        },
        {
          week: "Week 12: Career Preparation",
          topics: [
            "System Design Interviews",
            "Java Certification Preparation",
            "Resume Building & Portfolio",
            "Technical Interview Practice",
            "Career Guidance & Networking"
          ]
        }
      ],
      outcomes: [
        "Master enterprise Java development",
        "Build cloud-native applications",
        "Prepare for senior developer roles",
        "Achieve Java certifications"
      ]
    }
  };

  const toolsCovered = [
    { category: "Backend", tools: ["Java 8+", "Spring Boot", "Spring Security", "JPA/Hibernate"] },
    { category: "Frontend", tools: ["React.js", "JavaScript ES6+", "HTML5", "CSS3"] },
    { category: "Database", tools: ["MySQL", "PostgreSQL", "Redis", "MongoDB"] },
    { category: "DevOps", tools: ["Docker", "Kubernetes", "AWS/Azure", "Jenkins"] },
    { category: "Testing", tools: ["JUnit", "Mockito", "Jest", "Postman"] }
  ];

  const whyChooseUs = [
    { icon: Target, title: "Enterprise Java Development", desc: "Learn industry-standard Java technologies" },
    { icon: Wrench, title: "Modern Full-Stack Tools", desc: "Use tools used in enterprise development" },
    { icon: Users, title: "Expert Java Mentorship", desc: "Get guidance from experienced Java developers" },
    { icon: BookOpen, title: "Project-Based Learning", desc: "Build real-world enterprise applications" },
    { icon: Star, title: "Career Support", desc: "Resume building and Java job preparation" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-50 via-green-50 to-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-20 pb-12">
        <img src={javaImg} alt="Java Full Stack" className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-green-600 drop-shadow mb-4 text-center">Java Full Stack Training Program</h1>
          <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">Comprehensive Enterprise Development Training</span>
          <p className="max-w-3xl text-lg text-gray-700 mb-6 text-center font-medium">
            Master Java full-stack development with Spring Boot, React.js, and enterprise technologies. 
            Choose your training duration and embark on a journey to become a professional Java developer.
          </p>
        </div>
        <img src={javaImg} alt="Java Full Stack" className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-white object-contain mt-4 mb-2 z-20" />
      </div>

      {/* Course Overview Sections */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tools Covered */}
          <div className="bg-white/80 backdrop-blur-lg border border-yellow-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-yellow-600" />
              <h3 className="text-lg font-bold text-yellow-800">Tools Covered</h3>
            </div>
            <p className="text-gray-600 text-sm">Enterprise Java technologies and modern development tools</p>
          </div>

          {/* Ideal For */}
          <div className="bg-white/80 backdrop-blur-lg border border-green-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-green-800">Ideal For</h3>
            </div>
            <p className="text-gray-600 text-sm">Java developers, enterprise aspirants, and full-stack learners</p>
          </div>

          {/* About TechProjectsHub */}
          <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">About TechProjectsHub</h3>
            </div>
            <p className="text-gray-600 text-sm">A hands-on training platform for tech learners in Java, Full Stack, Cloud, and more</p>
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
          <div className="inline-flex rounded-2xl bg-white/80 shadow border border-yellow-200 overflow-hidden">
            {["1-month", "2-months", "3-months"].map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={`px-8 py-4 font-semibold text-lg transition-all ${
                  selectedDuration === duration 
                    ? "bg-gradient-to-r from-yellow-500 to-green-500 text-white" 
                    : "text-yellow-700 hover:bg-yellow-100"
                }`}
              >
                {duration === "1-month" ? "1 Month" : duration === "2-months" ? "2 Months" : "3 Months"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Content Based on Selection */}
      <div className="backdrop-blur-lg bg-white/70 border border-yellow-200 rounded-3xl shadow-2xl p-8">
        <h3 className="text-2xl font-bold text-yellow-700 mb-4 text-center">{durationData[selectedDuration].title}</h3>
        <p className="text-gray-600 text-center mb-6 italic">{durationData[selectedDuration].goal}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Syllabus */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-yellow-600" />
              Syllabus
            </h4>
            <div className="space-y-4">
              {durationData[selectedDuration].syllabus.map((week, index) => (
                <div key={index} className="border-l-4 border-yellow-300 pl-4">
                  <h5 className="font-semibold text-yellow-800 mb-2">{week.week}</h5>
                  <ul className="space-y-1">
                    {week.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
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
              <Award className="w-5 h-5 text-green-600" />
              Outcomes
            </h4>
            <ul className="space-y-3">
              {durationData[selectedDuration].outcomes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
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
          <p className="text-xl text-gray-600 mb-2">40% Discount on Industry-Ready Java Full Stack Training</p>
          <p className="text-lg text-gray-500">No hidden charges, just real value crafted for future Java developers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 1-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-yellow-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              40% OFF
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">1-Month Foundation</h3>
              <p className="text-gray-600 mb-4">Perfect for beginners</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-yellow-600">₹6,500</span>
                <span className="text-lg text-gray-400 line-through ml-2">₹8,500</span>
              </div>
              <p className="text-sm text-gray-500">You save ₹2,000</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">Java full-stack projects</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">Spring Boot framework</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">Expert Java mentorship</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-700">Completion certificate</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-green-500 text-white font-bold py-3 px-6 rounded-xl hover:from-yellow-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105">
              Enroll Now
            </button>
          </div>

          {/* 2-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-green-200 p-8 relative overflow-hidden transform scale-105">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              40% OFF
            </div>
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-full">
              POPULAR
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2-Month Advanced</h3>
              <p className="text-gray-600 mb-4">Most popular choice</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-green-600">₹13,000</span>
                <span className="text-lg text-gray-400 line-through ml-2">₹17,000</span>
              </div>
              <p className="text-sm text-gray-500">You save ₹4,000</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Everything in 1-Month +</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Microservices architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">DevOps & deployment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Advanced project</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-6 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
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
                <span className="text-3xl font-bold text-blue-600">₹19,500</span>
                <span className="text-lg text-gray-400 line-through ml-2">₹25,500</span>
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
                <span className="text-gray-700">Enterprise patterns</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Cloud-native development</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Career guidance</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Enroll Now
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            <strong>Limited Time Offer!</strong> Don't miss this opportunity to kickstart your Java development career.
          </p>
        </div>
      </div>

      {/* Tools Covered Section */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Technologies Covered</h2>
          <p className="text-gray-600">Master enterprise Java technologies and modern development tools</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsCovered.map((category, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg border border-yellow-200 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, toolIndex) => (
                  <span key={toolIndex} className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
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
        <div className="bg-white/80 backdrop-blur-lg border border-green-200 rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Ideal For</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Java Developers</h3>
              <p className="text-gray-600 text-sm">Expand skills to full-stack development</p>
            </div>
            <div className="p-4">
              <Target className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Enterprise Aspirants</h3>
              <p className="text-gray-600 text-sm">Build enterprise-level applications</p>
            </div>
            <div className="p-4">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Full-Stack Learners</h3>
              <p className="text-gray-600 text-sm">Master complete web development</p>
            </div>
          </div>
        </div>
      </div>

      {/* About TechProjectsHub Section */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">About TechProjectsHub</h2>
          <p className="text-gray-700 text-center text-lg mb-8">
            A hands-on training platform for tech learners in Java Development, Full Stack, Cloud Computing, and more.
          </p>
          
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Why Choose Us?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-4">
                <item.icon className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="bg-gradient-to-r from-yellow-500 to-green-500 rounded-3xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Java Development Journey?</h2>
          <p className="text-lg mb-6">Join our comprehensive Java full-stack training program and build your career in enterprise development</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-yellow-600 font-bold rounded-xl hover:bg-gray-100 transition"
            >
              Enroll Now
            </Link>
            <a
              href="/TrainingPDFS/JAVA_Syllabus.pdf"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-yellow-600 transition flex items-center justify-center gap-2"
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

export default JavaFullStack; 