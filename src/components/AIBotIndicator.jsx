import React, { useState } from "react";
import aiBotImage from "/AI_Bot.PNG";

const AIBotIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.5); }
            50% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.8); }
          }
        `}
      </style>
      
      {/* Floating AI Bot Indicator */}
      <div 
        className="fixed top-4 right-4 z-40 bg-white/90 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-lg border border-green-200 cursor-pointer transition-all duration-300 hover:scale-110"
        style={{ 
          animation: 'float 3s ease-in-out infinite, glow 2s ease-in-out infinite',
          zIndex: 9997
        }}
        onClick={() => setIsVisible(false)}
        title="AI Assistant Available"
      >
        <img 
          src={aiBotImage} 
          alt="AI Bot" 
          className="w-10 h-10 md:w-12 md:h-12 object-cover"
        />
      </div>
      
      {/* AI Bot Label */}
      <div 
        className="fixed top-16 right-4 z-40 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
        style={{ 
          animation: 'float 3s ease-in-out infinite',
          zIndex: 9996
        }}
      >
        AI Assistant
      </div>
    </>
  );
};

export default AIBotIndicator; 