import SectionBlock from '../ui/SectionBlock';
import SectionBar from '../ui/SectionBar';
import PageContainer from '../layout/PageContainer';
import FAQAccordion from '../ui/FAQAccordion';
import { siteContent } from '../../data/siteContent';

const FAQSection = () => {
  return (
    <SectionBlock className="bg-white">
      <PageContainer>
        <div className="max-w-4xl mx-auto">
          <SectionBar 
            title="CÂU HỎI THƯỜNG GẶP" 
            subtitle="Giải đáp nhanh các thắc mắc phổ biến của khách hàng khi sử dụng dịch vụ của Cargo Nhật Việt."
          />
          <FAQAccordion items={siteContent.faq} />
        </div>
      </PageContainer>
    </SectionBlock>
  );
};

export default FAQSection;
