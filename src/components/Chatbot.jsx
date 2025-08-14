import React, { useState, useEffect, useRef } from "react";
import { Send, X, MessageCircle, User, Phone, Mail, CheckCircle, Clock, Building, Users, BookOpen, Code, Brain, Database, Cloud, Shield, Globe, Zap } from "lucide-react";
import aiBotImage from "/AI_Bot.PNG";
import { submitToGoogleSheetsProxy } from "../utils/proxy";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState("welcome");
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    lookingFor: "",
    subOption: "",
    domain: "",
    course: "",
    duration: "",
    itSolution: "",
    description: "",
    projectType: "",
    researchArea: "",
    corporateTraining: "",
    consultingService: "",
    emergingTech: "",
    budget: "",
    timeline: ""
  });
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initializeChat();
    }
  }, [isOpen]);

  const initializeChat = () => {
    const welcomeMessage = {
      id: 1,
      type: "bot",
      content: "Hello! 👋 Welcome to TechProjectsHub. I'm your AI assistant here to help you find the perfect solution.\n\nWe offer:\n• 🚀 Cutting-edge IT Solutions\n• 📚 Comprehensive Training Programs\n• 🔬 Research & Development\n• 🏢 Corporate Training\n• 💼 Technology Consulting\n• ⚡ Emerging Technologies\n\nLet's start by getting to know you better!",
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
    setTimeout(() => {
      askForName();
    }, 1000);
  };

  const askForName = () => {
    const nameMessage = {
      id: Date.now() + 1,
      type: "bot",
      content: "What's your name?",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, nameMessage]);
    setCurrentStep("name");
  };

  const askForPhone = () => {
    const phoneMessage = {
      id: Date.now() + 2,
      type: "bot",
      content: "Great! Now, could you please share your phone number?",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, phoneMessage]);
    setCurrentStep("phone");
  };

  const askForEmail = () => {
    const emailMessage = {
      id: Date.now() + 3,
      type: "bot",
      content: "Perfect! What's your email address?",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, emailMessage]);
    setCurrentStep("email");
  };

  const askForLookingFor = () => {
    const lookingForMessage = {
      id: Date.now() + 4,
      type: "bot",
      content: "What are you looking for?",
      options: ["Projects", "Training", "IT Solutions", "Research", "Corporate Training", "Consulting", "Emerging Technologies"],
      icons: [Code, BookOpen, Globe, Brain, Building, Users, Zap],
      descriptions: {
        "Projects": "Academic projects, research papers, and industry solutions",
        "Training": "Comprehensive training programs in modern technologies",
        "IT Solutions": "Custom software development and digital solutions",
        "Research": "Research papers, publications, and academic support",
        "Corporate Training": "Team training and organizational development",
        "Consulting": "Technology strategy and implementation consulting",
        "Emerging Technologies": "Cutting-edge tech solutions and innovation"
      },
      timestamp: new Date()
    };
    setMessages(prev => [...prev, lookingForMessage]);
    setCurrentStep("lookingFor");
  };

  const handleProjectsSelection = () => {
    const projectsMessage = {
      id: Date.now() + 5,
      type: "bot",
      content: "Great choice! What type of project are you interested in?",
      options: [
        "Academic Project", 
        "Research Paper", 
        "Industry Project", 
        "Startup Project", 
        "Capstone Project",
        "Thesis Project",
        "Internship Project",
        "Competition Project",
        "Open Source Project",
        "Patent Project",
        "Both"
      ],
      timestamp: new Date()
    };
    setMessages(prev => [...prev, projectsMessage]);
    setCurrentStep("projectType");
  };

  const handleTrainingSelection = () => {
    const trainingMessage = {
      id: Date.now() + 6,
      type: "bot",
      content: "Excellent! Here are our comprehensive training programs:",
      options: [
        "Python Full Stack Development",
        "Java Full Stack Development", 
        "MERN Stack Development",
        "AI/ML & Deep Learning",
        "Generative AI",
        "Web Full Stack Development",
        "Frontend Development",

        "Data Science & Analytics",
        "VLSI Design",
        "Cloud Computing (Azure)",
        "Blockchain Development",
        "Python with DSA",
        "Java with DSA",
        "IoT Development",
        "Cybersecurity",
        "DevOps & CI/CD",
        "Mobile App Development",
        "Game Development",
        "UI/UX Design",
        "Digital Marketing",
        "Robotics & Automation",
        "Embedded Systems",
        "Computer Vision",
        "Natural Language Processing",
        "Big Data Analytics",
        "Quantum Computing",
        "Edge Computing",
        "5G & Network Security",
        "Augmented Reality (AR)",
        "Virtual Reality (VR)",
        "Metaverse Development"
      ],
      timestamp: new Date()
    };
    setMessages(prev => [...prev, trainingMessage]);
    setCurrentStep("courseSelection");
  };

  const handleITSolutionsSelection = () => {
    const itSolutionsMessage = {
      id: Date.now() + 7,
      type: "bot",
      content: "Perfect! Here are our comprehensive IT Solutions:",
      options: [
        "Frontend Website Development",
        "Full-Stack Web Applications",
        "E-commerce Solutions",
        "Mobile Applications",
        "Machine Learning Projects",
        "Deep Learning Projects",
        "Data Analytics Dashboards",
        "Cloud Infrastructure Setup",
        "Database Design & Management",
        "API Development & Integration",
        "DevOps & CI/CD Pipeline",
        "Cybersecurity Solutions",
        "IoT Solutions",
        "Blockchain Applications",
        "AI Chatbots & Automation",
        "Business Intelligence Tools",
        "Robotics & Automation Systems",
        "Computer Vision Applications",
        "Natural Language Processing",
        "Big Data Processing",
        "Quantum Computing Solutions",
        "Edge Computing Infrastructure",
        "5G Network Solutions",
        "AR/VR Applications",
        "Metaverse Development",
        "Smart City Solutions",
        "Healthcare IT Solutions",
        "FinTech Applications",
        "Educational Technology",
        "Supply Chain Management",
        "Digital Twin Solutions"
      ],
      descriptions: {
        "Frontend Website Development": "Modern, responsive websites with HTML, CSS, JavaScript, React, and advanced UI frameworks",
        "Full-Stack Web Applications": "Complete web applications with frontend, backend, database, and cloud deployment",
        "E-commerce Solutions": "Full-featured online stores with payment gateways, inventory management, and admin panels",
        "Mobile Applications": "Native and cross-platform mobile apps for iOS and Android with modern UI/UX",
        "Machine Learning Projects": "Custom ML models with data preprocessing, model training, and deployment",
        "Deep Learning Projects": "Advanced neural networks for computer vision, NLP, and predictive analytics",
        "Data Analytics Dashboards": "Interactive dashboards with real-time data visualization and reporting",
        "Cloud Infrastructure Setup": "Scalable cloud solutions on AWS, Azure, or Google Cloud Platform",
        "Database Design & Management": "Optimized database architecture with performance tuning and security",
        "API Development & Integration": "RESTful APIs, GraphQL, and third-party service integrations",
        "DevOps & CI/CD Pipeline": "Automated deployment pipelines with monitoring and scaling",
        "Cybersecurity Solutions": "Security audits, penetration testing, and security infrastructure",
        "IoT Solutions": "Connected devices with real-time monitoring and control systems",
        "Blockchain Applications": "Smart contracts, DApps, and blockchain infrastructure",
        "AI Chatbots & Automation": "Intelligent chatbots and workflow automation solutions",
        "Business Intelligence Tools": "Data warehousing, ETL processes, and business analytics",
        "Robotics & Automation Systems": "Industrial automation, robotic process automation, and smart manufacturing solutions",
        "Computer Vision Applications": "Image recognition, object detection, and video analytics systems",
        "Natural Language Processing": "Text analysis, sentiment analysis, and language understanding systems",
        "Big Data Processing": "Large-scale data processing, Hadoop ecosystems, and real-time streaming",
        "Quantum Computing Solutions": "Quantum algorithms, quantum machine learning, and quantum cryptography",
        "Edge Computing Infrastructure": "Edge computing platforms, IoT edge processing, and distributed computing",
        "5G Network Solutions": "5G network infrastructure, network slicing, and mobile edge computing",
        "AR/VR Applications": "Augmented reality, virtual reality, and mixed reality applications",
        "Metaverse Development": "Virtual worlds, digital avatars, and immersive social platforms",
        "Smart City Solutions": "Smart infrastructure, traffic management, and urban planning systems",
        "Healthcare IT Solutions": "Electronic health records, telemedicine, and medical imaging systems",
        "FinTech Applications": "Digital banking, payment systems, and financial analytics platforms",
        "Educational Technology": "Learning management systems, adaptive learning, and educational analytics",
        "Supply Chain Management": "Inventory optimization, logistics tracking, and supply chain analytics",
        "Digital Twin Solutions": "Digital replicas of physical systems for simulation and optimization"
      },
      timestamp: new Date()
    };
    setMessages(prev => [...prev, itSolutionsMessage]);
    setCurrentStep("itSolution");
  };

  const handleResearchSelection = () => {
    const researchMessage = {
      id: Date.now() + 8,
      type: "bot",
      content: "Excellent! Here are our research areas and services:",
      options: [
        "Computer Science Research",
        "AI/ML Research Papers",
        "Data Science Research",
        "IoT & Embedded Systems",
        "Cybersecurity Research",
        "Blockchain Research",
        "Cloud Computing Research",
        "Software Engineering Research",
        "Network & Communication Research",
        "Robotics & Automation Research",
        "Quantum Computing Research",
        "Computer Vision Research",
        "Natural Language Processing",
        "Big Data & Analytics Research",
        "Edge Computing Research",
        "5G/6G Network Research",
        "AR/VR Research",
        "Metaverse Research",
        "Smart Cities Research",
        "Healthcare Technology Research",
        "FinTech Research",
        "Educational Technology Research",
        "Supply Chain Research",
        "Digital Twin Research",
        "Green Technology Research",
        "Space Technology Research"
      ],
      descriptions: {
        "Computer Science Research": "Advanced algorithms, data structures, and computational theory",
        "AI/ML Research Papers": "Machine learning, deep learning, and artificial intelligence research",
        "Data Science Research": "Big data analytics, statistical modeling, and predictive analytics",
        "IoT & Embedded Systems": "Internet of Things, sensor networks, and embedded computing",
        "Cybersecurity Research": "Network security, cryptography, and threat analysis",
        "Blockchain Research": "Distributed systems, consensus algorithms, and smart contracts",
        "Cloud Computing Research": "Cloud architecture, virtualization, and distributed computing",
        "Software Engineering Research": "Software development methodologies and quality assurance",
        "Network & Communication Research": "Network protocols, wireless communication, and 5G/6G",
        "Robotics & Automation Research": "Robotic systems, automation, and control theory",
        "Quantum Computing Research": "Quantum algorithms, quantum cryptography, and quantum machine learning",
        "Computer Vision Research": "Image processing, object recognition, and video analytics",
        "Natural Language Processing": "Text analysis, language understanding, and machine translation",
        "Big Data & Analytics Research": "Large-scale data processing, real-time analytics, and data mining",
        "Edge Computing Research": "Edge computing architectures, fog computing, and distributed systems",
        "5G/6G Network Research": "Next-generation networks, network slicing, and mobile edge computing",
        "AR/VR Research": "Augmented reality, virtual reality, and mixed reality technologies",
        "Metaverse Research": "Virtual worlds, digital avatars, and immersive social platforms",
        "Smart Cities Research": "Urban planning, intelligent transportation, and sustainable infrastructure",
        "Healthcare Technology Research": "Medical imaging, telemedicine, and health informatics",
        "FinTech Research": "Digital banking, blockchain finance, and financial technology",
        "Educational Technology Research": "Adaptive learning, educational analytics, and learning platforms",
        "Supply Chain Research": "Logistics optimization, inventory management, and supply chain analytics",
        "Digital Twin Research": "Digital replicas, simulation modeling, and predictive maintenance",
        "Green Technology Research": "Sustainable computing, energy-efficient algorithms, and green IT",
        "Space Technology Research": "Satellite technology, space computing, and aerospace systems"
      },
      timestamp: new Date()
    };
    setMessages(prev => [...prev, researchMessage]);
    setCurrentStep("researchArea");
  };

  const handleCorporateTrainingSelection = () => {
    const corporateMessage = {
      id: Date.now() + 9,
      type: "bot",
      content: "Great! Here are our corporate training programs:",
      options: [
        "Team Training Programs",
        "Leadership Development",
        "Technical Skills Training",
        "Agile & Scrum Training",
        "Project Management",
        "Data Analytics for Business",
        "Digital Transformation",
        "Cybersecurity Awareness",
        "Cloud Migration Training",
        "DevOps Implementation",
        "AI & ML for Business",
        "IoT Implementation Training",
        "Blockchain Business Applications",
        "Robotics & Automation Training",
        "Edge Computing Training",
        "5G Network Training",
        "AR/VR Business Applications",
        "Metaverse Strategy Training",
        "Smart City Solutions Training",
        "Healthcare IT Training",
        "FinTech Training",
        "Educational Technology Training",
        "Supply Chain Digitalization",
        "Digital Twin Implementation",
        "Green Technology Training",
        "Space Technology Training"
      ],
      descriptions: {
        "Team Training Programs": "Customized training for development teams on modern technologies",
        "Leadership Development": "Leadership skills, team management, and strategic thinking",
        "Technical Skills Training": "Programming, cloud computing, and emerging technologies",
        "Agile & Scrum Training": "Agile methodologies, sprint planning, and team collaboration",
        "Project Management": "Project planning, risk management, and stakeholder communication",
        "Data Analytics for Business": "Business intelligence, data visualization, and decision making",
        "Digital Transformation": "Digital strategy, change management, and technology adoption",
        "Cybersecurity Awareness": "Security best practices, threat awareness, and compliance",
        "Cloud Migration Training": "Cloud strategy, migration planning, and cost optimization",
        "DevOps Implementation": "DevOps culture, tools, and automation practices",
        "AI & ML for Business": "AI strategy, machine learning applications, and business automation",
        "IoT Implementation Training": "IoT strategy, sensor networks, and connected device management",
        "Blockchain Business Applications": "Blockchain strategy, smart contracts, and decentralized applications",
        "Robotics & Automation Training": "Industrial automation, RPA, and smart manufacturing",
        "Edge Computing Training": "Edge computing strategy, distributed systems, and IoT edge processing",
        "5G Network Training": "5G network planning, network slicing, and mobile edge computing",
        "AR/VR Business Applications": "Augmented reality, virtual reality, and mixed reality in business",
        "Metaverse Strategy Training": "Metaverse strategy, virtual worlds, and digital transformation",
        "Smart City Solutions Training": "Smart infrastructure, urban planning, and sustainable cities",
        "Healthcare IT Training": "Health informatics, telemedicine, and medical technology",
        "FinTech Training": "Digital banking, payment systems, and financial technology",
        "Educational Technology Training": "EdTech strategy, learning platforms, and digital education",
        "Supply Chain Digitalization": "Digital supply chain, logistics optimization, and inventory management",
        "Digital Twin Implementation": "Digital twin strategy, simulation modeling, and predictive maintenance",
        "Green Technology Training": "Sustainable technology, energy efficiency, and green IT practices",
        "Space Technology Training": "Satellite technology, space computing, and aerospace systems"
      },
      timestamp: new Date()
    };
    setMessages(prev => [...prev, corporateMessage]);
    setCurrentStep("corporateTraining");
  };

  const handleConsultingSelection = () => {
    const consultingMessage = {
      id: Date.now() + 10,
      type: "bot",
      content: "Perfect! Here are our consulting services:",
      options: [
        "Technology Strategy Consulting",
        "Digital Transformation Consulting",
        "Cloud Architecture Consulting",
        "Data Strategy Consulting",
        "Cybersecurity Consulting",
        "AI/ML Implementation Consulting",
        "DevOps Consulting",
        "Software Architecture Consulting",
        "Performance Optimization Consulting",
        "Technology Due Diligence",
        "IoT Strategy Consulting",
        "Blockchain Implementation Consulting",
        "Robotics & Automation Consulting",
        "Edge Computing Consulting",
        "5G Network Consulting",
        "AR/VR Strategy Consulting",
        "Metaverse Strategy Consulting",
        "Smart Cities Consulting",
        "Healthcare Technology Consulting",
        "FinTech Strategy Consulting",
        "Educational Technology Consulting",
        "Supply Chain Digitalization Consulting",
        "Digital Twin Consulting",
        "Green Technology Consulting",
        "Space Technology Consulting",
        "Quantum Computing Consulting",
        "Computer Vision Consulting",
        "Natural Language Processing Consulting",
        "Big Data Strategy Consulting"
      ],
      descriptions: {
        "Technology Strategy Consulting": "Technology roadmap, vendor selection, and digital strategy",
        "Digital Transformation Consulting": "Digital maturity assessment and transformation planning",
        "Cloud Architecture Consulting": "Cloud strategy, architecture design, and migration planning",
        "Data Strategy Consulting": "Data governance, analytics strategy, and data architecture",
        "Cybersecurity Consulting": "Security assessment, compliance, and risk management",
        "AI/ML Implementation Consulting": "AI strategy, model selection, and implementation planning",
        "DevOps Consulting": "DevOps assessment, tool selection, and implementation",
        "Software Architecture Consulting": "System design, scalability, and performance optimization",
        "Performance Optimization Consulting": "Application performance, database optimization, and scaling",
        "Technology Due Diligence": "Technology assessment for mergers and acquisitions",
        "IoT Strategy Consulting": "IoT strategy, sensor networks, and connected device ecosystems",
        "Blockchain Implementation Consulting": "Blockchain strategy, smart contracts, and decentralized systems",
        "Robotics & Automation Consulting": "Automation strategy, RPA implementation, and smart manufacturing",
        "Edge Computing Consulting": "Edge computing strategy, distributed systems, and IoT edge processing",
        "5G Network Consulting": "5G network strategy, network slicing, and mobile edge computing",
        "AR/VR Strategy Consulting": "AR/VR strategy, immersive experiences, and spatial computing",
        "Metaverse Strategy Consulting": "Metaverse strategy, virtual worlds, and digital transformation",
        "Smart Cities Consulting": "Smart infrastructure, urban planning, and sustainable city solutions",
        "Healthcare Technology Consulting": "Health informatics strategy, telemedicine, and medical technology",
        "FinTech Strategy Consulting": "Digital banking strategy, payment systems, and financial technology",
        "Educational Technology Consulting": "EdTech strategy, learning platforms, and digital education",
        "Supply Chain Digitalization Consulting": "Digital supply chain strategy, logistics optimization, and inventory management",
        "Digital Twin Consulting": "Digital twin strategy, simulation modeling, and predictive maintenance",
        "Green Technology Consulting": "Sustainable technology strategy, energy efficiency, and green IT",
        "Space Technology Consulting": "Satellite technology strategy, space computing, and aerospace systems",
        "Quantum Computing Consulting": "Quantum computing strategy, quantum algorithms, and quantum applications",
        "Computer Vision Consulting": "Computer vision strategy, image processing, and video analytics",
        "Natural Language Processing Consulting": "NLP strategy, language understanding, and text analytics",
        "Big Data Strategy Consulting": "Big data strategy, data processing, and analytics infrastructure"
      },
      timestamp: new Date()
    };
    setMessages(prev => [...prev, consultingMessage]);
    setCurrentStep("consultingService");
  };

  const handleEmergingTechnologiesSelection = () => {
    const emergingTechMessage = {
      id: Date.now() + 15,
      type: "bot",
      content: "Excellent choice! Here are our cutting-edge emerging technology services:",
      options: [
        "Quantum Computing Solutions",
        "AI/ML & Deep Learning",
        "Edge Computing & IoT",
        "5G/6G Network Solutions",
        "AR/VR & Metaverse",
        "Blockchain & Web3",
        "Robotics & Automation",
        "Computer Vision & NLP",
        "Big Data & Analytics",
        "Green Technology",
        "Space Technology",
        "Biotechnology & Bioinformatics",
        "Nanotechnology",
        "Cybersecurity & Privacy",
        "Digital Twin Technology"
      ],
      descriptions: {
        "Quantum Computing Solutions": "Quantum algorithms, quantum cryptography, and quantum machine learning applications",
        "AI/ML & Deep Learning": "Advanced neural networks, computer vision, and natural language processing",
        "Edge Computing & IoT": "Distributed computing, sensor networks, and real-time data processing",
        "5G/6G Network Solutions": "Next-generation networks, network slicing, and mobile edge computing",
        "AR/VR & Metaverse": "Immersive experiences, virtual worlds, and spatial computing platforms",
        "Blockchain & Web3": "Decentralized applications, smart contracts, and blockchain infrastructure",
        "Robotics & Automation": "Industrial automation, autonomous systems, and robotic process automation",
        "Computer Vision & NLP": "Image recognition, video analytics, and language understanding systems",
        "Big Data & Analytics": "Large-scale data processing, real-time analytics, and predictive modeling",
        "Green Technology": "Sustainable computing, energy-efficient algorithms, and environmental monitoring",
        "Space Technology": "Satellite systems, space computing, and aerospace technology solutions",
        "Biotechnology & Bioinformatics": "Genomic analysis, drug discovery, and biological data processing",
        "Nanotechnology": "Nano-scale computing, molecular electronics, and nanomaterial applications",
        "Cybersecurity & Privacy": "Advanced threat detection, privacy-preserving AI, and secure systems",
        "Digital Twin Technology": "Digital replicas, simulation modeling, and predictive maintenance systems"
      },
      timestamp: new Date()
    };
    setMessages(prev => [...prev, emergingTechMessage]);
    setCurrentStep("emergingTech");
  }

  const askForDomain = () => {
    const domainMessage = {
      id: Date.now() + 11,
      type: "bot",
      content: "Please select your domain:",
      options: [
        "Computer Science & Engineering",
        "Electronics & Communication Engineering",
        "Electrical & Electronics Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "AI/ML & Data Science",
        "IoT & Embedded Systems",
        "Cybersecurity",
        "Cloud Computing",
        "Blockchain Technology",
        "Robotics & Automation",
        "Biotechnology",
        "Aerospace Engineering",
        "Chemical Engineering",
        "Environmental Engineering",
        "Quantum Computing",
        "Computer Vision & Image Processing",
        "Natural Language Processing",
        "Big Data & Analytics",
        "Edge Computing",
        "5G/6G Networks",
        "AR/VR Technology",
        "Metaverse Development",
        "Smart Cities & Infrastructure",
        "Healthcare Technology",
        "FinTech & Digital Banking",
        "Educational Technology",
        "Supply Chain & Logistics",
        "Digital Twin Technology",
        "Green Technology",
        "Space Technology",
        "Nuclear Engineering",
        "Materials Science",
        "Nanotechnology",
        "Biomedical Engineering",
        "Mechatronics",
        "Industrial Engineering"
      ],
      timestamp: new Date()
    };
    setMessages(prev => [...prev, domainMessage]);
    setCurrentStep("domain");
  };

  const askForDuration = () => {
    const durationMessage = {
      id: Date.now() + 12,
      type: "bot",
      content: "Choose your training duration:",
      options: ["1 Month", "2 Months", "3 Months", "6 Months", "1 Year", "Custom Duration"],
      timestamp: new Date()
    };
    setMessages(prev => [...prev, durationMessage]);
    setCurrentStep("duration");
  };

  const askForBudget = () => {
    // Create a summary of selected services
    let serviceSummary = "";
    if (userData.lookingFor === "Training" && userData.course) {
      serviceSummary = `Selected: ${userData.course} Training`;
    } else if (userData.lookingFor === "IT Solutions" && userData.itSolution) {
      serviceSummary = `Selected: ${userData.itSolution}`;
    } else if (userData.lookingFor === "Research" && userData.researchArea) {
      serviceSummary = `Selected: ${userData.researchArea}`;
    } else if (userData.lookingFor === "Corporate Training" && userData.corporateTraining) {
      serviceSummary = `Selected: ${userData.corporateTraining}`;
    } else if (userData.lookingFor === "Consulting" && userData.consultingService) {
      serviceSummary = `Selected: ${userData.consultingService}`;
    } else if (userData.lookingFor === "Emerging Technologies" && userData.emergingTech) {
      serviceSummary = `Selected: ${userData.emergingTech}`;
    } else if (userData.lookingFor === "Projects" && userData.projectType) {
      serviceSummary = `Selected: ${userData.projectType} in ${userData.domain || 'your domain'}`;
    }

    const budgetMessage = {
      id: Date.now() + 13,
      type: "bot",
      content: `Great! ${serviceSummary}\n\nWhat's your budget range for this project/service?`,
      options: [
        "Under ₹10,000",
        "₹10,000 - ₹25,000",
        "₹25,000 - ₹50,000",
        "₹50,000 - ₹1,00,000",
        "₹1,00,000 - ₹5,00,000",
        "₹5,00,000 - ₹10,00,000",
        "₹10,00,000 - ₹25,00,000",
        "₹25,00,000 - ₹50,00,000",
        "Above ₹50,00,000",
        "Enterprise Pricing",
        "Custom Budget"
      ],
      timestamp: new Date()
    };
    setMessages(prev => [...prev, budgetMessage]);
    setCurrentStep("budget");
  };

  const askForTimeline = () => {
    // Create estimated delivery time based on service type
    let estimatedTime = "";
    if (userData.lookingFor === "Training") {
      estimatedTime = "Training programs typically start within 1 week of enrollment";
    } else if (userData.lookingFor === "IT Solutions") {
      estimatedTime = "IT Solutions typically take 2-8 weeks depending on complexity";
    } else if (userData.lookingFor === "Research") {
      estimatedTime = "Research papers typically take 4-12 weeks to complete";
    } else if (userData.lookingFor === "Corporate Training") {
      estimatedTime = "Corporate training can be scheduled within 2-4 weeks";
    } else if (userData.lookingFor === "Consulting") {
      estimatedTime = "Consulting projects typically start within 1-2 weeks";
    } else if (userData.lookingFor === "Emerging Technologies") {
      estimatedTime = "Emerging tech projects typically take 6-16 weeks";
    } else if (userData.lookingFor === "Projects") {
      estimatedTime = "Academic projects typically take 2-8 weeks to complete";
    }

    const timelineMessage = {
      id: Date.now() + 14,
      type: "bot",
      content: `${estimatedTime}\n\nWhat's your preferred timeline for completion?`,
      options: [
        "Urgent (1-2 weeks)",
        "Fast Track (2-4 weeks)",
        "Standard (1-2 months)",
        "2-3 months",
        "3-6 months",
        "6-12 months",
        "1+ year",
        "Phased Delivery",
        "Ongoing Support",
        "Flexible timeline"
      ],
      timestamp: new Date()
    };
    setMessages(prev => [...prev, timelineMessage]);
    setCurrentStep("timeline");
  };

  const submitToGoogleSheets = async () => {
    setIsLoading(true);
    
    try {
      const formData = new FormData();
      
      // Add headers for Excel sheet columns
      formData.append('headers', JSON.stringify([
        'Timestamp',
        'Name',
        'Phone',
        'Email',
        'Looking For',
        'Sub Option',
        'Domain',
        'Course',
        'Duration',
        'IT Solution',
        'Description',
        'Project Type',
        'Research Area',
        'Corporate Training',
        'Consulting Service',
        'Emerging Technology',
        'Budget',
        'Timeline'
      ]));
      
      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('email', userData.email);
      formData.append('lookingFor', userData.lookingFor);
      formData.append('subOption', userData.subOption);
      formData.append('domain', userData.domain);
      formData.append('course', userData.course);
      formData.append('duration', userData.duration);
      formData.append('itSolution', userData.itSolution);
      formData.append('description', userData.description);
      formData.append('projectType', userData.projectType);
      formData.append('researchArea', userData.researchArea);
      formData.append('corporateTraining', userData.corporateTraining);
      formData.append('consultingService', userData.consultingService);
      formData.append('emergingTech', userData.emergingTech);
      formData.append('budget', userData.budget);
      formData.append('timeline', userData.timeline);
      formData.append('timestamp', new Date().toISOString());

      // Try direct submission with no-cors mode
      const response = await fetch('https://script.google.com/macros/s/AKfycby7FCMv4CeFe_M_-25hZjueclyke_vCfQwUI5zdJAnhHzDll-Z_9gyUk8GxccHM7bYkLg/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      // Since no-cors doesn't give us response details, we'll assume success
      const result = { success: true, message: 'Data submitted successfully' };

      if (result.success) {
        // Create personalized success message based on service type
        let serviceSpecificInfo = "";
        if (userData.lookingFor === "Training") {
          serviceSpecificInfo = "• Course curriculum and schedule\n• Learning materials and resources\n• Progress tracking and assessments";
        } else if (userData.lookingFor === "IT Solutions") {
          serviceSpecificInfo = "• Technical architecture proposal\n• Development timeline and milestones\n• Technology stack recommendations";
        } else if (userData.lookingFor === "Research") {
          serviceSpecificInfo = "• Research methodology and approach\n• Literature review and analysis\n• Publication support and guidance";
        } else if (userData.lookingFor === "Corporate Training") {
          serviceSpecificInfo = "• Customized training modules\n• Team assessment and planning\n• ROI measurement framework";
        } else if (userData.lookingFor === "Consulting") {
          serviceSpecificInfo = "• Strategic assessment report\n• Implementation roadmap\n• Change management plan";
        } else if (userData.lookingFor === "Emerging Technologies") {
          serviceSpecificInfo = "• Technology feasibility analysis\n• Innovation roadmap\n• Future-proofing strategies";
        } else if (userData.lookingFor === "Projects") {
          serviceSpecificInfo = "• Project scope and deliverables\n• Technical specifications\n• Implementation timeline";
        }

        const successMessage = {
          id: Date.now() + Math.random(),
          type: "bot",
          content: `Thank you! We'll get back to you within 12 hours. 🎉\n\nOur team will review your requirements and provide a customized solution. You can also expect:\n• Detailed proposal within 24 hours\n• Technical consultation call\n• Project timeline and milestones\n• Competitive pricing quote\n\n${serviceSpecificInfo}`,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, successMessage]);
        setIsSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      const errorMessage = {
        id: Date.now() + Math.random(),
        type: "bot",
        content: "Sorry, there was an error submitting your information. Please try again or contact us directly.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserInput = (input) => {
    const userMessage = {
      id: Date.now() + Math.random(),
      type: "user",
      content: input,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    switch (currentStep) {
      case "name":
        setUserData(prev => ({ ...prev, name: input }));
        askForPhone();
        break;
      
      case "phone":
        setUserData(prev => ({ ...prev, phone: input }));
        askForEmail();
        break;
      
      case "email":
        setUserData(prev => ({ ...prev, email: input }));
        askForLookingFor();
        break;
      
      case "lookingFor":
        setUserData(prev => ({ ...prev, lookingFor: input }));
        if (input === "Projects") {
          handleProjectsSelection();
        } else if (input === "Training") {
          handleTrainingSelection();
        } else if (input === "IT Solutions") {
          handleITSolutionsSelection();
        } else if (input === "Research") {
          handleResearchSelection();
        } else if (input === "Corporate Training") {
          handleCorporateTrainingSelection();
        } else if (input === "Consulting") {
          handleConsultingSelection();
        } else if (input === "Emerging Technologies") {
          handleEmergingTechnologiesSelection();
        }
        break;
      
      case "projectType":
        setUserData(prev => ({ ...prev, projectType: input }));
        askForDomain();
        break;
      
      case "courseSelection":
        setUserData(prev => ({ ...prev, course: input }));
        askForDuration();
        break;
      
      case "domain":
        setUserData(prev => ({ ...prev, domain: input }));
        askForBudget();
        break;
      
      case "duration":
        setUserData(prev => ({ ...prev, duration: input }));
        askForBudget();
        break;
      
      case "itSolution":
        setUserData(prev => ({ ...prev, itSolution: input }));
        const currentMessage = messages[messages.length - 1];
        const description = currentMessage.descriptions?.[input] || "";
        setUserData(prev => ({ ...prev, description }));
        askForBudget();
        break;
      
      case "researchArea":
        setUserData(prev => ({ ...prev, researchArea: input }));
        const researchMessage = messages[messages.length - 1];
        const researchDescription = researchMessage.descriptions?.[input] || "";
        setUserData(prev => ({ ...prev, description: researchDescription }));
        askForBudget();
        break;
      
      case "corporateTraining":
        setUserData(prev => ({ ...prev, corporateTraining: input }));
        const corporateMessage = messages[messages.length - 1];
        const corporateDescription = corporateMessage.descriptions?.[input] || "";
        setUserData(prev => ({ ...prev, description: corporateDescription }));
        askForBudget();
        break;
      
      case "consultingService":
        setUserData(prev => ({ ...prev, consultingService: input }));
        const consultingMessage = messages[messages.length - 1];
        const consultingDescription = consultingMessage.descriptions?.[input] || "";
        setUserData(prev => ({ ...prev, description: consultingDescription }));
        askForBudget();
        break;
      
      case "emergingTech":
        setUserData(prev => ({ ...prev, emergingTech: input }));
        const emergingTechMessage = messages[messages.length - 1];
        const emergingTechDescription = emergingTechMessage.descriptions?.[input] || "";
        setUserData(prev => ({ ...prev, description: emergingTechDescription }));
        askForBudget();
        break;
      
      case "budget":
        setUserData(prev => ({ ...prev, budget: input }));
        askForTimeline();
        break;
      
      case "timeline":
        setUserData(prev => ({ ...prev, timeline: input }));
        submitToGoogleSheets();
        break;
      
      default:
        break;
    }
  };

  const handleOptionClick = (option) => {
    handleUserInput(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      handleUserInput(inputValue.trim());
      setInputValue("");
    }
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentStep("welcome");
    setUserData({
      name: "",
      phone: "",
      email: "",
      lookingFor: "",
      subOption: "",
      duration: "",
      domain: "",
      course: "",
      itSolution: "",
      description: "",
      projectType: "",
      researchArea: "",
      corporateTraining: "",
      consultingService: "",
      emergingTech: "",
      budget: "",
      timeline: ""
    });
    setIsSubmitted(false);
    initializeChat();
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}
      </style>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 overflow-hidden"
        style={{ 
          zIndex: 9999,
          bottom: 'calc(6rem + 20px)', // Ensures it stays above footer
          animation: !isOpen ? 'pulse 2s infinite' : 'none',
          width: '4rem',
          height: '4rem'
        }}
      >
        {isOpen ? (
          <X size={24} className="text-gray-700" />
        ) : (
          <img 
            src={aiBotImage} 
            alt="AI Bot" 
            className="w-full h-full object-cover"
          />
        )}
      </button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col" style={{ zIndex: 9998 }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                <img 
                  src={aiBotImage} 
                  alt="AI Bot" 
                  className="w-8 h-8 md:w-10 md:h-10 object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">TechProjectsHub Assistant</h3>
                <p className="text-sm opacity-90">AI-Powered Support</p>
                <p className="text-xs opacity-75">24/7 Available</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const helpMessage = {
                    id: Date.now() + Math.random(),
                    type: "bot",
                    content: "Here's how I can help you:\n\n🚀 **IT Solutions**: Custom software, web apps, mobile apps\n📚 **Training**: 30+ technology courses\n🔬 **Research**: Papers, publications, academic support\n🏢 **Corporate**: Team training and consulting\n⚡ **Emerging Tech**: AI, IoT, Blockchain, Quantum\n\nWhat would you like to explore?",
                    timestamp: new Date()
                  };
                  setMessages(prev => [...prev, helpMessage]);
                }}
                className="text-white/80 hover:text-white transition p-1"
                title="Quick Help"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.type === "bot" && (
                  <div className="flex-shrink-0 mr-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <img 
                        src={aiBotImage} 
                        alt="AI Bot" 
                        className="w-5 h-5 md:w-6 md:h-6 object-cover"
                      />
                    </div>
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.type === "user"
                      ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  
                  {/* Options for bot messages */}
                  {message.type === "bot" && message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, index) => (
                        <div key={index} className="group">
                          <button
                            onClick={() => handleOptionClick(option)}
                            className="block w-full text-left p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-green-300 transition-colors text-sm"
                          >
                            {option}
                          </button>
                          {message.descriptions && message.descriptions[option] && (
                            <div className="mt-1 p-2 bg-blue-50 border border-blue-200 rounded-lg text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              {message.descriptions[option]}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex-shrink-0 mr-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <img 
                      src={aiBotImage} 
                      alt="AI Bot" 
                      className="w-5 h-5 md:w-6 md:w-6 object-cover"
                    />
                  </div>
                </div>
                <div className="bg-gray-100 text-gray-800 rounded-2xl px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-500"></div>
                    <span className="text-sm">Processing...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          {!isSubmitted && (
            <div className="p-4 border-t border-gray-200">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          )}

          {/* Reset Button */}
          {isSubmitted && (
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={resetChat}
                className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-200"
              >
                Start New Conversation
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot; 