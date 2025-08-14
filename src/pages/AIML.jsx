import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import aimlImg from "../assets/ImagesforTraining/AIML.png";
import { CheckCircle, Download, Users, Award, Clock, BookOpen, Wrench, Target, Building, Star, Brain, Database, Code, Rocket } from "lucide-react";

function AIML() {
  const [selectedDuration, setSelectedDuration] = useState("1-month");

  const durationData = {
    "1-month": {
      title: "1-Month AI & Machine Learning Foundation",
      goal: "Learn AI/ML fundamentals, Python for AI, and build your first ML models. Ideal for beginners starting their AI journey.",
      syllabus: [
        {
          week: "Week 1: Introduction to AI & Python Refresher",
          topics: [
            "Overview of AI, ML, DL – concepts & differences",
            "AI applications in industry",
            "Python basics (variables, loops, functions, data types)",
            "Libraries: NumPy, Pandas basics",
            "Hands-on: Simple data manipulations"
          ]
        },
        {
          week: "Week 2: Data Handling & Visualization",
          topics: [
            "Reading & writing datasets (CSV, JSON, Excel)",
            "Pandas: DataFrames, Series, filtering, grouping",
            "Data visualization with Matplotlib & Seaborn",
            "Handling missing values, duplicates",
            "Data preprocessing techniques"
          ]
        },
        {
          week: "Week 3: Mathematics for ML",
          topics: [
            "Linear Algebra (vectors, matrices, operations)",
            "Probability basics (conditional probability, Bayes theorem)",
            "Statistics (mean, median, mode, variance, std deviation)",
            "Introduction to Normal Distribution, Z-score",
            "Hands-on: Small data analysis tasks"
          ]
        },
        {
          week: "Week 4: Intro to Machine Learning",
          topics: [
            "Types of ML: Supervised, Unsupervised, Reinforcement",
            "ML workflow: Problem → Data → Model → Evaluation",
            "Scikit-learn basics (fit, predict, score)",
            "Simple Linear Regression project",
            "Mini Project: House Price Prediction"
          ]
        }
      ],
      outcomes: [
        "Understand core AI, ML, and DL concepts",
        "Build supervised & unsupervised ML models",
        "Preprocess & visualize datasets effectively",
        "Complete House Price Prediction project"
      ]
    },
    "2-months": {
      title: "2-Month AI & Machine Learning Advanced",
      goal: "Master supervised & unsupervised learning, ensemble methods, and build complex ML systems. Ideal for intermediate learners.",
      syllabus: [
        {
          week: "Week 1-4: Full 1-Month Content",
          topics: [
            "AI/ML fundamentals and Python for AI",
            "Data handling and visualization",
            "Mathematics for ML",
            "Introduction to Machine Learning"
          ]
        },
        {
          week: "Week 5: Supervised Learning – Classification",
          topics: [
            "Logistic Regression",
            "Decision Trees & Random Forest",
            "KNN (K-Nearest Neighbors)",
            "Evaluation metrics: Accuracy, Precision, Recall, F1-score",
            "Hands-on: Classification with real datasets"
          ]
        },
        {
          week: "Week 6: Advanced Supervised Learning",
          topics: [
            "Support Vector Machines (SVM)",
            "Gradient Boosting (XGBoost, LightGBM)",
            "Hyperparameter tuning with GridSearchCV",
            "Model evaluation and validation",
            "Hands-on: Spam Email Classification"
          ]
        },
        {
          week: "Week 7: Unsupervised Learning",
          topics: [
            "K-Means Clustering",
            "Hierarchical Clustering",
            "Dimensionality Reduction (PCA)",
            "Clustering evaluation metrics",
            "Hands-on: Customer Segmentation"
          ]
        },
        {
          week: "Week 8: Ensemble Learning & Model Improvement",
          topics: [
            "Bagging vs Boosting",
            "Stacking models",
            "Cross-validation techniques",
            "Model interpretability (SHAP, LIME intro)",
            "Mini Project: Customer Segmentation System"
          ]
        }
      ],
      outcomes: [
        "Master supervised & unsupervised learning algorithms",
        "Apply ensemble methods and model optimization",
        "Work with real-world datasets and solve business problems",
        "Complete Customer Segmentation project"
      ]
    },
    "3-months": {
      title: "3-Month AI & Machine Learning Professional",
      goal: "Master deep learning, NLP, computer vision, and deploy AI/ML models. Ideal for job seekers and advanced learners.",
      syllabus: [
        {
          week: "Week 1-8: Full 2-Month Content",
          topics: [
            "Complete 1-Month Foundation Course",
            "Complete 2-Month Advanced Course with Supervised & Unsupervised Learning"
          ]
        },
        {
          week: "Week 9: Neural Networks & Deep Learning",
          topics: [
            "Perceptron & Multilayer Perceptron",
            "Activation functions",
            "Backpropagation & Gradient Descent",
            "TensorFlow & Keras basics",
            "Hands-on: Build a basic ANN for classification"
          ]
        },
        {
          week: "Week 10: Natural Language Processing (NLP)",
          topics: [
            "Text preprocessing (tokenization, stemming, lemmatization)",
            "Bag of Words, TF-IDF",
            "Sentiment analysis project with Scikit-learn",
            "NLP libraries and tools",
            "Hands-on: Twitter Sentiment Classifier"
          ]
        },
        {
          week: "Week 11: Computer Vision & CNN",
          topics: [
            "Image preprocessing with OpenCV",
            "Convolutional Neural Networks (CNN)",
            "Image classification with Keras",
            "Transfer learning concepts",
            "Hands-on: Recognizing Handwritten Digits (MNIST)"
          ]
        },
        {
          week: "Week 12: Advanced Topics & Capstone",
          topics: [
            "Introduction to Reinforcement Learning concepts",
            "Transfer Learning",
            "Deploying ML models (Flask/FastAPI intro)",
            "Model optimization and deployment",
            "Capstone Project Development"
          ]
        }
      ],
      outcomes: [
        "Apply deep learning for image & text data",
        "Deploy AI/ML models as web applications",
        "Handle real-world datasets and solve business problems",
        "Complete full AI/ML capstone project with deployment"
      ]
    }
  };

  const toolsCovered = [
    { category: "Programming", tools: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"] },
    { category: "Machine Learning", tools: ["Scikit-learn", "XGBoost", "LightGBM", "SHAP", "LIME"] },
    { category: "Deep Learning", tools: ["TensorFlow", "Keras", "OpenCV", "NLTK", "spaCy"] },
    { category: "Deployment", tools: ["Flask", "FastAPI", "Docker", "Git", "GitHub"] },
    { category: "Cloud & Tools", tools: ["Google Colab", "Jupyter Notebook", "Postman", "Heroku"] }
  ];

  const whyChooseUs = [
    { icon: Brain, title: "AI-Focused Curriculum", desc: "Comprehensive coverage of AI/ML concepts and applications" },
    { icon: Wrench, title: "Industry-Standard Tools", desc: "Use tools and frameworks used in professional AI development" },
    { icon: Users, title: "Expert Mentorship", desc: "Get guidance from experienced AI/ML professionals" },
    { icon: BookOpen, title: "Project-Driven Learning", desc: "Learn by building real-world AI applications" },
    { icon: Star, title: "Career Support", desc: "Resume building and AI job interview preparation" }
  ];

  const pricing = [
    { 
      duration: "1 Month", 
      originalPrice: "₹8,100", 
      discountedPrice: "₹6,000", 
      savings: "₹2,100",
      features: ["Foundation Course", "4 Mini Projects", "Basic ML Models", "Certificate"] 
    },
    { 
      duration: "2 Months", 
      originalPrice: "₹15,524", 
      discountedPrice: "₹11,499", 
      savings: "₹4,025",
      features: ["Advanced Course", "6 Projects", "Ensemble Methods", "Career Guidance"] 
    },
    { 
      duration: "3 Months", 
      originalPrice: "₹25,919", 
      discountedPrice: "₹19,199", 
      savings: "₹6,720",
      features: ["Professional Course", "8+ Projects", "Deep Learning", "Job Placement Support"] 
    }
  ];

  const projects = [
    { month: "Month 1", title: "House Price Prediction", type: "Regression", description: "Linear regression model to predict house prices based on various features" },
    { month: "Month 2", title: "Image Classification with CNN", type: "Classification", description: "Convolutional Neural Network for image classification tasks" },
    { month: "Month 3", title: "Sentiment Analysis with Deployment", type: "NLP", description: "Natural Language Processing project with web deployment" },
    { month: "Capstone", title: "Full AI/ML Project", type: "End-to-End", description: "Complete AI/ML solution with deployment and documentation" }
  ];

  const courseOutcomes = [
    "Understand core AI, ML, and DL concepts",
    "Build supervised & unsupervised ML models",
    "Apply deep learning for image & text data",
    "Preprocess & visualize datasets effectively",
    "Deploy AI/ML models as web applications",
    "Handle real-world datasets and solve business problems"
  ];

  const projectOutcomes = [
    "Implement end-to-end AI/ML solutions",
    "Work with structured, image, and text datasets",
    "Optimize models for performance and accuracy",
    "Deploy models for real-world use cases"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-blue-50 to-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-20 pb-12">
        <img src={aimlImg} alt="AI & Machine Learning" className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 drop-shadow mb-4 text-center">AI & Machine Learning Training Program</h1>
          <span className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">Comprehensive AI/ML Development Training</span>
          <p className="max-w-3xl text-lg text-gray-700 mb-6 text-center font-medium">
            Master Artificial Intelligence and Machine Learning with hands-on projects, real-world datasets, and expert guidance. 
            Choose your training duration and embark on a journey to become a professional AI/ML engineer.
          </p>
        </div>
        <img src={aimlImg} alt="AI & Machine Learning" className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-white object-contain mt-4 mb-2 z-20" />
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
            <p className="text-gray-600 text-sm">Industry-standard AI/ML tools including TensorFlow, Scikit-learn, and cloud platforms</p>
          </div>

          {/* Ideal For */}
          <div className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-800">Ideal For</h3>
            </div>
            <p className="text-gray-600 text-sm">Beginners to advanced learners, data scientists, and AI/ML enthusiasts</p>
          </div>

          {/* About TechProjectsHub */}
          <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">About TechProjectsHub</h3>
            </div>
            <p className="text-gray-600 text-sm">A hands-on training platform for tech learners in AI/ML, Python, Cloud, and more</p>
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
          <p className="text-xl text-gray-600 mb-2">35% Discount on Industry-Ready AI & Machine Learning Training</p>
          <p className="text-lg text-gray-500">No hidden charges, just real value crafted for future AI engineers</p>
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
          <p className="text-gray-600">Hands-on projects to showcase your AI/ML skills</p>
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
          <p className="text-gray-600">Master the tools used in professional AI/ML development</p>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our AI/ML Training</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI/ML Journey?</h2>
          <p className="text-lg mb-6 opacity-90">Join our comprehensive AI & Machine Learning training program and become a professional AI engineer</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Enroll Now
            </button>
            <button
              onClick={() => window.open('/TrainingPDFS/AIML_Syllabus.pdf', '_blank')}
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

export default AIML; 