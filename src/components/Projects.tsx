
import React, { useState } from "react";
import { useGitHubRepos } from "@/hooks/useGitHubData";
import useGitHubProjects from "@/hooks/useGitHubProjects";
import FeaturedProjects from "./projects/FeaturedProjects";
import OtherProjects from "./projects/OtherProjects";
import ProjectsLoading from "./projects/ProjectsLoading";
import ProjectsError from "./projects/ProjectsError";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

// Nome de usuário do GitHub
const GITHUB_USERNAME = "rita-moura";
const PROJECTS_PER_PAGE = 9; // Número de projetos por página

export const Projects: React.FC = () => {
  // Estado para paginação
  const [currentPage, setCurrentPage] = useState(1);
  
  // Buscar repositórios do GitHub
  const { data: repos, isLoading, error } = useGitHubRepos(GITHUB_USERNAME);
  
  // Usar o hook personalizado para processar os projetos
  const { featuredProjects, otherProjects } = useGitHubProjects(repos, GITHUB_USERNAME);

  // Calcular total de páginas
  const totalPages = Math.ceil(otherProjects.length / PROJECTS_PER_PAGE);
  
  // Calcular projetos para a página atual
  const currentProjects = otherProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  // Função para lidar com mudança de página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll para o topo da seção de projetos
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  // Renderizar números de página
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
          <span className="text-highlight font-mono text-lg mr-2">Projetos</span> 
          <span className="text-slate-light">Meus Repositórios no GitHub</span>
        </h2>
        
        {isLoading ? (
          <ProjectsLoading />
        ) : error ? (
          <ProjectsError />
        ) : (
          <>
            {featuredProjects.length > 0 && (
              <>
                <h3 className="text-center text-2xl font-heading text-slate-light mb-12">
                  Projetos em Destaque
                </h3>
                <FeaturedProjects projects={featuredProjects} />
              </>
            )}
            
            <div className="mt-20">
              <h3 className="text-center text-2xl font-heading text-slate-light mb-12">
                Todos os Projetos
              </h3>
              
              <OtherProjects 
                projects={currentProjects} 
                hasFeatured={featuredProjects.length > 0}
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
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
