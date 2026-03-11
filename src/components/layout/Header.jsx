import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:bg-accent transition-colors">
            <span className="text-white font-bold text-xl tracking-tighter">CNV</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg leading-none ${isScrolled ? 'text-primary' : 'text-white'}`}>
              CARGO
            </span>
            <span className={`text-xs font-medium tracking-widest ${isScrolled ? 'text-slate-500' : 'text-slate-200'}`}>
              NHẬT VIỆT
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {siteContent.nav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-semibold text-sm uppercase tracking-wide transition-colors hover:text-accent ${
                isActive(item.path) 
                  ? 'text-accent border-b-2 border-accent' 
                  : isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              {item.title}
            </Link>
          ))}
          <a 
            href={siteContent.contact.trackingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30"
          >
            TRA CỨU ĐƠN HÀNG
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-primary z-40 transition-transform duration-500 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24">
          <div className="flex flex-col gap-6">
            {siteContent.nav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-2xl font-bold border-b border-white/10 pb-4 flex justify-between items-center ${
                  isActive(item.path) ? 'text-accent' : 'text-white'
                }`}
              >
                {item.title}
                <ChevronRight size={24} />
              </Link>
            ))}
            <a 
              href={siteContent.contact.trackingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-accent text-white text-center py-4 rounded-xl font-bold text-xl shadow-xl"
            >
              TRA CỨU ĐƠN HÀNG
            </a>
          </div>
          
          <div className="mt-auto text-white/60 text-sm">
            <p>Hotline: {siteContent.contact.phoneJapan1}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
