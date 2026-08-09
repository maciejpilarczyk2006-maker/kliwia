import "./Footer.css";

import { navigation, socialMedia, salon, footer } from "../../data/content";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-placeholder">
              LOGO
            </div>

            <p>
              {footer.description}
            </p>
          </div>

          <nav className="footer-nav">
            <span>MENU</span>

            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}

            <a href="#appointment">
              Umów wizytę
            </a>
          </nav>

          <div className="footer-contact">
            <span>KONTAKT</span>

            <a href={`tel:${salon.phoneHref}`}>
              {salon.phone}
            </a>

            <a href={`mailto:${salon.email}`}>
              {salon.email}
            </a>

            <p>
              {salon.address.street}
              <br />
              {salon.address.city}
            </p>
          </div>

          <div className="footer-social">
            <span>SOCIAL MEDIA</span>

            <a
              href={socialMedia.instagram || "#"}
              target={socialMedia.instagram ? "_blank" : undefined}
              rel="noreferrer"
              onClick={(event) => {
                if (!socialMedia.instagram) {
                  event.preventDefault();
                }
              }}
            >
              Instagram
            </a>

            <a
              href={socialMedia.facebook || "#"}
              target={socialMedia.facebook ? "_blank" : undefined}
              rel="noreferrer"
              onClick={(event) => {
                if (!socialMedia.facebook) {
                  event.preventDefault();
                }
              }}
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Kliwia. Wszelkie prawa zastrzeżone.
          </p>

          <a href="#top" className="footer-back-to-top">
            POWRÓT NA GÓRĘ ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;