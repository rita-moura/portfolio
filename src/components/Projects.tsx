
import React from "react";
import { useGitHubRepos } from "@/hooks/useGitHubData";
import useGitHubProjects from "@/hooks/useGitHubProjects";
import FeaturedProjects from "./projects/FeaturedProjects";
import OtherProjects from "./projects/OtherProjects";
import ProjectsLoading from "./projects/ProjectsLoading";
import ProjectsError from "./projects/ProjectsError";

// Nome de usuário do GitHub
const GITHUB_USERNAME = "rita-moura";

export const Projects: React.FC = () => {
  // Buscar repositórios do GitHub
  const { data: repos, isLoading, error } = useGitHubRepos(GITHUB_USERNAME);
  
  // Usar o hook personalizado para processar os projetos
  const { featuredProjects, otherProjects } = useGitHubProjects(repos, GITHUB_USERNAME);
  
  return (
    <section id="projects" className="py-24">
      <div className="container max-w-5xl">
        <h2 className="section-heading">
          <span className="text-highlight font-mono text-lg mr-2">03.</span> Projetos
        </h2>
        
        {isLoading ? (
          <ProjectsLoading />
        ) : error ? (
          <ProjectsError />
        ) : (
          <>
            <FeaturedProjects projects={featuredProjects} />
            <OtherProjects 
              projects={otherProjects} 
              hasFeatured={featuredProjects.length > 0}
              githubUsername={GITHUB_USERNAME} 
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
