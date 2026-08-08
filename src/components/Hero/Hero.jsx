import "./Hero.css";

import heroImage from "../../assets/images/hero/hero-kliwia.jpg";

import { hero } from "../../data/content";

import BotanicalDecoration from "../BotanicalDecoration/BotanicalDecoration";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="section-eyebrow">{hero.eyebrow}</p>

          <h1 id="hero-title" className="hero-title">
            {hero.title}
          </h1>

          <p className="hero-description">
            {hero.description}
          </p>

          <div className="hero-actions">
            <a
              href={hero.primaryButton.href}
              className="button button-primary"
            >
              {hero.primaryButton.label}
            </a>

            <a
              href={hero.secondaryButton.href}
              className="button button-secondary"
            >
              {hero.secondaryButton.label}
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src={heroImage}
              alt="Salon kosmetyczny Kliwia"
              className="hero-image"
            />

            <div className="hero-line hero-line-one" />
            <div className="hero-line hero-line-two" />
          </div>

          <BotanicalDecoration className="hero-botanical" />
        </div>
      </div>
    </section>
  );
}

export default Hero;