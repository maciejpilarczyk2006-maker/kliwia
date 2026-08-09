import "./Contact.css";

import {
  salon,
  contactSection,
  maps,
} from "../../data/content";

import DirectionsButton from "../DirectionsButton/DirectionsButton";
import BotanicalDecoration from "../BotanicalDecoration/BotanicalDecoration";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <BotanicalDecoration className="contact-botanical" />

      <div className="container">
        <div className="contact-heading">
          <p className="section-eyebrow">
            {contactSection.eyebrow}
          </p>

          <h2 className="section-title">
            {contactSection.title}
          </h2>

          <p className="section-description">
            {contactSection.description}
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-details">
            <div className="contact-item">
              <span>TELEFON</span>

              <a href={`tel:${salon.phoneHref}`}>
                {salon.phone}
              </a>
            </div>

            <div className="contact-item">
              <span>E-MAIL</span>

              <a href={`mailto:${salon.email}`}>
                {salon.email}
              </a>
            </div>

            <div className="contact-item">
              <span>ADRES</span>

              <p>{salon.address.street}</p>
              <p>{salon.address.city}</p>
            </div>

            <div className="contact-item">
              <span>GODZINY OTWARCIA</span>

              <div className="contact-hours">
                {salon.openingHours.map((item) => (
                  <div
                    className="contact-hours-row"
                    key={item.days}
                  >
                    <p>{item.days}</p>
                    <p>{item.hours}</p>
                  </div>
                ))}
              </div>
            </div>

            <DirectionsButton />
          </div>

          <div className="contact-map">
            {maps.embedUrl ? (
              <iframe
                src={maps.embedUrl}
                title="Mapa salonu Kliwia"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="contact-map-placeholder">
                <span>MAPA GOOGLE</span>

                <p>
                  Mapę podłączymy po dodaniu
                  prawdziwego adresu salonu.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;