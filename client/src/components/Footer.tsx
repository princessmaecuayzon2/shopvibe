import React from 'react';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';

interface FooterSectionType {
  title: string;
  links: string[];
}

const FOOTER_SECTIONS: FooterSectionType[] = [
  {
    title: 'Shop',
    links: ['New Arrivals', 'Best Sellers', 'Categories', 'Sale Items']
  },
  {
    title: 'Support',
    links: ['Help Center', 'Shipping Info', 'Returns', 'Size Guide']
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Contact']
  }
];

const Logo: React.FC = () => (
  <div className="flex items-center group">
    <div className="relative">
      <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white p-2 rounded-lg shadow-lg group-hover:shadow-slate-500/25 transition-all duration-300">
        <Sparkles className="w-5 h-5" />
      </div>
    </div>
    <div className="ml-3">
      <span className="text-xl font-black text-white" 
            style={{ fontFamily: '"Inter", "Poppins", sans-serif', letterSpacing: '-0.02em' }}>
        ShopVibe
      </span>
      <div className="text-xs text-slate-400 font-medium -mt-1" style={{ fontFamily: '"Inter", sans-serif' }}>
        Premium Store
      </div>
    </div>
  </div>
);

const FooterSection: React.FC<{ section: FooterSectionType }> = ({ section }) => (
  <div>
    <h3 className="text-sm font-bold text-white mb-3" style={{ fontFamily: '"Inter", sans-serif' }}>
      {section.title}
    </h3>
    <ul className="space-y-2">
      {section.links.map((link) => (
        <li key={link}>
          <a href="#" 
             className="text-slate-400 hover:text-white transition-colors text-sm font-medium hover:translate-x-1 transform duration-200 inline-block"
             style={{ fontFamily: '"Inter", sans-serif' }}>
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-10 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <Logo />
            <p className="text-slate-400 mt-3 text-sm font-medium leading-relaxed" 
               style={{ fontFamily: '"Inter", sans-serif' }}>
              Premium products for modern living. Quality meets style.
            </p>
            
            {/* Contact Info */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-slate-400 text-xs">
                <Mail className="w-3 h-3 mr-2" />
                <span>hello@shopvibe.com</span>
              </div>
              <div className="flex items-center text-slate-400 text-xs">
                <Phone className="w-3 h-3 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-slate-400 text-xs">
                <MapPin className="w-3 h-3 mr-2" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          
          {FOOTER_SECTIONS.map((section, index) => (
            <FooterSection key={index} section={section} />
          ))}
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm font-medium" style={{ fontFamily: '"Inter", sans-serif' }}>
            &copy; 2025 ShopVibe. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Privacy</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Terms</a>
            <a href="#" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;