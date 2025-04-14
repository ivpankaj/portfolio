// src/app/contact/page.js
"use client"
import { useTheme } from '@/hooks/useTheme';
import { useState, useEffect, useRef } from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import Statistics from './Statistics';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';


export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeForm, setActiveForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'General Inquiry'
  });
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { darkMode, themeClasses } = useTheme();
  
  // Animation timers
  useEffect(() => {
    setIsVisible(true);
    
    const formTimer = setTimeout(() => {
      setActiveForm(true);
    }, 800);
    
    // Initialize map animation
    const mapTimer = setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.classList.remove('scale-95', 'opacity-0');
        mapRef.current.classList.add('scale-100', 'opacity-100');
      }
    }, 1500);
    
    return () => {
      clearTimeout(formTimer);
      clearTimeout(mapTimer);
    };
  }, []);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: 'General Inquiry'
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSocialClick = (platform: string) => {
    // In a real app, you would redirect to the actual social media links
    alert(`Redirecting to ${platform}`);
  };

  return (
    <div className={` ${themeClasses.primary} font-sans transition-colors duration-500`}>
   
      
      <div className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero section */}
          <div className="text-center">
            <h1 className={`text-4xl md:text-7xl font-bold mb-6 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
              Let&apos;s start a <span className="relative">
                conversation
                <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></span>
              </span>
            </h1>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-4 ${themeClasses.muted} ${isVisible ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'}`}>
              We&apos;re just a message away. Reach out to us for any inquiries, collaborations, or just to say hello.
            </p>
          </div>
          
          {/* Contact Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left panel - Contact Info */}
            <div className={`${themeClasses.primary} transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <ContactInfo 
                themeClasses={themeClasses} 
                handleSocialClick={handleSocialClick} 
                mapRef={mapRef} 
              />
            </div>
            
            {/* Right panel - Contact Form */}
            <div className={`${themeClasses.primary} flex items-center`}>
              <div className={`w-full transition-all duration-1000 transform ${activeForm ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                <ContactForm 
                  submitted={submitted}
                  setSubmitted={setSubmitted}
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  themeClasses={themeClasses}
                  darkMode={darkMode}
                />
              </div>
            </div>
          </div>
          
          {/* Statistics Section */}
          <Statistics themeClasses={themeClasses} isVisible={isVisible} />
          
          
          {/* FAQ Section */}
          <FAQSection themeClasses={themeClasses} />
          
          {/* Call to Action */}
          <CallToAction themeClasses={themeClasses} isVisible={isVisible} />
        </div>
      </div>
    </div>
  );
}