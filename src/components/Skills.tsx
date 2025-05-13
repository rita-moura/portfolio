
import React from "react";
import { useGitHubRepos } from "@/hooks/useGitHubData";
import useGitHubProjects from "@/hooks/useGitHubProjects";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Skill {
  name: string;
  category: string;
}

// Nome de usuário do GitHub
const GITHUB_USERNAME = "rita-moura";

const skills: Skill[] = [
  { name: "Java", category: "Linguagens" },
  { name: "Python", category: "Linguagens" },
  { name: "Node.js", category: "Linguagens" },
  { name: "Golang", category: "Linguagens" },
  { name: "PostgreSQL", category: "Banco de Dados" },
  { name: "MongoDB", category: "Banco de Dados" },
  { name: "Redis", category: "Banco de Dados" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "CI/CD", category: "DevOps" },
  { name: "REST APIs", category: "Arquitetura" },
  { name: "GraphQL", category: "Arquitetura" },
  { name: "Microsserviços", category: "Arquitetura" },
  { name: "AWS", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
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
  // Buscar repositórios do GitHub
  const { data: repos, isLoading } = useGitHubRepos(GITHUB_USERNAME);
  
  // Usar o hook personalizado para processar os projetos
  const { projects } = useGitHubProjects(repos, GITHUB_USERNAME);
  
  // Função para encontrar projetos que usam uma determinada tecnologia
  const findProjectsByTechnology = (techName: string) => {
    // Normalizar o nome da tecnologia para comparação
    const normalizedTechName = techName.toLowerCase();
    
    // Buscar projetos que contêm esta tecnologia
    return projects.filter(project => {
      const technologies = project.technologies.map(tech => tech.toLowerCase());
      
      // Verificar tecnologias exatas
      if (technologies.includes(normalizedTechName)) {
        return true;
      }
      
      // Verificar se há tecnologias que contenham essa palavra
      // Por exemplo, "Node" corresponderia a "Node.js"
      return technologies.some(tech => 
        tech.includes(normalizedTechName) || 
        normalizedTechName.includes(tech)
      );
    });
  };

  return (
    <section id="skills" className="py-24 bg-navy-light">
      <div className="container max-w-4xl">
        <h2 className="section-heading">
          <span className="text-highlight font-mono text-lg mr-2">Tecnologias</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {Object.entries(categorizedSkills).map(([category, categorySkills]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-slate-light font-heading font-medium text-xl mb-4">
                {category}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => {
                  const relatedProjects = !isLoading ? findProjectsByTechnology(skill.name) : [];
                  
                  return (
                    <div key={skill.name} className="space-y-2 bg-navy p-4 rounded-lg">
                      <div className="flex justify-between items-start">
                        <span className="text-slate-light font-medium">{skill.name}</span>
                        <Badge variant="outline" className="text-highlight border-highlight">
                          {isLoading ? '...' : `${relatedProjects.length} ${relatedProjects.length === 1 ? 'projeto' : 'projetos'}`}
                        </Badge>
                      </div>
                      
                      {!isLoading && relatedProjects.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {relatedProjects.map(project => (
                            <Link 
                              key={project.id}
                              to="/#projects"
                              onClick={(e) => {
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="text-sm text-slate hover:text-highlight transition-colors bg-navy-light px-2 py-1 rounded-md"
                            >
                              {project.title}
                            </Link>
                          ))}
                        </div>
                      )}
                      
                      {!isLoading && relatedProjects.length === 0 && (
                        <p className="text-sm text-slate">Nenhum projeto encontrado</p>
                      )}
                    </div>
                  );
                })}
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
