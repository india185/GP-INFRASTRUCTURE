import { useEffect, useState } from 'react';
import { Menu, X, Zap, Phone, Sun, Moon } from 'lucide-react';
import { useScrollProgress, useActiveSection } from '@/hooks/useReveal';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const sectionIds = navLinks.map((l) => l.href.replace('#', ''));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('gp-theme') === 'dark');
  const progress = useScrollProgress();
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    localStorage.setItem('gp-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
        scrolled
          ? `${darkMode ? 'bg-ink-950/95' : 'bg-white/95'} backdrop-blur-lg shadow-lg shadow-ink-900/5 py-3`
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-lg shadow-brand-600/30 group-hover:scale-110 group-hover:rotate-3 transition-transform">
            <Zap className="w-5 h-5 text-white" fill="white" />
          </div>
          <div className="leading-tight">
            <span
              className={`block font-display font-bold text-lg transition-colors ${
                scrolled ? 'text-ink-900' : 'text-white'
              }`}
            >
              GP Infrastructure
            </span>
            <span
              className={`block text-[10px] font-medium tracking-wider uppercase transition-colors ${
                scrolled ? 'text-brand-600' : 'text-white/70'
              }`}
            >
              Civil • Electrical • Trading
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    scrolled
                      ? isActive
                        ? 'text-brand-600 bg-brand-50'
                        : 'text-ink-600 hover:text-brand-600 hover:bg-brand-50/60'
                      : isActive
                        ? 'text-white bg-white/15'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={() => setDarkMode((current) => !current)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
              scrolled ? 'text-ink-700 hover:bg-ink-100 dark-toggle-button' : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href="tel:+919807219188"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? 'text-ink-600 hover:text-brand-600' : 'text-white/80 hover:text-white'
            }`}
          >
            <Phone className="w-4 h-4" />
            98072 19188
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 text-white text-sm font-semibold shadow-lg shadow-brand-600/30 hover:shadow-xl hover:shadow-brand-600/40 hover:scale-[1.03] transition-all"
          >
            Get a Quote
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            onClick={() => setDarkMode((current) => !current)}
            className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-ink-900 dark-toggle-button' : 'text-white'}`}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
          onClick={() => setOpen(!open)}
          className={`p-2 rounded-lg transition-colors ${
            scrolled ? 'text-ink-900' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {scrolled && (
        <div className="absolute bottom-0 inset-x-0 h-0.5 bg-ink-100">
          <div
            className="h-full bg-gradient-to-r from-brand-500 via-brand-600 to-accent-500 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {open && (
        <div className="lg:hidden bg-white border-t border-ink-100 shadow-xl max-h-[calc(100vh-64px)] overflow-y-auto">
          <ul className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-3 rounded-lg text-ink-700 font-medium hover:bg-brand-50 hover:text-brand-600 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block mt-2 py-3 px-3 rounded-lg bg-brand-600 text-white font-semibold text-center"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
