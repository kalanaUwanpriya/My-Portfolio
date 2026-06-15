import React from 'react';
import './SkillsPage.css';

const ReactIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className="svg-icon svg-icon--react">
    <circle cx="32" cy="32" r="4.5" fill="currentColor" />
    <ellipse cx="32" cy="32" rx="24" ry="9" fill="none" stroke="currentColor" strokeWidth="3" />
    <ellipse
      cx="32"
      cy="32"
      rx="24"
      ry="9"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      transform="rotate(60 32 32)"
    />
    <ellipse
      cx="32"
      cy="32"
      rx="24"
      ry="9"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      transform="rotate(120 32 32)"
    />
  </svg>
);

const SquareLabelIcon = ({ label, className }) => (
  <span className={`square-label-icon ${className || ''}`.trim()} aria-hidden="true">
    {label}
  </span>
);

const NodeIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className="svg-icon">
    <polygon
      points="32,6 52,17.5 52,46.5 32,58 12,46.5 12,17.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    />
    <text x="32" y="39" textAnchor="middle" fill="currentColor" fontSize="20" fontWeight="700">
      n
    </text>
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className="svg-icon">
    <path
      d="M17 25h28M17 32h20M17 39h28"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="49" cy="39" r="3" fill="currentColor" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className="svg-icon">
    <rect x="18" y="8" width="14" height="14" rx="7" fill="#f24e1e" />
    <rect x="18" y="22" width="14" height="14" rx="7" fill="#a259ff" />
    <rect x="18" y="36" width="14" height="14" rx="7" fill="#0acf83" />
    <rect x="32" y="8" width="14" height="14" rx="7" fill="#ff7262" />
    <rect x="32" y="22" width="14" height="14" rx="7" fill="#1abcfe" />
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className="svg-icon">
    <path
      d="M31 10c-10 0-12 6-12 11v7h20v3H15c-6 0-9 5-9 11s3 12 9 12h6v-8c0-7 6-12 13-12h11c5 0 9-4 9-9V21c0-7-6-11-13-11H31Z"
      fill="#3776ab"
    />
    <path
      d="M33 54c10 0 12-6 12-11v-7H25v-3h24c6 0 9-5 9-11s-3-12-9-12h-6v8c0 7-6 12-13 12H19c-5 0-9 4-9 9v4c0 7 6 11 13 11h10Z"
      fill="#ffd43b"
    />
    <circle cx="26" cy="18" r="2" fill="#ffffff" />
    <circle cx="38" cy="46" r="2" fill="#ffffff" />
  </svg>
);

const HexLabelIcon = ({ label, plus }) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className="svg-icon">
    <polygon
      points="32,7 51,18 51,46 32,57 13,46 13,18"
      fill="#2f74c0"
      stroke="#8fc0ff"
      strokeWidth="2.5"
    />
    <text x="32" y="38" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="700">
      {label}
    </text>
    {plus ? (
      <text x="45" y="24" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700">
        ++
      </text>
    ) : null}
  </svg>
);

const MySqlIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className="svg-icon">
    <path
      d="M15 38c6-10 13-15 21-15 7 0 11 3 14 8"
      fill="none"
      stroke="#2f9ad6"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M34 18c3 1 5 3 6 6M37 24c5 0 9 2 12 6"
      fill="none"
      stroke="#2f9ad6"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <text x="32" y="48" textAnchor="middle" fill="#2f9ad6" fontSize="12" fontWeight="700">
      MySQL
    </text>
  </svg>
);

const PostgresIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className="svg-icon">
    <path
      d="M23 42V24c0-6 4-10 9-10 7 0 12 6 12 14 0 12-7 17-16 17-3 0-5-1-7-3Z"
      fill="none"
      stroke="#4e86c5"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="35" cy="22" r="1.8" fill="#4e86c5" />
    <path
      d="M41 29c2 2 4 3 6 3"
      fill="none"
      stroke="#4e86c5"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className="svg-icon">
    <path
      d="M32 12c7 7 10 14 10 22 0 10-5 17-10 20-5-3-10-10-10-20 0-8 3-15 10-22Z"
      fill="#62bc46"
    />
    <path d="M32 10v44" fill="none" stroke="#d6ffd2" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className="svg-icon">
    <path
      d="M32 14c-10 0-18 8-18 18 0 8 5 14 12 17v-6c-4 1-5-2-5-2-1-3-3-4-3-4 2 0 3 1 4 3 2 3 6 2 8 1 0-2 1-4 2-5-6-1-12-3-12-12 0-3 1-5 3-7 0-1-1-4 1-7 0 0 3-1 8 3 2-1 6-1 8 0 5-4 8-3 8-3 2 3 1 6 1 7 2 2 3 4 3 7 0 9-6 11-12 12 2 1 2 3 2 6v7c7-3 12-9 12-17 0-10-8-18-18-18Z"
      fill="currentColor"
    />
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className="svg-icon">
    <rect x="16" y="16" width="32" height="32" rx="5" transform="rotate(45 32 32)" fill="#f05133" />
    <path
      d="M25 25v14m0-14 7 7m7 7V25"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="25" cy="25" r="3" fill="#ffffff" />
    <circle cx="32" cy="32" r="3" fill="#ffffff" />
    <circle cx="39" cy="39" r="3" fill="#ffffff" />
  </svg>
);

const PostmanIcon = () => (
  <svg viewBox="0 0 64 64" aria-hidden="true" className="svg-icon">
    <circle cx="32" cy="32" r="20" fill="#ff6c37" />
    <path d="M25 38 40 26m-6 0h6v6" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const certificates = [
  {
    title: 'MongoDB Data Modeling Path',
    description:
      'Completed a professional learning path focused on MongoDB data modeling, schema design, and best practices for building scalable and high-performance NoSQL databases.',
    image: '/skills-certificate-modeling.png',
    alt: 'MongoDB Data Modeling certificate',
  },
  {
    title: 'Advanced Schema Design Patterns',
    description:
      'Completed advanced MongoDB training focused on schema design patterns, data modeling optimization, and scalable database architecture for high-performance applications.',
    image: '/skills-certificate-advanced.png',
    alt: 'Advanced Schema Design Patterns certificate',
  },
];

const conceptTags = [
  'Object-Oriented Programming',
  'DSA',
  'System Design',
  'Computer Networks',
  'Operating Systems',
];

const growthTags = ['Communication', 'Leadership', 'Time Management', 'Problem Solving'];

const languageIcons = [
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'C', icon: <HexLabelIcon label="C" /> },
  { name: 'C++', icon: <HexLabelIcon label="C" plus /> },
];

const databaseIcons = [
  { name: 'MySQL', icon: <MySqlIcon /> },
  { name: 'PostgreSQL', icon: <PostgresIcon /> },
  { name: 'MongoDB', icon: <MongoIcon /> },
];

const collaborationIcons = [
  { name: 'GitHub', icon: <GitHubIcon /> },
  { name: 'Git', icon: <GitIcon /> },
  { name: 'Postman', icon: <PostmanIcon /> },
];

const SkillsPage = () => {
  return (
    <section className="skills-page" id="skills-page">
      <div className="skills-page__certifications">
        <div className="skills-page__certification-copy">
          {certificates.map((certificate) => (
            <article className="certificate-copy" key={certificate.title}>
              <h2 className="certificate-copy__title">{certificate.title}</h2>
              <p className="certificate-copy__text">{certificate.description}</p>
            </article>
          ))}
        </div>

        <div className="skills-page__certification-images">
          {certificates.map((certificate) => (
            <figure className="certificate-preview" key={certificate.title}>
              <img src={certificate.image} alt={certificate.alt} />
            </figure>
          ))}
        </div>
      </div>

      <p className="skills-page__proof">
        <span>Proof :- </span>
        <a
          href="https://drive.google.com/drive/folders/17WcpFb68SBEDrmb6x2-WdmZssv04lg_z?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          https://drive.google.com/drive/folders/17WcpFb68SBEDrmb6x2-WdmZssv04lg_z?usp=sharing
        </a>
      </p>

      <h1 className="skills-page__title">Skills</h1>

      <div className="skills-page__feature-grid">
        <article className="feature-card feature-card--frontend">
          <h2 className="feature-card__title">Front-End Development</h2>
          <p className="feature-card__text">
            Building engaging and user-friendly web interfaces using modern frameworks and
            technologies with expertise.
          </p>
          <div className="feature-card__brand-row feature-card__brand-row--frontend">
            <span className="mini-badge mini-badge--react" aria-label="React">
              <ReactIcon />
            </span>
            <SquareLabelIcon label="JS" className="mini-badge mini-badge--js" />
            <SquareLabelIcon label="TS" className="mini-badge mini-badge--ts" />
            <SquareLabelIcon label="5" className="mini-badge mini-badge--html" />
          </div>
        </article>

        <article className="feature-card feature-card--backend">
          <div className="feature-card__logo-row">
            <span className="circle-logo circle-logo--node" aria-label="Node.js">
              <NodeIcon />
            </span>
            <span className="circle-logo circle-logo--express" aria-label="Express">
              <ExpressIcon />
            </span>
          </div>
          <h2 className="feature-card__title">Back-End Development</h2>
          <p className="feature-card__text">
            Developing robust server-side logic and APIs to power dynamic and scalable web
            applications.
          </p>
        </article>

        <article className="feature-card feature-card--design">
          <div className="feature-card__logo-row">
            <span className="circle-logo circle-logo--figma" aria-label="Figma">
              <FigmaIcon />
            </span>
          </div>
          <h2 className="feature-card__title">UI/UX Design</h2>
          <p className="feature-card__text">
            Designing user-centric interfaces that are intuitive, visually appealing, and easy to
            navigate.
          </p>
        </article>
      </div>

      <div className="skills-page__detail-sections">
        <section className="detail-section">
          <h2 className="detail-section__title">Testing &amp; Debugging</h2>
          <p className="detail-section__text">
            Ensuring code quality and reliability through rigorous testing and debugging processes.
          </p>
          <p className="detail-section__meta">platform :- Postman</p>
        </section>

        <section className="detail-section">
          <h2 className="detail-section__title">Programming Languages</h2>
          <p className="detail-section__text">
            Proficient in problem-solving and applying programming languages to implement efficient
            data structures and algorithms.
          </p>
          <p className="detail-section__meta">
            Languages :- C, C++, Java, JavaScript, Kotlin, Python
          </p>
        </section>

        <section className="detail-section">
          <h2 className="detail-section__title">Core Computer Science Concepts</h2>
          <p className="detail-section__text">
            Demonstrating a strong foundation in core computer science principles, including
            problem-solving, system design, and efficient computing techniques.
          </p>
          <div className="tag-row">
            {conceptTags.map((tag) => (
              <span className="pill-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="detail-section">
          <h2 className="detail-section__title">Personal Development</h2>
          <p className="detail-section__text">
            Committed to continuous learning and personal growth to excel in both professional and
            collaborative environments.
          </p>
          <div className="tag-row">
            {growthTags.map((tag) => (
              <span className="pill-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="detail-section">
          <h2 className="detail-section__title">Database Management</h2>
          <p className="detail-section__text">
            Designing and managing databases to ensure secure and efficient data storage and
            retrieval.
          </p>
          <p className="detail-section__meta">Tools:- My sql, Php, mongoDB</p>
        </section>

        <section className="detail-section">
          <h2 className="detail-section__title">Version Control &amp; Collaboration</h2>
          <p className="detail-section__text">
            Effectively managing code and collaborating on projects to ensure seamless teamwork.
          </p>
        </section>
      </div>

      <div className="skills-page__icon-banks">
        <div className="icon-bank icon-bank--split">
          {languageIcons.map((icon) => (
            <span className="stack-icon" key={icon.name} aria-label={icon.name}>
              {icon.icon}
            </span>
          ))}
          {databaseIcons.map((icon) => (
            <span className="stack-icon" key={icon.name} aria-label={icon.name}>
              {icon.icon}
            </span>
          ))}
        </div>

        <div className="icon-bank icon-bank--centered">
          {collaborationIcons.map((icon) => (
            <span className="stack-icon" key={icon.name} aria-label={icon.name}>
              {icon.icon}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
