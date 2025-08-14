import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import blockchainImg from "../assets/ImagesforTraining/Blockchain.png";
import { CheckCircle, Download, Users, Award, Clock, BookOpen, Wrench, Target, Building, Star, Database, ChartBar, Brain, Rocket, Shield, Zap, Globe } from "lucide-react";

function BlockChain() {
  const [selectedDuration, setSelectedDuration] = useState("1-month");

  const durationData = {
    "1-month": {
      title: "1-Month Blockchain Foundations",
      goal: "Learn blockchain fundamentals, cryptography, and build your first smart contract. Ideal for beginners starting their blockchain journey.",
      syllabus: [
        {
          week: "Week 1: Introduction to Blockchain & Cryptography",
          topics: [
            "Understanding Blockchain technology",
            "History & evolution of Blockchain",
            "Public vs Private Blockchain",
            "Basics of Cryptography (hash functions, digital signatures)",
            "Understanding consensus mechanisms (PoW, PoS, PoA)",
            "Bitcoin and Ethereum overview"
          ]
        },
        {
          week: "Week 2: Ethereum & Smart Contracts Basics",
          topics: [
            "Ethereum architecture and ecosystem",
            "Understanding Smart Contracts",
            "Solidity programming basics",
            "Setting up development environment (Remix IDE, MetaMask)",
            "Writing and deploying your first smart contract"
          ]
        },
        {
          week: "Week 3: Blockchain Development Tools",
          topics: [
            "Truffle & Hardhat frameworks",
            "Local Blockchain setup with Ganache",
            "Testing smart contracts",
            "Introduction to Web3.js / Ethers.js",
            "Connecting smart contracts with frontend"
          ]
        },
        {
          week: "Week 4: Project & Deployment",
          topics: [
            "Creating a simple DApp (e.g., Token or Voting system)",
            "Deploying contracts on testnet",
            "Understanding gas fees & transactions",
            "Final project presentation"
          ]
        }
      ],
      outcomes: [
        "Understand blockchain fundamentals and cryptography",
        "Write and deploy smart contracts on Ethereum",
        "Use blockchain development tools and frameworks",
        "Complete a basic DApp project"
      ]
    },
    "2-months": {
      title: "2-Month Blockchain Development",
      goal: "Master advanced Solidity, DApps development, and DeFi basics. Ideal for intermediate learners building blockchain applications.",
      syllabus: [
        {
          week: "Week 1-4: Full 1-Month Content",
          topics: [
            "Blockchain fundamentals and cryptography",
            "Ethereum and smart contracts basics",
            "Blockchain development tools",
            "Basic DApp development and deployment"
          ]
        },
        {
          week: "Week 5: Advanced Solidity",
          topics: [
            "Inheritance & modifiers in Solidity",
            "Error handling and events",
            "ERC-20 and ERC-721 token standards",
            "Creating custom tokens"
          ]
        },
        {
          week: "Week 6: Decentralized Applications (DApps)",
          topics: [
            "DApp architecture",
            "Interacting with smart contracts via Web3.js / Ethers.js",
            "IPFS for decentralized storage",
            "User authentication with MetaMask"
          ]
        },
        {
          week: "Week 7: Introduction to DeFi",
          topics: [
            "Understanding Decentralized Finance",
            "Building a basic DeFi application",
            "Lending, borrowing, and staking concepts",
            "Stablecoins and their role"
          ]
        },
        {
          week: "Week 8: Final Project",
          topics: [
            "Full DApp development (e.g., NFT Marketplace or DeFi app)",
            "Deployment on Ethereum testnet/mainnet",
            "Presentation & feedback"
          ]
        }
      ],
      outcomes: [
        "Master advanced Solidity programming",
        "Build complete DApps with frontend integration",
        "Understand DeFi concepts and applications",
        "Deploy projects on testnets and mainnets"
      ]
    },
    "3-months": {
      title: "3-Month Blockchain Professional",
      goal: "Master NFTs, advanced DeFi, Layer 2 solutions, and build enterprise blockchain applications. Ideal for job seekers and advanced learners.",
      syllabus: [
        {
          week: "Week 1-8: Full 2-Month Content",
          topics: [
            "Complete 1-Month Foundation Course",
            "Complete 2-Month Advanced Course with DApps & DeFi"
          ]
        },
        {
          week: "Week 9: NFTs & Gaming on Blockchain",
          topics: [
            "ERC-721 & ERC-1155",
            "Minting NFTs",
            "Building NFT marketplaces",
            "Play-to-earn (P2E) gaming concepts"
          ]
        },
        {
          week: "Week 10: Advanced DeFi Development",
          topics: [
            "Liquidity pools & AMMs",
            "Yield farming",
            "Cross-chain bridges",
            "Security best practices in DeFi"
          ]
        },
        {
          week: "Week 11: Layer 2 Solutions & Scalability",
          topics: [
            "Polygon, Arbitrum, Optimism",
            "Sidechains & rollups",
            "Gas optimization techniques"
          ]
        },
        {
          week: "Week 12: Capstone Project",
          topics: [
            "Full-fledged blockchain project (student choice)",
            "Smart contract audits & bug fixing",
            "Mainnet deployment",
            "Portfolio building & career guidance"
          ]
        }
      ],
      outcomes: [
        "Build NFT marketplaces and gaming applications",
        "Develop advanced DeFi protocols",
        "Work with Layer 2 solutions and scaling",
        "Deploy enterprise blockchain applications"
      ]
    }
  };

  const toolsCovered = [
    { category: "Blockchain Platforms", tools: ["Ethereum", "Polygon", "Hyperledger", "Bitcoin", "Testnets"] },
    { category: "Development Tools", tools: ["Solidity", "Truffle", "Hardhat", "Ganache", "Remix IDE"] },
    { category: "Web3 Libraries", tools: ["Web3.js", "Ethers.js", "MetaMask", "IPFS", "OpenZeppelin"] },
    { category: "DeFi & NFTs", tools: ["ERC-20", "ERC-721", "ERC-1155", "Uniswap", "OpenSea"] },
    { category: "Security & Testing", tools: ["Smart Contract Audits", "Mythril", "Slither", "Gas Optimization", "Security Best Practices"] }
  ];

  const whyChooseUs = [
    { icon: Shield, title: "Security-First Approach", desc: "Learn blockchain security best practices and smart contract auditing" },
    { icon: Zap, title: "Hands-on Development", desc: "Build real DApps, smart contracts, and DeFi applications" },
    { icon: Users, title: "Expert Mentorship", desc: "Get guidance from experienced blockchain developers" },
    { icon: Globe, title: "Multi-Chain Experience", desc: "Work with Ethereum, Polygon, and other blockchain platforms" },
    { icon: Star, title: "Career Support", desc: "Portfolio building and job placement assistance" }
  ];

  const pricing = [
    { 
      duration: "1 Month", 
      originalPrice: "₹9,100", 
      discountedPrice: "₹7,000", 
      savings: "₹2,100",
      features: ["Foundation Course", "4 Mini Projects", "Smart Contracts", "Certificate"] 
    },
    { 
      duration: "2 Months", 
      originalPrice: "₹15,600", 
      discountedPrice: "₹12,000", 
      savings: "₹3,600",
      features: ["Advanced Course", "6 Projects", "DApps Development", "Career Guidance"] 
    },
    { 
      duration: "3 Months", 
      originalPrice: "₹22,100", 
      discountedPrice: "₹17,000", 
      savings: "₹5,100",
      features: ["Professional Course", "8+ Projects", "Enterprise Deployment", "Job Placement Support"] 
    }
  ];

  const projects = [
    { month: "Month 1", title: "Crypto Wallet Simulator", type: "Blockchain Basics", description: "Build a basic cryptocurrency wallet with transaction capabilities" },
    { month: "Month 2", title: "NFT Marketplace DApp", type: "DApps Development", description: "Create a complete NFT minting and trading platform" },
    { month: "Month 3", title: "DeFi Application", type: "Advanced DeFi", description: "Build a full decentralized finance application" },
    { month: "Capstone", title: "Multi-Chain DApp", type: "Enterprise", description: "Complete blockchain project with Ethereum + Polygon + IPFS" }
  ];

  const courseOutcomes = [
    "Understand Blockchain Fundamentals – concepts like decentralization, consensus, cryptography, and distributed ledgers",
    "Design Smart Contracts using Solidity and deploy them on Ethereum-based testnets",
    "Build Decentralized Applications (DApps) integrated with blockchain networks",
    "Implement Wallets & Transactions with Web3.js and MetaMask",
    "Work with Multiple Blockchain Platforms like Ethereum, Polygon, and Hyperledger",
    "Integrate Blockchain with Real-World Use Cases such as supply chain, voting, healthcare, and NFTs",
    "Deploy Projects on Testnets/Mainnets and ensure scalability, security, and efficiency",
    "Apply Blockchain Security Practices to prevent vulnerabilities and exploits"
  ];

  const projectOutcomes = [
    "Create functional smart contracts and DApps",
    "Build NFT marketplaces and DeFi applications",
    "Deploy blockchain applications on multiple networks",
    "Develop a professional blockchain portfolio"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-blue-50 to-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-20 pb-12">
        <img src={blockchainImg} alt="Blockchain" className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 drop-shadow mb-4 text-center">Blockchain Training Program</h1>
          <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">Comprehensive Blockchain Training</span>
          <p className="max-w-3xl text-lg text-gray-700 mb-6 text-center font-medium">
            Master blockchain technology with hands-on projects, smart contracts, and expert guidance. 
            Choose your training duration and embark on a journey to become a professional blockchain developer.
          </p>
        </div>
        <img src={blockchainImg} alt="Blockchain" className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-white object-contain mt-4 mb-2 z-20" />
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
            <p className="text-gray-600 text-sm">Industry-standard blockchain tools including Solidity, Web3.js, and multiple blockchain platforms</p>
          </div>

          {/* Ideal For */}
          <div className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Ideal For</h3>
            </div>
            <p className="text-gray-600 text-sm">Beginners to intermediate learners, developers, and professionals looking for blockchain careers</p>
          </div>

          {/* About TechProjectsHub */}
          <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">About TechProjectsHub</h3>
            </div>
            <p className="text-gray-600 text-sm">A hands-on training platform for tech learners in blockchain, smart contracts, and Web3 development</p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/80 backdrop-blur-lg border border-orange-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-bold text-orange-800">Why Choose Us</h3>
            </div>
            <p className="text-gray-600 text-sm">Security-first approach with hands-on blockchain development and expert mentorship</p>
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
          <p className="text-xl text-gray-600 mb-2">30% Discount on Industry-Ready Blockchain Training</p>
          <p className="text-lg text-gray-500">No hidden charges, just real value crafted for future blockchain developers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 1-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-green-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              30% OFF
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
              30% OFF
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
              30% OFF
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
          <p className="text-gray-600">Hands-on projects to showcase your blockchain development skills</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg border border-green-200 rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-white" />
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
                  <span className="text-gray-700 text-sm">{outcome}</span>
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
          <p className="text-gray-600">Master the tools used in professional blockchain development</p>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Blockchain Training</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Blockchain Journey?</h2>
          <p className="text-lg mb-6 opacity-90">Join our comprehensive Blockchain training program and become a professional blockchain developer</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Enroll Now
            </button>
            <button
              onClick={() => window.open('/TrainingPDFS/Blockchain_Syllabus.pdf', '_blank')}
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

export default BlockChain; 