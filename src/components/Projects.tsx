import { Star, Rocket } from "lucide-react";

const projects = [
  {
    title: "Serene AI - Molecular Efficacy Predictor",
    description:
      "AI-driven platform that predicts chemical compound efficacy using deep learning and molecular descriptors. Designed for drug discovery and analysis.",
    technologies: ["Python", "Megatron GPT", "RDKit", "PyTorch", "Pandas"],
    highlights: [
      "95%+ accuracy on molecular test sets",
      "Molecular visualization via SMILES",
      "Custom confidence-based prediction engine",
    ],
  },
  {
    title: "GitHub Viewer App",
    description:
      "React-based frontend to view and explore GitHub profiles and repositories. Built with full-stack integration and responsive UI.",
    technologies: ["React", "Node.js", "Express", "SQL", "GitHub API"],
    highlights: [
      "User-friendly GitHub profile interface",
      "API integration for dynamic repo fetching",
      "Secure backend with custom endpoints",
    ],
  },
  {
    title: "High-Performance Matrix Benchmarking",
    description:
      "Parallel computing scripts benchmarking matrix operations using multiprocessing, OpenMP, and MPI techniques for edge workloads.",
    technologies: ["Python", "C", "OpenMP", "MPI", "Mojo"],
    highlights: [
      "Parallelized matrix multiplication in C and Python",
      "Speedup analysis for multicore environments",
      "Real-time CPU logging and optimization",
    ],
  },
  {
    title: "AI Logic Inference Engine",
    description:
      "Explainable AI system integrating SWI-Prolog with Python to enable logic-based reasoning and backward chaining for decision support.",
    technologies: ["Prolog", "Python", "Flask", "Logic Programming"],
    highlights: [
      "Custom rule-based inference system",
      "FOL knowledge base with explainable outputs",
      "Integration with AI model evaluation tools",
    ],
  },
  {
    title: "Call of Duty Player Stats Analysis in R",
    description:
      "Statistical analysis project using a fictional Call of Duty dataset. Demonstrates R-based data wrangling, visualization, and performance prediction with linear regression.",
    technologies: ["R", "ggplot2", "dplyr", "readr"],
    highlights: [
      "Kill/Death ratio computation and visualization",
      "Histogram and scatterplot generation",
      "Linear regression model for score prediction",
      "Summary statistics and insights from gameplay data",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="h-6 w-6 text-purple-400 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Projects
            </h2>
            <Rocket className="h-6 w-6 text-purple-400 ml-2" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 group"
              >
                <div className="flex items-start mb-6">
                  <Star className="h-6 w-6 text-purple-400 mr-4 mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {project.title}
                    </h3>

                    <p className="text-purple-100 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="flex items-start text-purple-100"
                          >
                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">
                        Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-purple-900/30 text-purple-200 rounded-full text-sm border border-purple-500/30"
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
