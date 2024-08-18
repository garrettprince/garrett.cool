import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";
import { thingData } from "@/data/thingData";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function ThingsContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + thingData.length) % thingData.length;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % thingData.length;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.firstChild.offsetWidth;
      containerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const cardWidth = containerRef.current.firstChild.offsetWidth;
        const scrollLeft = containerRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(newIndex);
      }
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="my-20">
      <div className="flex justify-between items-center mx-6">
        <div>
          <h1 className="text-3xl">Things</h1>
        </div>
        <div className="flex items-center space-x-5">
          <ChevronLeftIcon className="w-7 h-7 cursor-pointer" onClick={handleLeftClick} />
          <ChevronRightIcon className="w-7 h-7 cursor-pointer" onClick={handleRightClick} />
        </div>
      </div>

      <div className="flex overflow-x-auto scrollbar-hide pl-6" ref={containerRef}>
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