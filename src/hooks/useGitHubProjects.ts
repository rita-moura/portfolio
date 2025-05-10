
import { useMemo } from "react";
import { GitHubRepo, Project } from "@/types/github";

export const useGitHubProjects = (repos: GitHubRepo[] | undefined, username: string) => {
  const projects = useMemo(() => {
    if (!repos) return [];
    
    return repos
      .filter(repo => !repo.fork && repo.description) // Filtrar forks e repos sem descrição
      .slice(0, 20) // Aumentado para 20 projetos (antes era 10)
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
          `https://opengraph.githubassets.com/1/${username}/${repo.name}` : undefined
      }));
  }, [repos, username]);

  const featuredProjects = useMemo(() => {
    return projects.filter(project => project.featured);
  }, [projects]);

  const otherProjects = useMemo(() => {
    return projects.filter(project => !project.featured);
  }, [projects]);

  return {
    projects,
    featuredProjects,
    otherProjects
  };
};

export default useGitHubProjects;
