// src/components/GltfModel.js
import React, { useEffect, useRef, useCallback } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// This component will load your GLB model
export function Apartment({ url, position, scale, rotation, onLoaded }) {
  // useGLTF loads the GLTF/GLB model.
  // It returns an object containing the scene, animations, cameras, etc.
  const gltf = useGLTF(process.env.PUBLIC_URL + "/3d/Apartment.glb"); // 'url' is the path to your .glb file

  // If your model has animations, use useAnimations
  const { actions, names } = useAnimations(gltf.animations, gltf.scene);

  // Use a ref to access the actual 3D object in the scene
  const modelRef = useRef();

  // Memoize the onLoaded callback to prevent unnecessary re-renders
  const handleLoaded = useCallback(() => {
    if (gltf.scene && onLoaded) {
      onLoaded(gltf.scene, gltf.animations, actions);
    }
  }, [gltf.scene, gltf.animations, actions, onLoaded]);

  // This effect runs once after the component mounts
  useEffect(() => {
    if (gltf.scene) {
      // Traverse the scene and ensure shadows are cast/received if desired
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      // Optional: Log available animations to the console to see their names
      console.log("Available animations:", names);

      // Play the first animation if it exists, or a specific named animation
      if (names.length > 0) {
        // You can play a specific animation by name, e.g., 'Crawl'
        // actions['Crawl']?.play(); // If your animation is named 'Crawl'
        // For now, let's just play the first one we find
        actions[names[0]]?.reset().play();
      }

      // Call the onLoaded callback if provided
      handleLoaded();
    }
  }, [gltf.scene, names, actions, handleLoaded]); // Simplified dependencies

  // Optional: If you need to update animation state per frame
  // This is more complex if you're driven by scroll, you'd set time directly
  useFrame((state, delta) => {
    // If you're manually playing/mixing animations, uncomment this:
    // mixerRef.current?.update(delta);
  });

  return (
    // <primitive> is used to render raw three.js objects in a React-three-fiber scene.
    <primitive
      object={gltf.scene}
      position={position}
      scale={scale}
      rotation={rotation}
      ref={modelRef}
    />
  );
}

// To prevent unnecessary re-renders of the model itself if props don't change
// export default React.memo(GltfModel);
