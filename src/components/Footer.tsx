import React from 'react';
import { ArrowUp } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="border-t py-12 transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Brand & Statement */}
          <div className="text-center md:text-left space-y-1">
            <div className="font-heading font-bold text-base" style={{ color: 'var(--text-main)' }}>
              Arifian Saputra
            </div>
            <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              Crafted in Batam with Subtle Design System & React · Open Source Advocate
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-5 text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a href="https://github.com/arifian853" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border flex items-center gap-1.5 text-xs font-mono transition-all hover:opacity-80 active:scale-95 cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-surface-variant)',
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-main)',
            }}
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-light)' }}>
          <div>
            © {CURRENT_YEAR} Arifian Saputra. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Powered by Batam Linux User Group spirit</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
