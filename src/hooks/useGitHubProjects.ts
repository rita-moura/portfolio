import { useMemo } from "react";
import { GitHubRepo } from "@/types/github";

export const useGitHubProjects = (
  repos: GitHubRepo[] | undefined,
  username: string
) => {
  const projects = useMemo(() => {
    if (!repos) return [];

    return repos.map((repo) => {
      // Combina os tópicos e a linguagem principal para uma lista completa de tecnologias
      const technologies = new Set<string>(repo.topics || []);
      if (repo.language) {
        technologies.add(repo.language);
      }

      return {
        id: repo.id,
        title: repo.name.replace(/-/g, " ").replace(/_/g, " "),
        description: repo.description || "Repositório sem descrição",
        technologies: Array.from(technologies),
        githubUrl: repo.html_url,
        demoUrl: repo.homepage,
        featured: false,
        image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
      };
    });
  }, [repos, username]);

  return { projects };
};

export default useGitHubProjects;