import SectionBlock from '../ui/SectionBlock';
import SectionBar from '../ui/SectionBar';
import PageContainer from '../layout/PageContainer';
import { siteContent } from '../../data/siteContent';

const SurchargeSection = () => {
  return (
    <SectionBlock className="bg-white">
      <PageContainer>
        <SectionBar 
          title="PHỤ PHÍ ĐỒ ĐIỆN TỬ & HÀNG CẤM" 
          subtitle="Quy định về phụ phí cho các mặt hàng đặc thù và danh sách các mặt hàng không được phép thông quan."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Surcharges Table */}
          <div>
            <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              Bảng phụ phí đồ điện tử
            </h4>
            <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="p-4 font-bold text-primary text-sm uppercase tracking-wider">Mặt hàng</th>
                    <th className="p-4 font-bold text-primary text-sm uppercase tracking-wider text-right">Phụ phí (VND)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {siteContent.surcharges.map((cat, i) => (
                    <React.Fragment key={i}>
                      <tr className="bg-slate-100/50">
                        <td colSpan="2" className="p-3 font-black text-xs text-slate-400 uppercase tracking-widest">{cat.category}</td>
                      </tr>
                      {cat.items.map((item, j) => (
                        <tr key={j} className="hover:bg-slate-50 transition-colors">
                          <td className="p-4 text-slate-700 text-sm font-medium">{item.name}</td>
                          <td className="p-4 text-accent font-bold text-sm text-right">{item.fee}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Prohibited Items */}
          <div>
            <h4 className="text-xl font-bold text-primary mb-6">Quy định mặt hàng không được thông quan</h4>
            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-8 relative z-10">
                Công ty từ chối phục vụ tất cả các hàng ăn cắp, hàng phạm pháp, hàng không rõ nguồn gốc, hàng cấm. 
                Đối với hàng hóa có dấu hiệu tội phạm, công ty có thể bàn giao cho cơ quan chức năng giải quyết theo pháp luật.
              </p>
              
              <h5 className="text-accent font-black text-lg mb-6 uppercase tracking-tight relative z-10">Các mặt hàng không thể thông quan:</h5>
              <ul className="space-y-4 relative z-10">
                {siteContent.prohibited.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PageContainer>
    </SectionBlock>
  );
};

// Need React for Fragment
import React from 'react';
export default SurchargeSection;
