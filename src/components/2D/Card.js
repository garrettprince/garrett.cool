/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Card({
  title,
  description,
  video,
  mediaSource,
  textBlack,
  link,
}) {
  return (
    <Link
      href={link}
      className="my-3 mr-3 p-6 w-fit min-w-[18rem] max-w-[18rem] h-[28rem] relative overflow-hidden rounded-xl group border border-black"
    >
      {video === true ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover md:hover:bg-white/10 transition-all duration-500 md:group-hover:scale-[1.10] z-[-1]"
          autoPlay
          playsInline
          loop
          muted
        >
          <source src={mediaSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          className="absolute top-0 left-0 right-0 w-full h-full object-cover transition-all duration-500 md:group-hover:scale-[1.10] z-[-1]"
          src={mediaSource}
        />
      )}

      <div
        className={`flex flex-col justify-end h-full space-y-2 ${
          textBlack ? "text-black" : "text-white"
        }`}
      >
        <div>
          <p className="text-2xl font-medium mb-">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
        <div
          className={`flex items-center justify-between ${
            textBlack ? "text-black" : "text-white"
          }`}
        >
          <div className="h-6 bg-white border-black border rounded-md text-center text-sm pt-[0.2rem] px-2">
            TUTORIAL
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="group-hover:opacity-100 group-hover:translate-x-0 opacity-0 -translate-x-5 transition-all duration-300"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
    </Link>
  );
}
