import { Canvas } from "@react-three/fiber";
import FloatingHead from "../3D/FloatingHead";
import React, { useState, useEffect, useRef } from "react";
import { PerspectiveCamera, OrthographicCamera } from "@react-three/drei";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

export default function Nav() {
  const [hideNav, setHideNav] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const mainContainer = document.querySelector("main");
    if (!mainContainer) return;

    let lastScrollY = mainContainer.scrollTop;

    const handleScroll = () => {
      const currentScrollY = mainContainer.scrollTop;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          setHideNav(true);
        }, 1500);
      } else {
        setScrollDirection("up");
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        setHideNav(false);
      }

      lastScrollY = currentScrollY;
    };

    mainContainer.addEventListener("scroll", handleScroll);

    return () => {
      mainContainer.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <motion.div
      className={`w-full flex bg-[#F1F0EE] justify-between items-center px-3 py-1 shadow-md border-black sticky top-0 z-50 transition-all ease-in-out duration-[500ms] nav-height-transition ${
        hideNav && !menuOpen ? "-translate-y-full" : "translate-y-0"
      } ${
        menuOpen ? "h-screen bg-[#F1F0EE] absolute top-0 left-0 z-100" : "h-16"
      }`}
    >
      <AnimatePresence>
        <div className="h-14 w-14">
          <Link href="/">
            <Canvas>
              <OrthographicCamera makeDefault position={[0, 0, 4]} zoom={19} />
              <ambientLight intensity={1} />
              <directionalLight
                position={[4, 5, 6]}
                intensity={1}
                color={"#fff"}
              />
              <directionalLight
                position={[1, 1, 1]}
                intensity={1}
                color={"#fff"}
              />
              <FloatingHead menuOpen={menuOpen} />
            </Canvas>
          </Link>
        </div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {menuOpen ? (
          <motion.div
            className="flex-col h-screen flex justify-between"
            key="xmark"
          >
            <XMarkIcon
              onClick={() => setMenuOpen(!menuOpen)}
              className="h-8 w-8 cursor-pointer"
            />
            <p>test</p>
          </motion.div>
        ) : (
          <motion.div
            key="bars"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.1 }}
          >
            <Bars2Icon
              onClick={() => setMenuOpen(!menuOpen)}
              className="h-8 w-8 cursor-pointer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
