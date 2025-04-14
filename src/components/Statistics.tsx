// src/components/contact/Statistics.js
import { stats } from '@/data/navbar-data';

interface StatisticsProps {
  themeClasses: {
    accent: string;
    muted: string;
  };
  isVisible: boolean;
}

export default function Statistics({ themeClasses, isVisible }: StatisticsProps) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-20 ${isVisible ? 'animate-fadeIn animation-delay-300' : 'opacity-0'}`}>
      {stats.map((stat, index) => (
        <div 
          key={index}
          className={`p-6 rounded-lg border border-black text-center transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg`}
        >
          <div className="text-3xl font-bold mb-2">{stat.value}</div>
          <div className={`${themeClasses.muted} text-sm`}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}