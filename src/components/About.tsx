
import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="container max-w-4xl">
        <h2 className="section-heading">
          <span className="text-highlight font-mono text-lg mr-2">Sobre Mim</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-2 space-y-4 text-slate">
            <p>
              Olá! Sou uma desenvolvedora backend apaixonada por criar sistemas eficientes
              e escaláveis. Minha jornada na programação começou há alguns anos, quando descobri
              o poder de construir soluções que resolvem problemas reais.
            </p>
            <p>
              Trabalho principalmente com tecnologias como <span className="text-highlight">Node.js</span>, <span className="text-highlight">NestJS</span> e <span className="text-highlight">Python</span>, 
              bancos de dados como <span className="text-highlight">MongoDB</span>, <span className="text-highlight">MySQL</span> e <span className="text-highlight">PostgreSQL</span>.
              Tenho experiência com <span className="text-highlight">APIs RESTful</span> e <span className="text-highlight">GraphQL</span>, além de
              implementação de soluções em ambientes de nuvem como <span className="text-highlight">AWS</span>.
              Também tenho conhecimento em conexão com APIs como GeminiAI, para adicionar IA na aplicação.
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
                src="src/images/desenvolvedora-backend.jpg"
                alt="Rita Moura backend developer"
                className="w-full h-full rounded-md transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 border-2 border-highlight rounded-md translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
