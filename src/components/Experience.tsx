import { Satellite, Star } from "lucide-react";

const experiences = [{
  title: "Edge Computing Researcher",
  company: "Baskin Engineering at UC Santa Cruz",
  period: "Apr 2025 - Present",
  description: "Led by Professor Abel Souza. Conducting research on intelligent, power-aware user-space scheduling for edge servers, focused on improving energy efficiency without compromising performance.",
  achievements: [
    "Developed tools utilizing Python to detect real-time CPU utilization shifts by analyzing workload patterns and slope-based behavior changes",
    "Simulated diverse computational workloads—including variable-scale matrix multiplication—using Python's Multiprocessing framework",
    "Forecasted CPU demand and communicated results through a shared interface to enable dynamic, load-aware scheduling decisions",
    "Achieved up to 2.3× speedup in workload throughput and 18% reduction in power usage under high-utilization scenarios through adaptive scheduling techniques"
  ]
}];

const Experience = () => {
  return <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Satellite className="h-6 w-6 text-blue-400 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">Experience</h2>
            <Satellite className="h-6 w-6 text-blue-400 ml-2" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105">
                <div className="flex items-start mb-6">
                  <Star className="h-6 w-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {exp.title}
                        </h3>
                        <h4 className="text-xl text-blue-300 mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <span className="text-blue-200 bg-blue-900/30 px-4 py-2 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-blue-300 mb-3">
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => <li key={achIndex} className="flex items-start text-blue-100">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};

export default Experience;
