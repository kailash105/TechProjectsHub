import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Research categories and papers data
const researchCategories = [
  {
    title: "Computer Science",
    icon: "💻",
    papers: [
      { title: "Machine Learning in Cybersecurity", authors: "Dr. Smith et al.", year: "2024", citations: 45, abstract: "Advanced machine learning techniques for cybersecurity threat detection and prevention.", journal: "IEEE Security & Privacy", doi: "10.1109/SP.2024.001" },
      { title: "Blockchain for Supply Chain Management", authors: "Prof. Johnson", year: "2023", citations: 32, abstract: "Implementation of blockchain technology in supply chain transparency and traceability.", journal: "Journal of Supply Chain Management", doi: "10.1016/j.scm.2023.002" },
      { title: "AI-Powered Healthcare Systems", authors: "Dr. Williams", year: "2024", citations: 67, abstract: "Artificial intelligence applications in healthcare diagnosis and treatment planning.", journal: "Healthcare Technology Review", doi: "10.1007/health.2024.003" },
      { title: "Quantum Computing Applications", authors: "Prof. Brown", year: "2023", citations: 28, abstract: "Quantum computing algorithms and their applications in cryptography and optimization.", journal: "Quantum Information Processing", doi: "10.1007/qip.2023.004" }
    ]
  },
  {
    title: "Data Science",
    icon: "📊",
    papers: [
      { title: "Big Data Analytics in Finance", authors: "Dr. Davis", year: "2024", citations: 89, abstract: "Big data analytics for financial risk assessment and market prediction.", journal: "Financial Analytics Journal", doi: "10.1016/fin.2024.005" },
      { title: "Predictive Analytics for Marketing", authors: "Prof. Miller", year: "2023", citations: 54, abstract: "Machine learning models for customer behavior prediction and marketing optimization.", journal: "Marketing Science", doi: "10.1007/marketing.2023.006" },
      { title: "Data Visualization Techniques", authors: "Dr. Wilson", year: "2024", citations: 41, abstract: "Advanced data visualization methods for complex datasets and insights presentation.", journal: "Data Visualization Quarterly", doi: "10.1109/dv.2024.007" },
      { title: "Statistical Modeling in Healthcare", authors: "Prof. Moore", year: "2023", citations: 76, abstract: "Statistical models for healthcare outcome prediction and patient care optimization.", journal: "Healthcare Statistics", doi: "10.1007/healthstats.2023.008" }
    ]
  },
  {
    title: "Engineering",
    icon: "⚙️",
    papers: [
      { title: "IoT in Smart Cities", authors: "Dr. Taylor", year: "2024", citations: 38, abstract: "Internet of Things implementation for smart city infrastructure and management.", journal: "Smart Cities Technology", doi: "10.1109/sct.2024.009" },
      { title: "Renewable Energy Systems", authors: "Prof. Anderson", year: "2023", citations: 52, abstract: "Advanced renewable energy systems and their integration into power grids.", journal: "Renewable Energy Journal", doi: "10.1016/renew.2023.010" },
      { title: "Robotics and Automation", authors: "Dr. Thomas", year: "2024", citations: 63, abstract: "Robotic systems and automation technologies for industrial applications.", journal: "Robotics and Automation", doi: "10.1007/robotics.2024.011" },
      { title: "VLSI Design Optimization", authors: "Prof. Jackson", year: "2023", citations: 29, abstract: "Very Large Scale Integration design optimization techniques and methodologies.", journal: "VLSI Design Journal", doi: "10.1109/vlsi.2023.012" }
    ]
  },
  {
    title: "Artificial Intelligence",
    icon: "🤖",
    papers: [
      { title: "Deep Learning for Computer Vision", authors: "Dr. White", year: "2024", citations: 95, abstract: "Deep learning algorithms for computer vision applications and image recognition.", journal: "Computer Vision and AI", doi: "10.1007/cvai.2024.013" },
      { title: "Natural Language Processing", authors: "Prof. Harris", year: "2023", citations: 71, abstract: "Natural language processing techniques for text analysis and language understanding.", journal: "NLP Research", doi: "10.1016/nlp.2023.014" },
      { title: "Reinforcement Learning Applications", authors: "Dr. Martin", year: "2024", citations: 48, abstract: "Reinforcement learning algorithms and their applications in decision-making systems.", journal: "Machine Learning Review", doi: "10.1007/ml.2024.015" },
      { title: "Neural Network Optimization", authors: "Prof. Garcia", year: "2023", citations: 35, abstract: "Neural network optimization techniques for improved performance and efficiency.", journal: "Neural Computing", doi: "10.1109/neural.2023.016" }
    ]
  },
  {
    title: "Cloud Computing",
    icon: "☁️",
    papers: [
      { title: "Multi-Cloud Architecture", authors: "Dr. Rodriguez", year: "2024", citations: 42, abstract: "Multi-cloud architecture design and implementation strategies for enterprise applications.", journal: "Cloud Computing Technology", doi: "10.1016/cloud.2024.017" },
      { title: "Serverless Computing", authors: "Prof. Martinez", year: "2023", citations: 58, abstract: "Serverless computing paradigms and their applications in modern software development.", journal: "Serverless Architecture", doi: "10.1007/serverless.2023.018" },
      { title: "Edge Computing Solutions", authors: "Dr. Lee", year: "2024", citations: 33, abstract: "Edge computing solutions for distributed systems and IoT applications.", journal: "Edge Computing Review", doi: "10.1109/edge.2024.019" },
      { title: "Cloud Security Protocols", authors: "Prof. Gonzalez", year: "2023", citations: 46, abstract: "Security protocols and best practices for cloud computing environments.", journal: "Cloud Security Journal", doi: "10.1007/cloudsec.2023.020" }
    ]
  },
  {
    title: "Cybersecurity",
    icon: "🔒",
    papers: [
      { title: "Zero-Trust Security Model", authors: "Dr. Lopez", year: "2024", citations: 51, abstract: "Zero-trust security model implementation and its effectiveness in modern networks.", journal: "Cybersecurity Technology", doi: "10.1016/cyber.2024.021" },
      { title: "Cryptographic Protocols", authors: "Prof. Perez", year: "2023", citations: 39, abstract: "Advanced cryptographic protocols for secure communication and data protection.", journal: "Cryptography Research", doi: "10.1007/crypto.2023.022" },
      { title: "Network Security Analysis", authors: "Dr. Turner", year: "2024", citations: 44, abstract: "Network security analysis techniques and threat detection methodologies.", journal: "Network Security", doi: "10.1109/netsec.2024.023" },
      { title: "Threat Detection Systems", authors: "Prof. Phillips", year: "2023", citations: 37, abstract: "Advanced threat detection systems using machine learning and AI techniques.", journal: "Threat Intelligence", doi: "10.1007/threat.2023.024" }
    ]
  }
];

const featuredPapers = [
  {
    title: "Advanced Machine Learning Algorithms for Real-time Data Processing",
    authors: "Dr. Sarah Chen, Prof. Michael Rodriguez",
    abstract: "This paper presents novel machine learning algorithms designed for real-time data processing applications. We introduce a hybrid approach combining deep learning with traditional statistical methods, achieving 95% accuracy in real-time classification tasks.",
    journal: "IEEE Transactions on Machine Learning",
    year: "2024",
    citations: 127,
    doi: "10.1109/TML.2024.001234",
    category: "Artificial Intelligence"
  },
  {
    title: "Blockchain-Based Supply Chain Transparency: A Comprehensive Analysis",
    authors: "Prof. James Wilson, Dr. Emily Davis",
    abstract: "We analyze the implementation of blockchain technology in supply chain management, focusing on transparency, traceability, and efficiency improvements. Our study covers 50+ companies across various industries.",
    journal: "Journal of Supply Chain Management",
    year: "2024",
    citations: 89,
    doi: "10.1016/j.scm.2024.005678",
    category: "Computer Science"
  },
  {
    title: "Quantum Computing Applications in Cryptography",
    authors: "Dr. Robert Kim, Prof. Lisa Thompson",
    abstract: "This research explores the potential of quantum computing in cryptographic applications, including post-quantum cryptography and quantum-resistant algorithms for secure communications.",
    journal: "Quantum Information Processing",
    year: "2023",
    citations: 156,
    doi: "10.1007/s11128-023-01234",
    category: "Computer Science"
  }
];

// Research Assistance Services
const researchServices = [
  {
    title: "Research Paper Writing",
    description: "Complete research paper writing from scratch with proper methodology, analysis, and conclusions.",
    features: [
      "Literature review and background research",
      "Methodology design and implementation",
      "Data analysis and interpretation",
      "Results presentation and discussion",
      "Conclusion and future work",
      "Proper citations and references"
    ],
    pricing: {
      basic: "₹3,000 - ₹5,000",
      standard: "₹5,000 - ₹7,000",
      premium: "₹7,000 - ₹8,000"
    },
    duration: "2-4 weeks"
  },
  {
    title: "Research Proposal Development",
    description: "Professional research proposal writing for academic and industry projects.",
    features: [
      "Problem statement and objectives",
      "Literature review and gap analysis",
      "Research methodology design",
      "Timeline and resource planning",
      "Expected outcomes and impact",
      "Budget estimation"
    ],
    pricing: {
      basic: "₹2,000 - ₹4,000",
      standard: "₹4,000 - ₹6,000",
      premium: "₹6,000 - ₹8,000"
    },
    duration: "1-2 weeks"
  },
  {
    title: "Literature Review",
    description: "Comprehensive literature review and systematic analysis of existing research.",
    features: [
      "Systematic literature search",
      "Critical analysis of papers",
      "Gap identification and synthesis",
      "Theoretical framework development",
      "Research trends analysis",
      "Citation management"
    ],
    pricing: {
      basic: "₹1,500 - ₹3,000",
      standard: "₹3,000 - ₹5,000",
      premium: "₹5,000 - ₹7,000"
    },
    duration: "1-2 weeks"
  },
  {
    title: "Data Analysis & Statistics",
    description: "Statistical analysis and data interpretation for research projects.",
    features: [
      "Data cleaning and preprocessing",
      "Statistical analysis (SPSS, R, Python)",
      "Hypothesis testing and validation",
      "Data visualization and charts",
      "Results interpretation",
      "Statistical report writing"
    ],
    pricing: {
      basic: "₹2,000 - ₹4,000",
      standard: "₹4,000 - ₹6,000",
      premium: "₹6,000 - ₹8,000"
    },
    duration: "1-3 weeks"
  },
  {
    title: "Research Paper Editing",
    description: "Professional editing and proofreading of research papers.",
    features: [
      "Content review and improvement",
      "Grammar and language editing",
      "Format and structure optimization",
      "Citation style compliance",
      "Plagiarism checking",
      "Final proofreading"
    ],
    pricing: {
      basic: "₹1,000 - ₹2,500",
      standard: "₹2,500 - ₹4,000",
      premium: "₹4,000 - ₹6,000"
    },
    duration: "3-7 days"
  },
  {
    title: "Research Consultation",
    description: "Expert consultation for research methodology and project guidance.",
    features: [
      "Research design consultation",
      "Methodology guidance",
      "Data collection strategies",
      "Analysis approach selection",
      "Publication strategy",
      "Ongoing support"
    ],
    pricing: {
      basic: "₹500/hour",
      standard: "₹1,000/hour",
      premium: "₹1,500/hour"
    },
    duration: "As needed"
  }
];

function Research() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllPapers, setShowAllPapers] = useState(false);

  // Get all papers from all categories
  const allPapers = researchCategories.flatMap(category => 
    category.papers.map(paper => ({
      ...paper,
      category: category.title
    }))
  );

  const filteredCategories = selectedCategory === "all" 
    ? researchCategories 
    : researchCategories.filter(cat => cat.title.toLowerCase().includes(selectedCategory.toLowerCase()));

  const displayedPapers = showAllPapers ? allPapers : featuredPapers;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 pt-20">
        {/* Glassy Professional Background */}
        <div className="absolute inset-0 bg-slate-700/80 backdrop-blur-sm"></div>
        
        {/* Main Container - Rectangle 1 */}
        <div className="w-full max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 h-full items-center">
            
            {/* Rectangle 3 - Page Title Section */}
            <div className="flex justify-start">
              <div className="w-64 h-64 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-800 shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/40" style={{
                boxShadow: '0 20px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.4)'
              }}>
                <h1 className="text-3xl md:text-4xl font-bold text-center">Research</h1>
              </div>
            </div>

            {/* Rectangle 4 - Description Text Section (No Container) */}
            <div className="text-white flex flex-col justify-center h-full lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Research Excellence & Innovation
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl">
                Advance your academic career with our comprehensive research support services. 
                From paper writing to data analysis, we provide expert assistance to help you 
                publish high-quality research and achieve your academic goals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">Expert Writers</h3>
                  <p className="text-sm text-slate-200">PhD-level researchers and academics</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">Quality Assurance</h3>
                  <p className="text-sm text-slate-200">Rigorous peer review and editing</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">Timely Delivery</h3>
                  <p className="text-sm text-slate-200">On-time completion guaranteed</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-base">All Disciplines</h3>
                  <p className="text-sm text-slate-200">Support across all research domains</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg">
                  Get Research Help
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                  View Publications
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Services Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Research Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional research assistance services designed to elevate your academic work. 
              From paper writing to data analysis, we provide expert support across all research domains.
            </p>
          </div>
          
          {displayedPapers.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No papers available</h3>
              <p className="text-gray-500">Browse by category to explore research papers</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {displayedPapers.map((paper, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                      {paper.category}
                    </span>
                    <span className="text-sm text-gray-500">{paper.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{paper.title}</h3>
                  <p className="text-gray-600 mb-4 font-medium">{paper.authors}</p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{paper.abstract}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      📚 {paper.journal}
                    </span>
                    <span className="text-sm text-blue-600 font-semibold">
                      📊 {paper.citations} citations
                    </span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500">DOI: {paper.doi}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Research Categories Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Research Categories</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Categories
            </button>
            {researchCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(category.title)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.title
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.icon} {category.title}
              </button>
            ))}
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <div key={category.title} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.papers.map((paper, index) => (
                    <div key={index} className="bg-white/70 rounded-lg p-4 hover:bg-white transition-colors">
                      <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2">{paper.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{paper.authors}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{paper.year}</span>
                        <span>📊 {paper.citations} citations</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Assistance Services */}
      <div className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Research Paper Assistance</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Professional research assistance services with flexible pricing based on your requirements. 
            From complete paper writing to consultation, we provide comprehensive support.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                    ⏱️ {service.duration}
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-800">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-500 mt-1">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Pricing:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Basic:</span>
                      <span className="font-semibold text-green-600">{service.pricing.basic}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Standard:</span>
                      <span className="font-semibold text-blue-600">{service.pricing.standard}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Premium:</span>
                      <span className="font-semibold text-purple-600">{service.pricing.premium}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="https://forms.gle/KUxBx55ETi8UbzVC7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Statistics */}
      <div className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-12">Research Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Research Papers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Researchers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Total Citations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Research Areas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Need Research Paper Assistance?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get professional help with your research papers, proposals, and academic writing. 
            Our expert team provides comprehensive research assistance with flexible pricing options.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-bold text-gray-800 mb-2">Custom Writing</h3>
              <p className="text-sm text-gray-600">Complete research papers tailored to your requirements</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-gray-800 mb-2">Data Analysis</h3>
              <p className="text-sm text-gray-600">Statistical analysis and data interpretation</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="font-bold text-gray-800 mb-2">Literature Review</h3>
              <p className="text-sm text-gray-600">Comprehensive literature review and gap analysis</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/KUxBx55ETi8UbzVC7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Research; 