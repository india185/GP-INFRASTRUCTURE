import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const faqs = [
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. GP Infrastructure provides civil construction, electrical works, and trading services for the regions we serve. We carry comprehensive general liability insurance of $5M and workers compensation coverage for all field personnel. Certificates are available on request.',
  },
  {
    question: 'Do you provide free quotes and consultations?',
    answer: 'Absolutely. We offer a free on-site consultation and a detailed, no-obligation project quote within 48 hours of the visit. Our quotes include scope of work, materials list, timeline, and fixed pricing.',
  },
  {
    question: 'What project sizes do you handle?',
    answer: 'We handle projects ranging from small electrical repairs ($500+) to large-scale construction builds ($10M+). Our team scales resources based on project complexity — no job is too small or too large.',
  },
  {
    question: 'Do you offer warranties on your work?',
    answer: 'Yes. All construction workmanship is backed by a 2-year warranty, and electrical installations carry a 1-year warranty. Material warranties follow the manufacturer terms, which we help you register at handover.',
  },
  {
    question: 'Can you handle both construction and electrical in one contract?',
    answer: "That is our specialty. As an integrated civil and electrical firm, we offer single-source delivery — one contract, one project manager, one accountable team from groundbreaking to grid connection. This eliminates coordination gaps and reduces your risk.",
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Timelines vary by scope. Small electrical jobs take 1-2 weeks, mid-size builds 3-8 months, and large infrastructure projects 12-24 months. During the planning phase we provide a detailed schedule with milestones and weekly progress reports.',
  },
];

function FaqItem({ item, index }: { item: (typeof faqs)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} bg-white rounded-xl border border-ink-100 overflow-hidden transition-all ${open ? 'shadow-lg shadow-brand-600/5' : ''}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-display font-semibold text-ink-900 text-base">{item.question}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${open ? 'bg-brand-600 text-white rotate-180' : 'bg-ink-50 text-ink-500'}`}>
          <ChevronDown className="w-5 h-5" />
        </span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-ink-600 leading-relaxed text-sm">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-ink-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm tracking-wider uppercase">
            <span className="w-8 h-px bg-brand-600" />
            FAQ
            <span className="w-8 h-px bg-brand-600" />
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink-900 text-balance">
            Questions? We've Got Answers
          </h2>
          <p className="mt-4 text-ink-500 leading-relaxed">
            Everything you need to know before starting your project with us.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.question} item={faq} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-ink-500 text-sm">Still have questions?</p>
          <a href="#contact" className="mt-2 inline-flex items-center gap-2 text-brand-600 font-semibold hover:gap-3 transition-all">
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
}
