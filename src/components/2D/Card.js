/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

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
      className="my-3 mr-3 p-5 w-fit min-w-[16rem] max-w-[16rem] h-[24rem] relative overflow-hidden rounded-xl"
    >
      {video === true ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
          autoPlay
          playsInline
          loop
          muted
        >
          <source src={mediaSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (

        // TODO: Add hover effect and figure out z-index with text
        <img
          className="absolute top-0 left-0 right-0 w-full h-full object-cover  hover:scale-[1.12] transition-all duration-500 z-[-1]"
          src={mediaSource}
        />
      )}

      <div
        className={`flex flex-col justify-end h-full ${
          textBlack ? "text-black" : "text-white"
        }`}
      >
        <p className="text-xl mb-1">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
}
