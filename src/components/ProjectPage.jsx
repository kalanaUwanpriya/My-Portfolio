import React from 'react';
import projects from '../data/projects';
import './ProjectPage.css';

const ProjectPage = () => {
  return (
    <section className="project-page" id="projects-page">
      <h1 className="project-page__title">Project</h1>

      <div className="project-page__list">
        {projects.map((project) => (
          <article className="project-item" id={project.id} key={project.title}>
            <div className="project-item__content">
              <h2 className="project-item__title">{project.title}</h2>
              <span className="project-item__dot">.</span>
              <p className="project-item__description">{project.description}</p>
            </div>

            <figure className="project-item__visual">
              <img src={project.image} alt={project.alt} />
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
