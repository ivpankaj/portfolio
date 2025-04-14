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
  
  interface ThemeClasses {
    highlight: string;
    muted: string;
    border: string;
  }

  interface ContactInfoProps {
    themeClasses: ThemeClasses;
    handleSocialClick: (platform: string) => void;
    mapRef: React.RefObject<HTMLDivElement | null>;
  }

  export default function ContactInfo({ themeClasses, handleSocialClick,  }: ContactInfoProps) {
    return (
      <>
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className={`h-1 w-24 ${themeClasses.highlight} mb-6`}></div>
          <p className={`${themeClasses.muted} text-lg`}>We&apos;d love to hear from you. Fill out the form or reach out through our contact details.</p>
        </div>
        
        <div className="space-y-8 mb-12">
          <div className="flex items-center space-x-4 group">
            <div className={`${themeClasses.highlight} p-3 rounded-full transition-all duration-300 group-hover:scale-110`}>
              <Phone size={24} />
            </div>
            <div>
              <h3 className={`text-sm ${themeClasses.muted}`}>Phone</h3>
              <p className="text-lg font-medium">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 group">
            <div className={`${themeClasses.highlight} p-3 rounded-full transition-all duration-300 group-hover:scale-110`}>
              <Mail size={24} />
            </div>
            <div>
              <h3 className={`text-sm ${themeClasses.muted}`}>Email</h3>
              <p className="text-lg font-medium">hello@company.com</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 group">
            <div className={`${themeClasses.highlight} p-3 rounded-full transition-all duration-300 group-hover:scale-110`}>
              <MapPin size={24} />
            </div>
            <div>
              <h3 className={`text-sm ${themeClasses.muted}`}>Address</h3>
              <p className="text-lg font-medium">123 Business Ave, New York, NY 10001</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 group">
            <div className={`${themeClasses.highlight} p-3 rounded-full transition-all duration-300 group-hover:scale-110`}>
              <Clock size={24} />
            </div>
            <div>
              <h3 className={`text-sm ${themeClasses.muted}`}>Business Hours</h3>
              <p className="text-lg font-medium">Mon-Fri: 9AM-6PM EST</p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-xl font-medium mb-6">Connect with us</h3>
          <div className="flex space-x-4">
            <button 
              onClick={() => handleSocialClick('Instagram')}
              className={`${themeClasses.highlight} p-3 rounded-full hover:scale-110 transform transition-all duration-300`}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </button>
            <button 
              onClick={() => handleSocialClick('Twitter')}
              className={`${themeClasses.highlight} p-3 rounded-full hover:scale-110 transform transition-all duration-300`}
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </button>
            <button 
              onClick={() => handleSocialClick('Facebook')}
              className={`${themeClasses.highlight} p-3 rounded-full hover:scale-110 transform transition-all duration-300`}
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </button>
            <button 
              onClick={() => handleSocialClick('LinkedIn')}
              className={`${themeClasses.highlight} p-3 rounded-full hover:scale-110 transform transition-all duration-300`}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </button>
            <button 
              onClick={() => handleSocialClick('GitHub')}
              className={`${themeClasses.highlight} p-3 rounded-full hover:scale-110 transform transition-all duration-300`}
              aria-label="GitHub"
            >
              <Github size={20} />
            </button>
          </div>
        </div>
        

        {/* <div 
          ref={mapRef}
          className={`rounded-lg overflow-hidden h-64 transform scale-95 opacity-0 transition-all duration-1000 ease-out ${themeClasses.border} border`}
        >
          <div className="w-full h-full bg-gray-800 relative overflow-hidden">
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 ${themeClasses.highlight} rounded-full`}>
              <span className="absolute inset-0 rounded-full animate-ping opacity-75 bg-current"></span>
              <span className="absolute inset-1/4 rounded-full bg-current"></span>
            </div>
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black"></div>
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 p-2 rounded text-sm text-white font-medium">
              <MapPin size={14} className="inline mr-1" /> Company HQ
            </div>
          </div>
        </div> */}
      </>
    );
  }