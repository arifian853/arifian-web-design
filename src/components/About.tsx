import React from 'react';
import { Compass, Feather, Sliders, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    {
      icon: Feather,
      title: 'Quiet Expressiveness',
      desc: 'Expression comes from shape, scale, typography, and controlled contrast—never relying on neon gimmicks or excessive motion.',
    },
    {
      icon: Compass,
      title: 'Editorial Composition',
      desc: 'Content, hierarchy, and intentional whitespace take precedence before containers. A section does not automatically require a box.',
    },
    {
      icon: Sliders,
      title: 'Tonal Materiality',
      desc: 'Creating visual hierarchy through subtle tonal surface differences and soft elevation rather than harsh borders or dark shadows.',
    },
    {
      icon: ShieldCheck,
      title: 'Product Ergonomics',
      desc: 'Tested for WCAG AA contrast, keyboard accessibility, smooth responsiveness, and rapid page loading speed.',
    },
  ];

  return (
    <section id="about" className="py-20 border-t transition-colors duration-300" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: 'var(--text-light)' }}>
            About & Perspective
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6" style={{ color: 'var(--text-main)' }}>
            Designing digital spaces with restraint, warmth, and structural clarity.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            I am a Web Designer, Senior Tech Trainer at <strong style={{ color: 'var(--text-main)' }}>Infinite Learning Indonesia</strong>, and active advocate at <strong style={{ color: 'var(--text-main)' }}>Batam Linux User Group (BLUG)</strong>. I bridge the gap between aesthetic visual design and production-ready frontend code.
          </p>
        </div>

        {/* Narrative Quote Box */}
        <div
          className="p-8 sm:p-10 rounded-3xl mb-16 relative overflow-hidden border"
          style={{
            backgroundColor: 'var(--bg-surface-variant)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <div className="max-w-3xl space-y-4">
            <blockquote
              className="text-xl sm:text-2xl font-heading font-medium leading-snug"
              style={{ color: 'var(--text-main)' }}
            >
              "Subtle is about interfaces that feel modern without becoming generic, soft without becoming childish, calm enough for operational tools, and confident enough for editorial publications."
            </blockquote>
            <div className="flex items-center gap-3 pt-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--bg-surface)',
                }}
              >
                AS
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: 'var(--text-main)' }}>
                  Arifian Saputra
                </div>
                <div className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                  Web Designer & Educator
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-xs"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: 'var(--primary-container)',
                    color: 'var(--on-primary-container)',
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-main)' }}>
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
