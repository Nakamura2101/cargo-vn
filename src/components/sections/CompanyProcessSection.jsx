import SectionBlock from '../ui/SectionBlock';
import SectionBar from '../ui/SectionBar';
import PageContainer from '../layout/PageContainer';
import { siteContent } from '../../data/siteContent';

const CompanyProcessSection = () => {
  return (
    <SectionBlock className="bg-slate-50">
      <PageContainer>
        <SectionBar 
          title={siteContent.companyProcess.title}
          subtitle="Quy trình vận hành chuyên nghiệp của Cargo Nhật Việt đảm bảo hàng hóa của bạn luôn được xử lý đúng chuẩn."
        />
        
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          {siteContent.companyProcess.items.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col">
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex-grow relative group hover:bg-primary transition-all duration-300">
                <span className="text-5xl font-black text-slate-100 absolute top-4 right-4 group-hover:text-white/10 transition-colors">
                  0{index + 1}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-white transition-colors uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-200 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
              {index < siteContent.companyProcess.items.length - 1 && (
                <div className="hidden lg:flex items-center justify-center py-4">
                  <div className="w-8 h-1 bg-slate-200 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </PageContainer>
    </SectionBlock>
  );
};

export default CompanyProcessSection;
