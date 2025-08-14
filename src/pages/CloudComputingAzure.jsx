import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import azureImg from "../assets/ImagesforTraining/Azure.png";
import { CheckCircle, Download, Users, Award, Clock, BookOpen, Wrench, Target, Building, Star } from "lucide-react";

function CloudComputingAzure() {
  const [selectedDuration, setSelectedDuration] = useState("1-month");

  const durationData = {
    "1-month": {
      title: "1-Month Azure Cloud Foundation",
      goal: "Learn Azure fundamentals, virtual machines, storage, networking, and deploy your first cloud application.",
      syllabus: [
        {
          week: "Week 1: Azure Fundamentals & Core Services",
          topics: [
            "Introduction to Cloud Computing & Azure",
            "Azure Portal & Resource Management",
            "Virtual Machines (Windows & Linux)",
            "Azure Storage (Blob, File, Queue)",
            "Azure Networking Basics"
          ]
        },
        {
          week: "Week 2: Azure Compute & Storage",
          topics: [
            "Azure App Service & Web Apps",
            "Azure Functions & Serverless Computing",
            "Azure SQL Database & Cosmos DB",
            "Storage Account Configuration",
            "Backup & Disaster Recovery"
          ]
        },
        {
          week: "Week 3: Azure Security & Identity",
          topics: [
            "Azure Active Directory (AAD)",
            "Role-Based Access Control (RBAC)",
            "Azure Key Vault & Secrets Management",
            "Network Security Groups (NSG)",
            "Azure Security Center"
          ]
        },
        {
          week: "Week 4: Deployment & Monitoring",
          topics: [
            "Azure DevOps & CI/CD Pipelines",
            "Azure Monitor & Application Insights",
            "Log Analytics & Kusto Queries",
            "Cost Management & Optimization",
            "Mini Project Deployment"
          ]
        }
      ],
      outcomes: [
        "Deploy and manage Azure resources",
        "Understand cloud security best practices",
        "Implement basic monitoring and logging",
        "Complete hands-on Azure projects"
      ]
    },
    "2-months": {
      title: "2-Month Azure Cloud Advanced",
      goal: "Master advanced Azure services, containers, Kubernetes, and build scalable cloud solutions.",
      syllabus: [
        {
          week: "Month 1: Foundation Course Content",
          topics: [
            "Complete Azure Fundamentals",
            "Core Services & Security",
            "Basic Deployment & Monitoring"
          ]
        },
        {
          week: "Week 5: Containers & Kubernetes",
          topics: [
            "Docker Container Basics",
            "Azure Container Instances (ACI)",
            "Azure Kubernetes Service (AKS)",
            "Container Registry & Image Management",
            "Kubernetes Deployment & Scaling"
          ]
        },
        {
          week: "Week 6: Advanced Azure Services",
          topics: [
            "Azure Service Bus & Event Hubs",
            "Azure Logic Apps & Power Automate",
            "Azure API Management",
            "Azure CDN & Content Delivery",
            "Azure Traffic Manager"
          ]
        },
        {
          week: "Week 7: DevOps & Automation",
          topics: [
            "Azure DevOps Pipelines",
            "Infrastructure as Code (ARM Templates)",
            "Azure CLI & PowerShell Automation",
            "GitHub Actions Integration",
            "Multi-Environment Deployment"
          ]
        },
        {
          week: "Week 8: Advanced Project",
          topics: [
            "Microservices Architecture on Azure",
            "Multi-tier Application Deployment",
            "Advanced Monitoring & Alerting",
            "Performance Optimization",
            "Final Project Presentation"
          ]
        }
      ],
      outcomes: [
        "Build containerized applications on Azure",
        "Implement CI/CD pipelines with Azure DevOps",
        "Design scalable cloud architectures",
        "Deploy complex multi-tier applications"
      ]
    },
    "3-months": {
      title: "3-Month Azure Cloud Professional",
      goal: "Become an Azure cloud expert with advanced solutions, enterprise architecture, and certification preparation.",
      syllabus: [
        {
          week: "Month 1 & 2: Complete Foundation & Advanced",
          topics: [
            "Complete 1-Month Foundation Course",
            "Complete 2-Month Advanced Course with Containers & DevOps"
          ]
        },
        {
          week: "Week 9: Enterprise Architecture",
          topics: [
            "Azure Landing Zone Design",
            "Hub-Spoke Network Architecture",
            "Azure Policy & Governance",
            "Enterprise Security Patterns",
            "Cost Optimization Strategies"
          ]
        },
        {
          week: "Week 10: Advanced Solutions",
          topics: [
            "Azure Machine Learning Services",
            "Azure Cognitive Services & AI",
            "IoT Hub & Edge Computing",
            "Azure Synapse Analytics",
            "Advanced Data Solutions"
          ]
        },
        {
          week: "Week 11: Certification Preparation",
          topics: [
            "AZ-900: Azure Fundamentals",
            "AZ-104: Azure Administrator",
            "Practice Tests & Mock Exams",
            "Real-world Scenario Practice",
            "Interview Preparation"
          ]
        },
        {
          week: "Week 12: Capstone Project",
          topics: [
            "Enterprise-level Project Design",
            "Multi-cloud Integration",
            "Advanced Security Implementation",
            "Performance Testing & Optimization",
            "Career Guidance & Resume Building"
          ]
        }
      ],
      outcomes: [
        "Prepare for Azure certifications",
        "Design enterprise cloud solutions",
        "Implement advanced Azure services",
        "Build professional cloud portfolio"
      ]
    }
  };

  const toolsCovered = [
    { category: "Compute", tools: ["Azure VMs", "App Service", "Azure Functions", "AKS"] },
    { category: "Storage", tools: ["Blob Storage", "File Storage", "SQL Database", "Cosmos DB"] },
    { category: "Networking", tools: ["Virtual Network", "Load Balancer", "Application Gateway", "CDN"] },
    { category: "Security", tools: ["Azure AD", "Key Vault", "Security Center", "RBAC"] },
    { category: "DevOps", tools: ["Azure DevOps", "ARM Templates", "Azure CLI", "PowerShell"] }
  ];

  const whyChooseUs = [
    { icon: Target, title: "Hands-on Azure Experience", desc: "Learn by working with real Azure services" },
    { icon: Wrench, title: "Industry-Standard Tools", desc: "Use tools used in enterprise cloud environments" },
    { icon: Users, title: "Expert Cloud Mentorship", desc: "Get guidance from certified Azure professionals" },
    { icon: BookOpen, title: "Certification Preparation", desc: "Prepare for Microsoft Azure certifications" },
    { icon: Star, title: "Career Support", desc: "Resume building and cloud job preparation" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-cyan-50 to-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-20 pb-12">
        <img src={azureImg} alt="Azure Cloud Computing" className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 drop-shadow mb-4 text-center">Azure Cloud Computing Training Program</h1>
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">Comprehensive Cloud Computing Training</span>
          <p className="max-w-3xl text-lg text-gray-700 mb-6 text-center font-medium">
            Master Microsoft Azure cloud computing with hands-on projects, enterprise solutions, and expert guidance. 
            Choose your training duration and embark on a journey to become a cloud computing professional.
          </p>
        </div>
        <img src={azureImg} alt="Azure Cloud Computing" className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-white object-contain mt-4 mb-2 z-20" />
      </div>

      {/* Course Overview Sections */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tools Covered */}
          <div className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Tools Covered</h3>
            </div>
            <p className="text-gray-600 text-sm">Industry-standard Azure services and cloud management tools</p>
          </div>

          {/* Ideal For */}
          <div className="bg-white/80 backdrop-blur-lg border border-cyan-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-cyan-600" />
              <h3 className="text-lg font-bold text-cyan-800">Ideal For</h3>
            </div>
            <p className="text-gray-600 text-sm">IT professionals, developers, and cloud career aspirants</p>
          </div>

          {/* About TechProjectsHub */}
          <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">About TechProjectsHub</h3>
            </div>
            <p className="text-gray-600 text-sm">A hands-on training platform for tech learners in Cloud, AI/ML, Full Stack, and more</p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/80 backdrop-blur-lg border border-orange-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-bold text-orange-800">Why Choose Us</h3>
            </div>
            <p className="text-gray-600 text-sm">Project-driven learning with expert mentorship and certification guidance</p>
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
          <div className="inline-flex rounded-2xl bg-white/80 shadow border border-blue-200 overflow-hidden">
            {["1-month", "2-months", "3-months"].map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={`px-8 py-4 font-semibold text-lg transition-all ${
                  selectedDuration === duration 
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white" 
                    : "text-blue-700 hover:bg-blue-100"
                }`}
              >
                {duration === "1-month" ? "1 Month" : duration === "2-months" ? "2 Months" : "3 Months"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Content Based on Selection */}
      <div className="backdrop-blur-lg bg-white/70 border border-blue-200 rounded-3xl shadow-2xl p-8">
        <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">{durationData[selectedDuration].title}</h3>
        <p className="text-gray-600 text-center mb-6 italic">{durationData[selectedDuration].goal}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Syllabus */}
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Syllabus
            </h4>
            <div className="space-y-4">
              {durationData[selectedDuration].syllabus.map((week, index) => (
                <div key={index} className="border-l-4 border-blue-300 pl-4">
                  <h5 className="font-semibold text-blue-800 mb-2">{week.week}</h5>
                  <ul className="space-y-1">
                    {week.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
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
              <Award className="w-5 h-5 text-cyan-600" />
              Outcomes
            </h4>
            <ul className="space-y-3">
              {durationData[selectedDuration].outcomes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
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
          <p className="text-xl text-gray-600 mb-2">40% Discount on Industry-Ready Azure Cloud Training</p>
          <p className="text-lg text-gray-500">No hidden charges, just real value crafted for future cloud professionals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 1-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              40% OFF
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">1-Month Foundation</h3>
              <p className="text-gray-600 mb-4">Perfect for beginners</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">₹7,000</span>
                <span className="text-lg text-gray-400 line-through ml-2">₹9,000</span>
              </div>
              <p className="text-sm text-gray-500">You save ₹2,000</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Hands-on Azure projects</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Azure portal access</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Cloud mentor support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700">Completion certificate</span>
              </li>
            </ul>
            <button 
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>

          {/* 2-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-cyan-200 p-8 relative overflow-hidden transform scale-105">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              40% OFF
            </div>
            <div className="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 text-xs font-bold rounded-full">
              POPULAR
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2-Month Advanced</h3>
              <p className="text-gray-600 mb-4">Most popular choice</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-cyan-600">₹14,000</span>
                <span className="text-lg text-gray-400 line-through ml-2">₹18,000</span>
              </div>
              <p className="text-sm text-gray-500">You save ₹4,000</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-500" />
                <span className="text-gray-700">Everything in 1-Month +</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-500" />
                <span className="text-gray-700">Containers & Kubernetes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-500" />
                <span className="text-gray-700">DevOps & Automation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-500" />
                <span className="text-gray-700">Advanced project</span>
              </li>
            </ul>
            <button 
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-3 px-6 rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
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
                <span className="text-3xl font-bold text-purple-600">₹21,000</span>
                <span className="text-lg text-gray-400 line-through ml-2">₹27,000</span>
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
                <span className="text-gray-700">Enterprise architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Certification prep</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">Career guidance</span>
              </li>
            </ul>
            <button 
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            <strong>Limited Time Offer!</strong> Don't miss this opportunity to kickstart your cloud computing career.
          </p>
        </div>
      </div>

      {/* Tools Covered Section */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Azure Services Covered</h2>
          <p className="text-gray-600">Master industry-standard Azure services used in enterprise cloud environments</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsCovered.map((category, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-blue-800 mb-3">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, toolIndex) => (
                  <span key={toolIndex} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
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
        <div className="bg-white/80 backdrop-blur-lg border border-cyan-200 rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-cyan-800 mb-6 text-center">Ideal For</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <Users className="w-12 h-12 text-cyan-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">IT Professionals</h3>
              <p className="text-gray-600 text-sm">Transition to cloud computing from traditional IT</p>
            </div>
            <div className="p-4">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Developers</h3>
              <p className="text-gray-600 text-sm">Build and deploy applications on Azure cloud</p>
            </div>
            <div className="p-4">
              <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Cloud Aspirants</h3>
              <p className="text-gray-600 text-sm">Start a career in cloud computing and DevOps</p>
            </div>
          </div>
        </div>
      </div>

      {/* About TechProjectsHub Section */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">About TechProjectsHub</h2>
          <p className="text-gray-700 text-center text-lg mb-8">
            A hands-on training platform for tech learners in Cloud Computing, AI/ML, Full Stack, VLSI, and more.
          </p>
          
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Why Choose Us?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-4">
                <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Cloud Computing Journey?</h2>
          <p className="text-lg mb-6">Join our comprehensive Azure training program and build your career in cloud computing</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition"
            >
              Enroll Now
            </button>
            <a
              href="/TrainingPDFS/CC_Azure.pdf"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition flex items-center justify-center gap-2"
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

export default CloudComputingAzure; 