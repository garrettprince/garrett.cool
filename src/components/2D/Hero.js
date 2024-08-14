import React from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import SquareTest from "../3D/SquareTest";

export default function Hero() {
  return (
    <div className="h-96">
      <Canvas>
        <PresentationControls>
          <SquareTest />
        </PresentationControls>
      </Canvas>
      {/* <div className="h-full flex justify-center items-center">
        <div className="border border-black rounded-lg bg-white flex items-center">
          <input
            type="text"
            className="focus:outline-none text-lg ml-3 m-2 w-56"
          />
          <button className="border-l-black  h-full rounded-lg bg-gradient-to-r from-red-500 to-purple-600 text-white p-2">
            Subscribe
          </button>
        </div>
      </div> */}
    </div>
  );
}
