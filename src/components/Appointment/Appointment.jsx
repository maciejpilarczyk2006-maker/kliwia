import "./Appointment.css";

import { appointment, salon } from "../../data/content";

import BotanicalDecoration from "../BotanicalDecoration/BotanicalDecoration";

function Appointment() {
  return (
    <section
      className="appointment"
      id="appointment"
    >
      <BotanicalDecoration className="appointment-botanical appointment-botanical-left" />

      <BotanicalDecoration className="appointment-botanical appointment-botanical-right" />

      <div className="container appointment-inner">
        <p className="appointment-eyebrow">
          {appointment.eyebrow}
        </p>

        <h2>
          {appointment.title}
        </h2>

        <p className="appointment-description">
          {appointment.description}
        </p>

        <a
          href={`tel:${salon.phoneHref}`}
          className="appointment-button"
        >
          {appointment.buttonLabel}
        </a>

        <a
          href={`tel:${salon.phoneHref}`}
          className="appointment-phone"
        >
          {salon.phone}
        </a>
      </div>
    </section>
  );
}

export default Appointment;