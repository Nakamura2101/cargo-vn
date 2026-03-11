import SectionBlock from '../ui/SectionBlock';
import SectionBar from '../ui/SectionBar';
import PageContainer from '../layout/PageContainer';
import { Truck, MapPin, Clock, ShieldCheck } from 'lucide-react';

const DomesticShippingSection = () => {
  return (
    <SectionBlock className="bg-slate-50">
      <PageContainer>
        <SectionBar 
          title="HƯỚNG DẪN SHIP HÀNG NỘI ĐỊA VIỆT NAM" 
          subtitle="Các phương thức nhận hàng và thời gian dự kiến sau khi hàng đã về đến kho Hà Nội."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Method 1 */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm card-hover">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8">
              <MapPin size={32} />
            </div>
            <h4 className="text-2xl font-black text-primary mb-6 tracking-tight uppercase">Nhận trực tiếp hoặc Ship nội thành</h4>
            <p className="text-slate-600 leading-relaxed mb-8">
              Quý khách có thể đến trực tiếp kho công ty tại Hà Nội để lấy hàng hoặc chúng tôi sẽ sắp xếp nhân viên đi ship tận nơi trong nội thành.
            </p>
            <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-2xl border border-orange-100">
              <Clock className="text-orange-500" size={24} />
              <p className="text-orange-700 font-bold text-sm">
                Thời gian: 48 tiếng kể từ khi khách thanh toán
              </p>
            </div>
          </div>

          {/* Method 2 */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm card-hover">
            <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center text-accent mb-8">
              <Truck size={32} />
            </div>
            <h4 className="text-2xl font-black text-primary mb-6 tracking-tight uppercase">Nhận hàng qua dịch vụ chuyển phát</h4>
            <p className="text-slate-600 leading-relaxed mb-8">
              Đối với khách hàng ngoại tỉnh, chúng tôi hỗ trợ gửi hàng qua Viettel Post, EMS... Quý khách có thể tự theo dõi qua mã tracking bill.
            </p>
            <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-2xl border border-accent/10 mb-4">
              <Clock className="text-accent" size={24} />
              <p className="text-accent font-bold text-sm">
                Thời gian lên đơn: 24 tiếng kể từ khi khách thanh toán
              </p>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl border border-green-100">
              <ShieldCheck className="text-green-500" size={24} />
              <p className="text-green-700 font-bold text-sm">
                Có thể lựa chọn dịch vụ gửi có bảo hiểm nội địa
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </SectionBlock>
  );
};

export default DomesticShippingSection;
