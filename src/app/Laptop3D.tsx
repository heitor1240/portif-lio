"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ scale }: { scale: number }) {
  const { scene } = useGLTF("/scene.gltf");
  return <primitive object={scene} scale={scale} />;
}

export default function Laptop3D() {
  const [scale, setScale] = useState(1.8);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(0.4); // Menor em mobile
      } else {
        setScale(0.7); // Padrão em desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas className="w-full h-[90vh]" camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Luz neon vindo do lado esquerdo */}
      <pointLight color="#00ffff" intensity={2} position={[-2, 1, 0]} />
      {/* Luz neon vindo do lado direito */}
      <pointLight color="#00ffff" intensity={2} position={[2, 1, 0]} />

      <Suspense fallback={null}>
        <Model scale={scale} />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={1.5}
      />
    </Canvas>
  );
}
