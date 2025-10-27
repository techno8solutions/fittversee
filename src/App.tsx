import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ProductPreview from './components/ProductPreview';
import Features from './components/Features';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallax = document.querySelector('.parallax-bg') as HTMLElement;
      if (parallax) {
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="parallax-bg fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />
      </div>

      <Hero />
      <About />
      <ProductPreview />
      <Features />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
