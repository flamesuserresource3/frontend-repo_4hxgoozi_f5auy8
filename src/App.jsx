import React from 'react';
import Hero from './components/Hero.jsx';
import Metrics from './components/Metrics.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-indigo-50 to-sky-50 text-slate-800">
      <Hero />
      <Metrics />
      <Projects />
      <About />
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Your Name — Full‑Stack Developer
      </footer>
    </div>
  );
}
