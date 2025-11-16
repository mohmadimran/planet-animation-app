import React from "react";

export default function PlanetInfo({ info }) {
  return (
    <div className="planet-info-block">
      <h1 className="planet-title">{info.name}</h1>

      <div className="info-grid">
        <div><p>GALAXY</p><h3>{info.galaxy}</h3></div>
        <div><p>DIAMETER</p><h3>{info.diameter}</h3></div>
        <div><p>DAY LENGTH</p><h3>{info.day}</h3></div>
        <div><p>AVG TEMPERATURE</p><h3>{info.temperature}</h3></div>
        <div><p>CLIMATE</p><h3>{info.climate}</h3></div>
      </div>
    </div>
  );
}
