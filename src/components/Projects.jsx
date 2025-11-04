import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Realtime Collaboration Suite',
    description:
      'WebSocket-powered editor with presence, cursors, and CRDT sync. Built with React, FastAPI, and Postgres.',
    tags: ['React', 'FastAPI', 'WebSockets', 'CRDT'],
    link: '#',
  },
  {
    title: 'E-commerce Platform',
    description:
      'Headless storefront with payments, analytics, and admin dashboard. Optimized for Core Web Vitals.',
    tags: ['Next.js', 'Stripe', 'tRPC', 'Prisma'],
    link: '#',
  },
  {
    title: 'AI Content Pipeline',
    description:
      'Background job system orchestrating AI content generation and review workflows at scale.',
    tags: ['Python', 'Celery', 'OpenAI', 'Redis'],
    link: '#',
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="group relative rounded-2xl bg-white/70 p-6 ring-1 ring-slate-200 backdrop-blur shadow-sm transition-transform"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      style={{ transformStyle: 'preserve-3d' }}
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `rotateX(${(-y / 40).toFixed(2)}deg) rotateY(${(x / 40).toFixed(2)}deg)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
      }}
    >
      <div className="mb-3 text-lg font-semibold text-slate-800">{project.title}</div>
      <p className="text-slate-600">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full bg-gradient-to-br from-pink-100 to-sky-100 px-3 py-1 text-xs text-slate-700 ring-1 ring-slate-200"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100" style={{ transform: 'translateZ(30px)' }}>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-200/30 to-sky-200/30 mix-blend-overlay" />
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(196,181,253,0.25),transparent_50%),_radial-gradient(ellipse_at_bottom_right,rgba(125,211,252,0.25),transparent_50%)]" />
      <div className="relative container mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-sky-600">
            Featured Projects
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            A selection of work showcasing performance, scalability, and thoughtful UX.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
