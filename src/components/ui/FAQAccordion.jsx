import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`border rounded-2xl transition-all duration-300 ${
            activeIndex === index ? 'border-primary bg-slate-50' : 'border-slate-100 bg-white'
          }`}
        >
          <button
            className="w-full flex justify-between items-center p-6 text-left"
            onClick={() => toggle(index)}
          >
            <span className={`font-bold text-lg ${activeIndex === index ? 'text-primary' : 'text-slate-800'}`}>
              {item.q}
            </span>
            {activeIndex === index ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-slate-400" />}
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
