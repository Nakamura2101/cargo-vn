import { CircleDollarSign, Clock, Headphones, Package, ShieldCheck } from 'lucide-react';

const iconMap = {
  CircleDollarSign,
  Clock,
  ShieldCheck,
  Headphones,
};

const FeatureCard = ({ title, desc, iconName }) => {
  const Icon = iconMap[iconName] || Package;
  
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm card-hover">
      <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
};

export default FeatureCard;
