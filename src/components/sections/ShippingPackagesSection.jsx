import SectionBlock from '../ui/SectionBlock';
import SectionBar from '../ui/SectionBar';
import PageContainer from '../layout/PageContainer';
import PricingTable from '../ui/PricingTable';
import { siteContent } from '../../data/siteContent';

const ShippingPackagesSection = () => {
  return (
    <SectionBlock className="bg-slate-50">
      <PageContainer>
        <SectionBar 
          title="BẢNG GIÁ CÁC GÓI VẬN CHUYỂN" 
          subtitle="Quý khách có thể tùy chọn gói cước bay tùy theo cân nặng kiện hàng và cước phí phù hợp."
        />
        
        <PricingTable items={siteContent.pricing} />
        
        <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-slate-500 text-sm italic">
            * Ghi chú: Phí này là phí quốc tế từ kho Chiba về kho HN (chưa bao gồm phí vận chuyển nội địa Nhật và nội địa Việt).
          </p>
        </div>
      </PageContainer>
    </SectionBlock>
  );
};

export default ShippingPackagesSection;
