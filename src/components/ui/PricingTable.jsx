import { Check, Clock, Shield } from 'lucide-react';

const PricingTable = ({ items }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {items.map((item, index) => (
        <div 
          key={index}
          className={`relative overflow-hidden rounded-3xl border-2 transition-all duration-300 ${
            item.isFeatured 
              ? 'border-primary shadow-2xl scale-105 z-10' 
              : 'border-slate-100 shadow-md bg-slate-50'
          }`}
        >
          {item.isFeatured && (
            <div className="absolute top-0 right-0 bg-primary text-white px-6 py-1 rounded-bl-2xl font-bold text-xs uppercase tracking-widest">
              Phổ biến nhất
            </div>
          )}
          
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-black text-primary mb-2">{item.name}</h3>
            <p className="text-slate-500 text-sm mb-6">{item.apply}</p>
            
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-accent">{item.price.split(' ')[0]}</span>
              <span className="text-slate-500 font-medium">{item.price.split(' ').slice(1).join(' ')}</span>
            </div>
            
            <div className="space-y-4 mb-10">
              <div className="flex gap-3">
                <Clock className="text-primary shrink-0" size={20} />
                <div>
                  <p className="font-bold text-slate-800 text-sm">Thời gian vận chuyển</p>
                  <p className="text-slate-600 text-sm">{item.time}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Shield className="text-primary shrink-0" size={20} />
                <div>
                  <p className="font-bold text-slate-800 text-sm">Bảo hiểm</p>
                  <p className="text-slate-600 text-sm">{item.insurance}</p>
                </div>
              </div>
            </div>
            
            <ul className="space-y-3 mb-10">
              <li className="flex items-center gap-2 text-sm text-slate-700">
                <Check className="text-green-500" size={18} /> Hỗ trợ đóng gói chuyên nghiệp
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700">
                <Check className="text-green-500" size={18} /> Theo dõi đơn hàng 24/7
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700">
                <Check className="text-green-500" size={18} /> Thông quan nhanh chóng
              </li>
            </ul>
            
            <button className={`w-full py-4 rounded-xl font-bold transition-all ${
              item.isFeatured 
                ? 'bg-primary text-white hover:bg-slate-800 shadow-lg shadow-primary/20' 
                : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
            }`}>
              CHỌN GÓI NÀY
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
