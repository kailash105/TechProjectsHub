import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, FolderOpen, Rocket, Play } from 'lucide-react';

const CTAButtons = ({ variant = 'primary', className = '', onConsultationClick }) => {
  const buttons = [
    {
      label: 'Get Started',
      icon: Rocket,
      to: '/contact',
      color: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700',
      textColor: 'text-white',
      action: 'link'
    },
               {
             label: 'View Portfolio',
             icon: FolderOpen,
             to: '/it-portfolio',
             color: 'bg-white hover:bg-gray-100',
             textColor: 'text-purple-600',
             action: 'link'
           },
    {
      label: 'Schedule Consultation',
      icon: Calendar,
      to: '#',
      color: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
      textColor: 'text-white',
      action: 'modal'
    },
    {
      label: 'Start Your Projects',
      icon: Play,
      to: '/custom-projects',
      color: 'border-2 border-white hover:bg-white hover:text-purple-600',
      textColor: 'text-white',
      action: 'link'
    }
  ];

  return (
    <div className={`flex flex-wrap gap-4 justify-center ${className}`}>
      {buttons.map((button, index) => (
        button.action === 'modal' ? (
          <button
            key={index}
            onClick={onConsultationClick}
            className={`flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${button.color} ${button.textColor}`}
          >
            <button.icon className="w-5 h-5" />
            {button.label}
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        ) : (
          <Link
            key={index}
            to={button.to}
            className={`flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${button.color} ${button.textColor}`}
          >
            <button.icon className="w-5 h-5" />
            {button.label}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        )
      ))}
    </div>
  );
};

export default CTAButtons;
