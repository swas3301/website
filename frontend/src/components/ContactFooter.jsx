import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Clock, MapPin, Linkedin, Twitter, Youtube, Instagram, Facebook, MessageSquare, Globe, ArrowUp } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { socialLinks } from '../data/mock';
import { toast } from 'sonner';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
};

const iconMap = {
  Discord: MessageSquare,
  LinkedIn: Linkedin,
  X: Twitter,
  YouTube: Youtube,
  Instagram: Instagram,
  Reddit: Globe,
  Facebook: Facebook,
};

export const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields');
      return;
    }
    setSending(true);
    setTimeout(() => {
      const msgs = JSON.parse(localStorage.getItem('portfolio-messages') || '[]');
      msgs.push({ ...form, timestamp: new Date().toISOString() });
      localStorage.setItem('portfolio-messages', JSON.stringify(msgs));
      toast.success('Message transmitted successfully!');
      setForm({ name: '', email: '', message: '' });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-32" style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto" style={{ padding: '0 7.6923%' }}>
        <motion.div {...fadeInUp} className="mb-16">
          <p style={{ color: '#00FFD1', fontFamily: "'Fira Code', monospace", fontSize: '14px' }} className="mb-3">{'// 004'}</p>
          <h2 className="font-bold" style={{ fontFamily: "'Fira Code', monospace", fontSize: 'clamp(32px, 5vw, 42px)', color: '#FFF' }}>
            Contact<span style={{ color: '#00FFD1' }}>.</span>
          </h2>
          <p className="mt-4" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif", fontSize: '18px' }}>
            Interested in collaborating? Let's build something extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="space-y-8">
            {[
              { icon: Mail, label: 'Email', value: 'cipher@web3.dev' },
              { icon: MapPin, label: 'Location', value: 'Decentralized' },
              { icon: Clock, label: 'Availability', value: 'Open for projects' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="p-3" style={{ background: 'rgba(0,255,209,0.08)' }}>
                  <item.icon size={20} style={{ color: '#00FFD1' }} />
                </div>
                <div>
                  <p className="text-sm mb-1" style={{ color: '#4D4D4D', fontFamily: "'Fira Code', monospace" }}>{item.label}</p>
                  <p style={{ color: '#FFF', fontFamily: "'Inter', sans-serif", fontSize: '16px' }}>{item.value}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <p className="text-sm mb-4" style={{ color: '#4D4D4D', fontFamily: "'Fira Code', monospace" }}>// connect</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.name] || Globe;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 flex items-center justify-center border border-white/[0.08] hover:border-[#00FFD1]/40 transition-colors duration-400"
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                      title={link.name}
                    >
                      <Icon size={18} style={{ color: 'rgba(255,255,255,0.6)' }} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.form {...fadeInUp} transition={{ delay: 0.2 }} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-2" style={{ color: '#4D4D4D', fontFamily: "'Fira Code', monospace" }}>// name</label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full rounded-none border-white/10 bg-[#0a0a0a] text-white placeholder:text-[#4D4D4D] focus-visible:ring-1 focus-visible:ring-[#00FFD1] focus-visible:border-[#00FFD1]"
                style={{ fontFamily: "'Fira Code', monospace", fontSize: '14px', padding: '14px 16px', height: 'auto' }}
              />
            </div>
            <div>
              <label className="block text-sm mb-2" style={{ color: '#4D4D4D', fontFamily: "'Fira Code', monospace" }}>// email</label>
              <Input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full rounded-none border-white/10 bg-[#0a0a0a] text-white placeholder:text-[#4D4D4D] focus-visible:ring-1 focus-visible:ring-[#00FFD1] focus-visible:border-[#00FFD1]"
                style={{ fontFamily: "'Fira Code', monospace", fontSize: '14px', padding: '14px 16px', height: 'auto' }}
              />
            </div>
            <div>
              <label className="block text-sm mb-2" style={{ color: '#4D4D4D', fontFamily: "'Fira Code', monospace" }}>// message</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Describe your project or idea..."
                rows={5}
                className="w-full rounded-none border-white/10 bg-[#0a0a0a] text-white placeholder:text-[#4D4D4D] focus-visible:ring-1 focus-visible:ring-[#00FFD1] focus-visible:border-[#00FFD1] resize-none"
                style={{ fontFamily: "'Fira Code', monospace", fontSize: '14px', padding: '14px 16px' }}
              />
            </div>
            <motion.button
              type="submit"
              disabled={sending}
              className="px-8 py-4 font-medium flex items-center gap-3 cursor-pointer border-none w-full justify-center disabled:opacity-50"
              style={{ background: '#00FFD1', color: '#000', fontFamily: "'Fira Code', monospace", fontSize: '16px', borderRadius: 0, minHeight: '56px' }}
              whileHover={{ boxShadow: '0 0 30px rgba(0,255,209,0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              {sending ? 'Transmitting...' : 'Send Message'} <Send size={16} />
            </motion.button>
            <p className="text-center text-xs" style={{ color: '#4D4D4D', fontFamily: "'Fira Code', monospace" }}>
              // messages saved locally (mock)
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

/* ============ FOOTER ============ */
export const Footer = () => (
  <footer className="py-12 relative" style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
    <div className="max-w-6xl mx-auto" style={{ padding: '0 7.6923%' }}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span style={{ color: '#00FFD1', fontFamily: "'Fira Code', monospace", fontSize: '14px' }}>
            {'<'}CIPHER{'/>'}
          </span>
          <span style={{ color: '#4D4D4D', fontFamily: "'Fira Code', monospace", fontSize: '13px' }}>
            // END_OF_TRANSMISSION
          </span>
        </div>

        <p style={{ color: '#4D4D4D', fontFamily: "'Fira Code', monospace", fontSize: '12px' }}>
          0xCIPHER {new Date().getFullYear()} | All rights reserved
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 cursor-pointer bg-transparent border border-white/[0.08] hover:border-[#00FFD1]/40 transition-colors duration-400"
        >
          <ArrowUp size={16} style={{ color: 'rgba(255,255,255,0.6)' }} />
        </button>
      </div>
    </div>
  </footer>
);
