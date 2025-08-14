
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
        technologies: [repo.language].filter(Boolean) as string[],
        githubUrl: repo.html_url,
        demoUrl: repo.homepage,
        featured: false, // Não usamos mais esse campo, mas mantemos para compatibilidade
        // Usar imagem do OpenGraph do GitHub para todos os projetos
        image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`
      }));
  }, [repos, username]);

  return { projects };
};

export default useGitHubProjects;