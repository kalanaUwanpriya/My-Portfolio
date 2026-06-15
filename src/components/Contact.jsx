import React from 'react';
import './Contact.css';
import contactProfile from '../assets/contact-profile.png';

const contactItems = [
  { label: 'EMAIL', value: 'kalanauwanpriya@gmail.com', href: 'mailto:kalanauwanpriya@gmail.com' },
  { label: 'PHONE', value: '+94 76 1146 403', href: 'tel:+94761146403' },
  {
    label: 'GITHUB',
    value: 'https://github.com/kalanaUwanpriya',
    href: 'https://github.com/kalanaUwanpriya',
  },
  {
    label: 'LINKEDIN',
    value: 'https://www.linkedin.com/in/kalana-uwanpriya-550b2839a/',
    href: 'https://www.linkedin.com/in/kalana-uwanpriya-550b2839a/',
  },
  { label: 'INSTAGRAM', value: '@kalana uwanpriya' },
];

const Contact = () => {
  return (
    <section className="contact-page" id="contact-page">
      <div className="contact-page__topline">CONTACT</div>

      <div className="contact-page__intro">
        <h1 className="contact-page__title">Let&apos;s talk</h1>
        <p className="contact-page__description">
          I&apos;m open to internships, freelance projects, collaborations, and a friendly hello.
          <br />
          The fastest way to reach me is email or phone.
        </p>
      </div>

      <div className="contact-page__info">
        {contactItems.map((item) => (
          <div className="contact-page__row" key={item.label}>
            <span className="contact-page__label">{item.label}</span>
            {item.href ? (
              <a
                className="contact-page__value contact-page__value--link"
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {item.value}
              </a>
            ) : (
              <span className="contact-page__value">{item.value}</span>
            )}
          </div>
        ))}
      </div>

      <div className="contact-page__portrait-wrap">
        <img src={contactProfile} alt="Kalana Uwanpriya portrait" className="contact-page__portrait" />
      </div>
    </section>
  );
};

export default Contact;
