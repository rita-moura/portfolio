
import React from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "Java", level: 90, category: "Linguagens" },
  { name: "Python", level: 85, category: "Linguagens" },
  { name: "Node.js", level: 80, category: "Linguagens" },
  { name: "Golang", level: 70, category: "Linguagens" },
  { name: "PostgreSQL", level: 85, category: "Banco de Dados" },
  { name: "MongoDB", level: 80, category: "Banco de Dados" },
  { name: "Redis", level: 75, category: "Banco de Dados" },
  { name: "Docker", level: 85, category: "DevOps" },
  { name: "Kubernetes", level: 75, category: "DevOps" },
  { name: "CI/CD", level: 80, category: "DevOps" },
  { name: "REST APIs", level: 90, category: "Arquitetura" },
  { name: "GraphQL", level: 75, category: "Arquitetura" },
  { name: "Microsserviços", level: 85, category: "Arquitetura" },
  { name: "AWS", level: 80, category: "Cloud" },
  { name: "Google Cloud", level: 75, category: "Cloud" },
  { name: "Azure", level: 70, category: "Cloud" },
];

// Agrupar habilidades por categoria
const categorizedSkills = skills.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {} as Record<string, Skill[]>);

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-navy-light">
      <div className="container max-w-4xl">
        <h2 className="section-heading">
          <span className="text-highlight font-mono text-lg mr-2">02.</span> Tecnologias
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(categorizedSkills).map(([category, categorySkills]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-slate-light font-heading font-medium text-xl mb-4">
                {category}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-light">{skill.name}</span>
                      <span className="text-highlight font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-navy rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-highlight rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-slate-light font-heading font-medium text-xl mb-6">
            Outras ferramentas e tecnologias
          </h3>
          <ul className="flex flex-wrap gap-3">
            {["Git", "Spring Boot", "FastAPI", "Express.js", "Kafka", "RabbitMQ", "Elasticsearch", 
              "Prometheus", "Grafana", "Terraform", "Jenkins", "GitHub Actions", "Swagger", "JWT", "OAuth"].map((tech) => (
              <li key={tech} className="px-4 py-2 bg-navy rounded-full text-slate-light">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
