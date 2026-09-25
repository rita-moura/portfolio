// O portfólio começa sempre pela apresentação ao abrir ou recarregar.
if (window.location.hash && window.location.hash !== '#inicio') {
  window.history.replaceState(null, '', '#inicio');
  window.scrollTo(0, 0);
}

// Os contatos usam links nativos; não há interações que dependam de JavaScript.

(function(){
  var root=document.body, theme=document.getElementById('theme-toggle'), lang=document.getElementById('lang-toggle');
  if(!theme || !lang) return;
  var saved=localStorage.getItem('portfolio-theme');
  if(saved==='dark'){ root.classList.add('dark-mode'); theme.querySelector('span').innerHTML='<svg class="theme-icon moon-icon" viewBox="0 0 24 24"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>'; theme.setAttribute('aria-label','Ativar modo claro'); }
  lang.querySelector('[data-lang=pt]').classList.add('active');
  function updateTheme(){var dark=root.classList.toggle('dark-mode'); localStorage.setItem('portfolio-theme',dark?'dark':'light'); theme.querySelector('span').innerHTML=dark?'<svg class="theme-icon moon-icon" viewBox="0 0 24 24"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>':'<svg class="theme-icon sun-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/></svg>'; theme.setAttribute('aria-label',dark?'Ativar modo claro':'Ativar modo escuro');}
  theme.addEventListener('click',updateTheme);
  var ptEn = {
    'Experiência':'Experience','Projetos':'Projects','Stack':'Stack','Formação':'Education','Contato':'Contact',
    'Código, sustentabilidade & propósito':'Code, sustainability & purpose','Desenvolvedora Full-Stack Pleno':'Full-Stack Developer',
    'Do primeiro problema':'From the first problem','ao produto que faz a diferença.':'to the product that makes a difference.',
    'Explore meus projetos':'Explore my projects','Vamos conversar':'Let’s talk','IDEIA → CÓDIGO → IMPACTO':'IDEA → CODE → IMPACT',
    'AUTORRETRATO EM PROCESSO — FIO, TINTA E CÓDIGO':'SELF-PORTRAIT IN PROCESS — THREAD, PAINT & CODE',
    'Construo e mantenho aplicações de ponta a ponta, do banco de dados à interface. Trabalho com foco em performance, automação e confiabilidade: encontrar o gargalo, medir e entregar a correção em produção.':'I build and maintain end-to-end applications, from databases to interfaces. I focus on performance, automation and reliability: find the bottleneck, measure it and ship the fix.',
    'Experiência em desenvolvimento de produtos digitais e colaboração com equipes no Brasil e no exterior.':'Experience building digital products and collaborating with teams in Brazil and abroad.',
    'Rio de Janeiro, Brasil':'Rio de Janeiro, Brazil','Atuação remota ↗':'Remote work ↗','Como contribuo':'How I contribute',
    'Construir':'Build','Simplificar':'Simplify','Cuidar':'Care','Colaborar':'Collaborate',
    'Desenvolvimento de aplicações do back-end à interface.':'Application development from backend to interface.','Automação de tarefas e melhoria de processos.':'Task automation and process improvement.','Atenção à qualidade, performance e manutenção.':'Attention to quality, performance and maintenance.','Revisão de código e troca de conhecimento com o time.':'Code review and knowledge sharing with the team.',
    'Experiência':'Experience','Set':'Sep','Dez':'Dec','Presente':'Present','Remoto':'Remote','Tempo integral':'Full-time','cursando':'in progress','público':'public','Onde tenho trabalhado':'Where I have worked','Engenheira Full-Stack':'Full-Stack Engineer','Internacional · Remoto (EUA)':'International · Remote (USA)','Presente':'Present',
    'Desenvolvimento e manutenção de aplicações web em equipe internacional.':'Development and maintenance of web applications in an international team.','Colaboração no planejamento e na evolução de produtos digitais.':'Collaboration on planning and evolving digital products.','Revisão de código, testes e acompanhamento de entregas.':'Code review, testing and delivery follow-up.',
    'Projetos selecionados':'Selected projects','O que eu construí':'What I built','Projetos pessoais para explorar ideias, resolver problemas e experimentar tecnologias.':'Personal projects to explore ideas, solve problems and experiment with technology.','Projetos pessoais':'Personal projects','público':'public',
    'Plataforma com RAG e agentes para planejar refeições a partir da despensa, com motor nutricional, avaliação das respostas e observabilidade.':'A RAG and agent platform for planning meals from pantry ingredients, with a nutrition engine, response evaluation and observability.',
    'Extensão do Chrome que filtra a aba "Files changed" dos pull requests do GitHub, para revisar só o que importa.':'A Chrome extension that filters the GitHub pull request “Files changed” tab, so you can review what matters.',
    'API de gestão hoteleira':'Hotel management API','API REST que percorre os níveis do modelo de maturidade de Richardson, com documentação Swagger e testes.':'REST API covering the levels of Richardson’s maturity model, with Swagger documentation and tests.','Locadora de veículos':'Vehicle rental','Sistema de gestão de aluguel de carros, com backend em Spring Boot e':'Car rental management system, with a Spring Boot backend and',
    'Ferramentas de criação':'Creative toolkit','Com o que eu trabalho':'What I work with','Tecnologias e ferramentas que fazem parte da minha experiência.':'Technologies and tools that are part of my experience.','back-end':'backend','front-end':'frontend','dados':'data','infra e qualidade':'infrastructure & quality','também estudei':'also studied','ia':'AI','LLMs em produção':'LLMs in production','Desenvolvimento guiado por specs':'Spec-driven development',
    'Aprendizado contínuo':'Continuous learning','Estudos e certificações':'Education and certifications','Formação':'Education','cursando':'in progress','Certificações':'Certifications','Antes do código':'Before code','Como cheguei aqui':'How I got here',
    'Próxima conversa':'Next conversation','Boas ideias começam':'Good ideas begin','com um':'with a','olá.':'hello.','Vamos conversar sobre tecnologia, produtos e novos desafios.':'Let’s talk about technology, products and new challenges.','De volta ao topo ↑':'Back to top ↑','Comecei no atendimento ao cliente, em retenção e ouvidoria na Brasil Center Comunicações (2015–2017). Foi lá que aprendi a ouvir o problema antes de propor a solução.':'I started in customer service, retention and ombudsman work at Brasil Center Comunicações (2015–2017). That is where I learned to listen to the problem before proposing a solution.',
    'Depois empreendi com a Rita Moura Arte em Crochê (2021–2023), cuidando de produção, vendas e finanças. Em 2022 entrei na Trybe. Em dezembro de 2023 escrevi meu primeiro commit em produção na Tizza.':'Then I ran Rita Moura Arte em Crochê (2021–2023), managing production, sales and finances. I joined Trybe in 2022. In December 2023 I made my first production commit at Tizza.',
    'Hoje levo essa bagagem para o trabalho técnico: entender o negócio, medir o impacto e comunicar com clareza.':'Today I bring that background to technical work: understand the business, measure impact and communicate clearly.',
    'Bootcamp Ciência de Dados com Python':'Data Science with Python Bootcamp','Descubra a Nuvem AWS':'Discover the AWS Cloud','Desenvolvimento com IA #3':'AI Development #3','Comunicação e Oratória':'Communication and Public Speaking'
  };
  var enPt=Object.fromEntries(Object.entries(ptEn).map(function(pair){return [pair[1],pair[0]];}));
  function translatePage(toEnglish){
    var dict=toEnglish?ptEn:enPt;
    var walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    var node;
    while(node=walker.nextNode()){
      if(node.parentElement.closest('script,style')) continue;
      var clean=node.nodeValue.trim();
      if(dict[clean]) node.nodeValue=node.nodeValue.replace(clean,dict[clean]);
    }
    document.documentElement.lang=toEnglish?'en':'pt-BR';
    lang.querySelector('[data-lang=pt]').classList.toggle('active',!toEnglish);
    lang.querySelector('[data-lang=en]').classList.toggle('active',toEnglish);
  }
  lang.addEventListener('click',function(){ translatePage(document.documentElement.lang==='pt-BR'); });
})();
