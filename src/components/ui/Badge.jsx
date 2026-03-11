const Badge = ({ children, variant = "primary" }) => {
  const variants = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    success: "bg-green-100 text-green-700",
    warning: "bg-orange-100 text-orange-700",
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;
