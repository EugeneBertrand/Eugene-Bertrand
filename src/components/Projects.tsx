
import { Star, Rocket } from "lucide-react";

const projects = [
  {
    title: "Edge Computing Optimization Platform",
    description: "Advanced research platform for optimizing distributed computing systems at the network edge, improving latency and resource utilization.",
    technologies: ["Python", "TensorFlow", "Docker", "Kubernetes", "C++"],
    highlights: [
      "Reduced computational latency by 40%",
      "Implemented novel optimization algorithms",
      "Published research findings"
    ]
  },
  {
    title: "AI-Powered Traffic Analytics",
    description: "Full-stack application for analyzing traffic patterns using machine learning, providing real-time insights for urban planning.",
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS"],
    highlights: [
      "Real-time data processing pipeline",
      "Interactive visualization dashboard",
      "Scalable cloud architecture"
    ]
  },
  {
    title: "Embedded System Controller",
    description: "Firmware development for IoT devices with real-time data collection and wireless communication capabilities.",
    technologies: ["C", "ARM Cortex", "FreeRTOS", "Bluetooth", "I2C"],
    highlights: [
      "Low-power system design",
      "Wireless sensor networking",
      "Real-time operating system integration"
    ]
  },
  {
    title: "Distributed Computing Framework",
    description: "Scalable framework for distributed machine learning workloads across multiple compute nodes with fault tolerance.",
    technologies: ["Go", "gRPC", "Redis", "MongoDB", "Apache Kafka"],
    highlights: [
      "Fault-tolerant architecture",
      "Auto-scaling capabilities",
      "High-throughput data processing"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="h-6 w-6 text-blue-400 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Launch Missions
            </h2>
            <Rocket className="h-6 w-6 text-blue-400 ml-2" />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 group"
              >
                <div className="flex items-start mb-6">
                  <Star className="h-6 w-6 text-blue-400 mr-4 mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-300 mb-3">
                        Mission Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start text-blue-100">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-3">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-900/30 text-blue-200 rounded-full text-sm border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
