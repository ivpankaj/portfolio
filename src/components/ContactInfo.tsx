// src/components/contact/ContactInfo.js
import { 
    Instagram, 
    Twitter, 
    Facebook, 
    Linkedin, 
    Github, 
    Phone, 
    Mail, 
    MapPin,
    Clock
  } from 'lucide-react';
  
 

  interface ContactInfoProps {
   
    handleSocialClick: (platform: string) => void;
  }

  export default function ContactInfo({  handleSocialClick,  }: ContactInfoProps) {
    return (
      <>
        <div className="mb-12 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className={`h-1 w-24  mb-6`}></div>
          <p className={` text-lg`}>I&apos;d love to hear from you. Fill out the form or reach out through my contact details.</p>
        </div>
        
        <div className="space-y-8 mb-12">
  <div className="flex items-center space-x-4 group">
    <div className={`p-3 rounded-full transition-all duration-300 group-hover:scale-110`}>
      <Phone size={24} />
    </div>
    <div>
      <h3 className={`text-sm`}>Phone</h3>
      <a href="tel:+919911064724" className="text-lg font-medium text-blue-600 hover:underline">
        +91 9911064724
      </a>
    </div>
  </div>

  <div className="flex items-center space-x-4 group">
    <div className={`p-3 rounded-full transition-all duration-300 group-hover:scale-110`}>
      <Mail size={24} />
    </div>
    <div>
      <h3 className={`text-sm`}>Email</h3>
      <a href="mailto:imvpankaj@gmail.com" className="text-lg font-medium text-blue-600 hover:underline">
        imvpankaj@gmail.com
      </a>
    </div>
  </div>

  <div className="flex items-center space-x-4 group">
    <div className={`p-3 rounded-full transition-all duration-300 group-hover:scale-110`}>
      <MapPin size={24} />
    </div>
    <div>
      <h3 className={`text-sm`}>Address</h3>
      <a
        href="https://www.google.com/maps?q=Noida, India"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-medium text-blue-600 hover:underline"
      >
        Noida, India
      </a>
    </div>
  </div>

  <div className="flex items-center space-x-4 group">
    <div className={`p-3 rounded-full transition-all duration-300 group-hover:scale-110`}>
      <Clock size={24} />
    </div>
    <div>
      <h3 className={`text-sm`}>Working Hours</h3>
      <p className="text-lg font-medium">Mon-Fri: 9AM-6PM IST</p>
    </div>
  </div>
</div>

        
        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6">Connect with me</h3>
          <div className="flex space-x-4">
            <button 
              onClick={() => handleSocialClick('Instagram')}
              className={` p-3 rounded-full hover:scale-110 transform transition-all duration-300 cursor-pointer`}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </button>
            <button 
              onClick={() => handleSocialClick('Twitter')}
              className={` p-3 rounded-full hover:scale-110 transform transition-all duration-300 cursor-pointer`}
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </button>
            <button 
              onClick={() => handleSocialClick('Facebook')}
              className={` p-3 rounded-full hover:scale-110 transform transition-all duration-300 cursor-pointer`}
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </button>
            <button 
              onClick={() => handleSocialClick('LinkedIn')}
              className={` p-3 rounded-full hover:scale-110 transform transition-all duration-300 cursor-pointer`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </button>
            <button 
              onClick={() => handleSocialClick('GitHub')}
              className={` p-3 rounded-full hover:scale-110 transform transition-all duration-300 cursor-pointer`}
              aria-label="GitHub"
            >
              <Github size={20} />
            </button>
          </div>
        </div>
        

        
      </>
    );
  }