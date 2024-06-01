"use client";
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const HeroSection = () => {
  return (
    <div className="bg-grid-small-white/[0.1] flex items-center justify-center">
      <Spotlight
        className="-top-50 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0 text-center">
        <h1 className="mt-32 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Where Students
          <br /> Connect, Collaborate, and Succeed
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          ReachOut is an innovative web platform designed to streamline the way
          students connect for shared transportation and collaborative events.
        </p>
        <div className="m-24 flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black text-white flex items-center space-x-2"
          >
            Get Started
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
