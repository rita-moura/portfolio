
import React from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/github";

interface OtherProjectsProps {
  projects: Project[];
  hasFeatured: boolean;
  githubUsername: string;
}

export const OtherProjects: React.FC<OtherProjectsProps> = ({ projects, hasFeatured, githubUsername }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-5">
        {projects.length > 0 ? projects.map(project => (
          <ProjectCard key={project.id} project={project} />
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
            href={`https://github.com/${githubUsername}?tab=repositories`} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Ver todos no GitHub <Github size={16} className="ml-2" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default OtherProjects;
