import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Cpu, ArrowUpRight, Lock } from 'lucide-react';
import { profileData, skillsData, projectsData, marqueeWords } from '../data/mock';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
};

/* ============ ABOUT ============ */
export const AboutSection = () => (
  <section id="about" className="relative py-32" style={{ background: '#000' }}>
    <div className="max-w-6xl mx-auto" style={{ padding: '0 7.6923%' }}>
      <motion.div {...fadeInUp} className="mb-16">
        <p style={{ color: '#00FFD1', fontFamily: "'Fira Code', monospace", fontSize: '14px' }} className="mb-3">
          {'// 001'}
        </p>
        <h2 className="font-bold" style={{ fontFamily: "'Fira Code', monospace", fontSize: 'clamp(32px, 5vw, 42px)', color: '#FFF' }}>
          About<span style={{ color: '#00FFD1' }}>.</span>
        </h2>
      </motion.div>

      <motion.div {...fadeInUp} transition={{ delay: 0.15, duration: 0.6 }}>
        <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
            <span className="ml-4 text-sm" style={{ color: '#4D4D4D', fontFamily: "'Fira Code', monospace" }}>
              cipher@portfolio:~$
            </span>
          </div>
          <div className="p-6 space-y-4" style={{ fontFamily: "'Fira Code', monospace", fontSize: '15px', lineHeight: 1.8 }}>
            <p style={{ color: '#4D4D4D' }}>$ cat about.txt</p>
            {profileData.bio.map((line, i) => (
              <p key={i} style={{ color: 'rgba(255,255,255,0.8)' }}>
                <span style={{ color: '#00FFD1' }}>&gt;</span> {line}
              </p>
            ))}
            <p style={{ color: '#4D4D4D' }} className="pt-2">$ ls interests/</p>
            <div className="flex flex-wrap gap-3">
              {profileData.topics.map((t) => (
                <span key={t} className="px-3 py-1" style={{ border: '1px solid rgba(0,255,209,0.3)', color: '#00FFD1', fontSize: '13px' }}>
                  {t}
                </span>
              ))}
            </div>
            <p style={{ color: '#4D4D4D' }} className="pt-2">$ echo $FUN_FACT</p>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>
              <span style={{ color: '#00FFD1' }}>&gt;</span> "{profileData.funFact}"
            </p>
            <p className="pt-2">
              <span style={{ color: '#4D4D4D' }}>$ </span>
              <span className="animate-pulse" style={{ color: '#00FFD1' }}>_</span>
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {[
          { icon: Code, label: 'Focus', value: 'Full-Stack & Web3' },
          { icon: Shield, label: 'Specialty', value: 'Cryptography & Security' },
          { icon: Cpu, label: 'Approach', value: 'Performance-First' },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            {...fadeInUp}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
            className="p-6 cursor-default border border-white/[0.08] hover:border-[#00FFD1]/30 transition-colors duration-500"
            style={{ background: '#0a0a0a' }}
          >
            <item.icon size={24} style={{ color: '#00FFD1' }} className="mb-4" />
            <p className="text-sm mb-1" style={{ color: '#4D4D4D', fontFamily: "'Fira Code', monospace" }}>{item.label}</p>
            <p className="font-medium" style={{ color: '#FFF', fontFamily: "'Inter', sans-serif", fontSize: '18px' }}>{item.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ============ SKILLS ============ */
export const SkillsSection = () => {
  const allTech = marqueeWords;
  const row1 = [...allTech, ...allTech, ...allTech];
  const row2 = [...[...allTech].reverse(), ...[...allTech].reverse(), ...[...allTech].reverse()];

  return (
    <section id="skills" className="relative py-32 overflow-hidden" style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto mb-16" style={{ padding: '0 7.6923%' }}>
        <motion.div {...fadeInUp}>
          <p style={{ color: '#00FFD1', fontFamily: "'Fira Code', monospace", fontSize: '14px' }} className="mb-3">{'// 002'}</p>
          <h2 className="font-bold" style={{ fontFamily: "'Fira Code', monospace", fontSize: 'clamp(32px, 5vw, 42px)', color: '#FFF' }}>
            Tech Arsenal<span style={{ color: '#00FFD1' }}>.</span>
          </h2>
        </motion.div>
      </div>

      <div className="space-y-4 mb-20">
        <div className="overflow-hidden">
          <div className="marquee-track flex gap-4 whitespace-nowrap">
            {row1.map((word, i) => (
              <span key={i} className="inline-block px-5 py-2 text-sm shrink-0" style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontFamily: "'Fira Code', monospace" }}>
                {word}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="marquee-track-reverse flex gap-4 whitespace-nowrap">
            {row2.map((word, i) => (
              <span key={i} className="inline-block px-5 py-2 text-sm shrink-0" style={{ border: '1px solid rgba(0,255,209,0.15)', color: '#00FFD1', fontFamily: "'Fira Code', monospace" }}>
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto" style={{ padding: '0 7.6923%' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((cat, i) => (
            <motion.div key={cat.name} {...fadeInUp} transition={{ delay: 0.05 * i, duration: 0.5 }} className="p-6" style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="font-medium mb-4" style={{ color: '#00FFD1', fontFamily: "'Fira Code', monospace", fontSize: '14px' }}>
                {`// ${cat.name}`}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="px-3 py-1 text-sm" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)', fontFamily: "'Fira Code', monospace", fontSize: '13px' }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ PROJECTS ============ */
export const ProjectsSection = () => (
  <section id="projects" className="relative py-32" style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
    <div className="max-w-6xl mx-auto" style={{ padding: '0 7.6923%' }}>
      <motion.div {...fadeInUp} className="mb-16">
        <p style={{ color: '#00FFD1', fontFamily: "'Fira Code', monospace", fontSize: '14px' }} className="mb-3">{'// 003'}</p>
        <h2 className="font-bold" style={{ fontFamily: "'Fira Code', monospace", fontSize: 'clamp(32px, 5vw, 42px)', color: '#FFF' }}>
          Projects<span style={{ color: '#00FFD1' }}>.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projectsData.map((project, i) => (
          <motion.div
            key={project.id}
            {...fadeInUp}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
            className="group p-8 cursor-pointer relative overflow-hidden border border-white/[0.08] hover:border-[#00FFD1]/40 transition-colors duration-500"
            style={{ background: '#0a0a0a' }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 text-xs" style={{ background: 'rgba(0,255,209,0.1)', color: '#00FFD1', fontFamily: "'Fira Code', monospace" }}>
                {project.category}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs" style={{ color: '#4D4D4D', fontFamily: "'Fira Code', monospace" }}>{project.hash}</span>
                <ArrowUpRight size={16} className="text-[#4D4D4D] group-hover:text-[#00FFD1] transition-colors duration-300" />
              </div>
            </div>

            <h3 className="font-bold text-xl mb-3" style={{ color: '#FFF', fontFamily: "'Fira Code', monospace" }}>
              {project.title}
            </h3>
            <p className="mb-6" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif", fontSize: '15px', lineHeight: 1.6 }}>
              {project.description}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.6)', fontFamily: "'Fira Code', monospace" }}>
                    {t}
                  </span>
                ))}
              </div>
              <span className="flex items-center gap-1 text-xs" style={{ fontFamily: "'Fira Code', monospace" }}>
                <Lock size={10} style={{ color: project.status === 'Completed' ? '#6FD2C0' : '#00FFD1' }} />
                <span style={{ color: project.status === 'Completed' ? '#6FD2C0' : '#00FFD1' }}>{project.status}</span>
              </span>
            </div>

            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
              style={{ background: 'radial-gradient(circle at center, rgba(0,255,209,0.04), transparent 70%)' }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
