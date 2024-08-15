import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";

import WritingContainer from "./WritingContainer";
import ThingContainer from "./ThingContainer";

function UIContainer() {
  return (
    <div className="flex flex-col w-full mx-auto h-screen">
      <Nav />
      <Hero />
      <ThingContainer />
      <WritingContainer />
    </div>
  );
}

export default UIContainer;
