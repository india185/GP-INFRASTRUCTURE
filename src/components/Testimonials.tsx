import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Property Developer, Horizon Realty',
    rating: 5,
    quote: 'GP Infrastructure handled the entire construction and electrical fit-out for our 48-unit complex. They delivered two weeks ahead of schedule and the quality is outstanding. Their single-team approach eliminated all the coordination headaches we had with previous contractors.',
    avatar: 'MC',
  },
  {
    name: 'Sarah Al-Mahmoud',
    role: 'Operations Director, Industrial Park Corp',
    rating: 5,
    quote: 'Their industrial electrical team upgraded our motor control centers with minimal downtime. Professional, safety-conscious, and genuinely reliable. The project was completed during our scheduled maintenance window with zero unplanned interruptions.',
    avatar: 'SA',
  },
  {
    name: 'David Okonkwo',
    role: 'City Engineer, Municipal Works Dept',
    rating: 5,
    quote: 'The highway overpass project was complex, but GP Infrastructure managed it flawlessly. Their drainage work and street lighting integration was top-notch. Weekly progress reports kept our stakeholders informed at every stage.',
    avatar: 'DO',
  },
  {
    name: 'Elena Volkov',
    role: 'Facilities Manager, Summit Holdings',
    rating: 5,
    quote: 'We switched to GP Infrastructure for our annual maintenance contract two years ago. Their preventive approach has cut our emergency repair costs by 60%. The 24/7 response team is always there when we need them.',
    avatar: 'EV',
  },
  {
    name: 'Raj Patel',
    role: 'Construction Manager, TechCor Builders',
    rating: 5,
    quote: 'The trading division supplied all our electrical materials for a 12-story tower. Competitive pricing, certified products, and on-time delivery to site. They became our go-to supplier after one project.',
    avatar: 'RP',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, visible } = useReveal<HTMLDivElement>();

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="py-24 construction-surface">
      <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} max-w-5xl mx-auto px-4 sm:px-6`}>
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm tracking-wider uppercase">
            <span className="w-8 h-px bg-brand-600" />
            Client Voices
            <span className="w-8 h-px bg-brand-600" />
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink-900 text-balance">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="relative bg-gradient-to-br from-ink-50 to-white rounded-3xl p-8 sm:p-12 border border-ink-100 shadow-xl">
          <Quote className="w-16 h-16 text-brand-100 absolute top-6 left-6" fill="currentColor" />

          <div className="relative">
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent-500" fill="currentColor" />
              ))}
            </div>

            <p className="text-lg sm:text-xl text-ink-700 leading-relaxed font-medium mb-8 min-h-[120px]">
              "{t.quote}"
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white font-display font-bold text-lg flex items-center justify-center shadow-lg">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-display font-bold text-ink-900">{t.name}</p>
                  <p className="text-sm text-ink-500">{t.role}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-lg bg-white border border-ink-200 flex items-center justify-center text-ink-600 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-lg bg-white border border-ink-200 flex items-center justify-center text-ink-600 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-brand-600' : 'w-2 bg-ink-200 hover:bg-ink-300'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
