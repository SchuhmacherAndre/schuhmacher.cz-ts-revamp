import HeroSection from "@/components/landing/hero-section";
import BelowHero from "@/components/landing/below-hero"
import Solution from "@/components/landing/solution";
import Contact from "@/components/landing/contact"
import Particles from "@/components/ui/particles";
import { SphereMask } from "@/components/ui/sphere-mask";



export default async function Home() {
  return (
    <>
      <HeroSection />
      <SphereMask />
      <BelowHero />
      <Solution />
      <Contact />
      <Particles
            className="absolute inset-0 -z-10"
            quantity={50}
            ease={70}
            size={0.05}
            staticity={40}
            color="#ffffff"
         />
    </>
  );
}
