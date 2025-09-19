import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, FolderOpen, Rocket, Play } from 'lucide-react';

const CTAButtons = ({ variant = 'primary', className = '', onConsultationClick }) => {
  const buttons = [
    {
      label: 'Get Started',
      icon: Rocket,
      to: '/contact',
      color: 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800',
      textColor: 'text-white',
      action: 'link'
    },
               {
             label: 'View Portfolio',
             icon: FolderOpen,
             to: '/it-portfolio',
             color: 'bg-white hover:bg-primary-50',
             textColor: 'text-primary-600',
             action: 'link'
           },
    {
      label: 'Schedule Consultation',
      icon: Calendar,
      to: '#',
      color: 'bg-gradient-to-r from-accent-indigo to-primary-600 hover:from-accent-indigo/90 hover:to-primary-700',
      textColor: 'text-white',
      action: 'modal'
    },
    {
      label: 'Start Your Projects',
      icon: Play,
      to: '/custom-projects',
      color: 'border-2 border-white hover:bg-white hover:text-primary-600',
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
