import "./SafetyQuality.css";

import { safetyQuality } from "../../data/content.js";

function SafetyQuality() {
  return (
    <section
      className="safety-quality section"
      id="safety"
    >
      <div className="container">
        <div className="safety-quality-header">
          <div>
            <p className="section-eyebrow">
              {safetyQuality.eyebrow}
            </p>

            <h2 className="section-title safety-quality-title">
              {safetyQuality.title}
            </h2>
          </div>

          <p className="safety-quality-intro">
            {safetyQuality.description}
          </p>
        </div>

        <div className="safety-quality-grid">
          {safetyQuality.items.map((item) => (
            <article
              className="safety-quality-card"
              key={item.id}
            >
             <div
  className={`safety-quality-image ${
    item.imageFit === "contain"
      ? "safety-quality-image--contain"
      : ""
  }`}
>
  {item.image ? (
    <img
      src={item.image}
      alt={item.imageAlt || item.title}
    />
  ) : (
                  <div className="safety-quality-placeholder">
                    <span>
                      {item.placeholder || "ZDJĘCIE"}
                    </span>
                  </div>
                )}

                <span className="safety-quality-number">
                  {item.number}
                </span>
              </div>

              <div className="safety-quality-content">
                <p className="safety-quality-label">
                  {item.label}
                </p>

                <h3>
                  {item.title}
                </h3>

                <p className="safety-quality-description">
                  {item.description}
                </p>

                {item.points?.length > 0 && (
                  <ul className="safety-quality-points">
                    {item.points.map((point) => (
                      <li key={point}>
                        <span aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>

        {safetyQuality.bottomText && (
          <div className="safety-quality-bottom">
            <span className="safety-quality-bottom-line" />

            <p>
              {safetyQuality.bottomText}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default SafetyQuality;