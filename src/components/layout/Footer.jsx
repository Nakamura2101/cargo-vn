import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { siteContent } from '../../data/siteContent';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg">
                <span className="text-primary font-bold text-xl tracking-tighter">CNV</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-white">CARGO</span>
                <span className="text-xs font-medium tracking-widest text-slate-400">NHẬT VIỆT</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Dịch vụ vận chuyển Nhật - Việt chuyên nghiệp, uy tín hàng đầu. 
              Chúng tôi cam kết mang lại giải pháp logistics tối ưu nhất cho khách hàng.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-accent pl-3">Về chúng tôi</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-accent transition-colors">Giới thiệu</Link></li>
              <li><Link to="/transport" className="hover:text-accent transition-colors">Dịch vụ vận chuyển</Link></li>
              <li><a href={siteContent.contact.trackingLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-2">
                Tra cứu đơn hàng <ExternalLink size={14} />
              </a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-accent pl-3">Dịch vụ</h4>
            <ul className="space-y-4">
              <li><Link to="/transport" className="hover:text-accent transition-colors">Vận chuyển Hỏa tốc</Link></li>
              <li><Link to="/transport" className="hover:text-accent transition-colors">Vận chuyển Tiết kiệm</Link></li>
              <li><Link to="/transport" className="hover:text-accent transition-colors">Gửi hàng nội địa Nhật</Link></li>
              <li><Link to="/transport" className="hover:text-accent transition-colors">Gửi hàng nội địa Việt</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 border-l-4 border-accent pl-3">Liên hệ kho Nhật</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-accent shrink-0" size={18} />
                <span>{siteContent.contact.addressJapan}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-accent shrink-0" size={18} />
                <span>{siteContent.contact.phoneJapan1}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>Copyright 2025 © CARGO NHẬT VIỆT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
