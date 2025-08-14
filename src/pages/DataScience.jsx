import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import dataScienceImg from "../assets/ImagesforTraining/DataScience.webp";
import { CheckCircle, Download, Users, Award, Clock, BookOpen, Wrench, Target, Building, Star, Database, ChartBar, Brain, Rocket } from "lucide-react";

function DataScience() {
  const [selectedDuration, setSelectedDuration] = useState("1-month");

  const durationData = {
    "1-month": {
      title: "1-Month Data Science Foundation",
      goal: "Learn data science foundations, Python for data, and build your first data analysis project. Ideal for beginners starting their data science journey.",
      syllabus: [
        {
          week: "Week 1: Introduction & Python Basics for Data Science",
          topics: [
            "What is Data Science? Industry applications",
            "Data Science workflow overview",
            "Python refresher: syntax, variables, loops, functions",
            "Working with Jupyter Notebook & Google Colab"
          ]
        },
        {
          week: "Week 2: Data Wrangling with Pandas & NumPy",
          topics: [
            "NumPy arrays and vectorized operations",
            "Pandas DataFrames & Series",
            "Importing/exporting CSV, Excel, JSON",
            "Filtering, grouping, merging datasets"
          ]
        },
        {
          week: "Week 3: Data Visualization",
          topics: [
            "Matplotlib basics: bar, line, scatter plots",
            "Seaborn for statistical visualizations",
            "Customizing plots for storytelling",
            "Visualizing distributions, correlations, and trends"
          ]
        },
        {
          week: "Week 4: Exploratory Data Analysis (EDA)",
          topics: [
            "Identifying missing data & outliers",
            "Statistical summaries of data",
            "Data cleaning best practices",
            "EDA case study with real dataset"
          ]
        }
      ],
      outcomes: [
        "Understand data science fundamentals and workflow",
        "Master Python for data analysis and manipulation",
        "Create compelling data visualizations",
        "Complete E-commerce Sales Analysis project"
      ]
    },
    "2-months": {
      title: "2-Month Data Science Advanced",
      goal: "Master statistics, probability, and machine learning fundamentals. Ideal for intermediate learners building data science skills.",
      syllabus: [
        {
          week: "Week 1-4: Full 1-Month Content",
          topics: [
            "Data Science foundations and Python basics",
            "Data wrangling with Pandas & NumPy",
            "Data visualization techniques",
            "Exploratory Data Analysis (EDA)"
          ]
        },
        {
          week: "Week 5: Statistics for Data Science",
          topics: [
            "Descriptive statistics: mean, median, mode, variance, std dev",
            "Inferential statistics: hypothesis testing, t-tests, chi-square",
            "Confidence intervals & p-values",
            "Statistical analysis with Python"
          ]
        },
        {
          week: "Week 6: Probability & Distributions",
          topics: [
            "Probability theory basics",
            "Normal, binomial, and Poisson distributions",
            "Central limit theorem",
            "Probability applications in data science"
          ]
        },
        {
          week: "Week 7: Feature Engineering & Preprocessing",
          topics: [
            "Encoding categorical variables",
            "Scaling & normalization",
            "Handling imbalanced datasets",
            "Train-test split & cross-validation"
          ]
        },
        {
          week: "Week 8: Introduction to Machine Learning",
          topics: [
            "Supervised vs Unsupervised learning",
            "Linear regression & multiple regression",
            "Classification with Logistic Regression",
            "Model evaluation metrics (accuracy, precision, recall, F1-score)"
          ]
        }
      ],
      outcomes: [
        "Apply statistical concepts to data analysis",
        "Understand probability and distributions",
        "Perform feature engineering and preprocessing",
        "Build and evaluate machine learning models"
      ]
    },
    "3-months": {
      title: "3-Month Data Science Professional",
      goal: "Master advanced ML, model deployment, and build a complete data science portfolio. Ideal for job seekers and advanced learners.",
      syllabus: [
        {
          week: "Week 1-8: Full 2-Month Content",
          topics: [
            "Complete 1-Month Foundation Course",
            "Complete 2-Month Advanced Course with Statistics & ML"
          ]
        },
        {
          week: "Week 9: Advanced Machine Learning for Data Science",
          topics: [
            "Decision Trees & Random Forests",
            "k-Nearest Neighbors (kNN)",
            "Clustering with k-Means",
            "PCA for dimensionality reduction"
          ]
        },
        {
          week: "Week 10: Time Series & Forecasting",
          topics: [
            "Introduction to time series data",
            "ARIMA models",
            "Seasonal decomposition",
            "Forecasting case study"
          ]
        },
        {
          week: "Week 11: Model Deployment & Visualization Dashboards",
          topics: [
            "Intro to Flask & FastAPI for model deployment",
            "Creating interactive dashboards with Streamlit",
            "Deploying models to cloud (Heroku, Render)",
            "Building production-ready data applications"
          ]
        },
        {
          week: "Week 12: Capstone Project",
          topics: [
            "Full Data Science pipeline on a large dataset",
            "Data cleaning → EDA → Model building → Deployment",
            "Project presentation and documentation",
            "Portfolio development and career preparation"
          ]
        }
      ],
      outcomes: [
        "Build advanced machine learning models",
        "Deploy models as web apps or dashboards",
        "Create a professional data science portfolio",
        "Complete end-to-end data science projects"
      ]
    }
  };

  const toolsCovered = [
    { category: "Programming", tools: ["Python", "Jupyter Notebook", "Google Colab", "Pandas", "NumPy"] },
    { category: "Visualization", tools: ["Matplotlib", "Seaborn", "Plotly", "Streamlit", "Dash"] },
    { category: "Machine Learning", tools: ["Scikit-learn", "Scipy", "Statsmodels", "XGBoost", "LightGBM"] },
    { category: "Statistics", tools: ["Descriptive Stats", "Inferential Stats", "Hypothesis Testing", "Probability", "Distributions"] },
    { category: "Deployment", tools: ["Flask", "FastAPI", "Heroku", "Render", "Git"] }
  ];

  const whyChooseUs = [
    { icon: Database, title: "Project-Driven Learning", desc: "Learn by working with real datasets from finance, healthcare, e-commerce" },
    { icon: Wrench, title: "Industry-Standard Tools", desc: "Use tools and frameworks used in professional data science" },
    { icon: Users, title: "Expert Mentorship", desc: "Get guidance from experienced data scientists" },
    { icon: BookOpen, title: "Complete Workflow", desc: "Cover full Data Science workflow from raw data to actionable insights" },
    { icon: Star, title: "Career Support", desc: "Resume-building projects and portfolio development" }
  ];

  const pricing = [
    { 
      duration: "1 Month", 
      originalPrice: "₹4,723", 
      discountedPrice: "₹3,499", 
      savings: "₹1,224",
      features: ["Foundation Course", "4 Mini Projects", "Data Analysis", "Certificate"] 
    },
    { 
      duration: "2 Months", 
      originalPrice: "₹9,447", 
      discountedPrice: "₹6,998", 
      savings: "₹2,449",
      features: ["Advanced Course", "6 Projects", "Machine Learning", "Career Guidance"] 
    },
    { 
      duration: "3 Months", 
      originalPrice: "₹14,170", 
      discountedPrice: "₹10,497", 
      savings: "₹3,673",
      features: ["Professional Course", "8+ Projects", "Model Deployment", "Job Placement Support"] 
    }
  ];

  const projects = [
    { month: "Month 1", title: "E-commerce Sales Analysis", type: "Data Analysis", description: "Complete data analysis and visualization of e-commerce sales data" },
    { month: "Month 2", title: "House Price Prediction", type: "Machine Learning", description: "Build and evaluate linear regression models for house price prediction" },
    { month: "Month 3", title: "Customer Churn Prediction", type: "Advanced ML", description: "End-to-end data science project with model deployment" },
    { month: "Capstone", title: "Professional Portfolio", type: "Deployment", description: "Complete data science portfolio with multiple projects" }
  ];

  const courseOutcomes = [
    "Perform complete data analysis on real-world datasets",
    "Visualize and interpret data trends effectively",
    "Build and evaluate ML models for prediction and classification",
    "Deploy models as web apps or dashboards",
    "Showcase a professional Data Science portfolio",
    "Apply statistical concepts to business problems"
  ];

  const projectOutcomes = [
    "Create compelling data visualizations and dashboards",
    "Build predictive models for real-world applications",
    "Deploy machine learning models to production",
    "Develop a professional data science portfolio"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-white relative overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center pt-20 pb-12">
        <img src={dataScienceImg} alt="Data Science" className="absolute top-0 right-0 w-48 opacity-20 pointer-events-none select-none hidden md:block" style={{zIndex:1}} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow mb-4 text-center">Data Science Training Program</h1>
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow">Comprehensive Data Science Training</span>
          <p className="max-w-3xl text-lg text-gray-700 mb-6 text-center font-medium">
            Master data science with hands-on projects, real datasets, and expert guidance. 
            Choose your training duration and embark on a journey to become a professional data scientist.
          </p>
        </div>
        <img src={dataScienceImg} alt="Data Science" className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-white object-contain mt-4 mb-2 z-20" />
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
            <p className="text-gray-600 text-sm">Industry-standard data science tools including Python, ML libraries, and visualization platforms</p>
          </div>

          {/* Ideal For */}
          <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-800">Ideal For</h3>
            </div>
            <p className="text-gray-600 text-sm">Beginners to intermediate learners, students, and professionals looking for data science careers</p>
          </div>

          {/* About TechProjectsHub */}
          <div className="bg-white/80 backdrop-blur-lg border border-green-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Building className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-green-800">About TechProjectsHub</h3>
            </div>
            <p className="text-gray-600 text-sm">A hands-on training platform for tech learners in data science, AI/ML, Python, and more</p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/80 backdrop-blur-lg border border-orange-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-bold text-orange-800">Why Choose Us</h3>
            </div>
            <p className="text-gray-600 text-sm">Project-driven learning with real datasets and expert mentorship</p>
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
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" 
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
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
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
                <Award className="w-5 h-5 text-purple-600" />
                Outcomes
              </h4>
              <ul className="space-y-3">
                {durationData[selectedDuration].outcomes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
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
          <p className="text-xl text-gray-600 mb-2">35% Discount on Industry-Ready Data Science Training</p>
          <p className="text-lg text-gray-500">No hidden charges, just real value crafted for future data scientists</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* 1-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              35% OFF
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">1-Month Foundation</h3>
              <p className="text-gray-600 mb-4">Perfect for beginners</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-blue-600">{pricing[0].discountedPrice}</span>
                <span className="text-lg text-gray-400 line-through ml-2">{pricing[0].originalPrice}</span>
              </div>
              <p className="text-sm text-gray-500">You save {pricing[0].savings}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {pricing[0].features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
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

          {/* 2-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-purple-200 p-8 relative overflow-hidden transform scale-105">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              35% OFF
            </div>
            <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 text-xs font-bold rounded-full">
              POPULAR
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2-Month Advanced</h3>
              <p className="text-gray-600 mb-4">Most popular choice</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-purple-600">{pricing[1].discountedPrice}</span>
                <span className="text-lg text-gray-400 line-through ml-2">{pricing[1].originalPrice}</span>
              </div>
              <p className="text-sm text-gray-500">You save {pricing[1].savings}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {pricing[1].features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
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

          {/* 3-Month Plan */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-green-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-2 text-sm font-bold transform rotate-12 translate-x-2 -translate-y-2">
              35% OFF
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">3-Month Professional</h3>
              <p className="text-gray-600 mb-4">Complete career preparation</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-green-600">{pricing[2].discountedPrice}</span>
                <span className="text-lg text-gray-400 line-through ml-2">{pricing[2].originalPrice}</span>
              </div>
              <p className="text-sm text-gray-500">You save {pricing[2].savings}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {pricing[2].features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
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
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects You'll Build</h2>
          <p className="text-gray-600">Hands-on projects to showcase your data science skills</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ChartBar className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{project.month}</h3>
                <span className="text-sm text-blue-600 font-semibold">{project.type}</span>
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
          <div className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Course Outcomes
            </h3>
            <div className="space-y-3">
              {courseOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Outcomes */}
          <div className="bg-white/80 backdrop-blur-lg border border-purple-200 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-purple-600" />
              Project Outcomes
            </h3>
            <div className="space-y-3">
              {projectOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
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
          <p className="text-gray-600">Master the tools used in professional data science</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {toolsCovered.map((category, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-blue-700 mb-4 text-center">{category.category}</h3>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Data Science Training</h2>
          <p className="text-gray-600">Discover what makes our program unique</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-lg border border-blue-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-8 h-8 text-blue-600" />
                <h3 className="font-bold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto w-full px-4 mb-12">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Data Science Journey?</h2>
          <p className="text-lg mb-6 opacity-90">Join our comprehensive Data Science training program and become a professional data scientist</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://forms.gle/AEEHKkbf8amXPvTeA', '_blank')}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Enroll Now
            </button>
            <button
              onClick={() => window.open('/TrainingPDFS/DataScience_Syllabus.pdf', '_blank')}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
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

export default DataScience; 