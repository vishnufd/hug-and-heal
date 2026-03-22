import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import logo from '../assets/hug& heal.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      // Adding a small offset for the fixed header
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'glass py-5' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" onClick={(e) => scrollTo(e, 'home')} className="flex items-center gap-2">
          <img src={logo} alt="Hug and Heal" className="h-10 md:h-12 w-auto" />
          <h2 className="text-2xl font-bold">Hug & Heal</h2>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="#home" onClick={(e) => scrollTo(e, 'home')} className="hover:text-brand-red transition-colors">Home</a>
          <a href="#services" onClick={(e) => scrollTo(e, 'services')} className="hover:text-brand-red transition-colors">Services</a>
          <a href="#why-us" onClick={(e) => scrollTo(e, 'why-us')} className="hover:text-brand-red transition-colors">Why Us</a>
          <a href="#team" onClick={(e) => scrollTo(e, 'team')} className="hover:text-brand-red transition-colors">Our Team</a>
          <a href="#about" onClick={(e) => scrollTo(e, 'about')} className="hover:text-brand-red transition-colors">About</a>
          <a href="#book-session" onClick={(e) => scrollTo(e, 'book-session')} className="hover:text-brand-red transition-colors">Contact</a>
        </nav>

        <div className="hidden md:block">
          <a
            href="#book-session"
            onClick={(e) => scrollTo(e, 'book-session')}
            className="bg-brand-red hover:bg-brand-red/80 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:-translate-y-0.5 shadow-md"
          >
            Book Session
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-neutral-900 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out origin-top ${mobileMenuOpen
          ? 'max-h-[500px] opacity-100 p-6 border-t border-neutral-100 translate-y-0'
          : 'max-h-0 opacity-0 px-6 py-0 border-transparent -translate-y-2 pointer-events-none'
          }`}
      >
        <a href="#home" onClick={(e) => scrollTo(e, 'home')} className="text-lg font-medium py-2 border-b border-neutral-100">Home</a>
        <a href="#services" onClick={(e) => scrollTo(e, 'services')} className="text-lg font-medium py-2 border-b border-neutral-100">Services</a>
        <a href="#why-us" onClick={(e) => scrollTo(e, 'why-us')} className="text-lg font-medium py-2 border-b border-neutral-100">Why Us</a>
        <a href="#team" onClick={(e) => scrollTo(e, 'team')} className="text-lg font-medium py-2 border-b border-neutral-100">Our Team</a>
        <a href="#about" onClick={(e) => scrollTo(e, 'about')} className="text-lg font-medium py-2 border-b border-neutral-100">About</a>
        <a href="#book-session" onClick={(e) => scrollTo(e, 'book-session')} className="text-lg font-medium py-2 mb-4">Contact</a>
        <a
          href="#book-session"
          onClick={(e) => scrollTo(e, 'book-session')}
          className="bg-brand-red text-white text-center px-6 py-3 rounded-full font-medium shadow-[0_4px_14px_0_rgba(225,29,72,0.39)]"
        >
          Book Session
        </a>
      </div>
    </header>
  );
}
