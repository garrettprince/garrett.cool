import { Canvas } from "@react-three/fiber";
import FloatingHead from "../3D/FloatingHead";
import React, { useState, useEffect, useRef } from "react";
import { PerspectiveCamera, OrthographicCamera } from "@react-three/drei";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

export default function Nav() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [hideNav, setHideNav] = useState(false);
  const [iconColor, setIconColor] = useState("black");
  const [menuOpen, setMenuOpen] = useState(false);
  const iconRef = useRef(null);
  let scrollTimeout = null;

  // Hides navigation bar when scrolling down and waiting 1.5 seconds //
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
        if (scrollTimeout) clearTimeout(scrollTimeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        scrollTimeout = setTimeout(() => {
          setHideNav(true);
        }, 1500);
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

  // TODO: Doesn't work currently
  // Change icon color based on background color //
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColor = window.getComputedStyle(
              document.body
            ).backgroundColor; // Changed to target the body's background color
            const rgb = bgColor.match(/\d+/g);
            const brightness = Math.round(
              (parseInt(rgb[0]) * 299 +
                parseInt(rgb[1]) * 587 +
                parseInt(rgb[2]) * 114) /
                1000
            );
            setIconColor(brightness > 125 ? "black" : "white");
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentIconRef = iconRef.current;
    if (currentIconRef) {
      observer.observe(currentIconRef);
    }

    return () => {
      if (currentIconRef) {
        observer.unobserve(currentIconRef);
      }
    };
  }, []);

  return (
    <motion.div
      // White navbar with shadow
      //   className={`w-full h-16 flex justify-between items-center px-3 bg-white sticky top-0 z-50 transition-all ease-in-out duration-[600ms] shadow-lg ${
      //     hideNav ? "-translate-y-full" : "translate-y-0"
      //   }`}
      className={`w-full bg-white h-16 flex justify-between items-center px-3 bg-transparent backdrop-blur-[20px] backdrop-filter border-b border-black sticky top-0 z-50 transition-all ease-in-out duration-[500ms] ${
        hideNav && !menuOpen ? "-translate-y-full" : "translate-y-0"
      } ${menuOpen ? "h-screen" : "h-16"}`}

      // Alternative glass navbar styling with white bottom border
      // className={`w-full h-16 flex justify-between items-center px-3 bg-transparent backdrop-blur-[20px] backdrop-filter border-b border-white sticky top-0 z-50 transition-all ease-in-out duration-[500ms] ${
      //   hideNav && !menuOpen ? "-translate-y-full" : "translate-y-0"
      // } ${menuOpen ? "h-screen bg-white" : "h-16"}`}
    >
      <AnimatePresence>
        <motion.div className={menuOpen ? `h-32 w-32 ` : `  h-14 w-14`}>
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
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {menuOpen ? (
          <motion.div
            key="xmark"
            initial={{ opacity: 0, rotate: 45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -45 }}
            transition={{ duration: 0.1 }}
          >
            <XMarkIcon
              onClick={() => setMenuOpen(!menuOpen)}
              ref={iconRef}
              className="h-8 w-8 cursor-pointer"
            />
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
              ref={iconRef}
              className="h-8 w-8 cursor-pointer"
              style={{ color: "black" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
