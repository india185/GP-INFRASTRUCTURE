const clients = [
  'Horizon Realty',
  'Industrial Park Corp',
  'Municipal Works',
  'TechCor Builders',
  'MetroGrid Energy',
  'Apex Infrastructure',
  'Summit Holdings',
  'PowerLine Solutions',
];

export default function Clients() {
  const doubled = [...clients, ...clients];
  return (
    <section className="py-12 construction-surface border-y border-ink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-semibold tracking-wider uppercase text-ink-400 mb-8">
          Trusted by leading developers, agencies, and enterprises
        </p>
        <div className="overflow-hidden mask-fade-x">
          <div className="flex gap-12 animate-marquee w-max">
            {doubled.map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="flex items-center gap-3 text-ink-400 hover:text-brand-600 transition-colors flex-shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-ink-100 flex items-center justify-center">
                  <div className="w-4 h-4 rounded bg-current opacity-40" />
                </div>
                <span className="font-display font-bold text-lg whitespace-nowrap">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
