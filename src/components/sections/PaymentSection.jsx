import SectionBlock from '../ui/SectionBlock';
import SectionBar from '../ui/SectionBar';
import PageContainer from '../layout/PageContainer';
import { CreditCard, CheckCircle } from 'lucide-react';

const PaymentSection = () => {
  return (
    <SectionBlock className="bg-white">
      <PageContainer>
        <SectionBar title="THANH TOÁN CƯỚC VẬN CHUYỂN" />
        
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-accent/20">
                <CreditCard size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter">
                Hình thức thanh toán linh hoạt & an toàn
              </h3>
              <ul className="space-y-6">
                {[
                  "Hàng về đến kho Việt Nam sẽ được thông báo cùng với cước bay Quốc Tế.",
                  "Chỉ nhận thanh toán bằng tiền Việt thông qua hình thức chuyển khoản.",
                  "Thời hạn thanh toán: chậm nhất 3 ngày kể từ khi hàng về kho Việt Nam.",
                  "Sau khi thanh toán, kho Việt Nam sẽ xuất hàng gửi đến địa chỉ của khách hàng."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle className="text-accent shrink-0 mt-1" size={20} />
                    <p className="text-slate-300 leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-6 text-accent uppercase tracking-widest">Thông tin chuyển khoản</h4>
              <div className="space-y-6">
                <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Ngân hàng</p>
                  <p className="text-xl font-bold">VIETCOMBANK (VCB)</p>
                </div>
                <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Số tài khoản</p>
                  <p className="text-2xl font-black tracking-widest text-accent">0123 4567 8901</p>
                </div>
                <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Chủ tài khoản</p>
                  <p className="text-xl font-bold uppercase">NGUYEN VAN A</p>
                </div>
              </div>
              <p className="mt-6 text-xs text-slate-500 italic text-center">
                * Vui lòng ghi nội dung chuyển khoản là Mã đơn hàng hoặc Số điện thoại của quý khách.
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </SectionBlock>
  );
};

export default PaymentSection;
