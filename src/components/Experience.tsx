import React from "react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="section-heading">
          <span className="text-highlight font-mono text-lg mr-2">
            Experiências
          </span>
        </h2>
        <div className="mt-8">
          <div className="bg-navy-light p-6 rounded-lg border border-navy-lighter shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 mb-4">
              <h3 className="font-bold text-slate-light text-xl">
                Tizza Tecnologia
              </h3>
              <time className="font-mono text-sm text-slate">
                Dezembro 2023 - Presente
              </time>
            </div>
            <div className="text-slate space-y-4">
              <p>
                Como desenvolvedora backend pleno, sou responsável por criar e manter sistemas robustos e escaláveis utilizando tecnologias como Node.js, NestJS, TypeScript, e GraphQL. Minha atuação envolve desde a arquitetura de microsserviços até a otimização de performance e automação de processos.
              </p>
              
              <div>
                <h4 className="font-semibold text-slate-light mb-2">Principais Contribuições:</h4>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Identificação e resolução de gargalos de performance e instabilidades que impactavam a experiência do usuário.</li>
                  <li>Refatoração de código legado, promovendo boas práticas e melhorando a manutenibilidade.</li>
                  <li>Automação de processos internos e otimização de consultas em bancos de dados (MongoDB e PostgreSQL).</li>
                  <li>Implementação de pipelines de CI/CD com Docker e Jenkins para agilizar o deploy e garantir a qualidade.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-light mb-2">Resultados Alcançados:</h4>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Redução significativa de erros em produção, aumentando a estabilidade dos sistemas.</li>
                  <li>Otimização do tempo de geração de relatórios críticos de 40 minutos para menos de 3 minutos.</li>
                  <li>Aumento da produtividade da equipe de desenvolvimento em aproximadamente 2 horas diárias.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-light mb-2">Competências Técnicas:</h4>
                <p>
                  <strong>Desenvolvimento de APIs:</strong> Node.js, NestJS, GraphQL, TypeScript<br />
                  <strong>Bancos de Dados:</strong> MongoDB, PostgreSQL, modelagem e otimização<br />
                  <strong>Infraestrutura e DevOps:</strong> Docker, Jenkins, CI/CD, AWS<br />
                  <strong>Qualidade e Testes:</strong> Jest, testes automatizados, code review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;