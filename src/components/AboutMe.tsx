"use client"
import React, { useState, useEffect } from 'react';
import { Code, Database, Layout, Smartphone, Globe, Server, Zap, TouchpadOff } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ComponentType<{ size: number; className?: string }>;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white dark:bg-black border border-gray-200 dark:border-white rounded-lg p-6 transition-all duration-300 h-full ${isHovered ? "transform -translate-y-2 shadow-lg shadow-gray-300/20 dark:shadow-black/20" : ""
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
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "High-quality websites that look great and work perfectly on all devices, built for your unique needs."
    },
    {
      icon: Server,
      title: "Backend Solutions",
      description: "Powerful backend systems that handle your business logic securely and efficiently, invisible but essential."
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Secure and organized data storage to keep your valuable business information safe and easily accessible."
    },
    {
      icon: Code,
      title: "System Integration (API)",
      description: "Connecting your different software tools (like payment gateways or CRM) so they talk to each other seamlessly."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Custom mobile apps for iOS and Android to help you reach your customers wherever they are."
    },
    {
      icon: TouchpadOff,
      title: "Reliable Deployment",
      description: "Ensuring your website is always available, secure, and running smoothly without downtime."
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "Intuitive Designs: Creating easy-to-use interfaces that your users will enjoy navigating."
    },
    {
      icon: Zap,
      title: "Speed Optimization",
      description: "Fast-loading websites that provide a better user experience and rank higher on Google."
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen">
      {/* Services Grid */}
      <div className="px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Services I Offer
            </h2>
            <div className="h-1 w-20 bg-gray-300 dark:bg-gray-700 mx-auto"></div>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Top-notch digital services in <span className="text-blue-500 font-semibold">Noida & Greater Noida</span>. From creating your website to keeping it running smoothly, I handle the technical details.
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