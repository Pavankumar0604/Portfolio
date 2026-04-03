import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import React, { Suspense, useRef, useState } from "react";
import * as THREE from "three";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const MovingRoom = ({ isMobile }) => {
  const roomRef = useRef();

  useFrame((state) => {
    if (roomRef.current) {
      // Subtle auto-rotation - maintains a dynamic but stable feel
      const time = state.clock.getElapsedTime();

      // Mouse movement interaction DISABLED as per user request to keep the angle static
      // roomRef.current.rotation.y = -Math.PI / 4; // Stable initial angle

      // Floating effect - Stable and consistent
      roomRef.current.position.y = -3.5 + Math.sin(time * 0.8) * 0.15;
    }
  });

  return (
    <group
      ref={roomRef}
      scale={isMobile ? 0.8 : 1.15}
      position={[0, -3.5, 0]}
      rotation={[0, -Math.PI / 4, 0]}
    >
      <Room />
    </group>
  );
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      style={{ pointerEvents: 'auto' }} // Ensure canvas can receive mouse for rotation
    >
      <ambientLight intensity={0.9} color="#fffbeb" />

      <OrbitControls
        enablePan={false}
        enableZoom={false} // Completely disable zoom on scroll
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <MovingRoom isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
