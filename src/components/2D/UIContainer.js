import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";

import WritingContainer from "./WritingContainer";
import ThingContainer from "./ThingContainer";

function UIContainer() {
  return (
    <div className="flex flex-col min-h-xl max-w-3xl mx-auto h-screen">
      <Nav />
      <Hero />
      <ThingContainer />
      <WritingContainer />
    </div>
  );
}

export default UIContainer;
