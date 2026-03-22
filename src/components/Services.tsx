import {
  MessageCircle,
  Users,
  BookOpen,
  User,
  HeartHandshake,
  Wind,
  Sun,
  BrainCircuit,
  Smartphone,
  Activity,
  Shield,
  Brain,
  Sparkles
} from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-50/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-red font-semibold tracking-wider uppercase text-sm mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 mb-6">How We Can Help You</h3>
          <p className="text-lg text-neutral-600 font-light">
            We provide a safe, non-judgmental space for you to explore your thoughts and feelings with certified professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            {
              icon: <MessageCircle className="w-6 h-6 text-brand-red" />,
              title: "Counselling",
              desc: "Guidance to help you navigate life's various emotional challenges."
            },
            {
              icon: <Users className="w-6 h-6 text-brand-red" />,
              title: "Family Counselling",
              desc: "Strengthen family bonds and resolve conflicts through guided support."
            },
            {
              icon: <BookOpen className="w-6 h-6 text-brand-red" />,
              title: "Student Counselling",
              desc: "Helping students manage academic pressure and emotional difficulties."
            },
            {
              icon: <User className="w-6 h-6 text-brand-red" />,
              title: "Individual Counselling",
              desc: "One-on-one sessions tailored for your unique personal growth."
            },
            {
              icon: <HeartHandshake className="w-6 h-6 text-brand-red" />,
              title: "Pre-Marital Counselling",
              desc: "Build a strong, resilient foundation for a lasting marriage."
            },
            {
              icon: <Wind className="w-6 h-6 text-brand-red" />,
              title: "Anxiety",
              desc: "Effective coping strategies to manage stress and persistent worry."
            },
            {
              icon: <Sun className="w-6 h-6 text-brand-red" />,
              title: "Depression",
              desc: "Compassionate support to help you overcome depression and find hope."
            },
            {
              icon: <BrainCircuit className="w-6 h-6 text-brand-red" />,
              title: "Learning Difficulties",
              desc: "Practical strategies to navigate and overcome educational challenges."
            },
            {
              icon: <Smartphone className="w-6 h-6 text-brand-red" />,
              title: "Mobile Addiction",
              desc: "Guided interventions to break unhealthy screen habits and reconnect."
            },
            {
              icon: <Activity className="w-6 h-6 text-brand-red" />,
              title: "Psychotherapy",
              desc: "In-depth therapy to address deep-rooted emotional and psychological issues."
            },
            {
              icon: <Shield className="w-6 h-6 text-brand-red" />,
              title: "Trauma Recovery",
              desc: "A safe environment to help you heal from past traumatic experiences."
            },
            {
              icon: <Brain className="w-6 h-6 text-brand-red" />,
              title: "CBT & Hypno CBT",
              desc: "Evidence-based therapies to reframe negative thought patterns."
            },
            {
              icon: <Sparkles className="w-6 h-6 text-brand-red" />,
              title: "Meditation",
              desc: "Mindfulness and meditation practices for mental clarity and peace."
            }
          ].map((service, idx, arr) => (
            <div
              key={idx}
              className={`bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 hover:shadow-xl hover:border-brand-red/20 transition-all group hover:-translate-y-1 flex flex-col items-start ${idx === arr.length - 1
                  ? 'md:col-span-2 lg:col-span-3 xl:col-span-4 place-self-center w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]'
                  : ''
                }`}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-red/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-red/10 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold font-display mb-2 text-neutral-900">{service.title}</h4>
              <p className="text-sm text-neutral-500 leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
