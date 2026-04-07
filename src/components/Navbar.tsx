import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import logo from '../assets/hug& heal.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  useEffect(() => {
    // Handle scrolling when coming from another page with a hash
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        // Adding a small offset for the fixed header
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'glass py-5' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" onClick={(e) => scrollTo(e, 'home')} className="flex items-center gap-2">
          <img src={logo} alt="Hug and Heal" className="h-10 md:h-12 w-auto" />
          <h2 className="text-2xl font-bold">Hug & Heal</h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-medium">
          <Link to="/" onClick={(e) => scrollTo(e, 'home')} className="hover:text-brand-red transition-colors">Home</Link>
          <a href="#services" onClick={(e) => scrollTo(e, 'services')} className="hover:text-brand-red transition-colors">Services</a>
          <Link to="/campaign" className="hover:text-brand-red transition-colors border-b-2 border-transparent hover:border-brand-red pb-0.5">Campaign</Link>
          <a href="#why-us" onClick={(e) => scrollTo(e, 'why-us')} className="hover:text-brand-red transition-colors">Why Us</a>
          <a href="#team" onClick={(e) => scrollTo(e, 'team')} className="hover:text-brand-red transition-colors">Our Team</a>
          <a href="#about" onClick={(e) => scrollTo(e, 'about')} className="hover:text-brand-red transition-colors">About</a>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/campaign"
            className="bg-brand-red hover:bg-brand-red/80 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:-translate-y-0.5 shadow-md flex items-center gap-2"
          >
            Join Our Campaign
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-neutral-900 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out origin-top ${mobileMenuOpen
          ? 'max-h-[600px] opacity-100 p-6 border-t border-neutral-100 translate-y-0'
          : 'max-h-0 opacity-0 px-6 py-0 border-transparent -translate-y-2 pointer-events-none'
          }`}
      >
        <Link to="/" onClick={(e) => scrollTo(e, 'home')} className="text-lg font-medium py-2 border-b border-neutral-100">Home</Link>
        <Link to="/campaign" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium py-2 border-b border-neutral-100 text-brand-red">Special Program Campaign</Link>
        <a href="#services" onClick={(e) => scrollTo(e, 'services')} className="text-lg font-medium py-2 border-b border-neutral-100">Services</a>
        <a href="#why-us" onClick={(e) => scrollTo(e, 'why-us')} className="text-lg font-medium py-2 border-b border-neutral-100">Why Us</a>
        <a href="#team" onClick={(e) => scrollTo(e, 'team')} className="text-lg font-medium py-2 border-b border-neutral-100">Our Team</a>
        <a href="#about" onClick={(e) => scrollTo(e, 'about')} className="text-lg font-medium py-2 border-b border-neutral-100">About</a>
        <Link
          to="/campaign"
          onClick={() => setMobileMenuOpen(false)}
          className="bg-brand-red text-white text-center px-6 py-3 rounded-full font-medium shadow-[0_4px_14px_0_rgba(225,29,72,0.39)]"
        >
          Join Campaign
        </Link>
      </div>
    </header>
  );
}
