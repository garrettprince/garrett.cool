import Scene from "../components/3D/Scene";
import UIContainer from "../components/2D/UIContainer";

export default function Home({ action, setAction }) {
  return (
    <main className="relative h-screen overflow-y-auto">
      {/* 3D Scene */}
      {/* <div className="fixed inset-0 z-0">
        <Scene action={action} setAction={setAction} />
      </div> */}
      {/* UI Container */}
      <div className="relative z-10 min-h-screen">
        <div className="flex justify-center pointer-events-none h-full">
          <div className="flex flex-col pointer-events-auto items-center w-full max-w-3xl">
            <UIContainer action={action} setAction={setAction} />
          </div>
        </div>
      </div>
    </main>
  );
}