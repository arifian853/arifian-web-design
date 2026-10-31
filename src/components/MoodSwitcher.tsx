import React, { useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { MOODS, type Mood } from '../types/mood';

interface MoodSwitcherProps {
  currentMood: Mood;
  onSelectMood: (mood: Mood) => void;
}

export const MoodSwitcher: React.FC<MoodSwitcherProps> = ({ currentMood, onSelectMood }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch Design Mood"
        aria-expanded={isOpen}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border cursor-pointer"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-subtle)',
          color: 'var(--text-main)',
        }}
      >
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: 'var(--primary)' }}
        />
        <span className="capitalize">{currentMood}</span>
        <Palette className="w-3.5 h-3.5 opacity-60 ml-0.5" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="absolute right-0 mt-2 p-3 w-56 rounded-2xl shadow-xl z-50 border transition-all animate-in fade-in zoom-in-95"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <div className="text-[11px] font-mono tracking-wider text-muted-foreground uppercase px-2 pb-2 mb-1 border-b" style={{ borderColor: 'var(--border-subtle)', color: 'var(--text-muted)' }}>
              Subtle Moods (8)
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {MOODS.map((mood) => {
                const isActive = currentMood === mood.id;
                return (
                  <button
                    key={mood.id}
                    onClick={() => {
                      onSelectMood(mood.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all text-left cursor-pointer ${
                      isActive ? 'ring-1' : 'hover:opacity-80'
                    }`}
                    style={{
                      backgroundColor: isActive ? 'var(--primary-container)' : 'var(--bg-surface-variant)',
                      color: isActive ? 'var(--on-primary-container)' : 'var(--text-main)',
                      borderColor: isActive ? 'var(--primary)' : 'transparent',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black/10 shadow-xs"
                        style={{ backgroundColor: mood.accent }}
                      />
                      <span>{mood.label}</span>
                    </div>
                    {isActive && <Check className="w-3 h-3" />}
                  </button>
                );
              })}
            </div>
            <p className="mt-2.5 text-[10px] leading-tight px-1 font-mono" style={{ color: 'var(--text-light)' }}>
              One system. Eight moods. One visual grammar.
            </p>
          </div>
        </>
      )}
    </div>
  );
};
