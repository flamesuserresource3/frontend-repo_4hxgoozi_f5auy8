import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const ySlow = useTransform(scrollY, [0, 400], [0, -50]);
  const yFast = useTransform(scrollY, [0, 400], [0, -120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/70" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <motion.h1
            style={{ y: yFast, opacity }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-sky-500"
          >
            Full‑Stack Developer
          </motion.h1>
          <motion.p
            style={{ y: ySlow, opacity }}
            className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-slate-700"
          >
            I build modern, scalable web apps with delightful interactions. Explore my work, play with the 3D scene, and let’s create something outstanding.
          </motion.p>

          <motion.div
            style={{ y: ySlow }}
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="pointer-events-auto inline-flex items-center rounded-full bg-violet-600/90 px-6 py-3 text-white shadow-lg shadow-violet-300/40 ring-1 ring-violet-700/30 backdrop-blur hover:bg-violet-600 transition"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="pointer-events-auto inline-flex items-center rounded-full bg-white/70 px-6 py-3 text-slate-800 ring-1 ring-slate-200 backdrop-blur hover:bg-white transition"
            >
              About Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
