import React from "react";
import { SectionWrapper } from "../hoc";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";
import { styles } from "../style";
import { experiences } from "../constants";
import { TextVariant } from "../utils/motion";
import clsx from "clsx";

interface ExpCardProps {
  experience: {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
}
const ExperienceCard = (props: ExpCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={props.experience.date}
      iconStyle={{ background: props.experience.iconBg }}
      icon={
        <div className="flex w-full h-full justify-center items-center">
          <img
            src={props.experience.icon}
            alt={props.experience.company_name}
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {props.experience.title}
        </h3>
        <p className="text-secondary text-[16px] font-semibold m-0">
          {props.experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {props.experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={TextVariant(0.4)}>
        <p className={clsx(styles.sectionSubText)}>O que eu tenho feito</p>
        <h2 className={clsx(styles.sectionHeadText)}>Experiencia.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
