import { useState } from 'react';
import {
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Building2,
  User,
  MessageSquare,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useReveal } from '@/hooks/useReveal';

const services = [
  'Civil Construction',
  'Electrical Works',
  'Infrastructure & Roads',
  'Industrial Electrical',
  'Maintenance & Repair',
  'Trading & Supply',
  'Other',
];

const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '98072 19188', sub: 'Call GP Infrastructure directly', href: 'tel:+919807219188' },
  { icon: Mail, label: 'Email Us', value: 'gopal.svstelecom@gmail.com', sub: 'We reply within 24 hours', href: 'mailto:gopal.svstelecom@gmail.com' },
  { icon: User, label: 'Owner', value: 'Gopal Singh', sub: 'GP Infrastructure', href: '#about' },
  { icon: Clock, label: 'Working Hours', value: 'Mon – Sat: 8AM – 6PM', sub: 'Emergency: 24/7 on call', href: '#' },
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: services[0],
    message: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const { error } = await supabase.from('inquiries').insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      service: form.service,
      message: form.message,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong sending your message. Please try again or call us directly.');
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', phone: '', company: '', service: services[0], message: '' });
    setTimeout(() => setStatus('idle'), 6000);
  };

  const inputClass =
    'w-full pl-11 pr-4 py-3 rounded-xl border border-ink-200 bg-ink-50 text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent focus:bg-white transition-all';
  const labelClass = 'block text-sm font-semibold text-ink-700 mb-2';

  return (
    <section id="contact" className="py-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-14`}>
          <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm tracking-wider uppercase">
            <span className="w-8 h-px bg-brand-600" />
            Get In Touch
            <span className="w-8 h-px bg-brand-600" />
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink-900 text-balance">
            Let's Build Something Together
          </h2>
          <p className="mt-4 text-ink-500 leading-relaxed">
            Tell us about your project and we'll get back to you within 24 hours
            with a free, no-obligation quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-ink-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/5 transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                  <item.icon className="w-5.5 h-5.5 text-brand-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-ink-400 font-medium uppercase tracking-wider">{item.label}</p>
                  <p className="text-ink-900 font-semibold mt-0.5">{item.value}</p>
                  <p className="text-sm text-ink-400 mt-0.5">{item.sub}</p>
                </div>
              </a>
            ))}

            <div className="p-5 bg-gradient-to-br from-brand-600 to-brand-800 rounded-xl text-white">
              <p className="font-display font-bold text-lg">Emergency Service</p>
              <p className="text-sm text-white/80 mt-1 mb-3">Electrical emergency? Our team is on call 24/7.</p>
              <a href="tel:+919807219188" className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all">
                <Phone className="w-4 h-4" />
                Call 98072 19188
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl shadow-ink-900/5 border border-ink-100 p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-ink-900 mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-ink-500 max-w-sm">
                  Thank you for reaching out. Our team will review your inquiry and
                  respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400" />
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="John Smith"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400" />
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="98072 19188"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400" />
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="john@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Company (optional)</label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400" />
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => update('company', e.target.value)}
                        placeholder="Your company"
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Service Needed</label>
                  <select
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                    className={inputClass + ' appearance-none cursor-pointer'}
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Project Details</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-5 h-5 text-ink-400" />
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Tell us about your project scope, timeline, and location..."
                      className={inputClass + ' resize-none pt-3'}
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold shadow-lg shadow-brand-600/30 hover:shadow-xl hover:shadow-brand-600/40 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] transition-all"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="w-4.5 h-4.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
