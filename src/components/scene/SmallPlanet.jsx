import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export default function SmallPlanet({ name, color = "#ffd36b", radius = 0.25, angle = 0, dist = 10 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.2;
    const x = Math.cos(t + angle) * dist;
    const z = Math.sin(t + angle) * dist;
    ref.current.position.set(x, Math.sin(t * 0.1) * 0.2 - 0.6, z);
    ref.current.rotation.y += 0.01;
  });

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial color={color} metalness={0.2} roughness={0.6} />
      </mesh>

      <Html distanceFactor={10} position={[0, radius + 0.2, 0]}>
        <div style={{ color: "#fff", fontSize: 11, pointerEvents: "none", whiteSpace: "nowrap" }}>{name}</div>
      </Html>
    </group>
  );
}
