import { useState } from 'react';
import { ArrowUpRight, X, MapPin, Calendar, DollarSign, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

type Project = {
  title: string;
  category: string;
  image: string;
  location: string;
  description: string;
  year: string;
  budget: string;
  scope: string[];
  duration: string;
};

const projects: Project[] = [
  {
    title: 'Riverside Residential Complex',
    category: 'Civil Construction',
    image: 'https://images.pexels.com/photos/30580640/pexels-photo-30580640.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Riverside District',
    description: '48-unit residential development with full electrical fit-out, including underground parking, common area lighting, and individual metering for each unit.',
    year: '2024',
    budget: '$4.2M',
    duration: '14 months',
    scope: ['Foundation & structure', 'Electrical fit-out', 'Plumbing coordination', 'Finishing & landscaping'],
  },
  {
    title: 'Downtown Power Distribution Hub',
    category: 'Electrical Works',
    image: 'https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Central Business District',
    description: 'High-capacity distribution panels for a commercial tower with redundant feeders, surge protection, and smart monitoring integration.',
    year: '2023',
    budget: '$1.8M',
    duration: '8 months',
    scope: ['Panel design & install', 'Cable routing', 'Surge protection', 'Smart monitoring'],
  },
  {
    title: 'Industrial Warehouse Facility',
    category: 'Industrial Electrical',
    image: 'https://images.pexels.com/photos/7937305/pexels-photo-7937305.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Industrial Park Zone 3',
    description: 'Motor control centers and automation wiring for a 60,000 sq ft logistics hub with conveyor systems and automated door controls.',
    year: '2024',
    budget: '$2.6M',
    duration: '10 months',
    scope: ['Motor control centers', 'Automation wiring', 'Conveyor integration', 'Safety systems'],
  },
  {
    title: 'Highway Overpass Construction',
    category: 'Infrastructure',
    image: 'https://images.pexels.com/photos/5504388/pexels-photo-5504388.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Northern Bypass',
    description: 'Concrete overpass with integrated drainage, street lighting, and traffic signal systems spanning 480 meters across a major intersection.',
    year: '2023',
    budget: '$6.5M',
    duration: '18 months',
    scope: ['Structural concrete', 'Drainage systems', 'Street lighting', 'Traffic signals'],
  },
  {
    title: 'Corporate Office Tower',
    category: 'Civil Construction',
    image: 'https://images.pexels.com/photos/39643512/pexels-photo-39643512.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Tech Corridor',
    description: '12-story commercial building with modern glass facade, full MEP systems, intelligent lighting controls, and energy-efficient HVAC.',
    year: '2024',
    budget: '$8.9M',
    duration: '22 months',
    scope: ['Structural frame', 'Glass facade', 'MEP systems', 'Intelligent lighting'],
  },
  {
    title: 'Substation Upgrade Project',
    category: 'Electrical Works',
    image: 'https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Eastside Substation',
    description: 'Switchboard modernization and transformer installation for a municipal substation, increasing capacity by 40% with zero downtime during cutover.',
    year: '2022',
    budget: '$3.1M',
    duration: '12 months',
    scope: ['Switchboard upgrade', 'Transformer install', 'Cutover planning', 'Load testing'],
  },
  {
    title: 'Bulk Electrical Material Supply',
    category: 'Trading',
    image: 'https://images.pexels.com/photos/29596327/pexels-photo-29596327.jpeg?auto=compress&cs=tinysrgb&w=1200',
    location: 'Regional Supply Hub',
    description: 'Sourcing and supply of certified cables, distribution panels, and electrical fittings for a multi-site commercial development — delivered on schedule across all locations.',
    year: '2024',
    budget: '$920K',
    duration: '4 months',
    scope: ['Certified cable supply', 'Panel boards & fittings', 'Bulk procurement', 'Site delivery coordination'],
  },
];

const categories = ['All', 'Civil Construction', 'Electrical Works', 'Industrial Electrical', 'Infrastructure', 'Trading'];

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-2xl bg-ink-900 shadow-lg cursor-pointer`}
      style={{ transitionDelay: `${index * 50}ms` }}
      onClick={onClick}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 p-6">
        <span className="inline-block px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-semibold mb-3">
          {project.category}
        </span>
        <h3 className="text-lg font-display font-bold text-white mb-1">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm mb-2 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5" />
          {project.location}
        </p>
        <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="mt-4 inline-flex items-center gap-1 text-accent-400 text-sm font-semibold opacity-0 group-hover:opacity-100 group-hover:gap-2.5 transition-all">
          View case study
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink-950/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-ink-700 hover:bg-ink-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-semibold mb-2">
              {project.category}
            </span>
            <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <p className="text-ink-600 leading-relaxed mb-6">{project.description}</p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { icon: MapPin, label: 'Location', value: project.location },
              { icon: Calendar, label: 'Year', value: project.year },
              { icon: DollarSign, label: 'Budget', value: project.budget },
            ].map((item) => (
              <div key={item.label} className="text-center p-4 bg-ink-50 rounded-xl">
                <item.icon className="w-5 h-5 text-brand-600 mx-auto mb-2" />
                <p className="text-xs text-ink-400 font-medium uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-semibold text-ink-900 mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <p className="text-xs text-ink-400 font-medium uppercase tracking-wider mb-3">
              Project Duration: {project.duration}
            </p>
            <h4 className="font-display font-semibold text-ink-900 mb-3">Scope of Work</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.scope.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-ink-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-600 text-white font-semibold shadow-lg shadow-brand-600/30 hover:bg-brand-700 transition-all"
          >
            Request a Similar Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 construction-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm tracking-wider uppercase">
              <span className="w-8 h-px bg-brand-600" />
              Our Portfolio
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink-900 text-balance">
              Projects That Define Our Craftsmanship
            </h2>
          </div>
          <p className="text-ink-500 md:max-w-md leading-relaxed">
            Every project we deliver is a testament to our commitment to
            engineering excellence, safety, and client satisfaction.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => {
            const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                    : 'bg-ink-50 text-ink-600 hover:bg-ink-100'
                }`}
              >
                {cat}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  filter === cat ? 'bg-white/20' : 'bg-ink-200/60'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
