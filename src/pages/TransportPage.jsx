import WarehouseAddressSection from '../components/sections/WarehouseAddressSection';
import ShippingPackagesSection from '../components/sections/ShippingPackagesSection';
import ShippingTimelineSection from '../components/sections/ShippingTimelineSection';
import ExpressGuideSection from '../components/sections/ExpressGuideSection';
import EconomyGuideSection from '../components/sections/EconomyGuideSection';
import SurchargeSection from '../components/sections/SurchargeSection';
import ScheduleSection from '../components/sections/ScheduleSection';
import PaymentSection from '../components/sections/PaymentSection';
import DomesticShippingSection from '../components/sections/DomesticShippingSection';
import FAQSection from '../components/sections/FAQSection';

const TransportPage = () => {
  return (
    <div className="pt-20">
      <WarehouseAddressSection />
      <ShippingPackagesSection />
      <ShippingTimelineSection />
      <ExpressGuideSection />
      <EconomyGuideSection />
      <SurchargeSection />
      <ScheduleSection />
      <PaymentSection />
      <DomesticShippingSection />
      <FAQSection />
    </div>
  );
};

export default TransportPage;
