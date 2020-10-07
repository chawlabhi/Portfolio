import React from "react";
import "../css/Main.css";
import Particles from "react-particles-js";

import Fade from "react-reveal/Fade";

import {
  FaJava,
  FaHtml5,
  FaBootstrap,
  FaDocker,
  FaJenkins,
} from "react-icons/fa";
import { SiMysql, SiLinux } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <>
      <Particles />
      <div class="header">
        <div class="header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main name"> Abhishek Chawla</span>
            <span class="heading-primary--sub">Software Engineer</span>
          </h1>
        </div>
      </div>
      <Fade bottom>
        <div className="skills">
          <div className="container">
            <h1 class="heading-primary">
              <span class="heading-primary--main skills_heading"> Skills</span>
            </h1>
            <div className="skills-main">
              <div>
                <FaJava size={100} />
              </div>
              <div>
                <SiMysql size={100} />
              </div>
              <div>
                <FaHtml5 size={100} />
              </div>
              <div>
                <SiLinux size={100} />
              </div>
              <div>
                <FaBootstrap size={100} />
              </div>
              <div>
                <FaJenkins size={100} />
              </div>
              <div>
                <FaDocker size={100} />
              </div>
            </div>
          </div>
        </div>
      </Fade>

      <div class="wrapper">
        <Fade bottom>
          <div id="experience">
            <h1 class="heading-primary">
              <span class="heading-primary--main exp_end_heading">
                Experience And Education
              </span>
            </h1>
          </div>
        </Fade>
        <div id="two">
          <h1 class="heading-primary">
            <span class="heading-secondary--main"> Experience</span>
            <span class="heading-tertiary--main">Wipro</span>
          </h1>
          <p>
            • Worked on enhancing the existing fraud detection mechanism by
            building the user defined scoring rules{" "}
          </p>
          <p>
            • Worked as the core team member and was responsible for the
            delivery of product with quality
          </p>
          <p>• Coordinated with business for requirement gathering </p>
          <p>
            • Involved in End-to-End delivery of the project • Written quality
            code and unit test cases to test the application and ensuring zero
            defect leakage in code
          </p>
          <p>
            • Implemented ITIL process for implementation readiness • Became a
            single point of contact for raising changes in ServiceNow
          </p>
          <p>
            • Experience of working in Banking and Finance segment with a global
            payments organization
          </p>
          <p>• Experienced in production implementations.</p>
          <p>• Knowledge in Java, Restful API & Micro-services </p>
          <p>
            • Knowledge of tools and frameworks such as Eclipse, Urban code,
            GIT, Maven, Jenkins and SQL Developer
          </p>
          <p>
            • Knowledge in Web development, Oracle SQL and UNIX/LINUX Shell
            scripting
          </p>
          <p>
            • Knowledge in creation of fraud detection rules using Actimize tool
          </p>
          <p>• Worked extensively on agile tools such as JIRA and Confluence</p>
          <p>• Experienced in ITIL tools – ServiceNow</p>
          &nbsp;
          <h1 class="heading-primary">
            <span class="heading-secondary--main"> Education</span>
            <span class="heading-tertiary--main">
              Dehradun Institute of Technology
            </span>
          </h1>
          <p>• Bachelors in Computer Science</p>
        </div>
      </div>
      <Fade bottom>
        <div className="awards">
          <div className="container">
            <h1 class="heading-primary">
              <span class="heading-primary--main awards_heading"> Awards</span>
            </h1>
            <div className="awards-content">
              <p>
                • Received CCTM Star of the Month award for the significant
                contribution to the platform for the month of January'19{" "}
              </p>
              <p>
                • Received Inspiring Performance for the quality of deliverable
                as a part of Small Change Team and the improvements made for
                batches further benefiting the platform
              </p>
              <p>
                • Received Victory League award for contribution to CCTM
                Application Team and the transition from NFT team to Application
                Team
              </p>
              <p>
                • Received Inspiring Performance award for creating AAE Splunk
                Dashboard in order to monitor performance of AAE flows during
                implementation.
              </p>
            </div>
          </div>
        </div>
      </Fade>
      <div className="contact">
        <div class="contact__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main contact_heading">
              {" "}
              Contact Me
            </span>

            <div className="socialIcons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/abhishek-chawla-0a9440a5"
              >
                <FaLinkedinIn className="linkedin" size={30} />
              </a>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Main;
/*
<a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/12oaxAQ3AXpsa4hTwR51qgm-OyexltNth/view?usp=sharing"
              class="btn btn--white btn--animated"
            >
              Resume
            </a>
*/
