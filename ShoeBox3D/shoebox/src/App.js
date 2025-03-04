import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Header from "./components/Header";

// Load 3D Model & Adjust Position
function Model() {
  const { scene } = useGLTF("/model.glb"); // Ensure model is inside "public/"
  return <primitive object={scene} scale={80} position={[0, -15, 0]} />; // Increased Scale & Lowered Position
}

export default function App() {
  return (
    <div className="flex flex-col bg-gray-900 text-white h-screen w-screen overflow-hidden">
      <Header />
      <div className="flex-grow w-full h-full"> {/* Full height container */}
        <Canvas 
          camera={{ 
            position: [0, 20, 50],  // Move camera up & further back
            fov: 75, 
            near: 0.1, 
            far: 2000  // Increase depth range to avoid clipping
          }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 20, 10]} intensity={2} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls enableDamping={true} />
        </Canvas>
      </div>
    </div>
  );
}
