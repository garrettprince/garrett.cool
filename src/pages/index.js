import Nav from "../components/2D/Nav";
import Hero from "../components/2D/Hero";
import ThingsContainer from "../components/2D/ThingContainer";
import WritingContainer from "../components/2D/WritingContainer";
import ImageToAscii from "../components/2D/ImageToAscii";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Nav />
      <Hero />
      <ThingsContainer />
      <WritingContainer />
      <ImageToAscii />
    </main>
  );
}
