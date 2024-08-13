import { Canvas } from "@react-three/fiber";
import FloatingHead from "../3D/FloatingHead";
import React, { useState, useEffect } from "react";
import { PerspectiveCamera, OrthographicCamera } from "@react-three/drei";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Nav() {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [hideNav, setHideNav] = useState(false);
    let scrollTimeout = null;
  
    useEffect(() => {
      let lastScrollY = window.scrollY;
  
      const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          setScrollDirection("down");
          if (scrollTimeout) clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            setHideNav(true);
          }, 1000);
        } else {
          setScrollDirection("up");
          if (scrollTimeout) clearTimeout(scrollTimeout);
          setHideNav(false);
        }
        lastScrollY = window.scrollY;
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (scrollTimeout) clearTimeout(scrollTimeout);
      };
    }, []);
  
    return (
      <div
        className={`w-full h-16 flex justify-between items-center px-3 bg-transparent backdrop-blur-[10px] backdrop-filter border-b sticky top-0 z-50 transition-all duration-[600ms] ${
          hideNav ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <motion.div className="h-14 w-14">
          <Link href="/">
            <Canvas>
              <OrthographicCamera makeDefault position={[0, 0, 4]} zoom={19} />
              <ambientLight intensity={1} />
              <directionalLight position={[4, 5, 6]} intensity={1} color={"#fff"} />
              <directionalLight position={[1, 1, 1]} intensity={1} color={"#fff"} />
              <FloatingHead />
            </Canvas>
          </Link>
        </motion.div>
        <Bars2Icon className="h-8 w-8" />
      </div>
    );
  }
