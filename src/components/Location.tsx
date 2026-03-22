import { MapPin, Navigation } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-24 bg-neutral-50/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2">Find Us</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 mb-4">Our Location</h3>
          <p className="text-neutral-600 font-light text-lg flex items-center justify-center gap-2">
            <MapPin size={18} className="text-brand-red shrink-0" />
            Bharanikavu, Sasthamcotta, Kerala 690521
          </p>
        </div>

        <div className="rounded-4xl overflow-hidden shadow-xl border border-neutral-100 h-[400px] md:h-[480px] relative">
          <iframe
            title="Hug and Heal Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.8!2d76.6384412!3d9.0621366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0605f9eba6c265%3A0xffdadc0219d41227!2sHugg%20and%20Heal%20Psychological%20Counselling%20Centre!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Overlay card */}
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-neutral-100 max-w-[280px]">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-brand-red" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 text-sm mb-0.5">Hug and Heal</h4>
                <p className="text-neutral-500 text-xs leading-relaxed">Bharanikavu, Sasthamcotta,<br />Kerala 690521</p>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/AJXRhxAtmUKMByBe9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-xs font-semibold text-brand-red hover:underline"
            >
              <Navigation size={13} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
