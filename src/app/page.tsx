import HeroSection from "@/app/components/custom/HeroSection";
import { Macbook } from "@/app/components/custom/Macbook";
import { LampSection } from "./components/custom/LampSection";
import IpadSection from "./components/custom/IpadSection";
import { HeroParallaxSection } from "./components/custom/HeroParallax";

export default function Home() {
  return (
    <main className="min-h-screen antialiased">
      <HeroSection />
      <IpadSection />
      <HeroParallaxSection />
      <LampSection />
    </main>
  );
}
