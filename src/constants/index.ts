import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  onesight,
  java,
  spring,
  postgre,
  netflixClone,
  twitterClone,
  igniteLab,
  springHibernate,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
];

const experiences = [
  {
    title: "Fullstack Node/React.js intern",
    company_name: "Onesight",
    icon: onesight,
    iconBg: "#383E56",
    date: "Fevereiro 2022 - Dezembro 2022",
    points: [
      "Desenvolvendo e mantendo web applications usando React.js, Nodejs e outras tecnologias.",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
      "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
    ],
  },
];

type Tag = {
  name: string;
  color: "blue-text-gradient" | "green-text-gradient" | "pink-text-gradient";
};

class Project {
  public name: string;
  public description: string;
  public tags: Tag[] = [];
  public image: string;
  public source_code_link: string;

  constructor(
    name: string,
    description: string,
    image: string,
    source_code_link: string
  ) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.source_code_link = source_code_link;
  }

  public addTags(tags: Tag[]): void {
    this.tags = tags;
  }

  public addTag(tag: Tag) {
    this.tags.push(tag);
  }

  public getData() {
    return {
      name: this.name,
      description: this.description,
      tags: this.tags,
      image: this.image,
      source_code_link: this.source_code_link,
    };
  }
}

const react: Tag = {
  name: "react",
  color: "blue-text-gradient",
};

const typescriptT: Tag = {
  name: "typescript",
  color: "blue-text-gradient",
};

const storybook: Tag = {
  name: "storybook",
  color: "pink-text-gradient",
};

const styledComponent: Tag = {
  name: "styled-Components",
  color: "pink-text-gradient",
};

const axios: Tag = {
  name: "Axios",
  color: "green-text-gradient",
};

const tailwindcss: Tag = {
  name: "tailwindcss",
  color: "pink-text-gradient",
};

const javaT: Tag = {
  name: "Java",
  color: "pink-text-gradient",
};

const h2T: Tag = {
  name: "H2",
  color: "green-text-gradient",
};

const springT: Tag = {
  name: "Spring Boot",
  color: "green-text-gradient",
};

const netflixProject = new Project(
  "Netflix Clone",
  "Este é um projeto React que o usuário criou para aprimorar suas habilidades de programação e testar suas habilidades em React. É um clone da interface do Netflix usando tecnologias como React, Axios e Styled Components. O principal objetivo do projeto é replicar as principais funcionalidades da interface principal do Netflix, como exibição de filmes e programas de TV. Ao usar o Axios, o usuário pode consumir dados da API TheMoviedb, enquanto os Styled Components tornam o processo de estilização da interface mais organizado e direto.",
  netflixClone,
  "https://github.com/luan-ocs/netflix-react-clone"
);

const twitterProject = new Project(
  "Twitter clone",
  "Este é um projeto que clona a interface do Twitter usando React, TypeScript, Styled Components e Atomic Design. Seu principal objetivo é aprimorar as habilidades de programação do usuário, replicando as principais funcionalidades da interface do Twitter. O projeto usa TypeScript para garantir a qualidade do código e evitar bugs, enquanto os Styled Components facilitam o gerenciamento e a personalização do estilo da interface. A metodologia Atomic Design permite uma abordagem mais organizada e escalável para a criação e gerenciamento de componentes.",
  twitterClone,
  "https://github.com/luan-ocs/Twitter-UI-clone"
);

const igniteLabProject = new Project(
  "Ignite Lab",
  "Este é um projeto criado para o meu Rocketseat Ignite Lab onde desenvolvi um sistema de design para React. O principal objetivo deste projeto era criar um sistema de design consistente e escalável que pudesse ser usado em futuras aplicações React. O projeto usa Storybook para documentar e visualizar todos os componentes do sistema de design e TailwindCSS para acelerar o desenvolvimento de estilos. Os ícones utilizados no projeto foram da biblioteca Phosphor Icons, que oferece uma grande variedade de ícones de alta qualidade. Por meio deste projeto, o usuário pretendia aprimorar suas habilidades em React e desenvolver um sistema de design que pudesse ser usado em projetos futuros.",
  igniteLab,
  "https://github.com/luan-ocs/ignite-lab-design-system"
);

const springHibernateProject = new Project(
  "Spring Hibernate",
  "Spring-hibernate é um aplicativo criado durante um curso de Java na Udemy desenvolvido pelo professor Nélio Alves. O aplicativo visa criar um projeto básico de Spring Boot implementando o modelo de domínio e estruturando camadas lógicas como recursos, serviços e repositórios. Por meio desse projeto, os usuários podem obter uma compreensão fundamental do Spring Boot e do Hibernate e aprender como criar um aplicativo Java básico usando essas tecnologias.",
  springHibernate,
  "https://github.com/luan-ocs/Spring-hibernate"
);

netflixProject.addTags([react, axios, styledComponent]);
twitterProject.addTags([react, typescriptT, styledComponent]);
igniteLabProject.addTags([react, typescriptT, tailwindcss, storybook]);
springHibernateProject.addTags([javaT, springT, h2T]);

const projectsNotMapped = [
  netflixProject,
  twitterProject,
  igniteLabProject,
  springHibernateProject,
];

const projects = projectsNotMapped.map((project) => project.getData());

export { services, technologies, experiences, projects };
