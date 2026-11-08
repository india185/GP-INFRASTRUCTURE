import { useEffect, useRef, useState } from 'react';
import { Briefcase, Users, Hammer, TrendingUp } from 'lucide-react';
import { useCountUp } from '@/hooks/useReveal';

const stats = [
  { icon: Briefcase, value: 250, suffix: '+', label: 'Projects Completed' },
  { icon: Users, value: 180, suffix: '+', label: 'Satisfied Clients' },
  { icon: Hammer, value: 15, suffix: '+', label: 'Years Experience' },
  { icon: TrendingUp, value: 99, suffix: '%', label: 'On-Time Delivery' },
];

function StatItem({
  icon: Icon,
  value,
  suffix,
  label,
  inView,
}: {
  icon: typeof Briefcase;
  value: number;
  suffix: string;
  label: string;
  inView: boolean;
}) {
  const count = useCountUp(value, 2000, inView);
  return (
    <div className="flex flex-col items-center text-center px-6 py-8 hover:bg-brand-50/50 transition-colors group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50/0 to-brand-50/0 group-hover:from-brand-50/30 transition-all duration-500" />
      <div className="relative w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-3 group-hover:bg-brand-600 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-brand-600 group-hover:text-white transition-colors" />
      </div>
      <span className="relative text-4xl font-display font-bold text-ink-900 tabular-nums">
        {count}{suffix}
      </span>
      <span className="relative text-sm text-ink-500 font-medium mt-1">{label}</span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative -mt-16 z-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl shadow-ink-900/10 border border-ink-100 overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-ink-100">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
