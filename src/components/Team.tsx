import { AwardIcon } from 'lucide-react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

export function Team() {
  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2">Our Faculties</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-neutral-900">Meet Our Experts</h3>
          </div>
          <p className="text-lg text-neutral-600 max-w-md font-light">
            Dedicated professionals committed to guiding you through life's challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">

          {/* Card 1 */}
          <div className="group relative bg-white rounded-4xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-2xl hover:shadow-brand-red/5 transition-all duration-300">
            <div className="p-8 md:p-10 relative h-full flex flex-col">
              <div className="mb-6 relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
                <div className="absolute inset-0 bg-brand-red/10 rounded-2xl rotate-3 transition-transform duration-300 group-hover:rotate-6"></div>
                <img src={image1} alt="Muhammed Ismail Ayyanari" className="absolute inset-0 w-full h-full rounded-2xl object-cover shadow-sm border-2 border-white" loading="lazy" decoding="async" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold font-display text-neutral-900 mb-2 mt-2">MUHAMMED ISMAIL AYYANARI</h4>
              <p className="text-brand-red font-semibold text-sm tracking-widest uppercase mb-8">SENIOR CONSULTANT PSYCHOLOGIST</p>

              <div className="mt-auto space-y-4 bg-neutral-50 p-6 rounded-2xl">
                <p className="text-neutral-900 text-sm font-semibold uppercase tracking-wider"><span className="flex items-center gap-2"><AwardIcon className="text-brand-red" /> Qualifications</span></p>
                <div className="flex flex-wrap gap-2">
                  {['M.Sc. (AP. Psy)', 'MBA(HRM)', 'Μ.Α.', '(B.Com)', 'B.Ed.'].map((qual, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-lg shadow-sm">
                      {qual}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white rounded-4xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-2xl hover:shadow-brand-red/5 transition-all duration-300">
            <div className="p-8 md:p-10 relative h-full flex flex-col">
              <div className="mb-6 relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
                <div className="absolute inset-0 bg-brand-red/10 rounded-2xl -rotate-3 transition-transform duration-300 group-hover:-rotate-6"></div>
                <img src={image2} alt="Noora Beevi S" className="absolute inset-0 w-full h-full rounded-2xl object-cover shadow-sm border-2 border-white" loading="lazy" decoding="async" />
              </div>
              <h4 className="text-2xl md:text-3xl font-bold font-display text-neutral-900 mb-2 mt-2">NOORA BEEVI.S</h4>
              <p className="text-brand-red font-semibold text-sm tracking-widest uppercase mb-8">CONSULTANT, ASST. COUNSELLER & PSYCHOTHERAPIST</p>

              <div className="mt-auto space-y-4 bg-neutral-50 p-6 rounded-2xl">
                <p className="text-neutral-900 text-sm font-semibold uppercase tracking-wider"><span className="flex items-center gap-2"><AwardIcon className="text-brand-red" /> Expertise</span></p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Certified Psychotherapist',
                    'Expert in Counselling Psychology',
                    'Specialist in Emotional Wellness'
                  ].map((qual, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-lg shadow-sm">
                      {qual}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
