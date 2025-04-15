// src/components/contact/FAQSection.js
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { faqs } from '@/data/navbar-data';
 
export default function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
 
  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };
 
  return (
    <div className="my-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={`mb-4 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300`}
          >
            <button
              className={`w-full text-left p-4 flex justify-between items-center font-medium text-gray-900 dark:text-white ${
                activeFAQ === index ? 'bg-gray-100 dark:bg-gray-800/50' : 'hover:bg-gray-50 dark:hover:bg-gray-900/20'
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <ChevronRight 
                size={20}
                className={`transform transition-transform duration-300 text-gray-700 dark:text-gray-300 ${
                  activeFAQ === index ? 'rotate-90' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeFAQ === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className={`p-4 pt-0 text-gray-600 dark:text-gray-300`}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}