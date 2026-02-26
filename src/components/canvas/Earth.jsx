import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { 
  OrbitControls, 
  Preload, 
  useTexture, 
  Float, 
  Sphere 
} from "@react-three/drei";
import CanvasLoader from "../Loader";

// Componente para cada icono flotante
const FloatingIcon = ({ position, texturePath, speed }) => {
  const texture = useTexture(texturePath);
  
  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <mesh position={position}>
        {/* Un plano pequeño para el logo */}
        <planeGeometry args={[1.2, 1.2]} />
        <meshBasicMaterial map={texture} transparent={true} />
      </mesh>
    </Float>
  );
};

const TechStackScene = () => {
  return (
    <group>
      {/* Esfera de energía central (Tu núcleo Azure) */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#0078d4" 
          emissive="#3399FF" 
          emissiveIntensity={0.5} 
          wireframe
        />
      </mesh>

      {/* Logos orbitando - Ajusta las rutas a tus carpetas reales */}
      <FloatingIcon position={[-2.5, 1.5, 0]} texturePath="/azure.png" speed={2} />
      <FloatingIcon position={[2.5, 1, 1]} texturePath="/microsoft365.png" speed={1.5} />
      <FloatingIcon position={[-1.5, -1.5, -1]} texturePath="/owasp.png" speed={1.8} />

    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} />
        
        <TechStackScene />
        
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;