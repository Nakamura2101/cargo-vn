import SectionBlock from '../ui/SectionBlock';
import SectionBar from '../ui/SectionBar';
import PageContainer from '../layout/PageContainer';
import { BadgeCheck, AlertTriangle } from 'lucide-react';

const EconomyGuideSection = () => {
  return (
    <SectionBlock className="bg-slate-50">
      <PageContainer>
        <SectionBar 
          title="HƯỚNG DẪN GỬI HÀNG GÓI TIẾT KIỆM" 
          subtitle="Dành cho các kiện hàng lớn với chi phí tối ưu nhất."
        />
        
        <div className="bg-primary rounded-[2.5rem] overflow-hidden shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 md:p-16 text-white">
              <span className="inline-block px-4 py-1 bg-accent text-white font-bold text-xs rounded-full mb-6 tracking-widest uppercase">
                Best Value
              </span>
              <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
                Gói cước bay Tiết Kiệm - 135K
              </h3>
              <div className="space-y-4 mb-10">
                <div className="flex gap-3 items-center">
                  <BadgeCheck className="text-accent" size={24} />
                  <p className="text-lg font-medium">Mỗi kiện tối thiểu 10kg</p>
                </div>
                <div className="flex gap-3 items-center">
                  <BadgeCheck className="text-accent" size={24} />
                  <p className="text-lg font-medium">Dự kiến trả hàng sau 7-10 ngày</p>
                </div>
              </div>
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all">
                ĐĂNG KÝ GỬI NGAY
              </button>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://picsum.photos/seed/economy/800/600" 
                alt="Economy Shipping" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <AlertTriangle className="text-orange-500" size={24} />
              Điều kiện áp dụng & Hàng cấm
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Tuyệt đối không chứa thiết bị điện tử",
                "Không chứa điện thoại, laptop, iPad",
                "Không chứa rượu, thuốc lá",
                "Không chứa máy ảnh, máy chơi game",
                "Chỉ áp dụng cho kiện hàng > 10kg",
                "Một số mặt hàng nhất định theo quy định"
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-center text-slate-700 font-medium">
                  <div className="w-2 h-2 bg-orange-500 rounded-full shrink-0"></div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-accent p-8 rounded-3xl text-white shadow-xl shadow-red-500/20">
            <h4 className="text-xl font-bold mb-4">Lưu ý bảo hiểm</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Phần bảo hiểm của gói tiết kiệm tương tự gói hỏa tốc nhưng thay giá vận chuyển mặc định thành 135k/kg để tính mức đền bù.
            </p>
            <div className="p-4 bg-white/10 rounded-xl border border-white/20 text-xs italic">
              Đền bù mặc định = 135.000 x 4,35 x Cân nặng
            </div>
          </div>
        </div>
      </PageContainer>
    </SectionBlock>
  );
};

export default EconomyGuideSection;
