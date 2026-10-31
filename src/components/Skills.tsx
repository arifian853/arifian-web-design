import React from 'react';
import { Layout, Code2, Terminal, CheckCircle } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Visual & UI/UX Design',
      icon: Layout,
      description: 'Designing calm, accessible, and structured interfaces before touching code.',
      skills: [
        'Design Systems & Tokens',
        'Editorial Typography & Scale',
        'Material-Inspired Ergonomics',
        'Figma & Interactive Prototyping',
        'WCAG AA Accessibility',
        'Responsive & Adaptive Layouts',
      ],
    },
    {
      title: 'Frontend Engineering',
      icon: Code2,
      description: 'Translating design fidelity into robust, type-safe, and lightning-fast frontend code.',
      skills: [
        'React 19 & Next.js',
        'TypeScript',
        'Tailwind CSS v4',
        'shadcn/ui & Radix/Base UI',
        'Vite & Modern Tooling',
        'Semantic HTML & CSS Grid/Flexbox',
      ],
    },
    {
      title: 'Workflow & Community',
      icon: Terminal,
      description: 'Developer tooling, open-source advocacy, and community leadership.',
      skills: [
        'Model Context Protocol (MCP)',
        'Git & GitHub Workflow',
        'Linux Environment & Bash',
        'Batam Linux User Group (BLUG)',
        'Technical Mentorship & Curriculum',
        'Performance & Oxlint Auditing',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 border-t transition-colors duration-300" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: 'var(--text-light)' }}>
            Capabilities & Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--text-main)' }}>
            Tools and disciplines honed over years of practice.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Every tool is selected to maximize clarity, velocity, and longevity—delivering software that looks refined and behaves reliably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl border transition-all duration-200 hover:shadow-xs flex flex-col justify-between"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <div>
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: 'var(--primary-container)',
                      color: 'var(--on-primary-container)',
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-main)' }}>
                    {cat.title}
                  </h3>

                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t space-y-2.5" style={{ borderColor: 'var(--border-subtle)' }}>
                  {cat.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2.5 text-xs font-medium" style={{ color: 'var(--text-main)' }}>
                      <CheckCircle className="w-4 h-4 opacity-80" style={{ color: 'var(--primary)' }} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
