import SectionBlock from '../ui/SectionBlock';
import SectionBar from '../ui/SectionBar';
import PageContainer from '../layout/PageContainer';
import { siteContent } from '../../data/siteContent';

const ExpressGuideSection = () => {
  return (
    <SectionBlock className="bg-white">
      <PageContainer>
        <SectionBar 
          title="HƯỚNG DẪN GỬI HÀNG GÓI HỎA TỐC" 
          subtitle="Chi tiết cách thức đóng gói và chính sách đền bù hàng hóa cho dịch vụ hỏa tốc."
        />
        
        <div className="space-y-16">
          {/* Guide 1 */}
          <div>
            <h4 className="text-xl font-bold text-primary mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">1</span>
              Hướng dẫn ghi thông tin gửi hàng
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                { title: "Thùng hàng có nhãn", img: "https://picsum.photos/seed/box-label/400/300" },
                { title: "Mẫu danh sách hàng", img: "https://picsum.photos/seed/item-list/400/300" },
                { title: "Mẫu vận đơn nội địa Nhật", img: "https://picsum.photos/seed/shipping-slip/400/300" }
              ].map((item, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-video rounded-2xl overflow-hidden mb-4 border border-slate-100 shadow-sm">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-center font-bold text-slate-700">{item.title}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h5 className="font-bold text-primary mb-4 uppercase tracking-wider text-sm">Lưu ý khi đóng gói gửi hàng:</h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Không sử dụng bao bì cũ hỏng để đóng gói.",
                  "Kiện hàng giữ mức tiêu chuẩn dưới 35Kg.",
                  "Đảm bảo không có khoảng trống bên trong thùng hàng.",
                  "Sử dụng vật liệu lót như xốp hơi, hạt xốp để lèn chặt.",
                  "Đóng hàng 2 lần và sử dụng hộp bìa cứng cho hàng dễ vỡ.",
                  "Lựa chọn vật liệu đóng gói phù hợp cho kiện hàng."
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 items-start text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0"></div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Guide 2 */}
          <div>
            <h4 className="text-xl font-bold text-primary mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">2</span>
              {siteContent.insurance.title}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteContent.insurance.articles.map((article, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border-2 border-slate-100 shadow-sm hover:border-accent transition-colors">
                  <h5 className="text-lg font-bold text-primary mb-4">{article.title}</h5>
                  <ul className="space-y-3">
                    {article.points.map((point, j) => (
                      <li key={j} className="flex gap-3 items-start text-slate-600 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                  {article.example && (
                    <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs italic text-slate-600">
                      {article.example}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-accent/5 rounded-2xl border border-accent/10">
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong className="text-accent">Lưu ý:</strong> {siteContent.insurance.note}
              </p>
            </div>
          </div>
        </div>
      </PageContainer>
    </SectionBlock>
  );
};

export default ExpressGuideSection;
