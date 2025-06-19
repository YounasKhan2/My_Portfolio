// File: src/pages/index.js
import About from '@/components/sections/About';
import Hero from '../components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <div>
      <div className="snap-section min-h-screen"><Hero /></div>
      <div className="snap-section min-h-screen"><About /></div>
      <div className="snap-section min-h-screen"><Skills /></div>
      <div className="snap-section min-h-screen"><Projects /></div>
      <div className="snap-section min-h-screen"><Contact /></div>
      {/* Other sections will be added here */}
    </div>
  );
}