import { ClipboardList, PencilRuler, HardHat, Zap, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const steps = [
  {
    icon: ClipboardList,
    title: 'Consultation & Site Survey',
    description: 'We visit your site, understand your needs, and assess all technical and regulatory requirements to scope the project accurately.',
  },
  {
    icon: PencilRuler,
    title: 'Design & Planning',
    description: 'Our engineers produce detailed drawings, material specifications, and a project schedule with clear milestones and budget.',
  },
  {
    icon: HardHat,
    title: 'Construction & Execution',
    description: 'Ground is broken. Our crews execute with daily quality checks, safety briefings, and transparent progress reporting.',
  },
  {
    icon: Zap,
    title: 'Electrical Integration',
    description: 'Electrical systems are installed, tested, and commissioned — from wiring to distribution to final power-up and certification.',
  },
  {
    icon: CheckCircle2,
    title: 'Handover & Warranty',
    description: 'Final inspection, client walkthrough, and handover with full documentation. Backed by our 2-year workmanship warranty.',
  },
];

function Step({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[number];
  index: number;
  isLast: boolean;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} relative flex gap-6`} style={{ transitionDelay: `${index * 80}ms` }}>
      {!isLast && (
        <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-gradient-to-b from-brand-300 to-brand-100" />
      )}
      <div className="flex-shrink-0 relative">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-600/30 z-10 relative">
          <step.icon className="w-7 h-7 text-white" />
        </div>
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent-500 text-white text-xs font-bold flex items-center justify-center shadow-md z-20">
          {index + 1}
        </span>
      </div>
      <div className="pb-12 pt-1">
        <h3 className="text-lg font-display font-bold text-ink-900 mb-2">{step.title}</h3>
        <p className="text-ink-600 leading-relaxed text-sm max-w-md">{step.description}</p>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="py-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm tracking-wider uppercase">
            <span className="w-8 h-px bg-brand-600" />
            How We Work
            <span className="w-8 h-px bg-brand-600" />
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink-900 text-balance">
            A Proven Process from Concept to Completion
          </h2>
          <p className="mt-4 text-ink-500 leading-relaxed">
            Five structured phases that ensure every project is delivered on
            time, on budget, and to the highest standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-0">
          <div>
            {steps.slice(0, 3).map((step, i) => (
              <Step key={step.title} step={step} index={i} isLast={i === 2} />
            ))}
          </div>
          <div className="lg:pt-24">
            {steps.slice(3).map((step, i) => (
              <Step key={step.title} step={step} index={i + 3} isLast={i === steps.slice(3).length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
