import React, { useEffect, useState } from "react";
import PlanetCard from "./PlanetCard";
import PlanetInfo from "./PlanetInfo";
import { PLANETS } from "../data/Planets";

export default function PlanetCarousel() {
  const [index, setIndex] = useState(0);

  // AUTO PLAY CAROUSEL EVERY 3 SECONDS
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PLANETS.length);
    }, 3000);
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
            <div
              key={i}
              className="carousel-item"
              style={{
                transform: `translateX(${diff * 300}px) scale(${isCenter ? 1.3 : 0.7})`,
                opacity: isCenter ? 1 : 0.5,
                transition: "0.7s cubic-bezier(.62,.1,.32,1.2)",
              }}
            >
              <PlanetCard src={planet.image} isCenter={isCenter} />
            </div>
          );
        })}
      </div>
    </div>
  );
}


// import React, { useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";

// import MainPlanet from "./scene/MainPlanet";
// import SmallPlanet from "./scene/SmallPlanet";
// import OrbitRing from "./scene/OrbitRing";

// import { PLANETS } from "../data/Planets";

// // Small orbiting planets
// const SMALLS = [
//   { name: "P-1", color: "#8be0a5", radius: 0.28, angle: 0.2, dist: 8.5 },
//   { name: "P-2", color: "#ffd36b", radius: 0.22, angle: 1.2, dist: 10 },
//   { name: "P-3", color: "#6b3bff", radius: 0.34, angle: 2.1, dist: 11.6 },
//   { name: "P-4", color: "#ff6b6b", radius: 0.24, angle: 3.3, dist: 13.2 },
//   { name: "P-5", color: "#66d1ff", radius: 0.2, angle: 4.0, dist: 14.6 },
//   { name: "P-6", color: "#f0c2ff", radius: 0.26, angle: 5.1, dist: 16.0 },
// ];

// export default function Planet3DScene() {
//   const [index, setIndex] = useState(0);

//   // ---- Auto slide every 3 seconds ----
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % PLANETS.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   // ---- Circular Index for Carousel ----
//   const getCircularIndex = (i) => {
//     const total = PLANETS.length;
//     let diff = i - index;

//     if (diff < -total / 2) diff += total;
//     if (diff > total / 2) diff -= total;

//     return diff;
//   };

//   return (
//     <div className="canvas-shell" aria-hidden={false}>
//       <Canvas camera={{ position: [0, 6, 28], fov: 40 }}>
//         <ambientLight intensity={0.35} />
//         <directionalLight position={[10, 10, 5]} intensity={0.6} />
//         <pointLight position={[-30, 30, -10]} intensity={0.5} />

//         <Stars radius={200} depth={60} count={4000} factor={4} saturation={0} fade />

//         {/* ------- MAIN PLANETS WITH CAROUSEL LOGIC ------- */}
//         {PLANETS.map((planet, i) => {
//           const diff = getCircularIndex(i);
//           const isCenter = diff === 0;

//           return (
//             <group
//               key={i}
//               position={[diff * 6, 0, 0]} // spread like a carousel
//               scale={isCenter ? 1.4 : 0.7}
//             >
//               <MainPlanet texture={planet.image} />
//             </group>
//           );
//         })}

//         {/* Small orbiting planets */}
//         {SMALLS.map((s, i) => (
//           <React.Fragment key={i}>
//             <OrbitRing dist={s.dist} />
//             <SmallPlanet {...s} />
//           </React.Fragment>
//         ))}

//         {/* Decorative planets (left & right) */}
//         <group position={[-12, 0, 0]}>
//           <mesh>
//             <sphereGeometry args={[1.2, 32, 32]} />
//             <meshStandardMaterial color={"#ff9b2f"} roughness={0.6} metalness={0.05} />
//           </mesh>
//         </group>

//         <group position={[16, 0, 0]}>
//           <mesh>
//             <sphereGeometry args={[0.7, 32, 32]} />
//             <meshStandardMaterial color={"#6b3bff"} roughness={0.6} metalness={0.05} />
//           </mesh>
//         </group>

//         <OrbitControls enablePan enableRotate enableZoom />
//       </Canvas>
//     </div>
//   );
// }
