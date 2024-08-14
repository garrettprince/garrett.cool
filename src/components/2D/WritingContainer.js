import React from "react";
import Card from "./Card";
import { writingData } from "@/data/writingData";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function WritingContainer() {
  return (
    <div className="my-20">
      <div className="flex justify-between items-center mx-6">
        <h1 className="text-4xl">Writing</h1>
        <div className="flex items-center space-x-5">
          <ChevronLeftIcon className="w-7 h-7 cursor-pointer" />
          <ChevronRightIcon className="w-7 h-7 cursor-pointer" />
        </div>
      </div>

      {/* Find out why this doesn't scroll horizontally */}
      <div className="flex overflow-x-auto scrollbar-hide pl-6">
        {writingData.map((writing) => (
          <Card
            key={writing.title}
            title={writing.title}
            description={writing.description}
            video={writing.video}
            textBlack={writing.textBlack}
            mediaSource={writing.mediaSource}
            link={writing.link}
          />
        ))}
      </div>
    </div>
  );
}
