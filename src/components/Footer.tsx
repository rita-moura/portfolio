
import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-navy-dark">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a 
              href="https://github.com/rita-moura"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-highlight transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rita-moura-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-highlight transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:ritamoura520@gmail.com"
              className="text-slate hover:text-highlight transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="text-slate font-mono text-sm text-center">
            <p>Projetado & Desenvolvido por Rita Moura</p>
            <p>© {currentYear} • Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
