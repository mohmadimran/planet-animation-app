import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import SmallPlanet from "./scene/SmallPlanet";
import OrbitRing from "./scene/OrbitRing";

const SMALLS = [
  {color: "#8be0a5", radius: 0.28, angle: 0.2, dist: 8.5 },
  {color: "#ffd36b", radius: 0.22, angle: 1.2, dist: 10 },
  {color: "#6b3bff", radius: 0.34, angle: 2.1, dist: 11.6 },
  {color: "#ff6b6b", radius: 0.24, angle: 3.3, dist: 13.2 },
  {color: "#66d1ff", radius: 0.2, angle: 4.0, dist: 14.6 },
  {color: "#f0c2ff", radius: 0.26, angle: 5.1, dist: 16.0 },
];

export default function Planet3DScene() {
    
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
