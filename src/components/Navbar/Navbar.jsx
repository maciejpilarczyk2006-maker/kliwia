import { useState } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

import "./Navbar.css";
import { navigation, socialMedia } from "../../data/content";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-logo" onClick={closeMenu}>
          <span className="navbar-logo-placeholder">
            LOGO
          </span>
        </a>

        <nav className="navbar-desktop-nav">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <div className="navbar-socials">
            <a
              href={socialMedia.instagram || "#"}
              target={socialMedia.instagram ? "_blank" : undefined}
              rel="noreferrer"
              aria-label="Instagram"
              onClick={(event) => {
                if (!socialMedia.instagram) {
                  event.preventDefault();
                }
              }}
            >
              <FaInstagram />
            </a>

            <a
              href={socialMedia.facebook || "#"}
              target={socialMedia.facebook ? "_blank" : undefined}
              rel="noreferrer"
              aria-label="Facebook"
              onClick={(event) => {
                if (!socialMedia.facebook) {
                  event.preventDefault();
                }
              }}
            >
              <FaFacebookF />
            </a>
          </div>

          <a
            href="#appointment"
            className="navbar-appointment-button"
          >
            UMÓW WIZYTĘ
          </a>

          <button
            type="button"
            className="navbar-menu-button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <div className="mobile-menu-content container">
          <nav className="mobile-menu-nav">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mobile-menu-bottom">
            <div className="mobile-socials">
              <a
                href={socialMedia.instagram || "#"}
                target={socialMedia.instagram ? "_blank" : undefined}
                rel="noreferrer"
                onClick={(event) => {
                  if (!socialMedia.instagram) {
                    event.preventDefault();
                  }

                  closeMenu();
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

                  closeMenu();
                }}
              >
                Facebook
              </a>
            </div>

            <a
              href="#appointment"
              className="button button-primary mobile-appointment-button"
              onClick={closeMenu}
            >
              UMÓW WIZYTĘ
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;