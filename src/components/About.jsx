import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'TypeScript',
  'React',
  'Node.js',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'AWS',
  'CI/CD',
  'GraphQL',
  'tRPC',
  'TailwindCSS',
];

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white/60" />
      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white/70 p-8 ring-1 ring-slate-200 backdrop-blur shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-slate-800">About Me</h3>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I’m a full‑stack developer focused on crafting performant, accessible, and maintainable web products. I love pairing robust backend architectures with fluid, modern interfaces. My work spans startups to enterprise — shipping features fast without compromising on quality.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              When I’m not coding, you’ll find me exploring new UI patterns, contributing to OSS, or optimizing workflows to help teams move faster.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-white/70 p-8 ring-1 ring-slate-200 backdrop-blur shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-slate-800">Core Skills</h3>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-100 to-sky-100 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-sky-600/90 px-6 py-3 text-white shadow-lg shadow-sky-300/40 ring-1 ring-sky-700/30 backdrop-blur hover:bg-sky-600 transition"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
