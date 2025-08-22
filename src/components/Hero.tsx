
import React from "react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useGitHubUser } from "@/hooks/useGitHubData";

// Nome de usuário do GitHub
const GITHUB_USERNAME = "rita-moura";

export const Hero: React.FC = () => {
  const { data: gitHubUser } = useGitHubUser(GITHUB_USERNAME);

  // Determinar o nome a ser exibido (do GitHub se disponível, ou o fallback)
  const displayName = gitHubUser?.name || "Rita Moura";
  
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container max-w-4xl">
        <div className="font-mono text-highlight mb-5">Olá, meu nome é</div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-light mb-4">
          {displayName}.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate mb-6">
          Desenvolvo soluções robustas para o seu projeto.
        </h2>
        <p className="text-slate max-w-xl text-lg mb-10">
          {gitHubUser?.bio || 
           "Sou uma desenvolvedora especializada em backend com experiência em arquitetura de sistemas, APIs RESTful, e microsserviços. Focada em construir soluções escaláveis e de alta performance para desafios complexos."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button 
            asChild
            size="lg" 
            className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10"
          >
            <a href="#projects">Ver Projetos</a>
          </Button>
          <Button 
            asChild
            size="lg" 
            className="bg-highlight text-navy hover:bg-highlight/90"
          >
            <a href="#contact">Entre em Contato</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-slate text-slate hover:border-highlight hover:text-highlight"
          >
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" /> GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;