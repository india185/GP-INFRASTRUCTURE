import {
  Building2,
  Zap,
  HardHat,
  Wrench,
  CircuitBoard,
  Truck,
  ArrowUpRight,
  Check,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const services = [
  {
    icon: Building2,
    title: 'Civil Construction',
    description:
      'Residential, commercial, and industrial building construction from foundation to finishing — delivered with structural integrity and modern engineering standards.',
    features: ['Site preparation & excavation', 'Structural concrete & steel', 'Masonry & architectural finishing', 'MEP coordination'],
  },
  {
    icon: Zap,
    title: 'Electrical Works',
    description:
      'Complete electrical installation and maintenance — wiring, distribution panels, lighting systems, and power infrastructure for buildings of any scale.',
    features: ['Wiring & low-voltage cabling', 'Distribution panel boards', 'Lighting design & installation', 'Power infrastructure'],
  },
  {
    icon: HardHat,
    title: 'Infrastructure & Roads',
    description:
      'Roadwork, drainage systems, and public infrastructure projects built to last with rigorous quality control and compliance with municipal standards.',
    features: ['Paving & grading', 'Storm-water drainage', 'Site development & earthworks', 'Street lighting integration'],
  },
  {
    icon: CircuitBoard,
    title: 'Industrial Electrical',
    description:
      'Heavy-duty electrical systems for factories and plants — motor control centers, transformer installations, and industrial automation wiring.',
    features: ['Motor control centers', 'Transformer installation', 'Industrial automation wiring', 'Power factor correction'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repair',
    description:
      'Ongoing maintenance contracts for buildings and electrical systems — preventive care, fault diagnosis, and emergency repair services 24/7.',
    features: ['Preventive maintenance contracts', 'Fault diagnosis & repair', '24/7 emergency response', 'Thermographic inspections'],
  },
  {
    icon: Truck,
    title: 'Trading & Supply',
    description:
      'Quality electrical and construction materials trading — sourcing and supplying certified cables, fixtures, fittings, and building materials wholesale.',
    features: ['Certified cables & wiring', 'Electrical fixtures & fittings', 'Bulk building materials', 'Competitive wholesale pricing'],
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group relative bg-white rounded-2xl p-8 border border-ink-100 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-600/10 hover:-translate-y-1 transition-all duration-400 overflow-hidden`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-600/30 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
        <service.icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="relative text-xl font-display font-bold text-ink-900 mb-3">
        {service.title}
      </h3>
      <p className="relative text-ink-600 leading-relaxed text-sm mb-5">
        {service.description}
      </p>
      <ul className="relative space-y-2.5 mb-6">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-ink-700">
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center">
              <Check className="w-3 h-3 text-brand-600" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="relative inline-flex items-center gap-1 text-brand-600 font-semibold text-sm group-hover:gap-2.5 transition-all"
      >
        Enquire now
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm tracking-wider uppercase">
            <span className="w-8 h-px bg-brand-600" />
            What We Do
            <span className="w-8 h-px bg-brand-600" />
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink-900 text-balance">
            Comprehensive Construction &amp; Electrical Services
          </h2>
          <p className="mt-4 text-ink-500 leading-relaxed">
            From groundbreaking to grid connection, we handle every aspect of
            your project with a single point of accountability — ensuring
            quality, safety, and efficiency at every stage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
