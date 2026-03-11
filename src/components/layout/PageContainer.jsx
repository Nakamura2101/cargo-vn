const PageContainer = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
};

export default PageContainer;
