// src/components/ThreeDScene.js (or whatever you named it)
import React, { useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei"; // Add OrbitControls for easy camera movement
import { Apartment } from "./Apartment"; // Import your new GLTF model component

export default function ThreeDScene() {
  const buildingRef = useRef();
  const creatureRef = useRef();
  const actionsRef = useRef({}); // To store animation actions from the creature

  // Callback when creature model is loaded
  const handleCreatureLoaded = useCallback((scene, animations, actions) => {
    actionsRef.current = actions; // Store the actions for later use
    console.log("Creature loaded! Available animations:", Object.keys(actions));
  }, []);

  return (
    <Canvas
      style={{
        height: "800px", // Make it taller to accommodate scrolling
        width: "100%",
        backgroundColor: "#1a1a1a",
        borderRadius: "8px",
        margin: "20px 0",
        zIndex: 1, // Ensure canvas is below any HTML overlays for windows
        position: "relative", // For positioning HTML content relative to it
      }}
      camera={{ position: [0, 5, 10], fov: 75 }} // Adjust camera for building view
      shadows // Enable shadows for more realism
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />{" "}
      {/* Stronger light for shadows */}
      {/* Environment for realistic lighting and reflections (optional) */}
      <Environment preset="city" background />{" "}
      {/* 'city' is a good preset for buildings */}
      {/* OrbitControls for development: allows you to move the camera around with mouse */}
      {/* Remove or disable this in production if you want a fixed camera */}
      <OrbitControls />
      {/* Your 3D Building Model */}
      <Apartment
        url="/3d/Apartment.glb" // <<< CHANGE THIS to your building's path
        position={[0, 0, 0]} // Adjust position as needed
        scale={[1, 1, 1]} // Adjust scale as needed
        rotation={[0, 0, 0]} // Adjust rotation as needed
        ref={buildingRef} // Assign ref if you need to access it
      />
      {/* Your 3D Creature Model */}
      <Apartment
        url="/models/your_creature_model.glb" // <<< CHANGE THIS to your creature's path
        position={[0, 5, 0]} // Initial position at top of building
        scale={[0.1, 0.1, 0.1]} // Adjust scale for your creature
        rotation={[0, Math.PI, 0]} // Adjust rotation (e.g., to face the camera/wall)
        onLoaded={handleCreatureLoaded}
        ref={creatureRef} // Assign ref if you need to access it
      />
      {/* You can add a floor or ground plane if needed */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.01, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#4a4a4a" />
      </mesh>
    </Canvas>
  );
}
