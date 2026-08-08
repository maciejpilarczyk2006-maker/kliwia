import "./About.css";

import { about } from "../../data/content";

import BotanicalDecoration from "../BotanicalDecoration/BotanicalDecoration";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-image-placeholder">
            <span>ZDJĘCIE SALONU</span>
          </div>

          <BotanicalDecoration className="about-botanical" />
        </div>

        <div className="about-content">
          <p className="section-eyebrow">
            {about.eyebrow}
          </p>

          <h2 className="section-title">
            {about.title}
          </h2>

          <div className="about-copy">
            <p>{about.description}</p>

            <p>{about.secondParagraph}</p>
          </div>

          <a
            href="#services"
            className="button button-secondary about-button"
          >
            POZNAJ ZABIEGI
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;