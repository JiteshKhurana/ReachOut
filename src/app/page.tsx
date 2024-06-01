import HeroSection from "./components/custom/HeroSection";
import WaitList from "./components/custom/WaitList";
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
      <HeroHighlightSection />
      <BentoGridSection />
      <WaitList />
    </main>
  );
}
