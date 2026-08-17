import { useState } from "react";
import "./Services.css";

import {
  servicesSection,
  serviceCategories,
} from "../../data/content.js";

function Services() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (id) => {
    setOpenCategory((current) => (current === id ? null : id));
  };

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services-heading">
          <p className="section-eyebrow">
            {servicesSection.eyebrow}
          </p>

          <h2 className="section-title">
            {servicesSection.title}
          </h2>

          <p className="section-description">
            {servicesSection.description}
          </p>
        </div>

        <div className="services-accordion">
          {serviceCategories.map((category) => {
            const isOpen = openCategory === category.id;

            const isNailsCategory =
              category.id === "dlonie-i-paznokcie";

            return (
              <article
                className={`service-category ${
                  isOpen ? "service-category-open" : ""
                }`}
                key={category.id}
              >
                <button
                  type="button"
                  className="service-category-trigger"
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${category.id}`}
                >
                  <span className="service-category-number">
                    {category.number}
                  </span>

                  <div className="service-category-heading">
                    <h3>{category.name}</h3>

                    {category.description && (
                      <p>{category.description}</p>
                    )}
                  </div>

                  <span
                    className="service-category-icon"
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                  </span>
                </button>

                <div
                  id={`service-panel-${category.id}`}
                  className="service-category-panel"
                >
                  <div className="service-category-panel-inner">
                    <div className="treatments-list">
                      {category.treatments.map((treatment) => (
                        <article
                          className={`treatment-card ${
                            isNailsCategory
                              ? "treatment-card--no-image"
                              : ""
                          }`}
                          key={treatment.id}
                        >
                          {!isNailsCategory && (
<div
  className={`treatment-image ${
    treatment.imageFit === "contain"
      ? "treatment-image--contain"
      : ""
  }`}
>                              {treatment.image ? (
                                <img
                                  src={treatment.image}
                                  alt={treatment.name}
                                />
                              ) : (
                                <div className="treatment-image-placeholder">
                                  <span>
                                    ZDJĘCIE ZABIEGU
                                  </span>
                                </div>
                              )}
                            </div>
                          )}

                          <div className="treatment-content">
                            <div className="treatment-top">
                              <h4>{treatment.name}</h4>

                              {treatment.description && (
                                <p>
                                  {treatment.description}
                                </p>
                              )}
                            </div>

                            {(treatment.duration ||
                              treatment.price) && (
                              <div className="treatment-meta">
                                {treatment.duration && (
                                  <div>
                                    <span className="treatment-meta-label">
                                      CZAS
                                    </span>

                                    <strong>
                                      {treatment.duration}
                                    </strong>
                                  </div>
                                )}

                                {treatment.price && (
                                  <div>
                                    <span className="treatment-meta-label">
                                      CENA
                                    </span>

                                    <strong>
                                      {treatment.price}
                                    </strong>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;