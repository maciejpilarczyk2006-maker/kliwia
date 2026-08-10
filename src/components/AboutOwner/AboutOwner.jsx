import "./AboutOwner.css";

import ownerImage from "../../assets/images/about/owner-kliwia.jpg";
import { ownerSection } from "../../data/content";

function FeatureIcon({ index }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10Z" />
        <path d="M12 8v8" />
        <path d="M8.5 12.5 12 16l3.5-3.5" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="m4.93 4.93 2.83 2.83" />
      <path d="m16.24 16.24 2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="m4.93 19.07 2.83-2.83" />
      <path d="m16.24 7.76 2.83-2.83" />
    </svg>
  );
}

function OwnerVisual() {
  return (
    <div className="owner-visual">
      <div className="owner-soft-shape" />

      <div className="owner-image-wrapper">
        <img
          src={ownerImage}
          alt="Sylwia Dziewulak - właścicielka salonu Kliwia"
          className="owner-image"
        />
      </div>
    </div>
  );
}

function AboutOwner() {
  return (
    <section className="owner-section" id="owner">
      <div className="container owner-container">

        {/* =====================
            DESKTOP
        ====================== */}

        <div className="owner-content">
          <p className="owner-eyebrow">
            {ownerSection.eyebrow}
          </p>

          <h2 className="owner-title">
            {ownerSection.title}
          </h2>

          <div className="owner-title-line" />

          <p className="owner-intro">
            {ownerSection.intro}
          </p>

          <div className="owner-features">
            {ownerSection.features.map((feature, index) => (
              <article
                className="owner-feature"
                key={feature.id}
              >
                <div className="owner-feature-icon">
                  <FeatureIcon index={index} />
                </div>

                <div className="owner-feature-copy">
                  <h3>{feature.title}</h3>

                  <p>
                    {feature.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="owner-closing">
            {ownerSection.closing}
          </p>

          <a
            href={ownerSection.button.href}
            className="owner-button"
          >
            {ownerSection.button.label}
          </a>
        </div>

        <div className="owner-desktop-image">
          <OwnerVisual />
        </div>

        {/* =====================
            MOBILE
        ====================== */}

        <div className="owner-mobile-layout">

          <p className="owner-eyebrow owner-mobile-eyebrow">
            {ownerSection.eyebrow}
          </p>

          <OwnerVisual />

          <div className="owner-mobile-content">
            <h2 className="owner-title">
              {ownerSection.title}
            </h2>

            <div className="owner-title-line" />

            <p className="owner-intro">
              {ownerSection.intro}
            </p>

            <div className="owner-features">
              {ownerSection.features.map((feature, index) => (
                <article
                  className="owner-feature"
                  key={feature.id}
                >
                  <div className="owner-feature-icon">
                    <FeatureIcon index={index} />
                  </div>

                  <div className="owner-feature-copy">
                    <h3>{feature.title}</h3>

                    <p>
                      {feature.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="owner-closing">
              {ownerSection.closing}
            </p>

            <a
              href={ownerSection.button.href}
              className="owner-button"
            >
              {ownerSection.button.label}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutOwner;