import React from "react";
import Card from "./Card";
import { writingData } from "@/data/writingData";

export default function WritingContainer() {
  return (
    <div className="my-20">
      <div className="flex justify-between mx-3">
        <h1 className="text-2xl">Writing</h1>
        <p className="text-xl">more</p>
      </div>

      {/* Find out why this doesn't scroll horizontally */}
      <div className="flex overflow-x-auto scrollbar-hide pl-3">
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