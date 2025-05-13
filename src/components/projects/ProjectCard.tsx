
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Folder, Star } from "lucide-react";
import { Project } from "@/types/github";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="bg-navy-light border-navy hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
      <CardHeader className="pb-2">
        {project.image && (
          <AspectRatio ratio={16 / 9} className="bg-navy overflow-hidden rounded-md mb-2">
            <img 
              src={project.image} 
              alt={project.title} 
              className="object-cover w-full h-full transition-transform hover:scale-105"
            />
          </AspectRatio>
        )}
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
        <p className="text-slate line-clamp-3">{project.description}</p>
      </CardContent>
      <CardFooter>
        <ul className="flex flex-wrap gap-2 text-xs font-mono text-slate">
          {project.technologies.map((tech, index) => (
            <li key={`${project.id}-tech-${index}`} className="bg-navy px-2 py-1 rounded">
              {tech}
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
