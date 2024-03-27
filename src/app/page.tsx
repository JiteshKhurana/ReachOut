import HeroSection from "./components/custom/HeroSection";
import LampSection from "./components/custom/LampSection";
import IpadSection from "./components/custom/IpadSection";
import HeroParallaxSection from "./components/custom/HeroParallax";

export default function Home() {
  return (
    <main className="min-h-screen antialiased ">
      <HeroSection />
      <IpadSection />
      <HeroParallaxSection />
      <LampSection />
    </main>
  );
}
