import React, { useState } from 'react';
import { Mail, Globe, Copy, Check, Send, MapPin } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('arifiansaputra43@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-t transition-colors duration-300" style={{ borderColor: 'var(--border-subtle)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Editorial CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: 'var(--text-light)' }}>
              Let's Connect
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight" style={{ color: 'var(--text-main)' }}>
              Have a project or design challenge in mind?
            </h2>
            <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--text-muted)' }}>
              Whether you need a full design system, a website redesign, or a workshop on modern frontend ergonomics, let's talk about how we can work together.
            </p>

            <div className="space-y-3 pt-4">
              {/* Copy Email Box */}
              <div
                className="p-4 rounded-2xl border flex items-center justify-between gap-3 transition-all"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--primary-container)',
                      color: 'var(--on-primary-container)',
                    }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase" style={{ color: 'var(--text-light)' }}>
                      Direct Email
                    </div>
                    <div className="text-sm font-semibold truncate" style={{ color: 'var(--text-main)' }}>
                      arifiansaputra43@gmail.com
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-all cursor-pointer hover:opacity-80 active:scale-95"
                  style={{
                    backgroundColor: 'var(--bg-surface-variant)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-main)',
                  }}
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 opacity-70" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Links */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://github.com/arifian853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl border flex items-center gap-2.5 text-xs font-semibold transition-all hover:border-[var(--primary)]"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-main)',
                  }}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>github.com/arifian853</span>
                </a>

                <a
                  href="https://arifian.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl border flex items-center gap-2.5 text-xs font-semibold transition-all hover:border-[var(--primary)]"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-main)',
                  }}
                >
                  <Globe className="w-4 h-4" />
                  <span>arifian.dev</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono pt-2" style={{ color: 'var(--text-light)' }}>
                <MapPin className="w-3.5 h-3.5" />
                <span>Based in Batam, Riau Islands, Indonesia (UTC+7)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Card */}
          <div className="lg:col-span-7">
            <div
              className="p-7 sm:p-9 rounded-3xl border shadow-xs"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div
                    className="w-14 h-14 mx-auto rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--status-available-bg)',
                      color: 'var(--status-available-text)',
                    }}
                  >
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading" style={{ color: 'var(--text-main)' }}>
                    Thank you for your message!
                  </h3>
                  <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    I have received your inquiry and will review your note promptly. You can also reach me directly at <strong>arifiansaputra43@gmail.com</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer"
                    style={{
                      backgroundColor: 'var(--bg-surface-variant)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-main)',
                    }}
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-main)' }}>
                    Send a Message
                  </h3>
                  <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>

                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-main)' }}>
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all"
                      style={{
                        backgroundColor: 'var(--bg-main)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-main)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--primary)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-main)' }}>
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all"
                      style={{
                        backgroundColor: 'var(--bg-main)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-main)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--primary)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-main)' }}>
                      Project Details or Questions
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell me a bit about your timeline, scope, or design requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all resize-none"
                      style={{
                        backgroundColor: 'var(--bg-main)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-main)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--primary)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-98 shadow-sm hover:shadow-md cursor-pointer"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--bg-surface)',
                    }}
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
