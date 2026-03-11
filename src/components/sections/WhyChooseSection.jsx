import SectionBlock from '../ui/SectionBlock';
import SectionBar from '../ui/SectionBar';
import PageContainer from '../layout/PageContainer';
import FeatureCard from '../ui/FeatureCard';
import { siteContent } from '../../data/siteContent';

const WhyChooseSection = () => {
  return (
    <SectionBlock className="bg-slate-50">
      <PageContainer>
        <SectionBar 
          title={siteContent.whyChoose.title}
          subtitle={siteContent.whyChoose.description}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteContent.whyChoose.items.map((item, index) => (
            <FeatureCard 
              key={index}
              title={item.title}
              desc={item.desc}
              iconName={item.icon}
            />
          ))}
        </div>
      </PageContainer>
    </SectionBlock>
  );
};

export default WhyChooseSection;
