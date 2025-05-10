
import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="container max-w-4xl">
        <h2 className="section-heading">
          <span className="text-highlight font-mono text-lg mr-2">01.</span> Sobre Mim
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2 space-y-4 text-slate">
            <p>
              Olá! Sou uma desenvolvedora backend apaixonada por criar sistemas eficientes
              e escaláveis. Minha jornada na programação começou há alguns anos, quando descobri
              o poder de construir soluções que resolvem problemas reais.
            </p>
            <p>
              Trabalho principalmente com tecnologias como <span className="text-highlight">Node.js</span>, 
              <span className="text-highlight"> Python</span>, <span className="text-highlight">Java</span> e 
              bancos de dados como <span className="text-highlight">PostgreSQL</span> e <span className="text-highlight">MongoDB</span>. 
              Tenho experiência com arquitetura de microsserviços, APIs RESTful e GraphQL, além de 
              implementação de soluções em ambientes de nuvem como AWS e Google Cloud.
            </p>
            <p>
              Meu foco é sempre criar código limpo, bem documentado e de alta qualidade. 
              Acredito que boas práticas de desenvolvimento e uma arquitetura bem planejada são 
              fundamentais para o sucesso de qualquer projeto.
            </p>
            <p>
              Além do desenvolvimento, também me interesso por DevOps, testes automatizados
              e segurança de aplicações web. Estou sempre buscando aprender novas tecnologias
              e aprimorar minhas habilidades técnicas.
            </p>
          </div>
          
          <div className="relative group">
            <div className="relative rounded-md overflow-hidden border-2 border-highlight z-10">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Ana Silva"
                className="w-full grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-highlight/20 hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div className="absolute inset-0 border-2 border-highlight rounded-md translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
