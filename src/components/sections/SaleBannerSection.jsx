import { motion } from 'motion/react';
import PageContainer from '../layout/PageContainer';
import { siteContent } from '../../data/siteContent';

const SaleBannerSection = () => {
  return (
    <section className="py-12">
      <PageContainer>
        <div className="relative overflow-hidden rounded-[2rem] bg-accent p-12 md:p-20 text-white shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-block px-6 py-2 bg-white text-accent font-black text-xl rounded-full mb-6 uppercase tracking-tighter"
              >
                {siteContent.saleBanner.title}
              </motion.span>
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
                {siteContent.saleBanner.highlight}
              </h2>
              <p className="text-xl md:text-2xl text-white/80 font-medium max-w-xl">
                {siteContent.saleBanner.desc}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 max-w-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent">
                  <span className="font-bold text-xl">!</span>
                </div>
                <p className="font-bold text-lg">Ưu đãi có hạn!</p>
              </div>
              <p className="text-sm leading-relaxed text-white/90">
                Chúng tôi cung cấp giải pháp vận chuyển hỏa tốc với mức giá tốt nhất thị trường. 
                Không giới hạn số lượng kiện hàng, hỗ trợ đóng gói và bảo hiểm đầy đủ.
              </p>
              <button className="mt-8 w-full bg-white text-accent py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
                NHẬN TƯ VẤN NGAY
              </button>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

export default SaleBannerSection;
