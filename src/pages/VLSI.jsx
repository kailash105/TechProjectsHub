import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import vlsiImg from "../assets/ImagesforTraining/VLSI.png";
import { CheckCircle, Download, Users, Award, Clock, BookOpen, Wrench, Target, Building, Star } from "lucide-react";

function VLSI() {
  const [selectedDuration, setSelectedDuration] = useState("1-month");

  const durationData = {
    "1-month": {
      title: "1-Month VLSI Foundation Course",
      goal: "Learn VLSI fundamentals, RTL design using Verilog, FPGA prototyping, and complete a mini-project.",
      syllabus: [
        {
          week: "Week 1: VLSI Basics + HDL Programming",
          topics: [
            "Introduction to VLSI Design & CMOS Technology",
            "pMOS, nMOS, CMOS Logic Families", 
            "Digital Logic Design Basics (Gates, FFs, FSM)",
            "Verilog HDL Programming (Combinational + Sequential Logic)",
            "Simulation with ModelSim"
          ]
        },
        {
          week: "Week 2: RTL Design + Simulation",
          topics: [
            "Writing and Testing Testbenches",
            "RTL Design Flow",
            "FSM Design in Verilog", 
            "Synthesis Concepts",
            "Mini Project: ALU / Counter / Traffic Light Controller"
          ]
        },
        {
          week: "Week 3: FPGA Design & Vivado Tools",
          topics: [
            "Introduction to FPGA Architecture",
            "Xilinx Vivado Toolchain: Synthesis → Implementation",
            "Timing Constraints, I/O Planning",
            "Programming FPGA Boards (e.g., Basys 3)",
            "Hands-on Project Deployment"
          ]
        },
        {
          week: "Week 4: Mini Project Completion",
          topics: [
            "Design + Simulate + FPGA Implement",
            "Documentation and Report Writing",
            "Viva + Presentation Preparation"
          ]
        }
      ],
      outcomes: [
        "Understand RTL design using Verilog",
        "Simulate & debug circuits",
        "Implement FPGA-based mini project",
        "Gain exposure to industry tools (Vivado, ModelSim)"
      ]
    },
    "2-months": {
      title: "2-Month VLSI Core Course",
      goal: "Extend 1-Month with Back-End (Layout), Analog, and Mixed-Signal concepts + more tools.",
      syllabus: [
        {
          week: "Month 1: Same as 1-Month Course",
          topics: [
            "VLSI Basics + HDL Programming",
            "RTL Design + Simulation", 
            "FPGA Design & Vivado Tools",
            "Mini Project Completion"
          ]
        },
        {
          week: "Week 5: Introduction to Back-End (Layout) Design",
          topics: [
            "VLSI Design Flow: RTL to GDSII",
            "DSCH & Microwind Basics",
            "CMOS Inverter Layout",
            "Standard Cell Design & Stick Diagrams"
          ]
        },
        {
          week: "Week 6: Physical Design + Verification",
          topics: [
            "Floorplanning, Placement & Routing",
            "Design Rule Check (DRC), LVS Basics",
            "Tools: Cadence Virtuoso / Tanner EDA",
            "Hands-on: NAND/NOR Layout, DRC Clean Design"
          ]
        },
        {
          week: "Week 7: Analog & Mixed-Signal Design",
          topics: [
            "OpAmp Design Principles",
            "ADC/DAC Architectures",
            "PLL (Phase-Locked Loop) Introduction",
            "Schematic Capture & Simulation in Cadence"
          ]
        },
        {
          week: "Week 8: Domain-Based Project",
          topics: [
            "Choose: Analog, Back-End, or Mixed-Signal Project",
            "Simulation + Layout + Optimization",
            "Final Project Review + Report + Certificate"
          ]
        }
      ],
      outcomes: [
        "Hands-on layout design & LVS checking",
        "Analog block design & simulation",
        "Intermediate-level projects for academic submission"
      ]
    },
    "3-months": {
      title: "3-Month VLSI Pro Course", 
      goal: "Full-stack chip design from RTL to Layout + STA, DFT, IEEE Paper-Ready Project.",
      syllabus: [
        {
          week: "Month 1 & 2: Same as Above",
          topics: [
            "Complete 1-Month Foundation Course",
            "Complete 2-Month Core Course with Layout & Analog"
          ]
        },
        {
          week: "Week 9: SoC Design Concepts",
          topics: [
            "Introduction to System-on-Chip Architecture",
            "Hierarchical Floorplanning",
            "Power Planning and Clock Tree Design",
            "Functional Verification Basics"
          ]
        },
        {
          week: "Week 10: Design Optimization",
          topics: [
            "Static Timing Analysis (STA)",
            "Setup and Hold Violation Fixes",
            "Low-Power Design Techniques",
            "Timing Closure Challenges"
          ]
        },
        {
          week: "Week 11: Advanced Project Design",
          topics: [
            "Choose: SoC Block / Analog Subsystem / Custom Layout",
            "Start IEEE Paper-based Project",
            "RTL + Layout + Simulation + Report Drafting"
          ]
        },
        {
          week: "Week 12: Final Wrap-Up",
          topics: [
            "IEEE Paper Guidance (Format + Submission Help)",
            "Resume Building + Career Guidance for VLSI Jobs",
            "Viva + Final Presentation"
          ]
        }
      ],
      outcomes: [
        "Full-stack chip design skills",
        "Prepare for VLSI core jobs", 
        "Complete IEEE-level academic project with full report",
        "Build VLSI resume & career guidance"
      ]
    }
  };

  const toolsCovered = [
    { category: "Front-End", tools: ["Verilog", "ModelSim", "Vivado"] },
    { category: "Back-End", tools: ["DSCH", "Microwind", "Cadence Virtuoso", "Tanner EDA"] },
    { category: "Analog", tools: ["Cadence Spectre", "Tanner T-Spice"] },
    { category: "Verification", tools: ["Vivado Simulator", "Manual Testbenches"] },
    { category: "Project Support", tools: ["Documentation", "Viva", "IEEE Paper Format"] }
  ];

  const whyChooseUs = [
    { icon: Target, title: "Project-Driven Learning", desc: "Learn by doing real VLSI projects" },
    { icon: Wrench, title: "Tool-Based Live Demos", desc: "Hands-on experience with industry tools" },
    { icon: Users, title: "Real-Time Expert Mentorship", desc: "Get guidance from VLSI professionals" },
    { icon: BookOpen, title: "Resume + IEEE Paper Support", desc: "Complete documentation and paper writing" },
    { icon: Star, title: "Career & Interview Guidance", desc: "Prepare for VLSI job interviews" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-blue-50 to-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-20 pb-12">
        <img src={vlsiImg} alt="VLSI" className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 drop-shadow mb-4 text-center">VLSI Training Program</h1>
          <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">Comprehensive VLSI Design Training</span>
          <p className="max-w-3xl text-lg text-gray-700 mb-6 text-center font-medium">
            Master Very Large Scale Integration with hands-on projects, industry tools, and expert guidance. 
            Choose your training duration and embark on a journey to become a VLSI design professional.
          </p>
        </div>
        <img src={vlsiImg} alt="VLSI" className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-white object-contain mt-4 mb-2 z-20" />
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
            <p className="text-gray-600 text-sm">Industry-standard EDA tools including Cadence, Vivado, ModelSim, and more</p>
          </div>

          {/* Ideal For */}
          <div className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Ideal For</h3>
            </div>
            <p className="text-gray-600 text-sm">B.Tech/M.Tech students, VLSI career aspirants, and IEEE paper writers</p>
          </div>

          {/* About TechProjectsHub */}
          <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">About TechProjectsHub</h3>
            </div>
            <p className="text-gray-600 text-sm">A hands-on training platform for tech learners in VLSI, Cloud, AI/ML, and more</p>
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
            <p className="text-xl text-gray-600 mb-2">40% Discount on Industry-Ready VLSI Training</p>
            <p className="text-lg text-gray-500">No hidden charges, just real value crafted for future VLSI professionals</p>
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
                  <span className="text-3xl font-bold text-green-600">₹6,499</span>
                  <span className="text-lg text-gray-400 line-through ml-2">₹10,832</span>
                </div>
                <p className="text-sm text-gray-500">You save ₹4,333</p>
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
                <h3 className="text-2xl font-bold text-gray-800 mb-2">2-Month Core</h3>
                <p className="text-gray-600 mb-4">Most popular choice</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blue-600">₹12,998</span>
                  <span className="text-lg text-gray-400 line-through ml-2">₹21,664</span>
                </div>
                <p className="text-sm text-gray-500">You save ₹8,666</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Everything in 1-Month +</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Back-end layout design</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Analog & mixed-signal</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Domain-based project</span>
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
                <h3 className="text-2xl font-bold text-gray-800 mb-2">3-Month Pro</h3>
                <p className="text-gray-600 mb-4">Complete career preparation</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-purple-600">₹19,497</span>
                  <span className="text-lg text-gray-400 line-through ml-2">₹32,496</span>
                </div>
                <p className="text-sm text-gray-500">You save ₹12,999</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">Everything in 2-Month +</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">SoC design concepts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700">IEEE paper guidance</span>
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
              <strong>Limited Time Offer!</strong> Don't miss this opportunity to kickstart your VLSI career.
            </p>
          </div>
        </div>

      {/* Tools Covered Section */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Tools Covered</h2>
          <p className="text-gray-600">Master industry-standard EDA tools used in professional VLSI design</p>
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
              <h3 className="font-bold text-gray-800 mb-2">B.Tech / M.Tech Students</h3>
              <p className="text-gray-600 text-sm">Perfect for academic projects and thesis work</p>
            </div>
            <div className="p-4">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">VLSI Career Aspirants</h3>
              <p className="text-gray-600 text-sm">Build skills for VLSI design job opportunities</p>
            </div>
            <div className="p-4">
              <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Thesis / IEEE Paper Writers</h3>
              <p className="text-gray-600 text-sm">Complete research projects with proper documentation</p>
            </div>
          </div>
        </div>
      </div>

      {/* About TechProjectsHub Section */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-3xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">About TechProjectsHub</h2>
          <p className="text-gray-700 text-center text-lg mb-8">
            A hands-on training platform for tech learners in VLSI, Cloud, AI/ML, Full Stack, Embedded, and more.
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
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your VLSI Journey?</h2>
          <p className="text-lg mb-6">Join our comprehensive VLSI training program and build your career in chip design</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-100 transition"
            >
              Enroll Now
            </Link>
            <a
              href="/TrainingPDFS/VLSITraining.pdf"
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

export default VLSI; 