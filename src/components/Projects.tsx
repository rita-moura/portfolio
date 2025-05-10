
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  image?: string;
}

const projects: Project[] = [
  {
    title: "API de Gerenciamento de Usuários",
    description: "Uma API RESTful completa para gerenciamento de usuários com autenticação JWT, perfis de acesso e integração com banco de dados PostgreSQL.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Docker"],
    githubUrl: "https://github.com/username/user-management-api",
    featured: true,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sistema de Processamento de Eventos",
    description: "Arquitetura de microsserviços baseada em eventos usando Apache Kafka para processamento de transações em tempo real.",
    technologies: ["Python", "Kafka", "MongoDB", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/username/event-processing-system",
    featured: true,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "CLI de Automação DevOps",
    description: "Ferramenta de linha de comando para automação de tarefas comuns de DevOps, como deploy, monitoramento e backup.",
    technologies: ["Node.js", "Docker", "AWS SDK", "Shell Script"],
    githubUrl: "https://github.com/username/devops-cli",
    featured: true,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Biblioteca de Cache Distribuído",
    description: "Uma biblioteca para implementação de cache distribuído com suporte a múltiplos provedores como Redis e Memcached.",
    technologies: ["Java", "Redis", "Memcached", "Hazelcast"],
    githubUrl: "https://github.com/username/distributed-cache",
    featured: false
  },
  {
    title: "API GraphQL para Blog",
    description: "API GraphQL para um sistema de blog com recursos de postagem, comentários e autenticação.",
    technologies: ["Node.js", "GraphQL", "MongoDB", "JWT"],
    githubUrl: "https://github.com/username/graphql-blog-api",
    featured: false
  },
  {
    title: "Microserviço de Notificações",
    description: "Serviço responsável pelo envio de notificações via e-mail, SMS e push para aplicações móveis.",
    technologies: ["Python", "RabbitMQ", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/username/notification-service",
    featured: false
  }
];

export const Projects: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  
  return (
    <section id="projects" className="py-24">
      <div className="container max-w-5xl">
        <h2 className="section-heading">
          <span className="text-highlight font-mono text-lg mr-2">03.</span> Projetos
        </h2>
        
        {/* Projetos em destaque */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid md:grid-cols-12 gap-6 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-1' : 'md:order-0'}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-highlight/20 rounded-lg group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="rounded-lg w-full h-[300px] object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
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
        
        {/* Outros projetos */}
        <div>
          <h3 className="text-center text-2xl font-heading text-slate-light mb-12">
            Outros Projetos
          </h3>
          
          <div className="grid md:grid-cols-3 gap-5">
            {otherProjects.map(project => (
              <Card key={project.title} className="bg-navy-light border-navy hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
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
                    {project.technologies.map(tech => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-highlight text-highlight hover:bg-highlight/10"
            >
              <a 
                href="https://github.com/username" 
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
