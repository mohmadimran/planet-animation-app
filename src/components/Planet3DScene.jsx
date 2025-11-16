import React from "react";
// Canvas — Creates a 3D WebGL scene inside React (like <canvas> but smarter).
import { Canvas } from "@react-three/fiber";
// OrbitControls — Allows the user to rotate, zoom, and pan the camera using the mouse.
// Stars — Pre-made star background from drei.
import { OrbitControls, Stars } from "@react-three/drei";

// import MainPlanet from "./scene/MainPlanet";
import SmallPlanet from "./scene/SmallPlanet";
// OrbitRing — Visual circular ring showing each planet’s orbit.


import OrbitRing from "./scene/OrbitRing";

// import React, { useEffect, useState } from "react";




// Each object describes one small orbiting planet.
const SMALLS = [
  { name: "P-1", color: "#8be0a5", radius: 0.28, angle: 0.2, dist: 8.5 },
  { name: "P-2", color: "#ffd36b", radius: 0.22, angle: 1.2, dist: 10 },
  { name: "P-3", color: "#6b3bff", radius: 0.34, angle: 2.1, dist: 11.6 },
  { name: "P-4", color: "#ff6b6b", radius: 0.24, angle: 3.3, dist: 13.2 },
  { name: "P-5", color: "#66d1ff", radius: 0.2, angle: 4.0, dist: 14.6 },
  { name: "P-6", color: "#f0c2ff", radius: 0.26, angle: 5.1, dist: 16.0 },
];

export default function Planet3DScene() {
    // const [index, setIndex] = useState(0);
    //  // AUTO PLAY CAROUSEL EVERY 3 SECONDS
    //   useEffect(() => {
    //     const timer = setInterval(() => {
    //       setIndex((prev) => (prev + 1) % PLANETS.length);
    //     }, 3000);
    //     return () => clearInterval(timer);
    //   }, []);
    
      // GET REAL CIRCULAR POSITION FOR EACH PLANET
      // const getCircularIndex = (i) => {
      //   const total = PLANETS.length;
      //   let diff = i - index;
    
      //   // wrap right → if diff is too big
      //   if (diff < -total / 2) diff += total;
    
      //   // wrap left → if diff is too small
      //   if (diff > total / 2) diff -= total;
    
      //   return diff;
      // };
    
  
  return (
    <div className="canvas-shell" aria-hidden={false}>
      <Canvas camera={{ position: [0, 6, 28], fov: 40 }}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[10, 10, 5]} intensity={0.6} />
        <pointLight position={[-30, 30, -10]} intensity={0.5} />

        <Stars radius={200} depth={60} count={4000} factor={4} saturation={0} fade />

        {/* <MainPlanet /> */}

        {SMALLS.map((s, i) => (
          <React.Fragment key={i}>
            <OrbitRing dist={s.dist} />
            <SmallPlanet {...s} />
          </React.Fragment>
        ))}

        {/* Accent planets at sides */}
        <group position={[-12, 0, 0]}>
          <mesh>
            <sphereGeometry args={[1.2, 32, 32]} />
            <meshStandardMaterial color={"#ff9b2f"} roughness={0.6} metalness={0.05} />
          </mesh>
        </group>

        <group position={[16, 0, 0]}>
          <mesh>
            <sphereGeometry args={[0.7, 32, 32]} />
            <meshStandardMaterial color={"#6b3bff"} roughness={0.6} metalness={0.05} />
          </mesh>
        </group>

        <OrbitControls enablePan enableRotate enableZoom />
      </Canvas>
    </div>
  );
}
