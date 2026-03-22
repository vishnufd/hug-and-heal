import { useState, FormEvent } from 'react';
import {
  MessageCircle, Lock, CalendarClock, User, Phone,
  Mail, MessageSquare, Star,
} from 'lucide-react';

const WHATSAPP_NUMBER = '917012911016';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDateTime: string;
  sessionType: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  preferredDateTime?: string;
  sessionType?: string;
}

function formatDateTime(value: string): string {
  if (!value) return '';
  const date = new Date(value);
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hh = String(hours % 12 || 12).padStart(2, '0');
  return `${dd}-${mm}-${yyyy} ${hh}:${minutes} ${ampm}`;
}

const testimonials = [
  {
    name: 'Robin Roy',
    text: 'Very professional and exceptional service.She listens to our problems patiently and provides her best.',
    rating: 5,
  },
  {
    name: 'Letailor Sa',
    text: 'I highly recommend hug and heal is a professinal mental health care and good and better counsiling service.',
    rating: 5,
  },
  {
    name: 'Shamnad Abi',
    text: 'Well organized Counselling Centre in the Town, Bharanikavu.Expereinced Teams, higly proffesional and result.',
    rating: 5,
  },
  {
    name: 'Nihala Rahim',
    text: 'I highly recommend Hug and Heal to anyone seeking compassionate and professional mental health care.',
    rating: 5,
  },
  {
    name: 'Noushad Kanneri',
    text: 'Experienced counsilor and good service  and feel good experience.',
    rating: 5,
  },
];

export function BookSession() {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredDateTime: '',
    sessionType: 'Online',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const validate = (data: FormData): FormErrors => {
    const errs: FormErrors = {};
    if (!data.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!data.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(data.phone.trim())) {
      errs.phone = 'Enter a valid 10-digit mobile number.';
    }
    if (!data.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errs.email = 'Enter a valid email address.';
    }
    if (!data.preferredDateTime) {
      errs.preferredDateTime = 'Please select a preferred date & time.';
    } else if (new Date(data.preferredDateTime) < new Date()) {
      errs.preferredDateTime = 'Please choose a future date & time.';
    }
    if (!data.sessionType) errs.sessionType = 'Please select a session type.';
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updated = { ...form, [name]: value };
    setForm(updated);
    if (touched[name as keyof FormData]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const allTouched: Partial<Record<keyof FormData, boolean>> = {
      fullName: true, phone: true, email: true,
      preferredDateTime: true, sessionType: true,
    };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const text = [
      `*New Session Booking — Hug & Heal*`,
      ``,
      `*Full Name:* ${form.fullName}`,
      `*Mobile:* ${form.phone}`,
      `*Email:* ${form.email}`,
      `*Preferred Date & Time:* ${formatDateTime(form.preferredDateTime)}`,
      `*Session Type:* ${form.sessionType}`,
      `*Message:* ${form.message || '—'}`,
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const inputBase =
    'w-full px-4 py-3.5 rounded-xl border text-sm text-neutral-800 placeholder:text-neutral-400 bg-white/80 transition-all duration-200 outline-none focus:ring-2 focus:ring-brand-red/25 focus:border-brand-red focus:bg-white';
  const inputError = 'border-red-400 bg-red-50/30';
  const inputNormal = 'border-neutral-200 hover:border-neutral-300';

  return (
    <section id="book-session" className="relative py-20 md:py-28 bg-neutral-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-sm font-semibold mb-4">
            <CalendarClock size={14} />
            <span>Easy Booking</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-neutral-900 mb-4">
            Book Your <span className="text-brand-red">Session</span>
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Take the first step towards healing. Fill in your details and we'll reach out via{' '}
            <span className="text-brand-red font-semibold">WhatsApp</span>.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">

          {/* ── LEFT COLUMN — Info Panel ── */}
          <div className="flex flex-col gap-8">

            {/* Testimonials */}
            <div>
              <h3 className="text-2xl font-bold font-display text-neutral-900 mb-6">
                What Our <span className="text-brand-red">Clients Say</span>
              </h3>
              <div className="flex flex-col gap-4">
                {testimonials.map(({ name, text, rating }) => (
                  <div
                    key={name}
                    className="p-5 bg-white rounded-2xl border border-neutral-100 shadow-sm"
                  >
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: rating }).map((_, i) => (
                        <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-neutral-600 text-sm leading-relaxed italic mb-3">"{text}"</p>
                    <p className="text-xs font-semibold text-neutral-800">— {name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Form ── */}
          <div className="bg-white rounded-3xl border border-neutral-100 shadow-xl shadow-neutral-200/50 p-8 md:p-10">
            <h3 className="text-xl font-bold text-neutral-900 mb-1">Fill in Your Details</h3>
            <p className="text-sm text-neutral-400 mb-7">All fields marked <span className="text-brand-red">*</span> are required.</p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                  <span className="inline-flex items-center gap-1.5">
                    <User size={13} className="text-brand-red" />
                    Full Name <span className="text-brand-red">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your full name"
                  className={`${inputBase} ${errors.fullName ? inputError : inputNormal}`}
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Phone + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                    <span className="inline-flex items-center gap-1.5">
                      <Phone size={13} className="text-brand-red" />
                      Phone Number <span className="text-brand-red">*</span>
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+91 XXXXX XXXXX"
                    maxLength={10}
                    className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                    <span className="inline-flex items-center gap-1.5">
                      <Mail size={13} className="text-brand-red" />
                      Email Address <span className="text-brand-red">*</span>
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="your@email.com"
                    className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Date & Time + Session Type */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarClock size={13} className="text-brand-red" />
                      Preferred Date & Time <span className="text-brand-red">*</span>
                    </span>
                  </label>
                  <input
                    type="datetime-local"
                    name="preferredDateTime"
                    value={form.preferredDateTime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputBase} ${errors.preferredDateTime ? inputError : inputNormal}`}
                  />
                  {errors.preferredDateTime && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.preferredDateTime}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                    <span className="inline-flex items-center gap-1.5">
                      Session Type <span className="text-brand-red">*</span>
                    </span>
                  </label>
                  <select
                    name="sessionType"
                    value={form.sessionType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`${inputBase} ${errors.sessionType ? inputError : inputNormal} cursor-pointer`}
                  >
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </select>
                  {errors.sessionType && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.sessionType}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                  <span className="inline-flex items-center gap-1.5">
                    <MessageSquare size={13} className="text-brand-red" />
                    Message / Concern
                  </span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  placeholder="Tell us briefly what you'd like to discuss..."
                  className={`${inputBase} resize-y min-h-[110px] ${inputNormal}`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                id="book-session-submit"
                className="w-full flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red/85 active:scale-[0.98] text-white font-semibold text-base py-4 rounded-xl transition-all duration-200 shadow-lg shadow-brand-red/25 cursor-pointer"
              >
                <MessageCircle size={20} className="fill-white/20" />
                Book via WhatsApp
              </button>

              {/* Security note */}
              <p className="text-center text-xs text-neutral-400 flex items-center justify-center gap-1.5 pt-1">
                <Lock size={11} />
                Your information is completely{' '}
                <span className="text-brand-red font-medium">confidential and secure</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
