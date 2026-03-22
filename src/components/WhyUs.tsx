import { UserCheck, Lock, Clock, Heart } from 'lucide-react';

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-linear-to-b from-brand-red/5 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
            Why Choose <span className="text-brand-red">Hug and Heal</span>
          </h3>
          <p className="text-lg text-neutral-600 font-light">
            We are committed to providing exceptional care and support for your mental wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          <div className="bg-white/70 backdrop-blur-xl hover:bg-white p-8 rounded-4xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-brand-red/8 transition-all duration-500 hover:-translate-y-2 group flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-brand-red/5 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150"></div>
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-brand-red/10 to-brand-red/5 flex items-center justify-center mb-6 border border-brand-red/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm relative z-10">
              <UserCheck size={28} className="text-brand-red" strokeWidth={1.75} />
            </div>
            <h4 className="text-[1.15rem] font-bold font-display mb-3 text-neutral-900 relative z-10">Certified Professionals</h4>
            <p className="text-neutral-500 font-medium text-sm leading-relaxed relative z-10">
              Our team consists of highly qualified and experienced psychologists and therapists.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl hover:bg-white p-8 rounded-4xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-brand-red/8 transition-all duration-500 hover:-translate-y-2 group flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-brand-red/5 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150"></div>
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-brand-red/10 to-brand-red/5 flex items-center justify-center mb-6 border border-brand-red/10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-sm relative z-10">
              <Lock size={28} className="text-brand-red" strokeWidth={1.75} />
            </div>
            <h4 className="text-[1.15rem] font-bold font-display mb-3 text-neutral-900 relative z-10">Confidential Sessions</h4>
            <p className="text-neutral-500 font-medium text-sm leading-relaxed relative z-10">
              100% privacy guaranteed. Your information and sessions are completely secure and confidential.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl hover:bg-white p-8 rounded-4xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-brand-red/8 transition-all duration-500 hover:-translate-y-2 group flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-brand-red/5 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150"></div>
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-brand-red/10 to-brand-red/5 flex items-center justify-center mb-6 border border-brand-red/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm relative z-10">
              <Clock size={28} className="text-brand-red" strokeWidth={1.75} />
            </div>
            <h4 className="text-[1.15rem] font-bold font-display mb-3 text-neutral-900 relative z-10">Flexible Support</h4>
            <p className="text-neutral-500 font-medium text-sm leading-relaxed relative z-10">
              Choose between online and offline sessions based on your comfort and schedule.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-xl hover:bg-white p-8 rounded-4xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-brand-red/8 transition-all duration-500 hover:-translate-y-2 group flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-brand-red/5 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150"></div>
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-brand-red/10 to-brand-red/5 flex items-center justify-center mb-6 border border-brand-red/10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 shadow-sm relative z-10">
              <Heart size={28} className="text-brand-red" strokeWidth={1.75} />
            </div>
            <h4 className="text-[1.15rem] font-bold font-display mb-3 text-neutral-900 relative z-10">Personalized Care</h4>
            <p className="text-neutral-500 font-medium text-sm leading-relaxed relative z-10">
              Customized therapy plans designed specifically for your unique needs and goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
