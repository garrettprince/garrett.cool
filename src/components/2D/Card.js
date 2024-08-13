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
      className="my-3 mr-3 p-6 w-fit min-w-[18rem] max-w-[18rem] h-[28rem] relative overflow-hidden rounded-xl group"
    >
      {video === true ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 md:group-hover:scale-[1.10] z-[-1] "
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
        className={`flex flex-col justify-end h-full ${
          textBlack ? "text-black" : "text-white"
        }`}
      >
        <p className="text-2xl font-medium mb-1">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
}
