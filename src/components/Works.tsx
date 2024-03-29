import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, TextVariant } from "../utils/motion";
import clsx from "clsx";

interface ProjectCardProps {
  name: string;
  index: number;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
}
const ProjectCard = (props: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", props.index * 0.5, 0.75)}>
      <Tilt
        transitionSpeed={450}
        scale={1}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={props.image}
            alt={props.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <a
              href={props.source_code_link}
              target="_blank"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{props.name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{props.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {props.tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={TextVariant(0.4)}>
        <p className={clsx(styles.sectionSubText)}>Meu Trabalho</p>
        <h2 className={clsx(styles.sectionHeadText)}>Projetos.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Os projetos a seguir mostram minhas habilidades e experiência através
          exemplos do mundo real do meu trabalho. Cada projeto é brevemente
          descrito com links para repositórios de código e demonstrações ao vivo
          nele. Isso reflete o meu capacidade de resolver problemas complexos,
          trabalhar com diferentes tecnologias, e gerenciar projetos de forma
          eficaz.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${project.name}-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
