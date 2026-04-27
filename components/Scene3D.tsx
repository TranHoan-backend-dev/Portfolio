"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <torusKnotGeometry args={[1.8, 0.6, 128, 32]} />
      <meshStandardMaterial
        color="#1f2833"
        emissive="#45A29E"
        emissiveIntensity={0.5}
        metalness={0.9}
        roughness={0.2}
        wireframe={true}
      />
    </mesh>
  );
};

const FloatingSphere = ({
  position,
  color,
  scale,
}: {
  position: [number, number, number];
  color: string;
  scale: number;
}) => {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.5;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        transparent
        color={color}
        metalness={0.5}
        opacity={0.3}
        roughness={0}
      />
    </mesh>
  );
};

const BackgroundStars = () => {
  const count = 5000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }

    return pos;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          array={positions}
          attach="attributes-position"
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial transparent color="#66FCF1" opacity={0.8} size={0.1} />
    </points>
  );
};

export const Scene3D: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full bg-brand-dark" />;
  }

  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight color="#66FCF1" intensity={1} position={[10, 10, 10]} />
        <pointLight
          color="#FFD700"
          intensity={0.5}
          position={[-10, -10, -10]}
        />

        <AnimatedShape />

        <FloatingSphere color="#66FCF1" position={[-3, 2, -2]} scale={0.5} />
        <FloatingSphere color="#FFD700" position={[-2, -2, 0]} scale={0.3} />

        <BackgroundStars />
      </Canvas>
    </div>
  );
};

export default Scene3D;
