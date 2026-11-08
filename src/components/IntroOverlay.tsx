import { useEffect, useState } from 'react';
import { Building2, Zap } from 'lucide-react';

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 2100);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="intro-overlay" role="status" aria-label="Loading GP Infrastructure">
      <div className="intro-grid" />
      <div className="intro-orbit intro-orbit-one" />
      <div className="intro-orbit intro-orbit-two" />
      <div className="intro-core">
        <div className="intro-core-face">
          <div className="intro-icon-row">
            <Building2 className="intro-building" />
            <Zap className="intro-zap" fill="currentColor" />
          </div>
          <span className="intro-mark">GP</span>
        </div>
      </div>
      <div className="intro-copy">
        <p className="intro-eyebrow">Civil · Electrical · Trading</p>
        <h2>GP Infrastructure</h2>
        <div className="intro-progress"><span /></div>
        <p className="intro-loading">Building your experience</p>
      </div>
    </div>
  );
}
