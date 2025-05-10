
import React from "react";

export const ProjectsLoading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-highlight mb-4"></div>
      <p className="text-slate text-lg">Carregando projetos do GitHub...</p>
    </div>
  );
};

export default ProjectsLoading;
