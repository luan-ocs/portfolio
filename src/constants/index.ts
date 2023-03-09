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
    date: "February 2022 - December 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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

const netflixProject = new Project(
  "Netflix Clone",
  "This is a React project that the user created to enhance their programming skills and test their abilities in React. It's a Netflix interface clone using technologies such as React, Axios, and Styled Components. The project's main objective is to replicate the main functionalities of Netflix's main interface, such as displaying movies and TV shows. By using Axios, the user was able to consume data from TheMoviedb API, while Styled Components made the interface's styling process more organized and straightforward.",
  netflixClone,
  "https://github.com/luan-ocs/netflix-react-clone"
);

const twitterProject = new Project(
  "Twitter clone",
  "This is a project that clones the Twitter interface using React, TypeScript, Styled Components, and Atomic Design. Its main goal is to enhance the user's programming skills by replicating the main functionalities of the Twitter interface. The project uses TypeScript to ensure code quality and prevent bugs, while Styled Components make it easier to manage and customize the interface's styling. The Atomic Design methodology allows for a more organized and scalable approach to component creation and management.",
  twitterClone,
  "https://github.com/luan-ocs/Twitter-UI-clone"
);

const igniteLabProject = new Project(
  "Ignite Lab",
  "This is a project created for my Rocketseat Ignite Lab where I developed a design system for React. The main objective of this project was to create a consistent and scalable design system that could be used in future React applications. The project uses Storybook to document and visualize all the design system's components, and TailwindCSS to speed up the development of styles. The icons used in the project were from the Phosphor Icons library, which offers a wide variety of high-quality icons. Through this project, the user aimed to enhance their React skills and develop a design system that could be used in future projects.",
  igniteLab,
  "https://github.com/luan-ocs/ignite-lab-design-system"
);

netflixProject.addTags([react, axios, styledComponent]);
twitterProject.addTags([react, typescriptT, styledComponent]);
igniteLabProject.addTags([react, typescriptT, tailwindcss, storybook]);

const projectsNotMapped = [netflixProject, twitterProject, igniteLabProject];

const projects = projectsNotMapped.map((project) => project.getData());

export { services, technologies, experiences, projects };
