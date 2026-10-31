import React from 'react';
import { ArrowDown, Sparkles, MapPin, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability & Context Capsule */}
        <div className="flex flex-wrap items-center gap-3 mb-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors shadow-2xs"
            style={{
              backgroundColor: 'var(--status-available-bg)',
              color: 'var(--status-available-text)',
              borderColor: 'transparent',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: 'var(--status-available-text)' }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: 'var(--status-available-text)' }}
              />
            </span>
            <span>Available for design systems & web projects</span>
          </div>

          <div
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono border"
            style={{
              backgroundColor: 'var(--bg-surface-variant)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-muted)',
            }}
          >
            <MapPin className="w-3.5 h-3.5 opacity-70" />
            <span>Batam, Indonesia</span>
          </div>
        </div>

        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
              style={{ color: 'var(--text-main)' }}
            >
              Quiet expression.{' '}
              <span className="block opacity-90">Tonal depth.</span>
              <span
                className="block font-normal italic opacity-85"
                style={{ color: 'var(--primary)' }}
              >
                Editorial web craft.
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl leading-relaxed max-w-2xl font-normal"
              style={{ color: 'var(--text-muted)' }}
            >
              Hi, I'm <strong style={{ color: 'var(--text-main)' }}>Arifian Saputra</strong>. A Web Designer and Creative Developer combining editorial composition, tonal materiality, and Material-inspired ergonomics to build memorable digital products.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 active:scale-95 shadow-sm hover:shadow-md"
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'var(--bg-surface)',
                }}
              >
                <span>View Selected Works</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl font-medium text-sm border transition-all duration-200 hover:opacity-80 active:scale-95"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-main)',
                }}
              >
                <Sparkles className="w-4 h-4 opacity-70" />
                <span>Design Philosophy</span>
              </a>
            </div>
          </div>

          {/* Right Column: Signature Tonal Card (Subtle Design Highlight) */}
          <div className="lg:col-span-4">
            <div
              className="p-6 sm:p-7 rounded-3xl border transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              {/* Decorative subtle ambient badge */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-xs"
                style={{
                  backgroundColor: 'var(--primary-container)',
                  color: 'var(--on-primary-container)',
                }}
              >
                <Layers className="w-6 h-6" />
              </div>

              <div className="text-xs font-mono uppercase tracking-widest mb-1.5" style={{ color: 'var(--text-light)' }}>
                Design Methodology
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-main)' }}>
                Soft Editorial Materialism
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                Interfaces designed without harsh outlines or loud gradients. Hierarchy created naturally through surface contrast, intentional whitespace, and refined typography.
              </p>

              {/* Core Metrics Grid */}
              <div
                className="grid grid-cols-2 gap-3 pt-4 border-t"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <div>
                  <div className="text-2xl font-bold font-heading" style={{ color: 'var(--primary)' }}>
                    5+
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Years Experience
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold font-heading" style={{ color: 'var(--primary)' }}>
                    40+
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Delivered Projects
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold font-heading" style={{ color: 'var(--primary)' }}>
                    120+
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    GitHub Repos
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold font-heading" style={{ color: 'var(--primary)' }}>
                    8
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    Harmonized Moods
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
