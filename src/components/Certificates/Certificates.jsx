import "./Certificates.css";

import { certificatesSection } from "../../data/content";

function Certificates() {
  return (
    <section className="certificates-section section" id="certificates">
      <div className="container">
        <div className="certificates-heading">
          <p className="section-eyebrow">
            {certificatesSection.eyebrow}
          </p>

          <h2 className="section-title">
            {certificatesSection.title}
          </h2>

          <p className="section-description">
            {certificatesSection.description}
          </p>
        </div>

        <div className="certificates-grid">
          {certificatesSection.certificates.map((certificate) => (
            <article
              className="certificate-card"
              key={certificate.id}
            >
              <div className="certificate-image">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                />
              </div>

              <div className="certificate-content">
                <div className="certificate-top">
                  <span className="certificate-year">
                    {certificate.year}
                  </span>

                  <h3>
                    {certificate.title}
                  </h3>
                </div>

                <p>
                  {certificate.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;