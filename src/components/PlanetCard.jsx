import React from "react";

export default function PlanetCard({ src, isCenter }) {
  return (
    <div
      className="planet-card"
      style={{
        transform: `scale(${isCenter ? 1 : 0.55})`,
        opacity: isCenter ? 1 : 0.4,
        transition: "0.6s",
      }}
    >
      <img src={src} alt="planet" className="planet-img" />
    </div>
  );
}
