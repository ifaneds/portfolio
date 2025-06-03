import React from "react";
import ThreeDScene from "./ThreeDBox";

export default function Three() {
  return (
    <div className="three-page">
      <h1 className="page-title">Three.js Example</h1>
      <p className="page-description">
        This is a simple example of a 3D box rendered using Three.js and React.
      </p>
      {/* Render the ThreeDScene component which contains the 3D box */}
      <ThreeDScene />
    </div>
  );
}
