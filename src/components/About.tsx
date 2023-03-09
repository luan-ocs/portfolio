import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, TextVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}
const ServiceCard = (props: ServiceCardProps) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * props.index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={props.icon}
            alt={props.title}
            className={"w-16 h-16 object-contain"}
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {props.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={TextVariant(0.4)}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Visão geral.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Sou um desenvolvedor fullstack habilidoso com experiência em Node.js e
        React, e uma paixão por aprender e resolver problemas. Atualmente, estou
        expandindo meu conjunto de habilidades estudando Java e Spring Boot.
        Atualmente estou estudando Sistemas de Informação pela PUC Minas e
        ganhei uma valiosa experiência trabalhando na Onesight, onde utilizei
        minha expertise em Node.js, React e MongoDB para criar soluções
        eficientes e amigáveis. Possuo conhecimento em diversas linguagens de
        programação e tecnologias, incluindo JavaScript, TypeScript, MySQL,
        PostgreSQL e Spring Boot. Como desenvolvedor, acredito em colaborar de
        perto com os clientes para entender suas necessidades e fornecer as
        melhores soluções possíveis. Meu objetivo é usar minhas habilidades e
        experiência para dar vida às suas ideias. Vamos trabalhar juntos para
        criar soluções inovadoras e eficazes que resolvam problemas do mundo
        real.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
