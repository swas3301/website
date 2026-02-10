import React, { useState, useEffect, Suspense, lazy, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { profileData } from '../data/mock';

const Spline = lazy(() => import('@splinetool/react-spline'));

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const timer = setTimeout(() => {
      if (!deleting) {
        setText(word.substring(0, text.length + 1));
        if (text === word) setTimeout(() => setDeleting(true), 2000);
      } else {
        setText(word.substring(0, text.length - 1));
        if (text === '') {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <span>
      {text}<span className="animate-pulse" style={{ color: '#00FFD1' }}>_</span>
    </span>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const hashLines = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) =>
        `0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 6)} | BLK_${(i + 4096).toString(16).toUpperCase()} | SHA256: ${Math.random().toString(16).slice(2, 18)}`
      ),
    []
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#000' }}>
      {/* Grid bg */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,255,209,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,209,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Hash scroll bg */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="hash-scroll absolute w-full"
          style={{ opacity: 0.025, color: '#00FFD1', fontFamily: "'Fira Code', monospace", fontSize: '11px', lineHeight: 2 }}
        >
          {hashLines.map((line, i) => (
            <div key={i} className="whitespace-nowrap">{line}</div>
          ))}
          {hashLines.map((line, i) => (
            <div key={`d-${i}`} className="whitespace-nowrap">{line}</div>
          ))}
        </div>
      </div>

      <motion.div style={{ opacity, y }} className="relative z-10 w-full flex flex-col lg:flex-row items-center">
        {/* Left */}
        <div className="flex-1 pt-28 lg:pt-0" style={{ padding: '0 7.6923%' }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
            style={{ color: '#4D4D4D', fontFamily: "'Fira Code', monospace", fontSize: '14px' }}
          >
            // WELCOME TO MY TERMINAL
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-bold mb-4"
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: 'clamp(52px, 8vw, 80px)',
              lineHeight: 1.05,
              color: '#FFF',
            }}
          >
            {profileData.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-6 h-10"
            style={{ fontFamily: "'Fira Code', monospace", fontSize: 'clamp(18px, 2.5vw, 24px)', color: '#00FFD1' }}
          >
            <TypeWriter words={profileData.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg mb-10 max-w-lg"
            style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}
          >
            {profileData.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,255,209,0.3)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 font-medium flex items-center gap-3 cursor-pointer border-none"
              style={{ background: '#00FFD1', color: '#000', fontFamily: "'Fira Code', monospace", fontSize: '16px', borderRadius: 0, minHeight: '56px' }}
            >
              View Projects <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ background: '#FFF', color: '#000' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 font-medium flex items-center gap-3 cursor-pointer border-none"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#FFF',
                fontFamily: "'Fira Code', monospace",
                fontSize: '16px',
                borderRadius: 0,
                minHeight: '56px',
              }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Mobile PFP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 lg:hidden"
          >
            <div className="relative w-36 h-36">
              <div className="absolute inset-0 rounded-full" style={{ background: 'rgba(0,255,209,0.15)', filter: 'blur(30px)', transform: 'scale(1.4)' }} />
              <img src={profileData.image} alt="Profile" className="relative w-full h-full object-cover rounded-full border-2" style={{ borderColor: 'rgba(0,255,209,0.3)' }} />
            </div>
          </motion.div>
        </div>

        {/* Right - Spline + PFP overlay */}
        <div className="hidden lg:flex flex-1 relative items-center justify-center" style={{ minHeight: '650px' }}>
          <div className="absolute z-20" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="float-animation">
              <div className="relative">
                <div className="absolute inset-0 rounded-full" style={{ background: 'rgba(0,255,209,0.12)', filter: 'blur(40px)', transform: 'scale(1.8)' }} />
                <img
                  src={profileData.image}
                  alt="Profile"
                  className="relative w-44 h-44 object-cover rounded-full border-2"
                  style={{ borderColor: 'rgba(0,255,209,0.4)' }}
                />
              </div>
            </div>
          </div>

          <Suspense
            fallback={
              <div className="flex items-center justify-center w-full h-full">
                <span style={{ color: '#4D4D4D', fontFamily: "'Fira Code', monospace", fontSize: '14px' }}>
                  Initializing 3D...
                </span>
              </div>
            }
          >
            <div style={{ width: '700px', height: '700px', overflow: 'visible', position: 'relative' }}>
              <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </div>
          </Suspense>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10"
        style={{ transform: 'translateX(-50%)' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} style={{ color: '#4D4D4D' }} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
