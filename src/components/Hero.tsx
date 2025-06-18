
import { Star, Satellite } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex items-center justify-center mb-6">
          <Satellite className="h-12 w-12 text-cyan-400 mr-4 animate-spin" style={{
            animationDuration: '10s'
          }} />
          <Star className="h-8 w-8 text-white animate-pulse" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-white to-cyan-300 bg-clip-text text-transparent tracking-wider">
          EUGENE BERTRAND
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-cyan-200 mb-8 font-medium tracking-widest">
          DATA SCIENCE @ UC SAN DIEGO
        </h2>
        
        <p className="text-xl text-cyan-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Exploring the frontiers of technology at the intersection of AI/ML, edge computing, and intelligent product design. Passionate about building impactful, user-centered solutions that scale—from concept to deployment. Bridging technical innovation with strategic product thinking, one line of code (and roadmap) at a time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-black rounded-full hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:scale-105 font-bold tracking-wide"
          >
            EXPLORE
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 font-bold tracking-wide"
          >
            CONNECT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
