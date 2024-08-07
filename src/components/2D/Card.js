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
  link
}) {
  return (
    <Link href={link} className="my-3 mr-3 p-4 w-fit min-w-[16rem] h-[22rem] relative overflow-hidden rounded-md">
      {video === true ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
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
          className="absolute top-0 left-0 right-0 w-full h-full object-cover z-[-1]"
          src={mediaSource}
        />
      )}

      <div
        className={`flex flex-col justify-end h-full ${
          textBlack ? "text-black" : "text-white"
        }`}
      >
        <p className="text-2xl">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
}
