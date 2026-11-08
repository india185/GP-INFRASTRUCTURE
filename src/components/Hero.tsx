import { ArrowRight, CheckCircle2, Play, Star } from 'lucide-react';
import { useParallax } from '@/hooks/useReveal';

const heroImg =
  'https://images.pexels.com/photos/5511065/pexels-photo-5511065.jpeg?auto=compress&cs=tinysrgb&w=1920';

const highlights = [
  'Licensed & Insured Contractors',
  '15+ Years of Experience',
  'On-Time Project Delivery',
];

export default function Hero() {
  const bgRef = useParallax<HTMLDivElement>(0.25);

  return (
    <section id="home" className="relative isolate min-h-screen flex items-center overflow-hidden bg-ink-950">
      <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none will-change-transform">
        <img
          src={heroImg}
          alt="Construction site with workers on high-rise"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/92 via-ink-950/75 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/30" />
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none bg-grid-pattern bg-[size:60px_60px] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-glow-pulse" />
            Trusted by 200+ clients across the region
          </div>

          <div className="flex items-center gap-1 mb-4 animate-fade-in">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-5 h-5 text-accent-400" fill="currentColor" />
            ))}
            <span className="ml-2 text-white/70 text-sm font-medium">Rated 5.0 by 180+ clients</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.08] text-balance animate-fade-in-up text-shadow-lg">
            Building Tomorrow's Infrastructure with{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-accent-400">Precision &amp; Power</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-brand-600/30 -z-0" />
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            GP Infrastructure delivers dependable civil construction, electrical
            works, and trading support — from groundwork to final handover. We
            bring practical execution, clear communication, and accountable service
            to every project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold shadow-xl shadow-brand-600/40 hover:shadow-2xl hover:shadow-brand-600/50 hover:scale-[1.03] transition-all"
            >
              Request a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 transition-all"
            >
              <Play className="w-5 h-5 text-accent-400 group-hover:scale-110 transition-transform" fill="currentColor" />
              View Our Work
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/85 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-accent-400" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden xl:block absolute right-6 2xl:right-0 top-1/2 -translate-y-1/2 w-80 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
          <div className="hero-3d-panel rounded-2xl border border-white/20 bg-ink-950/55 backdrop-blur-xl p-5 shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs uppercase tracking-widest text-white/60">Project readiness</span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-green-300"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />Available</span>
            </div>
            <div className="flex items-end justify-between mb-2">
              <span className="text-white font-display font-semibold">Site &amp; power delivery</span>
              <span className="text-accent-400 font-bold">92%</span>
            </div>
            <div className="h-2 rounded-full bg-white/15 overflow-hidden">
              <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="rounded-xl bg-white/10 p-3"><span className="block text-xl font-display font-bold text-white">24h</span><span className="text-xs text-white/60">Quote response</span></div>
              <div className="rounded-xl bg-white/10 p-3"><span className="block text-xl font-display font-bold text-white">2 yr</span><span className="text-xs text-white/60">Workmanship cover</span></div>
            </div>
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-white/70"><CheckCircle2 className="w-4 h-4 text-green-300" />Daily site reporting included</div>
            <div className="hero-3d-chip hero-3d-chip-one"><span className="block text-[9px] uppercase tracking-wider text-white/50">Civil</span><span className="text-sm font-semibold text-white">Structural ready</span></div>
            <div className="hero-3d-chip hero-3d-chip-two"><span className="block text-[9px] uppercase tracking-wider text-white/50">Power</span><span className="text-sm font-semibold text-white">Live network</span></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10 bg-gradient-to-t from-ink-950 to-transparent h-24" />

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/70 group-hover:animate-bounce" />
        </div>
      </a>
    </section>
  );
}
