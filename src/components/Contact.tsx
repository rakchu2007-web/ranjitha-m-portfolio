import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send, ArrowUpRight, MessageSquare, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subjectType, setSubjectType] = useState('Internship Opportunity');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !message) {
      setStatusMessage('Please enter your name and message.');
      return;
    }

    const fullSubject = encodeURIComponent(`[${subjectType}] from ${senderName}`);
    const fullBody = encodeURIComponent(
      `Hi Ranjitha,\n\n${message}\n\nFrom: ${senderName} (${senderEmail || 'Not provided'})\n`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${fullSubject}&body=${fullBody}`;
    setStatusMessage('Email client triggered with your message draft.');
    setTimeout(() => setStatusMessage(null), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200/70">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-purple-700 mb-2">
            Get in Touch
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
            Let’s Connect
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            I am actively seeking software engineering internships, technical collaborations, and mentorship opportunities. Feel free to reach out directly via email, LinkedIn, or GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Channels Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 bg-slate-50/70 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
              <h3 className="text-base font-bold text-slate-900">
                Direct Contact Information
              </h3>

              <div className="space-y-4 text-xs">
                {/* Email Item */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-purple-700" />
                      Email Address
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-purple-700 hover:text-purple-900 font-medium inline-flex items-center gap-1 text-[11px]"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-purple-900 hover:underline block text-xs"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                {/* LinkedIn Item */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <Linkedin className="w-4 h-4 text-purple-700" />
                      LinkedIn Profile
                    </span>
                    <a
                      href={PERSONAL_INFO.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 hover:text-purple-900 font-medium inline-flex items-center gap-0.5 text-[11px]"
                    >
                      <span>Connect</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-slate-500 text-[11px]">
                    Professional network & academic updates
                  </p>
                </div>

                {/* GitHub Item */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <Github className="w-4 h-4 text-purple-700" />
                      GitHub Profile
                    </span>
                    <a
                      href={PERSONAL_INFO.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 hover:text-purple-900 font-medium inline-flex items-center gap-0.5 text-[11px]"
                    >
                      <span>Visit</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-slate-500 text-[11px]">
                    Repository code, commits, and prototypes
                  </p>
                </div>

                {/* Location & Availability */}
                <div className="p-4 bg-purple-50/60 rounded-xl border border-purple-100 space-y-1 text-purple-950">
                  <span className="font-semibold flex items-center gap-1.5 text-xs text-purple-900">
                    <MapPin className="w-3.5 h-3.5 text-purple-700" />
                    Location & Availability
                  </span>
                  <p className="text-xs text-purple-900 leading-relaxed">
                    Based in Chennai, India. Seeking IT internships and software engineering roles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Message / Recruiter Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/90 shadow-xs space-y-5">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-purple-700" />
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Draft an inquiry to open directly in your mail application
                </p>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-medium text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe / HR Recruiter"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-hidden transition-colors text-slate-900 bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-medium text-slate-700 mb-1">
                      Your Email (Optional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-hidden transition-colors text-slate-900 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subjectType" className="block font-medium text-slate-700 mb-1">
                    Subject / Purpose
                  </label>
                  <select
                    id="subjectType"
                    value={subjectType}
                    onChange={(e) => setSubjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-hidden transition-colors text-slate-900 bg-white"
                  >
                    <option value="Internship Opportunity">IT Internship Opportunity</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Hackathon / Tech Event">Hackathon / Tech Event</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium text-slate-700 mb-1">
                    Message Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Describe your project, team opportunity, or interview schedule..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-purple-600 focus:ring-1 focus:ring-purple-600 outline-hidden transition-colors text-slate-900 bg-white resize-y"
                  />
                </div>

                {statusMessage && (
                  <div className="p-3 bg-purple-50 text-purple-900 rounded-lg text-xs font-medium border border-purple-100">
                    {statusMessage}
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-[11px] text-slate-400">
                    Sends to: <strong className="text-slate-600">{PERSONAL_INFO.email}</strong>
                  </span>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-xs font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 transition-colors inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message via Email</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
