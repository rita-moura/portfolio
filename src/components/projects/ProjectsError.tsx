
import React from "react";

export const ProjectsError: React.FC = () => {
  return (
    <div className="bg-navy-light p-6 rounded-lg shadow-xl my-8">
      <p className="text-red-400">Não foi possível carregar os projetos do GitHub. Por favor, tente novamente mais tarde.</p>
    </div>
  );
};

export default ProjectsError;
