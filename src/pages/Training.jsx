import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  ArrowRight,
  Clock,
  Users,
  Star,
  CheckCircle,
  Play
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import pythonImg from "../assets/ImagesforTraining/Python.png";
import javaImg from "../assets/ImagesforTraining/java-logo.png";
import mernImg from "../assets/ImagesforTraining/MERN.png";
import aimlImg from "../assets/ImagesforTraining/AIML.png";
import webFullStackImg from "../assets/ImagesforTraining/full-stack-web-developer.png";
import dataScienceImg from "../assets/ImagesforTraining/DataScience.webp";
import frontEndImg from "../assets/ImagesforTraining/Frontend.png";

import vlsiImg from "../assets/ImagesforTraining/VLSI.png";
import azureImg from "../assets/ImagesforTraining/Azure.png";
import blockchainImg from "../assets/ImagesforTraining/Blockchain.png";
import pythonDSAImg from "../assets/ImagesforTraining/PythonDSA.png";
import javaDSAImg from "../assets/ImagesforTraining/JavaDSA.jpg";

const Training = () => {
  const trainings = [
    { title: "Python Full Stack", image: pythonImg, desc: "End-to-end web development with Python.", duration: "1/2/3 Months", route: "/training/python-full-stack" },
    { title: "Java Full Stack", image: javaImg, desc: "Comprehensive Java web development.", duration: "1/2/3 Months", route: "/training/java-full-stack" },
    { title: "MERN stack", image: mernImg, desc: "MongoDB, Express, React, Node.js mastery.", duration: "1/2/3 Months", route: "/training/mern-stack" },
    { title: "AI/ML", image: aimlImg, desc: "Artificial Intelligence & Machine Learning hands-on.", duration: "1/2/3 Months", route: "/training/ai-ml" },
    { title: "Web Full Stack", image: webFullStackImg, desc: "Modern web stack for scalable apps.", duration: "1/2/3 Months", route: "/training/web-full-stack" },
    { title: "Front End", image: frontEndImg, desc: "UI/UX and front-end frameworks.", duration: "1/2/3 Months", route: "/training/front-end" },

    { title: "Data Science", image: dataScienceImg, desc: "Data analysis, visualization, and ML.", duration: "1/2/3 Months", route: "/training/data-science" },
    { title: "VLSI", image: vlsiImg, desc: "Very Large Scale Integration design and implementation.", duration: "1/2/3 Months", route: "/training/vlsi" },
    { title: "Cloud Computing (Azure)", image: azureImg, desc: "Azure cloud services and deployment.", duration: "1/2/3 Months", route: "/training/cloud-computing-azure" },
    { title: "Block Chain", image: blockchainImg, desc: "Blockchain fundamentals and smart contracts.", duration: "1/2/3 Months", route: "/training/block-chain" },
    { title: "Generative AI", image: aimlImg, desc: "Cutting-edge AI with LLMs, text, image, and audio generation.", duration: "1/2/3 Months", route: "/training/gen-ai" },
    { title: "Python with DSA", image: pythonDSAImg, desc: "Python with Data Structures for coding interviews.", duration: "3 Months", route: "/training/python-with-ds" },
    { title: "Java with DSA", image: javaDSAImg, desc: "Java with Data Structures & Algorithms.", duration: "3 Months", route: "/training/java-with-dsa" },
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of experience'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Choose from morning, evening, or weekend batches'
    },
    {
      icon: CheckCircle,
      title: 'Project-Based Learning',
      description: 'Build real-world projects to enhance your portfolio'
    },
    {
      icon: Star,
      title: 'Certification',
      description: 'Receive industry-recognized certificates upon completion'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Training/Trainingvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70"></div>
        <div className="relative z-10 text-white px-6 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Professional Training Programs
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-lg">
              Master cutting-edge technologies with our comprehensive training programs. 
              Learn from experts and build real-world projects to advance your career.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Training?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best in technology education with our proven approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training Courses */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of technology training programs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {trainings.map((training, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {training.image ? (
                      <img src={training.image} alt={training.title} className="w-12 h-12 object-contain" />
                    ) : (
                      <BookOpen className="w-8 h-8 text-white" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{training.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{training.desc}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {training.duration}
                    </span>
                  </div>
                  
                  <Link 
                    to={training.route}
                    className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors group-hover:gap-3 text-sm"
                  >
                    Know More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training Process */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Our Training Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, effective approach to mastering new technologies
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Path</h3>
              <p className="text-gray-600">Select from our range of technology training programs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Learn & Practice</h3>
              <p className="text-gray-600">Learn from experts and practice with hands-on projects</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Build Portfolio</h3>
              <p className="text-gray-600">Create real-world projects for your professional portfolio</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Certified</h3>
              <p className="text-gray-600">Receive industry-recognized certification</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of students who have transformed their careers with our training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Start Learning
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/lms" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              LMS Portal
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Training; 