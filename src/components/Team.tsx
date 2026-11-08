import { Linkedin, Mail } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const team = [
  {
    name: 'James Carter',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: '20+ years in civil engineering. Leads company strategy and oversees all major project milestones.',
  },
  {
    name: 'Priya Sharma',
    role: 'Chief Electrical Engineer',
    image: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Licensed master electrician specializing in industrial power systems and automation.',
  },
  {
    name: 'Daniel Lee',
    role: 'Project Director',
    image: 'https://images.pexels.com/photos/6942776/pexels-photo-6942776.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'PMP-certified leader managing field operations, scheduling, and subcontractor coordination.',
  },
  {
    name: 'Amir Hassan',
    role: 'Head of Trading Division',
    image: 'https://images.pexels.com/photos/7752846/pexels-photo-7752846.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Manages material sourcing, supplier relationships, and wholesale distribution operations.',
  },
];

function TeamCard({ member, index }: { member: (typeof team)[number]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group bg-white rounded-2xl overflow-hidden border border-ink-100 hover:shadow-2xl hover:shadow-brand-600/10 hover:-translate-y-1 transition-all duration-400`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <a href="#" className="w-9 h-9 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white transition-all">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="w-9 h-9 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center text-brand-600 hover:bg-brand-600 hover:text-white transition-all">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-ink-900">{member.name}</h3>
        <p className="text-brand-600 text-sm font-semibold mt-0.5">{member.role}</p>
        <p className="text-ink-500 text-sm leading-relaxed mt-3">{member.bio}</p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-24 construction-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm tracking-wider uppercase">
            <span className="w-8 h-px bg-brand-600" />
            Meet the Team
            <span className="w-8 h-px bg-brand-600" />
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink-900 text-balance">
            The Experts Behind Every Project
          </h2>
          <p className="mt-4 text-ink-500 leading-relaxed">
            Our leadership team brings together decades of combined experience in
            civil engineering, electrical systems, and project management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
