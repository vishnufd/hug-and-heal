import { doc, getDoc, updateDoc } from 'firebase/firestore/lite';
import { MapPin, Calendar, Heart, Sparkles, User, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

// --- Validation Rules ---
const VALIDATION = {
  name: {
    regex: /^[A-Za-z\s.]{2,50}$/,
    message: 'Name must be 2–50 characters, letters and spaces only.'
  },
  age: {
    regex: /^(?:[1-9]|[1-9]\d|1[01]\d|120)$/,
    message: 'Please enter a valid age (1–120).'
  },
  mobile: {
    regex: /^[6-9]\d{9}$/,
    message: 'Enter a valid 10-digit Indian mobile number.'
  },
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Please enter a valid email address.'
  },
  address: {
    regex: /^[A-Za-z0-9\s,.\-/()]{2,100}$/,
    message: 'Address must be 2–100 characters (letters, numbers, commas).'
  }
} as const;

type FieldName = keyof typeof VALIDATION;

const WHATSAPP_NUMBER = '917012911016';

export function Campaign() {
  useEffect(() => {
    document.title = 'Trauma Healing Campaign | Hug and Heal';
  }, []);

  const [participantCount, setParticipantCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldName, string>>>({});

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    email: '',
    address: ''
  });

  const getParticipantCount = async () => {
    try {
      const docRef = doc(db, 'campaign', '6bijiMTpKg9n898RDbm6');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setParticipantCount(data.participant_count || 0);
      }
    } catch (error) {
      console.error("Error fetching participant count:", error);
    }
  };

  useEffect(() => {
    getParticipantCount();
  }, []);

  const validateField = (field: FieldName, value: string): string | null => {
    const trimmed = value.trim();
    if (!trimmed) return `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    if (!VALIDATION[field].regex.test(trimmed)) return VALIDATION[field].message;
    return null;
  };

  const validateAll = (): boolean => {
    const errors: Partial<Record<FieldName, string>> = {};
    let isValid = true;

    for (const field of Object.keys(VALIDATION) as FieldName[]) {
      const err = validateField(field, formData[field]);
      if (err) {
        errors[field] = err;
        isValid = false;
      }
    }

    setFieldErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) return;

    setIsSubmitting(true);
    try {
      const newCount = participantCount + 1;
      const docRef = doc(db, 'campaign', '6bijiMTpKg9n898RDbm6');
      await updateDoc(docRef, {
        participant_count: newCount
      });

      setParticipantCount(newCount);
      setFieldErrors({});
      
      const text = [
        `*New Campaign Registration — One Day Trauma Healing Program*`,
        ``,
        `*Full Name:* ${formData.name}`,
        `*Age:* ${formData.age}`,
        `*Mobile:* ${formData.mobile}`,
        `*Email:* ${formData.email}`,
        `*Address / Region:* ${formData.address}`,
      ].join('\n');

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');

      setFormData({ name: '', age: '', mobile: '', email: '', address: '' });
    } catch (err) {
      console.error("Error during registration:", err);
      setFieldErrors({ name: 'Failed to complete registration. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear field error on change
    if (fieldErrors[name as FieldName]) {
      setFieldErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const keyAspects = [
    { title: "Mindful Meditation", desc: "To bring the mind to the present moment." },
    { title: "Inner Child Healing", desc: "To heal childhood wounds." },
    { title: "Forgiveness Therapy", desc: "To let go of held-on anger and pain in the mind." },
    { title: "Happiness Meditation", desc: "To fill the mind with happiness and peace." }
  ];

  return (
    <section id="campaign" className="py-12 md:py-24 bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full border border-brand-red/15 bg-brand-red/1 text-brand-red font-medium mb-6 md:mb-8">
            <Heart size={14} className="fill-brand-red sm:w-4 sm:h-4 shrink-0" />
            <span className="text-xs sm:text-sm tracking-tight leading-none uppercase md:capitalize">Hug & Heal Center for Counseling & Psychotherapy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-display leading-[1.1] mb-6 text-neutral-900 tracking-tight text-balance">
            One Day Trauma <br className="hidden sm:block" />
            <span className="text-brand-red">Healing Program</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 mb-8 md:mb-10 leading-relaxed font-light max-w-3xl mx-auto px-2">
            Gain freedom from old wounds and give a new beginning to your life.
            This will be a new beginning for your mind and life.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-y-3 gap-x-4 sm:gap-x-8 p-4 md:p-5 bg-white rounded-2xl md:rounded-3xl border border-neutral-100 shadow-sm w-full sm:w-auto">
            <div className="flex items-center gap-2 text-neutral-700">
              <MapPin size={18} className="text-brand-red shrink-0" />
              <span className="font-medium text-xs sm:text-sm md:text-base">Lavilla Resort, Thekkumbhagam</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 hidden md:block"></div>
            <div className="flex items-center gap-2 text-neutral-700">
              <Calendar size={18} className="text-brand-red shrink-0" />
              <span className="font-medium text-xs sm:text-sm md:text-base">November 29, 30</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 hidden md:block"></div>
            <div className="px-3 py-1 rounded-full bg-red-50 text-brand-red font-bold text-[10px] sm:text-xs md:text-sm tracking-wide">
              ONLY FOR LADIES
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 xl:gap-20 items-start">

          {/* Left Column: Content & Facilitator */}
          <div className="lg:col-span-7 space-y-10 md:space-y-12">
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              <p>
                We must first recognize ourselves. If there are shortcomings, fill them.
                Discover abilities. Love ourselves without conditions. Hold close in falls
                and support ourselves.
              </p>
              <p>
                Do you know how strong every woman is? God created us as the best.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-display flex items-center gap-3 text-neutral-900">
                <Sparkles size={24} className="text-brand-red sm:w-7 sm:h-7" />
                Key Aspects of the Program
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {keyAspects.map((item, index) => (
                  <div key={index} className="flex items-start sm:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-neutral-100 shadow-xs hover:shadow-md transition-all group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-brand-red/5 flex items-center justify-center text-brand-red shrink-0 group-hover:scale-110 transition-transform mt-1 sm:mt-0">
                      <Heart size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 text-lg sm:text-xl mb-0.5 sm:mb-1">{item.title}</h3>
                      <p className="text-neutral-500 text-sm sm:text-base leading-snug sm:leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilitator Section */}
            <div className="p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-white border border-brand-red/10 shadow-sm flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 sm:gap-8 border-l-4 border-l-brand-red">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-red/5 flex items-center justify-center text-brand-red shrink-0">
                <User size={32} strokeWidth={1.5} className="sm:w-10 sm:h-10" />
              </div>
              <div className="pt-1">
                <p className="text-brand-red font-bold tracking-widest text-[10px] sm:text-xs uppercase mb-1">Facilitator</p>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-1">Noora Beevi. S</h3>
                <p className="text-neutral-500 text-sm sm:text-base font-medium">Asst. Psychological Counselor & Psychotherapist</p>
              </div>
            </div>
          </div>

          {/* Right Column: Status & Form */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 lg:sticky lg:top-32">
            {/* Campaign Status Card */}
            <div className="bg-white p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-neutral-100 shadow-lg overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-red/10">
                <div
                  className="h-full bg-brand-red transition-all duration-1000 ease-out"
                  style={{ width: `${Math.min((participantCount / 20) * 100, 100)}%` }}
                ></div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-1">Campaign Status</h3>
              <p className="text-neutral-500 text-xs sm:text-sm mb-4 md:mb-6">Help us reach our minimum goal to start the program</p>

              <div className="flex justify-between items-end mb-1">
                <div>
                  <span className="text-2xl md:text-3xl font-bold text-brand-red">{participantCount}</span>
                  <span className="text-neutral-400 text-xs sm:text-sm ml-2 font-medium">People Registered</span>
                </div>
                <div className="text-neutral-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider">Goal: 20</div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-neutral-100 shadow-2xl">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-2xl font-bold text-neutral-900">Reserve Your Seat</h3>
                <p className="text-neutral-500 text-xs sm:text-sm mt-2 font-light italic">
                  Healing, self-love, happiness - everything will flow to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5" noValidate>
                {Object.keys(fieldErrors).length > 0 && (
                  <div className="p-3 bg-red-50 text-brand-red text-sm font-medium rounded-xl border border-red-100 text-center">
                    Please fix the highlighted fields below.
                  </div>
                )}

                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-neutral-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-neutral-50 border outline-none transition-all placeholder:text-neutral-300 text-sm sm:text-base ${fieldErrors.name ? 'border-brand-red bg-red-50/30 focus:border-brand-red' : 'border-neutral-100 focus:border-brand-red focus:bg-white'}`}
                  />
                  {fieldErrors.name && <p className="text-brand-red text-[11px] sm:text-xs ml-1 mt-1">{fieldErrors.name}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-neutral-700 ml-1">Age</label>
                    <input
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="e.g. 28"
                      inputMode="numeric"
                      className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-neutral-50 border outline-none transition-all placeholder:text-neutral-300 text-sm sm:text-base ${fieldErrors.age ? 'border-brand-red bg-red-50/30 focus:border-brand-red' : 'border-neutral-100 focus:border-brand-red focus:bg-white'}`}
                    />
                    {fieldErrors.age && <p className="text-brand-red text-[11px] sm:text-xs ml-1 mt-1">{fieldErrors.age}</p>}
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-neutral-700 ml-1">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter your number"
                      inputMode="numeric"
                      maxLength={10}
                      className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-neutral-50 border outline-none transition-all placeholder:text-neutral-300 text-sm sm:text-base ${fieldErrors.mobile ? 'border-brand-red bg-red-50/30 focus:border-brand-red' : 'border-neutral-100 focus:border-brand-red focus:bg-white'}`}
                    />
                    {fieldErrors.mobile && <p className="text-brand-red text-[11px] sm:text-xs ml-1 mt-1">{fieldErrors.mobile}</p>}
                  </div>
                </div>

                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-neutral-700 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-neutral-50 border outline-none transition-all placeholder:text-neutral-300 text-sm sm:text-base ${fieldErrors.email ? 'border-brand-red bg-red-50/30 focus:border-brand-red' : 'border-neutral-100 focus:border-brand-red focus:bg-white'}`}
                  />
                  {fieldErrors.email && <p className="text-brand-red text-[11px] sm:text-xs ml-1 mt-1">{fieldErrors.email}</p>}
                </div>

                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-neutral-700 ml-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-neutral-50 border outline-none transition-all placeholder:text-neutral-300 text-sm sm:text-base ${fieldErrors.address ? 'border-brand-red bg-red-50/30 focus:border-brand-red' : 'border-neutral-100 focus:border-brand-red focus:bg-white'}`}
                  />
                  {fieldErrors.address && <p className="text-brand-red text-[11px] sm:text-xs ml-1 mt-1">{fieldErrors.address}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-red hover:bg-[#C21D3A] text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-lg shadow-brand-red/20 transition-all hover:-translate-y-1 active:scale-[0.98] mt-2 sm:mt-4 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? 'Processing...' : 'Join Our Campaign'}
                </button>
              </form>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-neutral-100 flex items-center justify-center gap-3 text-neutral-600">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-red/5 flex items-center justify-center text-brand-red">
                  <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs text-neutral-400 block leading-none mb-1">To Connect</span>
                  <span className="font-bold text-sm sm:text-base text-neutral-900 tracking-wider">8593060631</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
