const Timeline = ({ items }) => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden md:block"></div>
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-accent rounded-full -translate-x-1/2 z-10 hidden md:block"></div>
            
            {/* Content */}
            <div className="w-full md:w-5/12 ml-12 md:ml-0">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm card-hover relative">
                <div className="md:hidden absolute -left-10 top-4 w-6 h-6 bg-white border-4 border-accent rounded-full"></div>
                <span className="inline-block px-3 py-1 bg-slate-100 text-primary font-bold text-xs rounded-full mb-3">BƯỚC {index + 1}</span>
                <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
            
            {/* Spacer for desktop */}
            <div className="hidden md:block md:w-2/12"></div>
            <div className="hidden md:block md:w-5/12"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
