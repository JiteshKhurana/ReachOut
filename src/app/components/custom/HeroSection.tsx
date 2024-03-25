import React from "react";
import { Spotlight } from "@/app/components/ui/Spotlight";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-grid-small-white/[0.1] flex items-center justify-centerf">
      <Spotlight
        className="-top-50 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0 text-center">
        <h1 className="mt-32 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Ride Together,
          <br /> Create Together - That&apos;s ReachOut.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          ReachOut is an innovative web platform designed to streamline the way
          students connect for shared transportation and collaborative events.
        </p>
        <div className="mt-8">
          <Link href={"/courses"}>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Get Started
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
