import { Shield, Award, Clock, Leaf, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import ownerImg from '@/components/Gemini_Generated_Image_2odpsm2odpsm2odp.png';

const values = [
  { icon: Shield, title: 'Safety First', description: 'Every site operates under strict safety protocols. Zero-incident is not a goal — it is the standard.' },
  { icon: Award, title: 'Certified Quality', description: 'ISO-aligned processes and certified materials ensure every deliverable meets or exceeds industry standards.' },
  { icon: Clock, title: 'On-Time Delivery', description: 'Meticulous planning and real-time progress tracking keep your project on schedule, every time.' },
  { icon: Leaf, title: 'Sustainable Practices', description: 'We integrate eco-friendly materials and energy-efficient electrical designs into every build.' },
];

const certifications = [
  'ISO 9001 Quality Management',
  'OSHA Safety Certified',
  'Class A Contractor License',
  'Master Electrician Certified',
];

const aboutImg = 'https://images.pexels.com/photos/37198884/pexels-photo-37198884.jpeg?auto=compress&cs=tinysrgb&w=1000';


export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-24 bg-ink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-16 items-center`}>
          <div className="relative">
            <img
              src={aboutImg}
              alt="Engineers in safety gear reviewing blueprints"
              className="rounded-2xl shadow-2xl shadow-ink-900/20 w-full object-cover h-[460px]"
            />
            <div className="owner-card-scene absolute -bottom-10 right-0 sm:-right-8 w-52 sm:w-64">
              <div className="owner-card-shadow absolute inset-3 rounded-2xl bg-brand-900/25" />
              <div className="owner-card relative rounded-2xl bg-white p-1.5 shadow-2xl shadow-ink-900/25 ring-1 ring-ink-100">
                <div className="owner-card-image-wrap relative overflow-hidden rounded-xl">
                  <img
                    src={ownerImg}
                    alt="Gopal Singh, Proprietor of GP Infrastructure"
                    className="owner-card-image object-cover object-left w-full h-56 sm:h-64"
                  />
                  <div className="owner-card-glare absolute inset-0 pointer-events-none" />
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-xl bg-ink-950/85 px-4 py-3 text-white backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">Proprietor</p>
                  <p className="font-display font-semibold text-lg">Gopal Singh</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-4 sm:-left-6 bg-gradient-to-br from-brand-600 to-brand-800 text-white rounded-2xl shadow-xl px-6 py-4 hidden sm:block">
              <span className="block text-3xl font-display font-bold">15+</span>
              <span className="block text-sm text-white/80">Years of Excellence</span>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm tracking-wider uppercase">
              <span className="w-8 h-px bg-brand-600" />
              About GP Infrastructure
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink-900 text-balance">
              A Legacy of Building &amp; Powering Communities
            </h2>
            <p className="mt-5 text-ink-600 leading-relaxed">
              Led by Gopal Singh, GP Infrastructure delivers dependable civil construction,
              electrical works, and trading support for residential, commercial,
              industrial, and public infrastructure projects.
            </p>
            <p className="mt-4 text-ink-600 leading-relaxed">
              Our integrated team of civil engineers, electricians, and project
              managers work as one unit, eliminating the gaps that plague
              multi-contractor projects. When you work with GP Infrastructure, you get a
              single accountable partner from groundbreaking to final
              inspection.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2.5 text-sm text-ink-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0" />
                  {cert}
                </div>
              ))}
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-brand-50 flex items-center justify-center">
                    <value.icon className="w-5.5 h-5.5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-ink-900 mb-1">{value.title}</h4>
                    <p className="text-sm text-ink-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-600 text-white font-semibold shadow-lg shadow-brand-600/30 hover:bg-brand-700 hover:shadow-xl transition-all group"
            >
              Work With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
