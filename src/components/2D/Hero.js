import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";
import SquareTest from "../3D/SquareTest";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
  const [currentHover, setCurrentHover] = useState("none");

  return (
    <div className=" my-20 flex flex-col items-center justify-between">
   
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
      <div className=" flex flex-col items-center justify-between text-center text-4xl mx-auto space-y-4">
        <div onClick={() => setCurrentHover("top")}>test</div>
        <p>
          Hello! My name is Garrett and I{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={currentHover}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`bg-gradient-to-r ${
                currentHover === "top"
                  ? "from-blue-600 to-green-600"
                  : currentHover === "bottom"
                  ? "from-red-600 to-orange-600"
                  : currentHover === "left"
                  ? "from-purple-600 to-pink-600"
                  : currentHover === "right"
                  ? "from-yellow-600 to-teal-600"
                  : ""
              } text-transparent bg-clip-text border-2 rounded-xl border-black px-2 py-1`}
            >
              {currentHover === "top"
                ? "make components"
                : currentHover === "bottom"
                ? "write"
                : ""}
            </motion.span>
          </AnimatePresence>
        </p>
        <div onClick={() => setCurrentHover("bottom")}>test</div>
      </div>
    </div>
  );
}
