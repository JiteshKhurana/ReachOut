import HeroSection from "./components/custom/HeroSection";
import LampSection from "./components/custom/LampSection";
import FlipWordsSection from "./components/custom/FlipWordsSection";
import IpadSection from "./components/custom/IpadSection";
import BentoGridSection from "./components/custom/BentoGridSection";
import HeroHighlightSection from "./components/custom/HeroHighlightSection";
import WobbleCardSection from "./components/custom/WobbleCardSection";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-black">
      <HeroSection />
      <FlipWordsSection />
      <IpadSection />
      <WobbleCardSection />
      <BentoGridSection />
      <HeroHighlightSection />
      <LampSection />
    </main>
  );
}
