const SectionBar = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <div className="section-title-bar inline-block">
        {title}
      </div>
      {subtitle && (
        <p className="mt-4 text-slate-600 max-w-2xl text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-24 bg-accent mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionBar;
