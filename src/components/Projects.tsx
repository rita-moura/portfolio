import React, { useState, useMemo } from "react";
import { useGitHubRepos } from "@/hooks/useGitHubData";
import useGitHubProjects from "@/hooks/useGitHubProjects";
import OtherProjects from "./projects/OtherProjects";
import ProjectsLoading from "./projects/ProjectsLoading";
import ProjectsError from "./projects/ProjectsError";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const GITHUB_USERNAME = "rita-moura";
const PROJECTS_PER_PAGE = 9;

export const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Todos");

  const { data: repos, isLoading, error } = useGitHubRepos(GITHUB_USERNAME);
  const { projects } = useGitHubProjects(repos, GITHUB_USERNAME);

  const languages = useMemo(() => {
    const allLanguages = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => allLanguages.add(tech));
    });
    return ["Todos", ...Array.from(allLanguages)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedLanguage === "Todos") {
      return projects;
    }
    return projects.filter((project) =>
      project.technologies.includes(selectedLanguage)
    );
  }, [projects, selectedLanguage]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const renderPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(i);
            }}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return items;
  };

  return (
    <section id="projects" className="py-24">
      <div className="container max-w-5xl">
        <h2 className="section-heading mb-12">
          <span className="text-highlight font-mono text-lg mr-2">
            Projetos
          </span>
          <span className="text-slate-light">Meus Repositórios no GitHub</span>
        </h2>

        {isLoading ? (
          <ProjectsLoading />
        ) : error ? (
          <ProjectsError />
        ) : (
          <>
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedLanguage === lang
                      ? "bg-highlight text-white"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <OtherProjects
              projects={currentProjects}
              hasFeatured={false}
              githubUsername={GITHUB_USERNAME}
            />

            {totalPages > 1 && (
              <div className="mt-10">
                <Pagination>
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage - 1);
                          }}
                        />
                      </PaginationItem>
                    )}

                    {renderPaginationItems()}

                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(currentPage + 1);
                          }}
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;