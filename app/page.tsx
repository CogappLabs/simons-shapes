'use client';
import { ShapesGrid } from "./components/ShapesGrid";
import { SimonsDisplay } from "./components/SimonsDisplay";
import { StartButton } from "./components/StartButton";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        <div className="mb-4">
          <h1 className="mb-4 text-2xl font-bold">Simon&apos;s Shapes</h1>
          <p className="mb-2">
            <span className="font-bold">
              How to play:&nbsp;
            </span> 
              Repeat Simon&apos;s instructions by pressing the buttons in the right order!
          </p>
        </div>
        <div className="mb-8">
          <StartButton />
        </div>
        <div className="mb-4 w-full">
          <SimonsDisplay />
        </div>
        <div className="flex align-center justify-center w-full">
          <ShapesGrid />
        </div>
      </main>
    </div>
  );
}
