import {
  ShieldCheck,
  Clock4,
  IndianRupee,
  Users2,
  Award,
  FileCheck2,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    description:
      'Rigorous safety protocols on every site — protecting our crew, your property, and the public throughout the project.',
  },
  {
    icon: Clock4,
    title: 'On-Time Delivery',
    description:
      'Clear schedules, milestone tracking, and proactive coordination mean your project finishes when we promise.',
  },
  {
    icon: IndianRupee,
    title: 'Transparent Pricing',
    description:
      'Detailed, no-surprise quotes with fixed pricing. You know exactly what you are paying for before work begins.',
  },
  {
    icon: Users2,
    title: 'Experienced Team',
    description:
      'Skilled civil engineers, electricians, and project managers with hands-on field experience across diverse project types.',
  },
  {
    icon: Award,
    title: 'Quality Workmanship',
    description:
      'Every build meets modern engineering standards — we do not cut corners, and it shows in the finished result.',
  },
  {
    icon: FileCheck2,
    title: 'Single-Point Accountability',
    description:
      'One contract, one project manager, one responsible partner from start to finish — no coordination gaps between trades.',
  },
];

function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof reasons)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group relative bg-white rounded-2xl p-7 border border-ink-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/8 hover:-translate-y-1 transition-all duration-400`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center mb-5 group-hover:from-brand-500 group-hover:to-brand-700 transition-all duration-400">
        <reason.icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-lg font-display font-bold text-ink-900 mb-2">
        {reason.title}
      </h3>
      <p className="text-sm text-ink-600 leading-relaxed">
        {reason.description}
      </p>
      <span className="absolute top-6 right-6 text-5xl font-display font-bold text-ink-50 group-hover:text-brand-50 transition-colors select-none">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  );
}

export default function WhyChooseUs() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-14`}
        >
          <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm tracking-wider uppercase">
            <span className="w-8 h-px bg-brand-600" />
            Why Choose Us
            <span className="w-8 h-px bg-brand-600" />
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink-900 text-balance">
            Built on Trust, Delivered with Precision
          </h2>
          <p className="mt-4 text-ink-500 leading-relaxed">
            We do not just build structures — we build relationships. Here is
            what sets GP Infrastructure apart on every project we take on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.title} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
