import { Code2 } from "lucide-react";

const skillCategories = [{
  title: "Programming Languages",
  skills: ["Python", "C/C++", "JavaScript/TypeScript", "Go", "Java", "SQL", "Rust", "R", "Assembly"],
  icon: "💻"
}, {
  title: "AI/ML & Data Science",
  skills: ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy", "OpenCV"],
  icon: "🤖"
}, {
  title: "Web Development",
  skills: ["React", "Node.js", "Express", "Next.js", "HTML/CSS", "RESTful APIs"],
  icon: "🌐"
}, {
  title: "Cloud & DevOps",
  skills: ["AWS", "Docker", "Kubernetes", "Git/GitHub", "CI/CD", "Linux"],
  icon: "☁️"
}, {
  title: "Databases",
  skills: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Database Design", "Query Optimization"],
  icon: "🗄️"
}];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Code2 className="h-6 w-6 text-amber-400 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <Code2 className="h-6 w-6 text-amber-400 ml-2" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-900/20 via-orange-900/20 to-red-900/20 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30 hover:border-amber-400/60 transition-all duration-500 hover:scale-105 group shadow-lg hover:shadow-amber-500/20"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-amber-100">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-3 bg-gradient-to-r from-amber-800/30 to-orange-800/30 rounded-lg border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300"
                    >
                      <span className="text-amber-100 font-medium">{skill}</span>
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
