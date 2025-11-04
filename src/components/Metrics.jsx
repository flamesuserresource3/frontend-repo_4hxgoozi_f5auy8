import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Star, Users, Rocket } from 'lucide-react';

function MetricCard({ icon: Icon, label, value, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 1200; // ms
    const startTime = performance.now();

    let raf;
    const tick = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * eased);
      setCount(current);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="flex flex-1 items-center gap-4 rounded-2xl bg-white/70 p-6 ring-1 ring-slate-200 backdrop-blur shadow-sm"
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-200 to-sky-200 text-violet-700">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-2xl font-bold text-slate-800">
          {count}
          {suffix}
        </div>
        <div className="text-sm text-slate-600">{label}</div>
      </div>
    </motion.div>
  );
}

export default function Metrics() {
  return (
    <section className="relative py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40" />
      <div className="relative container mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
            Highlights & Impact
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            A snapshot of my experience and the outcomes I deliver.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard icon={Code} label="Production Deployments" value={120} />
          <MetricCard icon={Star} label="Avg. Lighthouse Score" value={95} suffix="+" />
          <MetricCard icon={Users} label="Monthly Active Users" value={250000} />
          <MetricCard icon={Rocket} label="Performance Gains" value={3} suffix="x" />
        </div>
      </div>
    </section>
  );
}
