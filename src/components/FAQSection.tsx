// src/components/contact/FAQSection.js
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { faqs } from '@/data/navbar-data';

interface FAQSectionProps {
  themeClasses: {
    border: string;
    muted: string;
  };
}

export default function FAQSection({ themeClasses }: FAQSectionProps) {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="my-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={`mb-4 border ${themeClasses.border} rounded-lg overflow-hidden transition-all duration-300`}
          >
            <button 
              className={`w-full text-left p-4 flex justify-between items-center font-medium ${activeFAQ === index ? 'bg-opacity-10 bg-current' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <ChevronRight 
                size={20} 
                className={`transform transition-transform duration-300 ${activeFAQ === index ? 'rotate-90' : ''}`} 
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFAQ === index ? 'max-h-40' : 'max-h-0'}`}
            >
              <div className={`p-4 pt-0 ${themeClasses.muted}`}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}