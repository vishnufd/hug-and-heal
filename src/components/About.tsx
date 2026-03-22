import { Heart, CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-linear-to-br from-white to-brand-red/5">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left side: Image + Floating Card */}
        <div className="relative">
          <div className="rounded-4xl overflow-hidden shadow-xl aspect-4/3 md:aspect-auto md:h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1000"
              alt="Holding paper heart"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 md:bottom-8 right-6 md:-right-8 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-neutral-100 z-10 w-[220px]">
            <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
              <Heart size={24} className="fill-brand-red text-brand-red opacity-80" strokeWidth={1} />
            </div>
            <div>
              <h4 className="font-bold text-lg text-neutral-900 leading-tight">Trust</h4>
              <p className="text-xs text-neutral-500 font-medium">& Compassion</p>
            </div>
          </div>
        </div>

        {/* Right side: Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-8">
            About <span className="text-brand-red">Hug and Heal</span>
          </h2>

          <div className="space-y-6 text-lg text-neutral-600 font-light leading-relaxed mb-10">
            <p>
              At Hug and Heal, we believe that everyone deserves a safe space to heal, grow, and thrive. Our center is dedicated to providing compassionate, professional psychological counseling services that prioritize your mental wellness and emotional well-being.
            </p>
            <p>
              With certified professionals and a commitment to confidentiality, we offer personalized therapy plans tailored to your unique needs. Whether you're dealing with stress, anxiety, depression, or relationship challenges, we're here to support you every step of the way.
            </p>
          </div>

          {/* Bullet points grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-neutral-200/60">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-brand-red shrink-0">
                <CheckCircle size={22} className="text-brand-red" strokeWidth={2} />
              </div>
              <div>
                <h5 className="font-semibold text-neutral-900 text-[15px]">Certified Experts</h5>
                <p className="text-[13px] text-neutral-500">Qualified professionals</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-brand-red shrink-0">
                <CheckCircle size={22} className="text-brand-red" strokeWidth={2} />
              </div>
              <div>
                <h5 className="font-semibold text-neutral-900 text-[15px]">100% Confidential</h5>
                <p className="text-[13px] text-neutral-500">Your privacy matters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
