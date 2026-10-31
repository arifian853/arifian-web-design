import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MOODS, type Mood } from './types/mood';
import { Palette } from 'lucide-react';

function App() {
  const [currentMood, setCurrentMood] = useState<Mood>('beige');

  useEffect(() => {
    // Set data-mood attribute on root HTML element
    document.documentElement.setAttribute('data-mood', currentMood);
  }, [currentMood]);

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300 font-sans"
      style={{
        backgroundColor: 'var(--bg-main)',
        color: 'var(--text-main)',
      }}
    >
      {/* Top Header */}
      <Header currentMood={currentMood} onSelectMood={setCurrentMood} />

      {/* Main Single Page Content */}
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mood Inspector Bar (Signature Subtle Component) */}
      <div className="fixed bottom-5 right-5 z-40 hidden md:block">
        <div
          className="p-2 rounded-2xl border shadow-lg backdrop-blur-md flex items-center gap-2 transition-all duration-300"
          style={{
            backgroundColor: 'rgba(var(--bg-surface), 0.95)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <div className="flex items-center gap-1.5 px-2 text-xs font-mono font-medium" style={{ color: 'var(--text-muted)' }}>
            <Palette className="w-3.5 h-3.5" style={{ color: 'var(--primary)' }} />
            <span>Mood:</span>
          </div>

          <div className="flex items-center gap-1">
            {MOODS.map((m) => {
              const isSelected = currentMood === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setCurrentMood(m.id)}
                  title={`${m.label} mood`}
                  className={`w-6 h-6 rounded-full transition-transform border cursor-pointer ${
                    isSelected ? 'scale-120 ring-2' : 'hover:scale-110 opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: m.accent,
                    borderColor: 'var(--border-subtle)',
                    outlineColor: 'var(--primary)',
                  }}
                  aria-label={`Select ${m.label} mood`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
