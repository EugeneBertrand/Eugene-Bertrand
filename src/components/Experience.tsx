import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Edge Computing Researcher",
    company: "Baskin Engineering at UC Santa Cruz",
    dates: "April 2025 - Present",
    description: "Conducted research on intelligent, power-aware user-space scheduling for edge servers, focused on improving energy efficiency without compromising performance.",
    technologies: ["Python", "Multiprocessing", "Edge Computing"],
    achievements: [
      "Developed tools to detect real-time CPU utilization shifts by analyzing workload patterns and slope-based behavior changes.",
      "Simulated diverse computational workloads using Python's Multiprocessing framework.",
      "Forecasted CPU demand and communicated results through a shared interface to enable dynamic, load-aware scheduling decisions.",
      "Achieved up to 2.3× speedup in workload throughput and 18% reduction in power usage under high-utilization scenarios through adaptive scheduling techniques.",
    ],
  },
  {
    title: "AI/ML Researcher",
    company: "AIEA Lab at UC Santa Cruz",
    dates: "Oct 2024 - Mar 2025",
    description: "Conducted comprehensive evaluations of AI models, identifying accuracy gaps and proposing improvements to inference consistency and generalization.",
    technologies: ["Python", "SWI-Prolog", "ChatGPT"],
    achievements: [
      "Leveraged advanced tools to design and execute complex queries using Python.",
      "Built a custom backward-chaining system for First-Order Logic (FOL), achieving 98% correctness across a suite of formal test cases.",
      "Explored alternative logic paradigms, including Datalog, Linear Temporal Logic (LTL) and Deontic Logic.",
      "Created educational materials for alternative logic paradigms.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "TAJO LLC",
    dates: "Aug 2023 - Dec 2024",
    description: "Engineered the company's web infrastructure and branding assets, optimizing UI/UX to align with stakeholder requirements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    achievements: [
      "Integrated visually adaptive elements to enhance content engagement.",
      "Implemented secure and efficient donation and subscription service embeds.",
      "Refined frontend components to elevate the company's digital presence.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="h-6 w-6 text-emerald-400 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <Briefcase className="h-6 w-6 text-emerald-400 ml-2" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-500 hover:scale-105 group shadow-lg hover:shadow-emerald-500/20"
              >
                <h3 className="text-xl font-semibold text-emerald-100 mb-4">{experience.title}</h3>
                <p className="text-teal-200 font-medium mb-2">{experience.company}</p>
                <p className="text-cyan-200 font-medium mb-4">{experience.dates}</p>
                <p className="text-emerald-100 mb-4 leading-relaxed">{experience.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-emerald-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((technology, technologyIndex) => (
                      <span
                        key={technologyIndex}
                        className="px-3 py-1 bg-emerald-800/40 text-emerald-200 rounded-full text-sm border border-emerald-500/40"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-emerald-300 mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start text-teal-100"
                      >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
