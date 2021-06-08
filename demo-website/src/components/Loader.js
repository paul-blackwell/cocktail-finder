import React from "react";
import AnimatedSVG from '../SVG/AnimatedSVG';

export default function Loader() {

  return (
    <div className="svgContainer">
        <div className="mt-4">
        <AnimatedSVG />
        </div>
      <p className="text-center text-blueGray-500 mt-4 mb-4">Loading ...</p>
    </div>
  );
}
