import React from "react";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <h1 className="hero-title">THERONIX</h1>

      <div className="stats" role="list">
        <div className="stat" role="listitem">
          <div className="label">GALAXY</div>
          <div className="value">Sombrero</div>
        </div>

        <div className="stat" role="listitem">
          <div className="label">DIAMETER</div>
          <div className="value">56,780 km</div>
        </div>

        <div className="stat" role="listitem">
          <div className="label">DAY LENGTH</div>
          <div className="value">12 Earth hours</div>
        </div>

        <div className="stat" role="listitem">
          <div className="label">AVG TEMPERATURE</div>
          <div className="value">60°C to 90°C</div>
        </div>

        <div className="stat" role="listitem">
          <div className="label">CLIMATE</div>
          <div className="value">Tropical</div>
        </div>
      </div>
    </section>
  );
}
