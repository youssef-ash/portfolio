import htmlLogo from './config/skillsLogos/html.svg';
import cssLogo from './config/skillsLogos/css.svg';
import javascriptLogo from './config/skillsLogos/javascript.svg';
import typescriptLogo from './config/skillsLogos/typescript.svg';
import reactLogo from './config/skillsLogos/react.svg';
import nodeLogoDark from './config/skillsLogos/nodejs_dark.svg';
import nodeLogoLight from './config/skillsLogos/nodejs_light.svg';
import gitLogo from './config/skillsLogos/git.svg';
import postgresqlLogo from './config/skillsLogos/postgresql.svg';
import { Link } from 'react-router-dom';

export default function About({ dark }) {
  return (
    <main className="about">
      <h2>
        About <span>Me</span>
      </h2>
      <p className="about__text">
        Hello! My name is Youssef, I'm from Egypt and I enjoy creating things on
        the internet. I began my self&#8209;learning journey in 2021 when a
        friend recommended me a program called{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://egfwd.com/"
          className="link"
        >
          Future&nbsp;Work&nbsp;is&nbsp;Digital
        </a>{' '}
        where I learned the basics of web development, and after that I've
        learned more technologies like React and Git.
      </p>
      <p className="about__text">
        And since then I've been building personal projects and learning more
        about web development, I decided to specialize in Front&#8209;End
        development and so I plan on continuing my journey and to start working
        professionally in the near future. Check out some of my work over at the{' '}
        <Link to="/projects" className="link">
          Projects page
        </Link>
        , or contact me through e&#8209;mail over at the{' '}
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
