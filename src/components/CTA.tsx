import { ArrowRight, Phone } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const ctaBg = 'https://images.pexels.com/photos/18505664/pexels-photo-18505664.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function CTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="Construction cranes at sunset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 to-brand-800/85" />
      </div>
      <div
        ref={ref}
        className={`reveal ${visible ? 'is-visible' : ''} relative max-w-5xl mx-auto px-4 sm:px-6 text-center`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white text-balance text-shadow-lg">
          Ready to Start Your Next Project?
        </h2>
        <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
          Whether it's a full-scale construction build or a specialized
          electrical installation, our team is ready to deliver. Get your free
          quote today — we respond within 24 hours.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-brand-700 font-semibold shadow-xl hover:scale-[1.03] hover:shadow-2xl transition-all group"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:+919807219188"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 transition-all"
          >
            <Phone className="w-5 h-5" />
            98072 19188
          </a>
        </div>
      </div>
    </section>
  );
}
