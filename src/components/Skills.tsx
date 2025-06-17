
import { Satellite, Star } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C/C++", "JavaScript/TypeScript", "Go", "Java", "SQL"],
    icon: "💻"
  },
  {
    title: "AI/ML & Data Science",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy", "OpenCV"],
    icon: "🤖"
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "Express", "Next.js", "HTML/CSS", "RESTful APIs"],
    icon: "🌐"
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Git/GitHub", "CI/CD", "Linux"],
    icon: "☁️"
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Database Design", "Query Optimization"],
    icon: "🗄️"
  },
  {
    title: "Embedded Systems",
    skills: ["ARM Cortex", "FreeRTOS", "I2C/SPI", "Bluetooth", "Microcontrollers", "Firmware"],
    icon: "🔧"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Satellite className="h-6 w-6 text-blue-400 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
              Navigation Systems
            </h2>
            <Satellite className="h-6 w-6 text-blue-400 ml-2" />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 group"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-4 w-4 text-blue-400 mr-2 group-hover:animate-pulse" />
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                    <Star className="h-4 w-4 text-blue-400 ml-2 group-hover:animate-pulse" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg border border-blue-500/10 hover:border-blue-400/30 transition-all duration-300"
                    >
                      <span className="text-blue-100 font-medium">{skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className={`h-3 w-3 ${
                              starIndex < 4 ? 'text-blue-400 fill-blue-400' : 'text-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
