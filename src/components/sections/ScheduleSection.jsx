import SectionBlock from '../ui/SectionBlock';
import SectionBar from '../ui/SectionBar';
import PageContainer from '../layout/PageContainer';
import { Calendar, Clock } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

const ScheduleSection = () => {
  return (
    <SectionBlock className="bg-slate-50">
      <PageContainer>
        <SectionBar 
          title="LỊCH VẬN CHUYỂN" 
          subtitle="Theo dõi lịch bay và thời gian dự kiến hàng về kho để chủ động trong việc nhận hàng."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Flight Calendar Visual */}
          <div className="lg:col-span-1 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
              <Calendar size={40} />
            </div>
            <h4 className="text-xl font-bold text-primary mb-4">Lịch bay hàng tuần</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Chúng tôi có lịch bay cố định 5 chuyến mỗi tuần, đảm bảo hàng hóa không bị tồn đọng tại kho Nhật.
            </p>
            <div className="w-full aspect-square rounded-2xl overflow-hidden border border-slate-100">
              <img 
                src="https://picsum.photos/seed/calendar/400/400" 
                alt="Flight Calendar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Schedule Table */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-xl font-bold text-primary mb-8 flex items-center gap-3">
              <Clock className="text-accent" size={24} />
              Thời gian gửi hàng trong tuần
            </h4>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="p-4 font-bold text-primary text-xs uppercase tracking-widest border-b border-slate-100">Hàng lên kho Chiba</th>
                    <th className="p-4 font-bold text-primary text-xs uppercase tracking-widest border-b border-slate-100">Ngày thông quan</th>
                    <th className="p-4 font-bold text-primary text-xs uppercase tracking-widest border-b border-slate-100">Dự kiến về kho HN</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {siteContent.schedule.table.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-5 text-slate-700 font-bold">{row.warehouse}</td>
                      <td className="p-5 text-slate-600 font-medium">{row.customs}</td>
                      <td className="p-5 text-accent font-black">{row.arrival}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10 text-xs text-primary font-medium">
              * Thời gian trên là dự kiến trong điều kiện vận chuyển bình thường. 
              Các yếu tố khách quan như thời tiết, thủ tục hải quan có thể làm thay đổi lịch trình.
            </div>
          </div>
        </div>
      </PageContainer>
    </SectionBlock>
  );
};

export default ScheduleSection;
