
import React from "react";
import { useGitHubRepos } from "@/hooks/useGitHubData";
import useGitHubProjects from "@/hooks/useGitHubProjects";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Skill {
  name: string;
  category: string;
}

// Nome de usuário do GitHub
const GITHUB_USERNAME = "rita-moura";

const skills: Skill[] = [
  { name: "Node.js", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "Microsserviços", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Golang", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Swagger", category: "Backend" },
  { name: "JWT", category: "Backend" },
  { name: "OAuth", category: "Backend" },
  { name: "TypeScript", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "DevOps" },
  { name: "GitHub", category: "DevOps" },
  { name: "CI/CD", category: "DevOps" },
  { name: "AWS", category: "DevOps" },
  { name: "Terraform", category: "DevOps" },
  { name: "Jenkins", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Prometheus", category: "DevOps" },
  { name: "Grafana", category: "DevOps" },
  { name: "React", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "SQL", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
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
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <Card key={category} className="bg-navy border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-light font-heading text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="text-slate-light bg-navy-light">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;