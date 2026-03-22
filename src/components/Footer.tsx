import { PhoneCall, Mail, MapPin } from 'lucide-react';
import { WHATSAPP_LINK, EMAIL, PHONE, INSTAGRAM_LINK } from '../constants';
import logo from '../assets/hug& heal.png';

export function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#132330] text-slate-300 py-16 mt-auto border-none">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <a href="#home" onClick={(e) => scrollTo(e, 'home')} className="inline-flex items-center justify-center bg-white p-1 rounded-full shrink-0">
                <img src={logo} alt="Hug and Heal Logo" className="h-10 w-10 object-contain rounded-full" />
              </a>
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-white leading-tight">Hug and Heal</h2>
                <p className="text-slate-400 font-light text-[11px] leading-tight mt-0.5">Counselling & Psychotherapy</p>
              </div>
            </div>
            <p className="text-slate-400 text-[13px] font-light leading-relaxed pr-4">
              Your trusted partner in mental wellness and emotional healing
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-[15px]">Quick Links</h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li><a href="#about" onClick={(e) => scrollTo(e, 'about')} className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#team" onClick={(e) => scrollTo(e, 'team')} className="hover:text-white transition-colors">Our Experts</a></li>
              <li><a href={WHATSAPP_LINK} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Book Session</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-[15px]">Services</h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="hover:text-white transition-colors">Individual Counseling</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="hover:text-white transition-colors">Family Therapy</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="hover:text-white transition-colors">Online Counseling</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, 'services')} className="hover:text-white transition-colors">Stress Management</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 text-[15px]">Contact</h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className='flex items-center gap-2'><PhoneCall size={20} className="text-brand-red" /> <a href={`tel:${PHONE}`} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">{PHONE}</a></li>
              <li className='flex items-center gap-2'><Mail size={20} className="text-brand-red" /> <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a></li>
              <li className='flex items-center gap-2'><MapPin size={20} className="text-brand-red" /> <p>Bharanikavu, Sasthamcotta, Kerala 690521</p></li>
            </ul>
            <div className="mt-8">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 border border-[#E94057] text-[#E94057] hover:bg-[#E94057] hover:text-white transition-all rounded-md text-[13px] font-medium"
              >
                Follow on Instagram
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-700/60 text-center text-[13px] text-slate-400 font-light tracking-wide">
          <p>&copy; {new Date().getFullYear()} Hug and Heal. All rights reserved. <span className="mx-2 text-slate-600">|</span> 100% Confidential Services</p>
        </div>
      </div>
    </footer>
  );
}
