import { Heart, MessageCircle } from 'lucide-react';


export function CTA() {
  return (
    <section className="py-20 px-4 md:px-12 mb-12">
      <div className="container mx-auto">
        <div className="bg-brand-red rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-brand-red/20">
          {/* Background patterns */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="bg-white/10 backdrop-blur-md w-20 h-20 rounded-full flex items-center justify-center mb-8 border border-white/20">
              <Heart size={40} className="text-white fill-white shadow-sm" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-10 leading-[1.15]">
              Ready to take the first step towards healing?
            </h2>
            <a
              href="#book-session"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('book-session');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }}
              className="bg-white text-brand-red hover:bg-neutral-50 px-8 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3"
            >
              <MessageCircle size={28} className="fill-brand-red" />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
