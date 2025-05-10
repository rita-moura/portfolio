
import { useQuery } from '@tanstack/react-query';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  fork: boolean;
  stargazers_count: number;
  language: string | null;
  created_at: string;
  updated_at: string;
}

interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export const useGitHubUser = (username: string) => {
  return useQuery({
    queryKey: ['githubUser', username],
    queryFn: async (): Promise<GitHubUser> => {
      console.log(`Fetching GitHub user: ${username}`);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub user');
      }
      return response.json();
    },
  });
};

export const useGitHubRepos = (username: string) => {
  return useQuery({
    queryKey: ['githubRepos', username],
    queryFn: async (): Promise<GitHubRepo[]> => {
      console.log(`Fetching GitHub repos for: ${username}`);
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub repositories');
      }
      return response.json();
    },
  });
};
