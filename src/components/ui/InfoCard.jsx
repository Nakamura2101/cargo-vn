const InfoCard = ({ title, desc, number, className = "" }) => {
  return (
    <div className={`relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm card-hover ${className}`}>
      {number && (
        <span className="absolute -top-4 -left-4 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
          {number}
        </span>
      )}
      <h3 className="text-lg font-bold text-primary mb-3 uppercase tracking-tight">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

export default InfoCard;
