import SectionBlock from '../ui/SectionBlock';
import SectionBar from '../ui/SectionBar';
import PageContainer from '../layout/PageContainer';
import Timeline from '../ui/Timeline';

const ShippingTimelineSection = () => {
  const steps = [
    { title: "Tiếp nhận yêu cầu", desc: "Tiếp nhận yêu cầu gửi hàng và tư vấn chi tiết cho khách hàng về gói cước phù hợp." },
    { title: "Đóng gói & Gửi kho", desc: "Khách hàng đóng hàng theo hướng dẫn rồi gửi lên kho Chiba tại Nhật." },
    { title: "Vận chuyển quốc tế", desc: "Hàng bay quốc tế về đến kho Hà Nội sẽ được thông báo ngay cho khách hàng." },
    { title: "Thanh toán", desc: "Khách hàng thanh toán cước vận chuyển quốc tế thông qua chuyển khoản." },
    { title: "Giao hàng nội địa", desc: "Hàng được vận chuyển nội địa đến tận tay khách hàng trên toàn quốc." }
  ];

  return (
    <SectionBlock className="bg-white">
      <PageContainer>
        <SectionBar title="QUY TRÌNH GỬI HÀNG" />
        <Timeline items={steps} />
      </PageContainer>
    </SectionBlock>
  );
};

export default ShippingTimelineSection;
