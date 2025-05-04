// src/components/contact/ContactForm.js
import { ChevronRight, ArrowRight, Check } from 'lucide-react';

interface ContactFormProps {
  submitted: boolean;
  setSubmitted: (value: boolean) => void;
  formData: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function ContactForm({ 
  submitted, 
  setSubmitted, 
  formData, 
  handleInputChange, 
  handleSubmit
}: ContactFormProps) {
  return (
    <>
      {submitted ? (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={32} className="text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-green-600 mb-6">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-all duration-300 inline-flex items-center"
          >
            Send Another Message
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      ) : (
        <>
          <div className=" rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-2">Send me a message</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Full Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name} 
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-transparent" 
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Email Address</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-transparent" 
                  placeholder="Your mail"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Phone Number</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone || ''} 
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-transparent" 
                    placeholder="Your Phone Number"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all dark:bg-black bg-white"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Support Request">Support Request</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-transparent h-32" 
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 py-3 px-6 rounded-md transition-all duration-300 flex items-center group"
              >
                Send Message
                <ChevronRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}