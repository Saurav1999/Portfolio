import React from "react";
import ProgressFill from "./ProgressFill";
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
    
  return (
    <div className="section skills grid">
      <p className="primary-heading" id="skills">SKILLS</p>
      <h2>Things I Can Do</h2>
      <p>The technologies I have worked on.</p>
      <div className="skills-technologies">
        <div className="skill-container">
          <ProgressFill percentage={90} background="rgba(97, 218, 251, .3)" border="rgba(97, 218, 251, 1)">
            {reactjslogo}
          </ProgressFill>
        </div>
        <div className="skill-container">
          <ProgressFill percentage={90} background="rgba(67, 133, 61, .3)" border="rgba(51, 51, 51, 1)">
            {nodejslogo}
          </ProgressFill>
        </div>

        <div className="skill-container">
          <ProgressFill percentage={90} background="rgba(221, 221, 221, .5)" border="rgba(221, 221, 221, 1)">
            {expressjslogo}
          </ProgressFill>
        </div>
        <div className="skill-container">
          <ProgressFill percentage={90} background="rgba(19, 170, 82, .4)" border="rgba(66, 73, 79, .4)">
            {mongodblogo}
          </ProgressFill>
        </div>
        <div className="skill-container">
          <ProgressFill percentage={80} background="rgba(225, 0, 152, .4)" border="rgba(225, 0, 152, 1)">
            {graphqllogo}
          </ProgressFill>
        </div>
        <div className="skill-container">
          <ProgressFill percentage={50} background="rgba(36, 150, 237, .5)" border="rgba(36, 150, 237, 1)">
            {dockerlogo}
          </ProgressFill>
        </div>
        <div className="skill-container">
          <ProgressFill percentage={40} background="rgba(51, 113, 227, .4)" border="rgba(51, 113, 227, 1)">
            {kuberneteslogo}
          </ProgressFill>
        </div>
        <div className="skill-container">
          <ProgressFill percentage={90} background="rgba(233, 123, 0, .4)" border="rgba(43, 93, 128, 1)">
            {mysqllogo}
          </ProgressFill>
        </div>
        <div className="skill-container">
          <ProgressFill percentage={30} background="rgba(38, 166, 154, .5)" border="rgba(38, 166, 154, 1)">
            {i18nlogo}
          </ProgressFill>
        </div>
        <div className="skill-container">
          <ProgressFill percentage={80} background="rgba(230, 81, 0, .4)" border="rgba(230, 81, 0, 1)">
            {htmllogo}
          </ProgressFill>
        </div>
        <div className="skill-container">
          <ProgressFill percentage={90} background="rgba(2, 119, 189, .4)" border="rgba(2, 119, 189, 1)">
            {csslogo}
          </ProgressFill>
        </div>
        <div className="skill-container">
          <ProgressFill percentage={90} background="rgba(191, 64, 128, .3)" border="rgba(191, 64, 128, 1)">
            {sasslogo}
          </ProgressFill>
        </div>
        <div className="skill-container">
          <ProgressFill percentage={100} background="rgba(41, 182, 246, .4)" border="rgba(41, 182, 246, 1)">
            {materiallogo}
          </ProgressFill>
        </div>
        <div className="skill-container">
          <ProgressFill percentage={80} background="rgba(7, 1, 53, .4)" border="rgba(7, 1, 53, 1)">
            {bootstraplogo}
          </ProgressFill>
        </div>
        <div className="skill-container">
          <ProgressFill percentage={80} background="rgba(255, 211, 67, .5)" border="rgba(117, 168, 211, 1)">
            {pythonlogo}
          </ProgressFill>
        </div>
        <div className="skill-container">
          <ProgressFill percentage={60} background="rgba(228, 61, 145, .4)" border="rgba(56, 43, 115, .8)">
            {mllogo}
          </ProgressFill>
        </div>

      </div>
    </div>
  );
}

export default Skills;
