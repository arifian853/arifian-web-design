import React, { useState } from 'react';
import { MoodSwitcher } from './MoodSwitcher';
import type { Mood } from '../types/mood';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentMood: Mood;
  onSelectMood: (mood: Mood) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentMood, onSelectMood }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills & Tools', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300"
      style={{
        backgroundColor: 'rgba(var(--bg-main), 0.85)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight transition-transform active:scale-95"
          style={{ color: 'var(--text-main)' }}
        >
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center font-mono text-sm font-semibold transition-transform group-hover:scale-105"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--bg-surface)',
            }}
          >
            AS
          </div>
          <div className="flex flex-col">
            <span className="font-heading leading-none">Arifian Saputra</span>
            <span
              className="text-[11px] font-mono tracking-wider transition-colors mt-0.5"
              style={{ color: 'var(--text-muted)' }}
            >
              Web Designer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-150 hover:opacity-100"
              style={{
                color: 'var(--text-muted)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-main)';
                e.currentTarget.style.backgroundColor = 'var(--bg-surface-variant)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Mood Switcher & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <MoodSwitcher currentMood={currentMood} onSelectMood={onSelectMood} />
          
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 hover:shadow-md"
            style={{
              backgroundColor: 'var(--primary)',
              color: 'var(--bg-surface)',
            }}
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <MoodSwitcher currentMood={currentMood} onSelectMood={onSelectMood} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl transition-colors"
            aria-label="Toggle navigation menu"
            style={{
              backgroundColor: 'var(--bg-surface-variant)',
              color: 'var(--text-main)',
            }}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="sm:hidden border-b px-4 py-4 space-y-2 animate-in slide-in-from-top-2"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-medium transition-colors"
              style={{
                color: 'var(--text-main)',
                backgroundColor: 'var(--bg-surface-variant)',
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-2.5 rounded-xl font-semibold text-sm transition-all"
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--bg-surface)',
              }}
            >
              Contact Arifian
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
