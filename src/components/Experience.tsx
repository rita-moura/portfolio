import React from "react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container max-w-4xl">
        <h2 className="section-heading">
          <span className="text-highlight font-mono text-lg mr-2">
            Experiências
          </span>
        </h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fill-rule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 p-4 rounded border border-gray-700 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <h3 className="font-bold text-white">
                  Tizza Tecnologia
                </h3>
                <time className="font-caveat font-medium text-indigo-400">
                  Dez 2023 - Presente
                </time>
              </div>
              <p className="text-gray-400">
                Atuo como desenvolvedora backend, criando e mantendo sistemas em Nest.js, Typescript e MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;