
import { Rocket, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-6 w-6 text-blue-400 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Mission Profile
            </h2>
            <Star className="h-6 w-6 text-blue-400 ml-2" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500">
            <div className="flex items-start mb-6">
              <Rocket className="h-8 w-8 text-blue-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Computer Engineering Navigator
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  As a dedicated Computer Engineering student at the University of Waterloo, I'm charting a course through 
                  the vast expanse of technology. My journey spans edge computing research, AI/ML development, and full-stack 
                  engineering, always pushing the boundaries of what's possible.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-blue-300">Current Trajectory</h4>
                    <ul className="space-y-2 text-blue-100">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        University of Waterloo Student
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Edge Computing Research
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        AI/ML Development
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-blue-300">Mission Specialties</h4>
                    <ul className="space-y-2 text-blue-100">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Full-Stack Development
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Research & Innovation
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Problem Solving
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
