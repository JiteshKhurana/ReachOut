import React from "react";
import { FlipWords } from "../ui/flip-words";

export default function FlipWordsSection() {
  const words = [
    "affordable",
    "convenient",
    "safe",
    "reliable",
    "eco-friendly",
    "efficient",
  ];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-5xl mx-auto font-normal text-neutral-400">
        Find
        <FlipWords words={words} /> <br />
        rides and connect with ReachOut
      </div>
    </div>
  );
}
