import React from "react";

export default function OrbitRing({ dist = 10 }) {
  // Thin ring as orbit indicator
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[dist - 0.02, dist + 0.02, 256]} />
      <meshBasicMaterial color={"#3b4a5a"} transparent opacity={0.22} side={2} />
    </mesh>
  );
}
