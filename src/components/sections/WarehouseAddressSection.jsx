import SectionBlock from '../ui/SectionBlock';
import SectionBar from '../ui/SectionBar';
import PageContainer from '../layout/PageContainer';
import { MapPin, Phone, Clock, Info } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

const WarehouseAddressSection = () => {
  return (
    <SectionBlock id="warehouse" className="bg-white">
      <PageContainer>
        <SectionBar title="ĐỊA CHỈ KHO TẠI NHẬT" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Mã bưu điện</p>
                    <p className="text-xl font-bold text-primary">{siteContent.contact.zipJapan}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Địa chỉ</p>
                    <p className="text-xl font-bold text-primary leading-tight">{siteContent.contact.addressJapan}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Số điện thoại</p>
                    <p className="text-xl font-bold text-primary">{siteContent.contact.phoneJapan1} / {siteContent.contact.phoneJapan2}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Lưu ý</p>
                    <p className="text-lg font-medium text-slate-700">Gửi nhận hàng buổi sáng (午前中)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-accent/5 border border-accent/20 p-6 rounded-2xl flex gap-4 items-start">
              <Info className="text-accent shrink-0" size={24} />
              <p className="text-accent font-bold leading-relaxed">
                Khi gửi hàng quý khách vui lòng nhắn tin page để được hướng dẫn ghi thông tin cụ thể. 
                Khách gửi hàng theo hình thức thanh toán trả trước 元払い.
              </p>
            </div>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[400px]">
            <img 
              src="https://picsum.photos/seed/warehouse/800/600" 
              alt="Kho hàng Nhật Bản" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <p className="text-primary font-black text-2xl mb-1 tracking-tighter">CHIBA WAREHOUSE</p>
              <p className="text-slate-600 text-sm">Trung tâm xử lý hàng hóa hiện đại tại Chiba, Nhật Bản.</p>
            </div>
          </div>
        </div>
      </PageContainer>
    </SectionBlock>
  );
};

export default WarehouseAddressSection;
