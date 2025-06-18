
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
    background: `radial-gradient(circle at ${50 + scrollY * 0.01}% ${30 + scrollY * 0.02}%, 
      rgba(6, 182, 212, 0.1) 0%, 
      rgba(59, 130, 246, 0.05) 25%, 
      transparent 50%), 
      linear-gradient(${135 + scrollY * 0.1}deg, 
      rgb(2, 6, 23) 0%, 
      rgb(15, 23, 42) 25%, 
      rgb(30, 41, 59) 50%, 
      rgb(15, 23, 42) 75%, 
      rgb(2, 6, 23) 100%)`
  };

  return (
    <div 
      className="min-h-screen text-white relative overflow-hidden transition-all duration-300"
      style={backgroundStyle}
    >
      {/* Space background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-blue-200 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute bottom-60 left-1/2 w-2 h-2 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-300"></div>
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
