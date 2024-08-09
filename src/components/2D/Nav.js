import { Canvas } from "@react-three/fiber";
import FloatingHead from "../3D/FloatingHead";
import React from "react";
import { PerspectiveCamera, OrthographicCamera } from "@react-three/drei";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";


export default function Nav() {
  return (
    <div className=" w-full h-14 flex justify-between items-center px-3 sticky top-0 bg-black">
      <motion.div className=" h-14 w-14">
        <Canvas>
        <OrthographicCamera makeDefault position={[0, 0, 4]} zoom={19} />
          <ambientLight intensity={1} />
          <directionalLight position={[4, 5, 6]} intensity={1} color={"#fff"} />
          <directionalLight position={[1, 1, 1]} intensity={1} color={"#fff"} />
          <FloatingHead />
        </Canvas>
      </motion.div>
      <Bars2Icon className="text-white h-8 w-8" />
    </div>
  );
}
