import React from "react";
// import ProgressFill from "./ProgressFill";
import SkillCard from "./SkillCard";
import nodejslogo from "../assets/logos/nodejs.svg";
import reactjslogo from "../assets/logos/reactjs.svg";
import expressjslogo from "../assets/logos/expressjs.svg";
import mongodblogo from "../assets/logos/mongodb.svg";
import graphqllogo from "../assets/logos/graphql.svg";
import dockerlogo from "../assets/logos/docker.svg";
import kuberneteslogo from "../assets/logos/kubernetes.svg";
import mysqllogo from "../assets/logos/mysql.svg";
import i18nlogo from "../assets/logos/i18next.svg";

import htmllogo from "../assets/logos/html.svg";
import csslogo from "../assets/logos/css.svg";
import sasslogo from "../assets/logos/sass.svg";
import materiallogo from "../assets/logos/material-ui.svg";
import bootstraplogo from "../assets/logos/bootstrap.svg";
import pythonlogo from "../assets/logos/python.svg";
import mllogo from "../assets/logos/ml.svg";

function Skills() {
  const skills = [
    {
      skillLogo: reactjslogo,
      skillName: "React",
      skillPerc: 90,
      skillBackgroundColor: "rgba(97, 218, 251, .3)",
    },
    {
      skillLogo: nodejslogo,
      skillName: "Node JS",
      skillPerc: 90,
      skillBackgroundColor: "rgba(67, 133, 61, .3)",
    },
    {
      skillLogo: expressjslogo,
      skillName: "Express JS",
      skillPerc: 90,
      skillBackgroundColor: "rgba(221, 221, 221, .7)",
    },
    {
      skillLogo: mongodblogo,
      skillName: "React",
      skillPerc: 90,
      skillBackgroundColor: "rgba(19, 170, 82, .4)",
    },
    {
      skillLogo: graphqllogo,
      skillName: "Node JS",
      skillPerc: 90,
      skillBackgroundColor: "rgba(225, 0, 152, .4",
    },
    {
      skillLogo: dockerlogo,
      skillName: "Express JS",
      skillPerc: 50,
      skillBackgroundColor: "rgba(36, 150, 237, .5)",
    },
    {
      skillLogo: kuberneteslogo,
      skillName: "React",
      skillPerc: 40,
      skillBackgroundColor: "rgba(51, 113, 227, .4)",
    },
    {
      skillLogo: mysqllogo,
      skillName: "Node JS",
      skillPerc: 90,
      skillBackgroundColor: "linear-gradient(90deg, rgba(43, 93, 128, .3) 0%, rgba(233, 123, 0, .4) 100%)",
    },
    {
      skillLogo: i18nlogo,
      skillName: "Express JS",
      skillPerc: 90,
      skillBackgroundColor: "rgba(38, 166, 154, .5)",
    },
    {
      skillLogo: htmllogo,
      skillName: "Express JS",
      skillPerc: 90,
      skillBackgroundColor: "rgba(230, 81, 0, .4)",
    },
    {
      skillLogo: csslogo,
      skillName: "Express JS",
      skillPerc: 90,
      skillBackgroundColor: "rgba(2, 119, 189, .4)",
    },
    {
      skillLogo: sasslogo,
      skillName: "Express JS",
      skillPerc: 90,
      skillBackgroundColor: "rgba(191, 64, 128, .3)",
    },
    {
      skillLogo: materiallogo,
      skillName: "Express JS",
      skillPerc: 100,
      skillBackgroundColor: "rgba(41, 182, 246, .4)",
    },
    {
      skillLogo: bootstraplogo,
      skillName: "Express JS",
      skillPerc: 90,
      skillBackgroundColor: "rgba(7, 1, 53, .4)",
    },
    {
      skillLogo: pythonlogo,
      skillName: "Express JS",
      skillPerc: 90,
      skillBackgroundColor: "linear-gradient(90deg, rgba(255, 211, 67, .4) 0%, rgba(117, 168, 211, .4) 100%)",
    },
    {
      skillLogo: mllogo,
      skillName: "Express JS",
      skillPerc: 40,
      skillBackgroundColor: "linear-gradient(90deg, rgba(228, 61, 145, .4) 0%, rgba(56, 43, 115, .4) 100%)",
    },
  ];
  return (
    <div className="section skills grid">
      <p className="primary-heading" id="skills">
        SKILLS
      </p>
      <h2>Things I Can Do</h2>
      <p>The technologies I have worked on.</p>
      <div className="skills-technologies">
        {skills.map((skill) => {
          return (
            <div className="skill-container">
              <SkillCard
                percentage={skill.skillPerc}
                background={skill.skillBackgroundColor}
              >
                {skill.skillLogo}
              </SkillCard>
              {/* <Card logo={skill.skillLogo} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
