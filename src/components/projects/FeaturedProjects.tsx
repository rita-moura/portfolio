
import React from "react";
import FeaturedProject from "./FeaturedProject";
import { Project } from "@/types/github";

interface FeaturedProjectsProps {
  projects: Project[];
}

// Este componente não está mais sendo usado, mas mantemos para referência
export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  if (projects.length === 0) return null;  

  return (
    <div className="space-y-24 mb-24">
      {projects.map((project, index) => (
        <FeaturedProject 
          key={project.id} 
          project={project} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default FeaturedProjects;
