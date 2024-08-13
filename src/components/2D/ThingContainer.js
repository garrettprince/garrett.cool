import React from "react";
import Card from "./Card";
import { thingData } from "@/data/thingData";

export default function ThingsContainer() {
  return (
    <div className="my-20">
      <div className="flex justify-between items-center mx-3">
        <div>
            <h1 className="text-4xl">Things</h1>
            {/* <p className="text-sm">Experiments, Components, Projects</p> */}
        </div>
        <p className="text-xl">more</p>
      </div>


      {/* TODO Hide horizontal scrollbar */}
      <div className="flex overflow-x-auto scrollbar-hide pl-3">
        {thingData.map((thing) => (
          <Card
            key={thing.title}
            title={thing.title}
            description={thing.description}
            video={thing.video}
            textBlack={thing.textBlack}
            mediaSource={thing.mediaSource}
            link={thing.link}
          />
        ))}
      </div>
    </div>
  );
}
