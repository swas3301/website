import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Arsenal', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
        }`}
      style={{ height: '80px' }}
    >
      <div className="w-full h-full flex items-center justify-between" style={{ padding: '0 7.6923%' }}>
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2 no-underline"
          whileHover={{ scale: 1.05 }}
        >
          <Terminal className="w-5 h-5" style={{ color: '#00FFD1' }} />
          <span className="text-white font-semibold text-xl tracking-wider" style={{ fontFamily: "'Fira Code', monospace" }}>
            <span style={{ color: '#00FFD1' }}>&lt;</span>swas3301<span style={{ color: '#00FFD1' }}>/&gt;</span>
          </span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="bg-transparent border-none cursor-pointer text-[#4D4D4D] hover:text-white transition-colors duration-300"
              style={{ fontFamily: "'Fira Code', monospace", fontSize: '16px' }}
            >
              {link.name}
            </button>
          ))}
          <motion.button
            onClick={() => scrollTo('#contact')}
            className="px-6 py-3 font-medium cursor-pointer border-none"
            style={{ background: '#00FFD1', color: '#000', fontFamily: "'Fira Code', monospace", fontSize: '15px', borderRadius: '0px' }}
            whileHover={{ background: 'rgba(0,255,209,0.15)', color: '#00FFD1' }}
            whileTap={{ scale: 0.98 }}
          >
            Let's Build
          </motion.button>
        </nav>

        <button
          className="md:hidden text-white bg-transparent border-none cursor-pointer p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-sm border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-lg bg-transparent border-none cursor-pointer py-2 text-[#4D4D4D] hover:text-white transition-colors"
                  style={{ fontFamily: "'Fira Code', monospace" }}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#contact')}
                className="px-6 py-3 text-black font-medium cursor-pointer border-none mt-2 w-full"
                style={{ background: '#00FFD1', fontFamily: "'Fira Code', monospace", borderRadius: '0px' }}
              >
                Let's Build
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
