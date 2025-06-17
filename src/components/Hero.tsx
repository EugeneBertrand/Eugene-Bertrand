
import { Star, Satellite } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex items-center justify-center mb-6">
          <Satellite className="h-12 w-12 text-blue-400 mr-4 animate-spin" style={{animationDuration: '10s'}} />
          <Star className="h-8 w-8 text-white animate-pulse" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-blue-300 bg-clip-text text-transparent">
          Mahir Patel
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-blue-200 mb-8 font-light">
          Computer Engineering Student
        </h2>
        
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Exploring the cosmos of technology through edge computing, AI/ML, and innovative software solutions. 
          Building the future, one line of code at a time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
          >
            Explore My Universe
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
          >
            Contact Mission Control
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
