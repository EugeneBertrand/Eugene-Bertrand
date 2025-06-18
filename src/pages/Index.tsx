
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundStyle = {
    background: `linear-gradient(180deg, 
      rgb(2, 6, 23) 0%, 
      rgb(15, 23, 42) 25%, 
      rgb(30, 41, 59) 50%, 
      rgb(15, 23, 42) 75%, 
      rgb(2, 6, 23) 100%)`
  };

  // Generate star positions and movement
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 3 + 1;
      const initialX = Math.random() * 100;
      const initialY = Math.random() * 100;
      const speed = Math.random() * 0.5 + 0.1;
      
      // Calculate new position based on scroll
      const newX = (initialX + scrollY * speed * 0.02) % 120;
      const newY = (initialY + scrollY * speed * 0.01) % 120;
      
      stars.push(
        <div
          key={i}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${newX}%`,
            top: `${newY}%`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random() * 0.8 + 0.2
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div 
      className="min-h-screen text-white relative overflow-hidden transition-all duration-300"
      style={backgroundStyle}
    >
      {/* Moving starfield */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {generateStars()}
        
        {/* Some larger moving stars */}
        <div 
          className="absolute w-2 h-2 bg-blue-300 rounded-full animate-pulse"
          style={{
            left: `${(20 + scrollY * 0.03) % 100}%`,
            top: `${(15 + scrollY * 0.01) % 100}%`
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
          style={{
            left: `${(80 - scrollY * 0.02) % 100}%`,
            top: `${(30 + scrollY * 0.015) % 100}%`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute w-2.5 h-2.5 bg-white rounded-full animate-pulse"
          style={{
            left: `${(60 + scrollY * 0.025) % 100}%`,
            top: `${(70 - scrollY * 0.02) % 100}%`,
            animationDelay: '0.5s'
          }}
        />
        <div 
          className="absolute w-1 h-1 bg-blue-200 rounded-full animate-pulse"
          style={{
            left: `${(40 - scrollY * 0.015) % 100}%`,
            top: `${(85 + scrollY * 0.02) % 100}%`,
            animationDelay: '1.5s'
          }}
        />
      </div>
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
