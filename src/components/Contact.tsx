// src/app/contact/page.js
"use client"
import { useState } from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'General Inquiry'
  });
  
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
    const socialLinks: { [key: string]: string } = {
      facebook: 'https://www.facebook.com/ivpankaj',
      twitter: 'https://x.com/ivpankaj',
      instagram: 'https://www.instagram.com/ivpankaj',
      linkedin: 'https://www.linkedin.com/in/ivpankaj15',
      github: 'https://github.com/ivpankaj',
      youtube: 'https://www.youtube.com/',
    };
  
    const url = socialLinks[platform.toLowerCase()];
  
    if (url) {
      window.open(url, '_blank'); // Opens in new tab
    } else {
      alert(`Unknown platform: ${platform}`);
    }
  };
  

  return (
    <div className="font-sans">
      <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Let&apos;s start a <span className="relative">
                conversation
                <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></span>
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              We&apos;re just a message away. Reach out to me for any inquiries, collaborations, or just to say hello.
            </p>
          </div>
          
          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left panel - Contact Info */}
            <div className="bg-white dark:bg-black rounded-lg border border-black dark:border-white p-6">
              <ContactInfo 
                handleSocialClick={handleSocialClick}
              />
            </div>
            
            {/* Right panel - Contact Form */}
            <div className="bg-white dark:bg-black rounded-lg border border-black dark:border-white shadow-md p-6">
              <ContactForm 
                submitted={submitted}
                setSubmitted={setSubmitted}
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
          
      
          
          {/* FAQ Section */}
          <FAQSection />
          
          {/* Call to Action */}
          <CallToAction />
        </div>
      </div>
    </div>
  );
}