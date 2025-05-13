
import { useMemo } from "react";
import { GitHubRepo, Project } from "@/types/github";

export const useGitHubProjects = (repos: GitHubRepo[] | undefined, username: string) => {
  const projects = useMemo(() => {
    if (!repos) return [];
    
    return repos
      .filter(repo => !repo.fork) // Mostrar todos os repositórios não fork, mesmo sem descrição
      .map(repo => ({
        id: repo.id,
        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
        description: repo.description || "Repositório sem descrição",
        technologies: repo.topics.length > 0 ? repo.topics : [repo.language].filter(Boolean) as string[],
        githubUrl: repo.html_url,
        demoUrl: repo.homepage,
        featured: Boolean(repo.stargazers_count > 0 || repo.homepage),
        // Usar imagem do OpenGraph do GitHub para todos os projetos
        image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`
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
