import Scene from "../components/3D/Scene";
import UIContainer from "../components/2D/UIContainer";

export default function Home({ action, setAction }) {
  return (
    <main className="h-screen max-w-screen-xl mx-auto">
      {/* 3D Scene */}
      <div className="absolute z-0 w-full h-full">
        <Scene action={action} setAction={setAction} />
      </div>
      {/* UI Container */}
      <div className="flex justify-center pointer-events-none h-full w-full z-50">
        <div className="flex flex-col pointer-events-auto items-center w-full max-w-3xl">
          <UIContainer action={action} setAction={setAction} />
        </div>
      </div>
    </main>
  );
}   