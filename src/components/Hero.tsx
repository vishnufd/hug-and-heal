import { Heart, CalendarCheck, ArrowRight, Activity } from 'lucide-react';

import banner from "../assets/banner.png"

export function Hero() {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      {/* Subtle background blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-red opacity-[0.03] blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 mb-20 w-72 h-72 rounded-full bg-blue-500 opacity-[0.03] blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-semibold mb-6">
            <Heart size={14} className="fill-brand-red" />
            <span>Empathetic, Professional Care</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display text-balance leading-[1.1] mb-6 text-neutral-900">
            Find Your Peace with <span className="text-brand-red">Hug and heal</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed font-light">
            Professional Online Counseling & Psychotherapy tailored to your personal growth and mental well-being.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#book-session"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('book-session');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red/80 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-md"
            >
              <CalendarCheck size={20} />
              Pre-book a Session
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('services');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 bg-white border border-neutral-200 hover:border-brand-red hover:text-brand-red text-neutral-800 px-8 py-4 rounded-full font-medium text-lg transition-all shadow-sm hover:shadow-md"
            >
              Learn More
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-4/5 md:aspect-square">
            <img
              src={banner}
              alt="Multiple hands holding together symbolizing support"
              className="w-full h-full object-cover" loading="eager"
            />
            <div className="absolute inset-0 bg-linear-to- from-black/20 to-transparent"></div>
          </div>

          <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[280px]">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Activity size={24} />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900">Virtual Sessions</h3>
                <p className="text-sm text-neutral-500">From your comfort zone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
