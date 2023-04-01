import "./about.css";
import htmlLogo from "./skillsLogos/html.svg";
import cssLogo from "./skillsLogos/css.svg";
import javascriptLogo from "./skillsLogos/javascript.svg";
import typescriptLogo from "./skillsLogos/typescript.svg";
import reactLogo from "./skillsLogos/react.svg";
import nextLogoLight from "./skillsLogos/nextjs_light.svg";
import nextLogoDark from "./skillsLogos/nextjs_dark.svg";
import sassLogo from "./skillsLogos/sass.svg";
import reduxLogo from "./skillsLogos/redux.svg";
import nodeLogoLight from "./skillsLogos/nodejs_light.svg";
import nodeLogoDark from "./skillsLogos/nodejs_dark.svg";
import gitLogo from "./skillsLogos/git.svg";
import postgresqlLogo from "./skillsLogos/postgresql.svg";
import { Link } from "react-router-dom";

export default function About({ dark }) {
  return (
    <main className="about">
      <h2>
        About <span>Me</span>
      </h2>
      <p className="about__text">
        Hello! My name is Youssef, I'm from Egypt and I enjoy creating things on
        the internet. I began my self&#8209;learning journey in 2021 when I came
        across the{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://egfwd.com/"
          className="link"
        >
          Future&nbsp;Work&nbsp;is&nbsp;Digital
        </a>{" "}
        program where I learned the basics of web development, and after that
        I've learned more technologies like React, Next.js and Git.
      </p>
      <p className="about__text">
        And since then I've been building personal projects and learning more
        about web development, I decided to specialize in Front&#8209;End
        development and so I plan on continuing my journey and to start working
        professionally as a Front&#8209;End developer. Check out some of my work
        over at the{" "}
        <Link to="/projects" className="link">
          Projects page
        </Link>
        , or contact me through e&#8209;mail over at the{" "}
        <Link to="/contact" className="link">
          Contact page
        </Link>
        .
      </p>
      <h2>
        My <span>Skills</span>
      </h2>
      <div className="about__skillset">
        <div className="about__skill">
          <img src={htmlLogo} alt="HTML"></img>HTML
        </div>
        <div className="about__skill">
          <img src={cssLogo} alt="CSS"></img>CSS
        </div>
        <div className="about__skill">
          <img src={javascriptLogo} alt="JavaScript"></img>JavaScript
        </div>
        <div className="about__skill">
          <img src={typescriptLogo} alt="TypeScript"></img>TypeScript
        </div>
        <div className="about__skill">
          <img src={reactLogo} alt="React"></img>React
        </div>
        <div className="about__skill">
          <img src={dark ? nextLogoLight : nextLogoDark} alt="Next.js"></img>
          Next.js
        </div>
        <div className="about__skill">
          <img src={sassLogo} alt="Sass"></img>SASS
        </div>
        <div className="about__skill">
          <img src={reduxLogo} alt="Redux"></img>Redux
        </div>
        <div className="about__skill">
          <img src={dark ? nodeLogoLight : nodeLogoDark} alt="Node.js"></img>
          Node.js
        </div>
        <div className="about__skill">
          <img src={gitLogo} alt="Git"></img>Git
        </div>
        <div className="about__skill">
          <img src={postgresqlLogo} alt="PostgreSQL"></img>PostgreSQL
        </div>
      </div>
    </main>
  );
}
