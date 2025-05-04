"use client"
import React, { useState, useEffect } from 'react';
import { Code, Database, Layout, Smartphone, Globe, Server, Zap, TouchpadOff } from 'lucide-react';
import { MarqueeDemo } from './TechStack';

// Assuming MorphingTextDemo is imported from parent component
// This is a placeholder implementation
const MorphingTextDemo = () => {
  const phrases = React.useMemo(() => [
    "Full Stack Development",
    "Web Applications",
    "Mobile Solutions",
    "Backend Systems",
    "API Integration",
    "Database Design"
  ], []);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const current = phrases[currentIndex];
      
      if (!isDeleting) {
        setDisplay(current.substring(0, display.length + 1));
        if (display === current) {
          setIsDeleting(true);
          clearInterval(interval);
          setTimeout(() => setInterval(() => {}, 1000), 1000);
        }
      } else {
        setDisplay(current.substring(0, display.length - 1));
        if (display === '') {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % phrases.length);
        }
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, [currentIndex, display, isDeleting, phrases]);
  
  return (
    <div className="font-bold text-3xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white">
      <span>{display}</span>
      <span className="animate-pulse">|</span>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ComponentType<{ size: number; className?: string }>;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white dark:bg-black border border-gray-200 dark:border-white rounded-lg p-6 transition-all duration-300 h-full ${
        isHovered ? "transform -translate-y-2 shadow-lg shadow-gray-300/20 dark:shadow-black/20" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center mb-4 bg-gray-100 dark:bg-gray-700 p-3 rounded-full w-16 h-16">
        <Icon size={24} className="text-gray-900 dark:text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const Services = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const parallaxOffset = scrollPosition * 0.1;
  
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with React, Next.js, and other cutting-edge technologies."
    },
    {
      icon: Server,
      title: "Backend Solutions",
      description: "Robust server-side applications using Node.js, Express, Django, or Laravel with secure authentication systems."
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Efficient database architecture using SQL or NoSQL solutions like MongoDB, PostgreSQL, or Firebase."
    },
    {
      icon: Code,
      title: "API Development",
      description: "RESTful and GraphQL APIs that connect your applications seamlessly with third-party services."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications using React Native or native solutions for iOS and Android."
    },
    {
      icon: TouchpadOff,
      title: "DevOps & CI/CD",
      description: "Automated testing, deployment pipelines, and cloud infrastructure setup for seamless delivery."
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "User-centered interfaces with intuitive experiences that keep your users engaged and satisfied."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your applications with code optimization, caching strategies, and infrastructure improvements."
    }
  ];
  
  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <div 
        className="relative overflow-hidden py-20 md:py-32 px-4"
      
      >
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/api/placeholder/1920/1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${parallaxOffset}px)`
          }}
        />
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-gray-600 dark:text-gray-400 text-sm md:text-base uppercase tracking-wider">
              Hire me for..
            </div>
            
            <div className="h-20">
              <MorphingTextDemo />
            </div>
            
            <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl">
              Transforming ideas into exceptional digital experiences with cutting-edge technologies and best practices.
            </p>
          
          </div>
        </div>
      </div>
      
      {/* Services Grid */}
      <div className="px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Comprehensive Full Stack Services</h2>
            <div className="h-1 w-20 bg-gray-300 dark:bg-gray-700 mx-auto"></div>
            <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              From front-end development to database architecture, I deliver complete solutions 
              for businesses of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-20 px-4 bg-gray-50 dark:bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Technology Stack I worked with..</h2>
            <div className="h-1 w-20 bg-gray-300 dark:bg-gray-700 mx-auto"></div>
            <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              I work with the latest technologies to deliver high-quality, scalable applications.
            </p>
          </div>
          
     <MarqueeDemo/>
     
        </div>
      </div>
    
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Services;