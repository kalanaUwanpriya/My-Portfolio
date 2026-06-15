import React from 'react';
import './AboutPage.css';

const infoItems = [
  {
    label: 'Based in',
    value: 'Kandy / Sri Lanka',
  },
  {
    label: 'Studying',
    value: 'BSc (Hons) in Information Technology',
  },
  {
    label: 'University',
    value: 'Sri Lanka Institute of Information Technology.',
  },
  {
    label: 'School Attended',
    value: 'Ranabima Royal College Kandy.',
  },
  {
    label: 'Available for',
    value: 'Internships & freelance',
  },
];

const AboutPage = () => {
  return (
    <section className="about-page" id="about-page">
      <div className="about-page__intro">
        <h1 className="about-page__title">About me</h1>

        <div className="about-page__copy">
          <p>
            I&apos;m Kalana Uwanppriya, an Information Technology undergraduate based in Sri Lanka.
            I spend most of my time learning how the web works from the components a user clicks to
            the queries that quietly run in the background.
          </p>
          <p>
            My focus right now is full-stack JavaScript: React for interfaces, Node.js and Express
            for APIs, and SQL for the data underneath. I like projects that are small enough to ship
            and useful enough to be worth shipping.
          </p>
          <p>
            Outside of coursework I tinker with personal projects, explore new tools, and try to
            write code I&apos;ll still understand a month from now.
          </p>
        </div>
      </div>

      <div className="about-page__details">
        {infoItems.map((item) => (
          <div className="about-page__detail" key={item.label}>
            <div className="about-page__label">{item.label}</div>
            <div className="about-page__value">{item.value}</div>
          </div>
        ))}
      </div>

      <a className="about-page__resume-button" href="/kalana-uwanpriya-cv.pdf" download>
        Download Resume
      </a>
    </section>
  );
};

export default AboutPage;
