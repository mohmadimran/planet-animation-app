import React, { useEffect, useState } from "react";
import PlanetCard from "./PlanetCard";
import PlanetInfo from "./PlanetInfo";
import { PLANETS } from "../data/Planets";

export default function PlanetCarousel({ onPlanetChange }) {
  const [index, setIndex] = useState(0);

  // AUTO PLAY CAROUSEL
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % PLANETS.length;
        onPlanetChange(PLANETS[next].gradient); // send gradient to parent
        return next;
      });
    }, 10000);
    // send initial gradient
    onPlanetChange(PLANETS[0].gradient);

    return () => clearInterval(timer);
  }, []);

  // GET REAL CIRCULAR POSITION FOR EACH PLANET
  const getCircularIndex = (i) => {
    const total = PLANETS.length;
    let diff = i - index;

    // wrap right → if diff is too big
    if (diff < -total / 2) diff += total;

    // wrap left → if diff is too small
    if (diff > total / 2) diff -= total;

    return diff;
  };

  return (
    <div className="carousel-shell">
      {/* Dynamic Planet Info */}
      <PlanetInfo info={PLANETS[index]} />

      <div className="carousel">
        {PLANETS.map((planet, i) => {
          const diff = getCircularIndex(i);
          const isCenter = diff === 0;

          return (
            <>
              <div
                key={i}
                className="carousel-item"
                style={{
                  transform: `translateX(${diff * 300}px) scale(${
                    isCenter ? 1.3 : 0.7
                  })`,
                  opacity: isCenter ? 1 : 0.5,
                  transition: "2s ease-in-out",
                }}
              >
                <PlanetCard src={planet.image} isCenter={isCenter} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
