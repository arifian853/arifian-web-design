import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'systems' | 'web'>('all');

  const projects: ProjectItem[] = [
    {
      id: 'subtle-ds',
      title: 'Subtle Design System',
      category: 'Design System & UI Framework',
      description:
        'A soft, elegant interface language combining editorial composition, tonal materiality, and Material-inspired product ergonomics across 8 adaptive moods.',
      tags: ['Design System', 'React', 'Tailwind CSS', 'TypeScript', 'WCAG AA'],
      metrics: '8 Moods · 20+ Component Families · 100% Tokenized',
      liveUrl: 'https://subtle.arifian.web.id',
      githubUrl: 'https://github.com/arifian853',
      featured: true,
    },
    {
      id: 'infinite-lms',
      title: 'Infinite Learning LMS',
      category: 'EdTech & Learning Dashboard',
      description:
        'Product design and dashboard ergonomics for vocational tech training cohorts, serving thousands of developers and designers across Indonesia.',
      tags: ['Web App', 'Product Ergonomics', 'React', 'UX Research'],
      metrics: '3,000+ Active Students · 98% Completion Rate',
      liveUrl: 'https://infinitelearning.id',
    },
    {
      id: 'blug-hub',
      title: 'Batam Linux User Group Portal',
      category: 'Community & Open Source',
      description:
        'Event coordination, meetup schedules, and open-source documentation portal for Linux enthusiasts and open-source advocates in Batam.',
      tags: ['Open Source', 'Community Hub', 'Vite', 'Editorial'],
      metrics: '1,200+ Members · Monthly Tech Meetups',
      githubUrl: 'https://github.com/arifian853',
    },
    {
      id: 'kina-living',
      title: 'Kina Living Architectural Storefront',
      category: 'Artisanal E-Commerce',
      description:
        'Minimalist homeware and architectural ceramics showcase with asymmetric layout grids, quiet typography, and smooth micro-interactions.',
      tags: ['Editorial E-Commerce', 'UI/UX Design', 'Motion'],
      metrics: '+42% Session Duration · Seamless Mobile Cart',
      liveUrl: 'https://arifian.dev',
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'systems') return p.tags.includes('Design System');
    if (filter === 'web') return p.tags.includes('Web App') || p.tags.includes('Editorial E-Commerce') || p.tags.includes('Community Hub');
    return true;
  });

  return (
    <section id="projects" className="py-20 border-t transition-colors duration-300" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: 'var(--text-light)' }}>
              Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight" style={{ color: 'var(--text-main)' }}>
              Crafted with intent & precision.
            </h2>
          </div>

          {/* Filter Pills */}
          <div
            className="inline-flex p-1 rounded-full border self-start md:self-auto"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            {(['all', 'systems', 'web'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all capitalize cursor-pointer ${
                  filter === tab ? 'shadow-xs' : 'hover:opacity-75'
                }`}
                style={{
                  backgroundColor: filter === tab ? 'var(--primary)' : 'transparent',
                  color: filter === tab ? 'var(--bg-surface)' : 'var(--text-muted)',
                }}
              >
                {tab === 'all' ? 'All Works' : tab === 'systems' ? 'Design Systems' : 'Web & Apps'}
              </button>
            ))}
          </div>
        </div>

        {/* Soft Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;
            const colSpan = isFeatured ? 'md:col-span-12 lg:col-span-8' : 'md:col-span-6 lg:col-span-4';

            return (
              <div
                key={project.id}
                className={`${colSpan} group rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between hover:border-[var(--primary)] hover:shadow-md relative overflow-hidden`}
                style={{
                  backgroundColor: isFeatured ? 'var(--bg-surface-variant)' : 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                {/* Top: Category & Links */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span
                      className="text-xs font-mono tracking-wider uppercase px-2.5 py-1 rounded-lg border"
                      style={{
                        backgroundColor: 'var(--bg-surface)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View source on GitHub"
                          className="p-1.5 rounded-full transition-colors hover:scale-105"
                          style={{
                            backgroundColor: 'var(--bg-surface)',
                            color: 'var(--text-main)',
                          }}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Visit live website"
                          className="p-1.5 rounded-full transition-colors hover:scale-105"
                          style={{
                            backgroundColor: 'var(--primary)',
                            color: 'var(--bg-surface)',
                          }}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3
                    className={`${
                      isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl'
                    } font-bold mb-3 tracking-tight group-hover:text-[var(--primary)] transition-colors`}
                    style={{ color: 'var(--text-main)' }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-6 font-normal"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Bottom: Tags & Metrics */}
                <div className="pt-4 border-t space-y-3 mt-4" style={{ borderColor: 'var(--border-subtle)' }}>
                  {project.metrics && (
                    <div className="flex items-center gap-1.5 text-xs font-mono" style={{ color: 'var(--primary)' }}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: 'var(--bg-surface-hover)',
                          color: 'var(--text-main)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
