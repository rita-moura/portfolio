
import React from "react";
import { ExternalLink, Github, Code } from "lucide-react";
import { Project } from "@/types/github";

interface FeaturedProjectProps {
  project: Project;
  index: number;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project, index }) => {
  return (
    <div 
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
  );
};

export default FeaturedProject;
