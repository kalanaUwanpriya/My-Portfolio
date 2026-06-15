import React from 'react';
import projects from '../data/projects';
import './Home.css';
import profileImg from '../assets/profile.jpg';

const Home = ({ onNavigate }) => {
  const handleNavigate = (page, section = null) => {
    if (onNavigate) {
      onNavigate(page, section);
    }
  };

  return (
    <section className="home" id="home">
      <div className="home__hero" id="hero">
        <div className="home__intro">
          <p className="home__greeting">Hello, I&apos;m</p>
          <h1 className="home__name">
            Kalana
            <br />
            Uwanpriya
          </h1>
          <p className="home__subtitle">Developer | Designer | Data Analyst</p>

          <div className="home__actions">
            <button type="button" className="home__button" onClick={() => handleNavigate('projects')}>Project</button>
            <button type="button" className="home__button" onClick={() => handleNavigate('contact')}>Get in touch</button>
            <a className="home__button" href="/kalana-uwanpriya-cv.pdf" download>
              Resume
            </a>
          </div>
        </div>

        <div className="home__image-frame">
          <div className="home__image-accent"></div>
          <img src={profileImg} alt="Kalana Uwanpriya" className="home__image" />
        </div>
      </div>

      <div className="home__divider"></div>

      <div className="home__about" id="about">
        <p className="home__about-text">
          I am an undergraduate student at SLIIT | Sri Lanka Institute of Information Technology,
          currently pursuing a BSc (Hons) in Information Technology, specializing in Information
          Technology. My academic background includes software development, UI/UX design, mobile
          application development, data analytics, networking, and project planning. I am passionate
          about building innovative digital solutions and continuously expanding my technical and
          analytical skills through academic and personal projects.
        </p>

        <div className="home__about-action">
          <button type="button" className="home__button" onClick={() => handleNavigate('about')}>More</button>
        </div>
      </div>

      <div className="home__skills-anchor" id="skills"></div>
      <div className="home__divider"></div>

      <div className="home__projects" id="projects">
        <h2 className="home__projects-title">Projects</h2>

        <div className="home__projects-grid">
          {projects.map((project) => (
            <button
              type="button"
              className="home__card home__card--featured"
              key={project.title}
              onClick={() => handleNavigate('projects', project.id)}
              aria-label={`Open ${project.title} project`}
            >
              <img className="home__card-image" src={project.image} alt={project.alt} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
