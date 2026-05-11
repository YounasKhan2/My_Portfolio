// File: src/pages/index.js
import About from '@/components/sections/About';
import Hero from '../components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Articles from '@/components/sections/Articles';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Articles />
      <Contact />
    </div>
  );
}