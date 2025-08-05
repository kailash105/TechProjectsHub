import React, { useState, useEffect, useRef } from "react";
import { Send, X, MessageCircle, User, Phone, Mail, CheckCircle, Clock } from "lucide-react";
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
    description: ""
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
      content: "Hello! 👋 Welcome to TechProjectsHub. I'm your AI assistant here to help you find the perfect solution. Let's start by getting to know you better.",
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
      options: ["Projects", "Training", "IT Solutions"],
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
      options: ["Project", "Research Paper", "Both"],
      timestamp: new Date()
    };
    setMessages(prev => [...prev, projectsMessage]);
    setCurrentStep("projectType");
  };

  const handleTrainingSelection = () => {
    const trainingMessage = {
      id: Date.now() + 6,
      type: "bot",
      content: "Excellent! Here are our available training courses:",
      options: [
        "Python Full Stack",
        "Java Full Stack", 
        "MERN Stack",
        "AI/ML",
        "Web Full Stack",
        "Frontend Development",
        "Backend Development",
        "Data Science",
        "VLSI",
        "Cloud Computing (Azure)",
        "Blockchain",
        "Python with DSA",
        "Java with DSA"
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
      content: "Perfect! Here are our IT Solutions:",
      options: [
        "Frontend Website",
        "Full Website with Backend + DB",
        "ML Projects",
        "DL Projects with UI"
      ],
      descriptions: {
        "Frontend Website": "Modern, responsive websites with HTML, CSS, JavaScript, and React",
        "Full Website with Backend + DB": "Complete web applications with frontend, backend, and database",
        "ML Projects": "Machine learning projects with data analysis and predictive models",
        "DL Projects with UI": "Deep learning projects with user-friendly interfaces"
      },
      timestamp: new Date()
    };
    setMessages(prev => [...prev, itSolutionsMessage]);
    setCurrentStep("itSolution");
  };

  const askForDomain = () => {
    const domainMessage = {
      id: Date.now() + 8,
      type: "bot",
      content: "Please select your domain:",
      options: [
        "Computer Science",
        "Electronics & Communication",
        "Electrical & Electronics",
        "Mechanical Engineering",
        "Civil Engineering",
        "AI/ML",
        "IoT",
        "Data Science"
      ],
      timestamp: new Date()
    };
    setMessages(prev => [...prev, domainMessage]);
    setCurrentStep("domain");
  };

  const askForDuration = () => {
    const durationMessage = {
      id: Date.now() + 9,
      type: "bot",
      content: "Choose your training duration:",
      options: ["1 Month", "2 Months", "3 Months"],
      timestamp: new Date()
    };
    setMessages(prev => [...prev, durationMessage]);
    setCurrentStep("duration");
  };

  const submitToGoogleSheets = async () => {
    setIsLoading(true);
    
    try {
      const formData = new FormData();
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
        const successMessage = {
          id: Date.now() + Math.random(),
          type: "bot",
          content: "Thank you! We'll get back to you within 12 hours. 🎉",
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
        }
        break;
      
      case "projectType":
        setUserData(prev => ({ ...prev, subOption: input }));
        askForDomain();
        break;
      
      case "courseSelection":
        setUserData(prev => ({ ...prev, course: input }));
        askForDuration();
        break;
      
      case "domain":
        setUserData(prev => ({ ...prev, domain: input }));
        submitToGoogleSheets();
        break;
      
      case "duration":
        setUserData(prev => ({ ...prev, duration: input }));
        submitToGoogleSheets();
        break;
      
      case "itSolution":
        setUserData(prev => ({ ...prev, itSolution: input }));
        const currentMessage = messages[messages.length - 1];
        const description = currentMessage.descriptions?.[input] || "";
        setUserData(prev => ({ ...prev, description }));
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
      domain: "",
      course: "",
      duration: "",
      itSolution: "",
      description: ""
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
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition"
            >
              <X size={20} />
            </button>
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
                   <p className="text-sm">{message.content}</p>
                  
                  {/* Options for bot messages */}
                  {message.type === "bot" && message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="block w-full text-left p-2 bg-white/20 rounded-lg hover:bg-white/30 transition text-sm"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Descriptions for IT Solutions */}
                  {message.type === "bot" && message.descriptions && (
                    <div className="mt-3 space-y-2">
                      {Object.entries(message.descriptions).map(([option, description]) => (
                        <div key={option} className="bg-white/20 rounded-lg p-2">
                          <button
                            onClick={() => handleOptionClick(option)}
                            className="block w-full text-left font-semibold text-sm"
                          >
                            {option}
                          </button>
                          <p className="text-xs opacity-90 mt-1">{description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-500"></div>
                    <span className="text-sm text-gray-600">Submitting...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          {!isSubmitted && (
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-2 rounded-full hover:from-green-600 hover:to-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          )}

          {/* Reset button for completed conversations */}
          {isSubmitted && (
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={resetChat}
                className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2"
              >
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <img 
                    src={aiBotImage} 
                    alt="AI Bot" 
                    className="w-3 h-3 object-contain"
                  />
                </div>
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