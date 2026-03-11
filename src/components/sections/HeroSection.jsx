import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { siteContent } from '../../data/siteContent';

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/cargo-port/1920/1080?blur=2" 
          alt="Cargo Port" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1 bg-accent text-white font-bold text-sm rounded-full mb-6 tracking-widest uppercase">
            Logistics Premium
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
            {siteContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed font-light">
            {siteContent.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={siteContent.contact.trackingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-500/40 text-center"
            >
              {siteContent.hero.ctaPrimary}
            </a>
            <Link 
              to="/transport"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center"
            >
              {siteContent.hero.ctaSecondary}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10 hidden lg:block">
        <div className="container mx-auto px-4 py-8 grid grid-cols-4 gap-8">
          {[
            { label: "Đồng giá", value: "158K/KG" },
            { label: "Thời gian", value: "3-5 NGÀY" },
            { label: "Bảo hiểm", value: "100% GIÁ TRỊ" },
            { label: "Hỗ trợ", value: "24/7" }
          ].map((stat, i) => (
            <div key={i} className="text-center border-r border-white/10 last:border-0">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-white text-2xl font-black">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
