
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Folder, Code } from "lucide-react";
import { useGitHubRepos } from "@/hooks/useGitHubData";

// Definição da interface GitHubProject que estende o tipo de repositório do GitHub
interface Project {
  id: number; 
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  image?: string;
}

// Nome de usuário do GitHub
const GITHUB_USERNAME = "rita-moura";

export const Projects: React.FC = () => {
  // Buscar repositórios do GitHub
  const { data: repos, isLoading, error } = useGitHubRepos(GITHUB_USERNAME);
  
  // Converter repositórios do GitHub para o formato de projeto
  const projects = React.useMemo(() => {
    if (!repos) return [];
    
    return repos
      .filter(repo => !repo.fork && repo.description) // Filtrar forks e repos sem descrição
      .slice(0, 10) // Limitar a 10 projetos
      .map(repo => ({
        id: repo.id,
        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
        description: repo.description || "Sem descrição disponível",
        technologies: repo.topics.length > 0 ? repo.topics : [repo.language].filter(Boolean) as string[],
        githubUrl: repo.html_url,
        demoUrl: repo.homepage,
        featured: Boolean(repo.stargazers_count > 0 || repo.homepage),
        // Não temos imagens do GitHub, então deixamos indefinido para os não destacados
        image: repo.stargazers_count > 0 ? 
          `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}` : undefined
      }));
  }, [repos]);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  
  if (isLoading) {
    return (
      <section id="projects" className="py-24">
        <div className="container max-w-5xl">
          <h2 className="section-heading">
            <span className="text-highlight font-mono text-lg mr-2">03.</span> Projetos
          </h2>
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-highlight"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-24">
        <div className="container max-w-5xl">
          <h2 className="section-heading">
            <span className="text-highlight font-mono text-lg mr-2">03.</span> Projetos
          </h2>
          <div className="bg-navy-light p-6 rounded-lg shadow-xl my-8">
            <p className="text-red-400">Não foi possível carregar os projetos do GitHub. Por favor, tente novamente mais tarde.</p>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section id="projects" className="py-24">
      <div className="container max-w-5xl">
        <h2 className="section-heading">
          <span className="text-highlight font-mono text-lg mr-2">03.</span> Projetos
        </h2>
        
        {featuredProjects.length > 0 && (
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`grid md:grid-cols-12 gap-6 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-1' : 'md:order-0'}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-highlight/20 rounded-lg group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="rounded-lg w-full h-[300px] object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div className="rounded-lg w-full h-[300px] bg-navy-light flex items-center justify-center">
                        <Code size={64} className="text-highlight opacity-20" />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-0 text-right' : 'md:order-1'}`}>
                  <div className="font-mono text-highlight mb-1">Projeto em destaque</div>
                  <h3 className="text-slate-light text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="bg-navy-light p-6 rounded-lg shadow-xl mb-4">
                    <p className="text-slate">{project.description}</p>
                  </div>
                  <ul className={`flex flex-wrap gap-2 text-sm font-mono text-slate mb-4 ${
                    index % 2 === 1 ? 'justify-end' : ''
                  }`}>
                    {project.technologies.map(tech => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className={`flex gap-4 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-light hover:text-highlight"
                      aria-label="GitHub Repository"
                    >
                      <Github size={22} />
                    </a>
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-light hover:text-highlight"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Outros projetos */}
        <div>
          <h3 className="text-center text-2xl font-heading text-slate-light mb-12">
            {featuredProjects.length > 0 ? "Outros Projetos" : "Meus Projetos"}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-5">
            {otherProjects.length > 0 ? otherProjects.map(project => (
              <Card key={project.id} className="bg-navy-light border-navy hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Folder size={24} className="text-highlight" />
                    <div className="flex gap-4">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate hover:text-highlight"
                      >
                        <Github size={20} />
                      </a>
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-slate hover:text-highlight"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-slate-light text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-slate">
                    {project.technologies.map((tech, index) => (
                      <li key={`${project.id}-tech-${index}`}>{tech}</li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            )) : (
              <div className="col-span-3 text-center p-8">
                <p className="text-slate">Nenhum projeto adicional encontrado.</p>
              </div>
            )}
          </div>
          
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-highlight text-highlight hover:bg-highlight/10"
            >
              <a 
                href={`https://github.com/${GITHUB_USERNAME}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver mais no GitHub <Github size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
