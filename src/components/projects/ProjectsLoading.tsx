
import React from "react";

export const ProjectsLoading: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-highlight"></div>
    </div>
  );
};

export default ProjectsLoading;
