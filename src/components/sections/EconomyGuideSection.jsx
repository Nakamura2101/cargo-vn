import SectionBlock from '../ui/SectionBlock';
import SectionBar from '../ui/SectionBar';
import PageContainer from '../layout/PageContainer';
import { BadgeCheck, AlertTriangle } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

const EconomyGuideSection = () => {
  const economyPrice = siteContent.pricing.find((item) => item.name === 'Gói Tiết Kiệm')?.price ?? '153.000 VND / 1kg';
  const economyPriceShort = economyPrice.replace('.000 VND / 1kg', 'K');
  const economyPriceBase = economyPrice.split(' ')[0];

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
                Gói cước bay Tiết Kiệm - {economyPriceShort}
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
            <h4 className="text-xl font-bold mb-4">Lưu ý đền bù</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Gói tiết kiệm áp dụng chung chính sách đền bù của Cargo Nhật Việt: không bảo hiểm theo giá trị, không đền hàng vỡ/hỏng. Chỉ đền bù khi mất hàng hoàn toàn do lỗi vận chuyển, tối đa 03 lần tiền cước.
            </p>
            <div className="p-4 bg-white/10 rounded-xl border border-white/20 text-xs italic">
              Đền bù tối đa = {economyPriceBase} x 03 lần x Cân nặng
            </div>
          </div>
        </div>
      </PageContainer>
    </SectionBlock>
  );
};

export default EconomyGuideSection;
