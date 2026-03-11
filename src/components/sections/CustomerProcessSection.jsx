import SectionBlock from '../ui/SectionBlock';
import SectionBar from '../ui/SectionBar';
import PageContainer from '../layout/PageContainer';
import InfoCard from '../ui/InfoCard';
import { siteContent } from '../../data/siteContent';

const CustomerProcessSection = () => {
  return (
    <SectionBlock className="bg-white">
      <PageContainer>
        <SectionBar 
          title={siteContent.customerProcess.title}
          subtitle="Các bước đơn giản để quý khách có thể gửi hàng từ Nhật về Việt Nam một cách an toàn và nhanh chóng."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.customerProcess.items.map((item, index) => (
            <InfoCard 
              key={index}
              number={index + 1}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </PageContainer>
    </SectionBlock>
  );
};

export default CustomerProcessSection;
