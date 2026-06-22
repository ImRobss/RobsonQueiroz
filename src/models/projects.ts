import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "Agente de saude",
    description:
      "Projeto academico desenvolvido para a disciplina de Inteligencia Artificial, utilizando React e Tailwind para criar uma interface intuitiva e responsiva. O agente criado 100% em Python em um notebook no Colab, foi criado, treinado, versionado, e conecta à FastAPI utilizando do Gateway do Ngrok para gerenciar e exibir informações de treino e predição de forma eficiente.",
    stack: ["React", "Tailwind", "Python", "FastAPI", "Ngrok"],
    image: "/projects/agente.png",
    liveUrl:
      "https://drive.google.com/file/d/1yPyAeLTqd5I_dqknuG2UvaW_eIfBQfTZ/view?usp=sharing",
    repoUrl:
      "https://github.com/ImRobss/inteligencia-artificial-robson-queiroz",
    featured: true,
  },
  {
    name: "autenticação com Node.js",
    description:
      "Projeto de autenticação desenvolvido com Node.js, Express e TypeScript, utilizando JWT para gerenciamento de sessões. O sistema inclui funcionalidades de registro, login e proteção de rotas, garantindo segurança e eficiência na autenticação dos usuários.",
    stack: [
      "Node.js",
      "Node.js",
      "TypeScript",
      "Express",
      "Zod",
      "JWT",
      "Bcrypt",
      "Cookie Parser",
    ],
    repoUrl: "  https://github.com/ImRobss/autentication-node",
  },
];
