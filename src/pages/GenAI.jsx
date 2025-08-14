import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { CheckCircle, Download, Users, Award, Clock, BookOpen, Wrench, Target, Building, Star, Database, ChartBar, Brain, Rocket, Zap, Cpu, Eye, Mic, Video } from "lucide-react";

function GenAI() {
  const [selectedDuration, setSelectedDuration] = useState("1-month");

  const durationData = {
    "1-month": {
      title: "1-Month Generative AI Foundation",
      goal: "Learn generative AI fundamentals, LLMs, and build your first AI-powered applications. Ideal for beginners starting their GenAI journey.",
      syllabus: [
        {
          week: "Week 1: Introduction to Generative AI & Foundations",
          topics: [
            "Understanding AI vs. Generative AI",
            "Overview of Large Language Models (LLMs)",
            "Basics of Deep Learning & Neural Networks",
            "Introduction to Transformers & Attention Mechanisms",
            "Tools: Python, TensorFlow, PyTorch"
          ]
        },
        {
          week: "Week 2: Generative Models (Text)",
          topics: [
            "Text generation basics",
            "Prompt engineering for LLMs (ChatGPT, LLaMA, Claude)",
            "Fine-tuning LLMs with custom datasets",
            "Hugging Face Transformers hands-on"
          ]
        },
        {
          week: "Week 3: Generative Models (Images, Audio, Video)",
          topics: [
            "Image generation with Stable Diffusion, DALL·E",
            "Audio synthesis with TTS models",
            "Video generation basics",
            "ControlNet & Image-to-Image generation"
          ]
        },
        {
          week: "Week 4: Deployment & Ethics",
          topics: [
            "Model deployment (Flask/FastAPI + Streamlit)",
            "AI safety, ethics, and bias mitigation",
            "Building AI-powered apps with APIs (OpenAI, Replicate)",
            "Mini Project: AI Chatbot or Image Generator"
          ]
        }
      ],
      outcomes: [
        "Understand generative AI fundamentals and LLMs",
        "Build text, image, and audio generation models",
        "Deploy AI-powered applications",
        "Complete AI chatbot or image generator project"
      ]
    },
    "2-months": {
      title: "2-Month Generative AI Advanced",
      goal: "Master advanced LLM fine-tuning, multimodal AI, and RAG systems. Ideal for intermediate learners building sophisticated AI applications.",
      syllabus: [
        {
          week: "Week 1-4: Full 1-Month Content",
          topics: [
            "Generative AI foundations and LLMs",
            "Text, image, audio, and video generation",
            "Model deployment and ethics",
            "Basic AI applications development"
          ]
        },
        {
          week: "Week 5: Advanced LLM Fine-tuning",
          topics: [
            "LoRA & PEFT for parameter-efficient fine-tuning",
            "Domain-specific model training",
            "Data preparation pipelines"
          ]
        },
        {
          week: "Week 6: Multimodal AI Applications",
          topics: [
            "Combining text, images, and audio inputs",
            "Vision-Language models (BLIP, CLIP)",
            "AI agents & autonomous workflows"
          ]
        },
        {
          week: "Week 7: RAG (Retrieval Augmented Generation)",
          topics: [
            "RAG architecture & implementation",
            "Integrating with vector databases (Pinecone, FAISS)",
            "Custom document Q&A chatbots"
          ]
        },
        {
          week: "Week 8: Final Project Development",
          topics: [
            "Large-scale AI app development",
            "Deploy on cloud (AWS, GCP, Azure)",
            "Project presentation & review"
          ]
        }
      ],
      outcomes: [
        "Master advanced LLM fine-tuning techniques",
        "Build multimodal AI applications",
        "Implement RAG systems with vector databases",
        "Deploy large-scale AI applications on cloud"
      ]
    },
    "3-months": {
      title: "3-Month Generative AI Professional",
      goal: "Master advanced research topics, code generation, and build enterprise-scale AI products. Ideal for job seekers and advanced learners.",
      syllabus: [
        {
          week: "Week 1-8: Full 2-Month Content",
          topics: [
            "Complete 1-Month Foundation Course",
            "Complete 2-Month Advanced Course with RAG & Multimodal AI"
          ]
        },
        {
          week: "Week 9: Advanced Generative AI Research Topics",
          topics: [
            "Diffusion model internals",
            "GAN variations & training strategies",
            "Advanced RAG with multi-query retrieval"
          ]
        },
        {
          week: "Week 10: AI for Code Generation & Automation",
          topics: [
            "Code generation with Codex & Code LLaMA",
            "Building AI-powered developer tools",
            "AI-assisted automation with LangChain agents"
          ]
        },
        {
          week: "Week 11: AI Product Scaling",
          topics: [
            "Model optimization & quantization",
            "API rate-limiting & scaling techniques",
            "Handling millions of requests"
          ]
        },
        {
          week: "Week 12: Capstone Project",
          topics: [
            "End-to-end Generative AI product",
            "Real-world use case implementation",
            "Final evaluation & certification"
          ]
        }
      ],
      outcomes: [
        "Master advanced generative AI research topics",
        "Build AI-powered code generation tools",
        "Scale AI products for enterprise use",
        "Deploy end-to-end generative AI solutions"
      ]
    }
  };

  const toolsCovered = [
    { category: "AI Frameworks", tools: ["TensorFlow", "PyTorch", "Hugging Face", "Transformers", "LangChain"] },
    { category: "LLM Platforms", tools: ["OpenAI API", "Anthropic Claude", "LLaMA", "GPT Models", "Codex"] },
    { category: "Image Generation", tools: ["Stable Diffusion", "DALL·E", "Midjourney", "ControlNet", "CLIP"] },
    { category: "Audio & Video", tools: ["TTS Models", "Audio Synthesis", "Video Generation", "Speech Recognition"] },
    { category: "Deployment", tools: ["Flask", "FastAPI", "Streamlit", "AWS", "GCP", "Azure"] }
  ];

  const whyChooseUs = [
    { icon: Brain, title: "Cutting-Edge AI", desc: "Learn the latest generative AI techniques and models" },
    { icon: Zap, title: "Hands-on Projects", desc: "Build real AI applications with text, image, and audio generation" },
    { icon: Users, title: "Expert Mentorship", desc: "Get guidance from experienced AI researchers and developers" },
    { icon: Cpu, title: "Industry Tools", desc: "Use tools and frameworks used in professional AI development" },
    { icon: Star, title: "Career Support", desc: "Portfolio building and job placement in AI industry" }
  ];

  const pricing = [
    { 
      duration: "1 Month", 
      originalPrice: "₹10,400", 
      discountedPrice: "₹8,000", 
      savings: "₹2,400",
      features: ["Foundation Course", "4 Mini Projects", "AI Applications", "Certificate"] 
    },
    { 
      duration: "2 Months", 
      originalPrice: "₹19,500", 
      discountedPrice: "₹15,000", 
      savings: "₹4,500",
      features: ["Advanced Course", "6 Projects", "RAG Systems", "Career Guidance"] 
    },
    { 
      duration: "3 Months", 
      originalPrice: "₹28,600", 
      discountedPrice: "₹22,000", 
      savings: "₹6,600",
      features: ["Professional Course", "8+ Projects", "Enterprise Deployment", "Job Placement Support"] 
    }
  ];

  const projects = [
    { month: "Month 1", title: "AI Chatbot", type: "Text Generation", description: "Build an intelligent chatbot with custom knowledge base" },
    { month: "Month 2", title: "RAG System", type: "Advanced AI", description: "Create a document Q&A system with vector databases" },
    { month: "Month 3", title: "Multimodal AI App", type: "Enterprise", description: "End-to-end AI application with text, image, and audio" },
    { month: "Capstone", title: "AI Product", type: "Production", description: "Complete generative AI product for real-world use" }
  ];

  const courseOutcomes = [
    "Understand & implement cutting-edge Generative AI techniques",
    "Build text, image, audio, and video generation models",
    "Fine-tune LLMs for domain-specific needs",
    "Deploy AI-powered applications on the cloud",
    "Gain hands-on experience with Hugging Face, OpenAI API, and Stable Diffusion",
    "Master RAG systems and multimodal AI applications",
    "Scale AI products for enterprise use cases",
    "Build AI-powered developer tools and automation"
  ];

  const projectOutcomes = [
    "Create AI chatbots with custom knowledge bases",
    "Build image generation and editing web applications",
    "Develop AI-generated content creation tools",
    "Deploy end-to-end multimodal AI applications"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-20 pb-12">
        <div className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}}>
          <Brain className="w-full h-full text-purple-600" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 drop-shadow mb-4 text-center">Generative AI Training Program</h1>
          <span className="inline-block bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">Comprehensive GenAI Training</span>
          <p className="max-w-3xl text-lg text-gray-700 mb-6 text-center font-medium">
            Master generative AI with hands-on projects, LLMs, and expert guidance. 
            Choose your training duration and embark on a journey to become a professional AI developer.
          </p>
        </div>
        <div className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mt-4 mb-2 z-20">
          <Brain className="w-16 h-16 text-white" />
        </div>
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
            <p className="text-gray-600 text-sm">Industry-standard AI tools including Hugging Face, OpenAI API, and Stable Diffusion</p>
          </div>

          {/* Ideal For */}
          <div className="bg-white/80 backdrop-blur-lg border border-pink-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-pink-600" />
              <h3 className="text-lg font-bold text-pink-800">Ideal For</h3>
            </div>
            <p className="text-gray-600 text-sm">Beginners to intermediate learners, developers, and professionals looking for AI careers</p>
          </div>

          {/* About TechProjectsHub */}
          <div className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">About TechProjectsHub</h3>
            </div>
            <p className="text-gray-600 text-sm">A hands-on training platform for tech learners in AI, machine learning, and generative AI</p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/80 backdrop-blur-lg border border-orange-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-bold text-orange-800">Why Choose Us</h3>
            </div>
            <p className="text-gray-600 text-sm">Cutting-edge AI training with hands-on projects and expert mentorship</p>
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
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
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
      </div>

      {/* Pricing Section */}
      <div className="max-w-6xl mx-auto w-full px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Special Limited-Time Offer</h2>
          <p className="text-xl text-gray-600 mb-2">30% Discount on Industry-Ready Generative AI Training</p>
          <p className="text-lg text-gray-500">No hidden charges, just real value crafted for future AI developers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 1-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              30% OFF
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">1-Month Foundation</h3>
              <p className="text-gray-600 mb-4">Perfect for beginners</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-purple-600">{pricing[0].discountedPrice}</span>
                <span className="text-lg text-gray-400 line-through ml-2">{pricing[0].originalPrice}</span>
              </div>
              <p className="text-sm text-gray-500">You save {pricing[0].savings}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {pricing[0].features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
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

          {/* 2-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-pink-200 p-8 relative overflow-hidden transform scale-105">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              30% OFF
            </div>
            <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 text-xs font-bold rounded-full">
              POPULAR
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2-Month Advanced</h3>
              <p className="text-gray-600 mb-4">Most popular choice</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-pink-600">{pricing[1].discountedPrice}</span>
                <span className="text-lg text-gray-400 line-through ml-2">{pricing[1].originalPrice}</span>
              </div>
              <p className="text-sm text-gray-500">You save {pricing[1].savings}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {pricing[1].features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-3 px-6 rounded-xl hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </button>
          </div>

          {/* 3-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              30% OFF
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">3-Month Professional</h3>
              <p className="text-gray-600 mb-4">Complete career preparation</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">{pricing[2].discountedPrice}</span>
                <span className="text-lg text-gray-400 line-through ml-2">{pricing[2].originalPrice}</span>
              </div>
              <p className="text-sm text-gray-500">You save {pricing[2].savings}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {pricing[2].features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
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
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects You'll Build</h2>
          <p className="text-gray-600">Hands-on projects to showcase your generative AI skills</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{project.month}</h3>
                <span className="text-sm text-purple-600 font-semibold">{project.type}</span>
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
          <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-600" />
              Course Outcomes
            </h3>
            <div className="space-y-3">
              {courseOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Outcomes */}
          <div className="bg-white/80 backdrop-blur-lg border border-pink-200 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-pink-600" />
              Project Outcomes
            </h3>
            <div className="space-y-3">
              {projectOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
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
          <p className="text-gray-600">Master the tools used in professional generative AI development</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {toolsCovered.map((category, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-purple-700 mb-4 text-center">{category.category}</h3>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Generative AI Training</h2>
          <p className="text-gray-600">Discover what makes our program unique</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-8 h-8 text-purple-600" />
                <h3 className="font-bold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
          <p className="text-lg mb-6 opacity-90">Join our comprehensive Generative AI training program and become a professional AI developer</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Enroll Now
            </button>
            <button
              onClick={() => window.open('/TrainingPDFS/GenAI_Syllabus.pdf', '_blank')}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
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

export default GenAI;
