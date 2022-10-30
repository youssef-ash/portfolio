import { projectsData } from './config/projectsData';
import { FaGithub, FaGlobe } from 'react-icons/fa';

export default function Projects() {
  const projectCards = projectsData.map((project) => {
    return (
      <section className="projects__card" key={project.id}>
        <img src={project.image} alt="" className="projects__image" />
        <div className="projects__info">
          <h2 className="projects__title">{project.title}</h2>
          <p className="projects__description">{project.description}</p>
          <div className="projects__buttons__container">
            <a
              target="_blank"
              rel="noreferrer"
              href={project.githubLink}
              className="projects__button"
            >
              <FaGithub className="button__icon" />
              Code
            </a>
            <a
              target={project.title === 'Portfolio Website' ? null : '_blank'}
              rel="noreferrer"
              href={project.liveLink}
              className="projects__button"
            >
              <FaGlobe className="button__icon" />
              Live Site
            </a>
          </div>
        </div>
      </section>
    );
  });

  return (
    <main className="projects">
      <h1 className="projects__header">
        My Favourite <span>Projects</span>
      </h1>
      {projectCards}
    </main>
  );
}
