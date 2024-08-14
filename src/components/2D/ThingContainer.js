import React from "react";
import Card from "./Card";
import { thingData } from "@/data/thingData";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function ThingsContainer() {
  return (
    <div className="my-20">
      <div className="flex justify-between items-center mx-6">
        <div>
          <h1 className="text-4xl">Things</h1>
        </div>
        <div className="flex items-center space-x-5">
          <ChevronLeftIcon className="w-7 h-7 cursor-pointer" />
          <ChevronRightIcon className="w-7 h-7 cursor-pointer" />
        </div>
      </div>

      {/* TODO Hide horizontal scrollbar */}
      <div className="flex overflow-x-auto scrollbar-hide pl-6">
        {thingData.map((thing) => (
          <Card
            key={thing.title}
            title={thing.title}
            description={thing.description}
            video={thing.video}
            textBlack={thing.textBlack}
            mediaSource={thing.mediaSource}
            link={thing.link}
            category={thing.category}
          />
        ))}
      </div>
    </div>
  );
}
