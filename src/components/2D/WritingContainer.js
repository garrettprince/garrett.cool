import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";
import { writingData } from "@/data/writingData";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function WritingContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        (prevIndex - 1 + writingData.length) % writingData.length;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % writingData.length;
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
        <h1 className="text-3xl">Writing</h1>
        <div className="flex items-center space-x-5">
          <ChevronLeftIcon
            className="w-7 h-7 cursor-pointer"
            onClick={handleLeftClick}
          />
          <ChevronRightIcon
            className="w-7 h-7 cursor-pointer"
            onClick={handleRightClick}
          />
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide pl-6"
      >
        {writingData.map((writing) => (
          <Card
            key={writing.title}
            title={writing.title}
            description={writing.description}
            video={writing.video}
            textBlack={writing.textBlack}
            mediaSource={writing.mediaSource}
            link={writing.link}
            category={writing.category}
          />
        ))}
      </div>
    </div>
  );
}
