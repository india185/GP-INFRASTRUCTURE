import { Zap, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, ArrowUp, ArrowRight } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Civil Construction', href: '#services' },
    { label: 'Electrical Works', href: '#services' },
    { label: 'Infrastructure', href: '#services' },
    { label: 'Maintenance & Repair', href: '#services' },
    { label: 'Trading & Supply', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Projects', href: '#projects' },
    { label: 'Our Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <div className="leading-tight">
                <span className="block font-display font-bold text-lg text-white">GP Infrastructure</span>
                <span className="block text-[10px] font-medium tracking-wider uppercase text-brand-400">
                  Civil • Electrical • Trading
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Civil construction, electrical works, and dependable trading support for projects that need practical execution.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-brand-600 text-ink-300 hover:text-white transition-all"
                  aria-label="Social media"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display font-semibold text-white mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-brand-400 transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4.5 h-4.5 text-brand-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+919807219188" className="hover:text-brand-400 transition-colors">
                  98072 19188
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4.5 h-4.5 text-brand-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:gopal.svstelecom@gmail.com" className="hover:text-brand-400 transition-colors">
                  gopal.svstelecom@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4.5 h-4.5 text-brand-400 mt-0.5 flex-shrink-0" />
                Owner: Gopal Singh
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-all"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} GP Infrastructure. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-ink-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-ink-500 hover:text-white transition-colors">Terms of Service</a>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-white transition-colors"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
