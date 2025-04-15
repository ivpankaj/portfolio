
import { Phone, Users } from 'lucide-react';



export default function CallToAction() {
  return (
    <div className={`text-center my-20  'animate-fadeIn animation-delay-500' : 'opacity-0'}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
      <p className={` max-w-2xl mx-auto mb-8`}>
        Whether you have a project in mind or just want to explore possibilities, we&apos;re here to help you succeed.
      </p>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <button 
          className={` py-3 px-8 rounded-md text-lg font-medium hover:scale-105 transition-all duration-300 flex items-center justify-center`}
        >
          <Phone size={18} className="mr-2" />
          Call Us Now
        </button>
        <button 
          className={`border  py-3 px-8 rounded-md text-lg font-medium hover:bg-opacity-10  transition-all duration-300 flex items-center justify-center`}
        >
          <Users size={18} className="mr-2" />
          Schedule Meeting
        </button>
      </div>
    </div>
  );
}