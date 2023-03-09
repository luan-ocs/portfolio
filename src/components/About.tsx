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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled fullstack developer with experience in Node.js and React,
        and a passion for learning and problem-solving. I am currently expanding
        my skillset by studying Java and Spring Boot. I currenly graduating in
        System Information from PUC Minas and have gained valuable experience
        working for Onesight, where I utilized my expertise in Node.js, React,
        and MongoDB to create efficient and user-friendly solutions. I have
        knowledge in various programming languages and technologies, including
        JavaScript, TypeScript, MySQL, PostgreSQL, and Spring Boot. As a
        developer, I believe in collaborating closely with clients to understand
        their needs and provide them with the best possible solutions. My goal
        is to use my skills and expertise to bring your ideas to life. Let's
        work together to create innovative and effective solutions that solve
        real-world problems.
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
