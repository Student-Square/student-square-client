import Link from "next/link";
import HeroCards from "./HeroCards";
import Aurora from "@/components/ui/Aurora";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pt-20 dark:bg-[#080321] md:pt-20 xl:pt-20 2xl:pt-24 3xl:pt-28"
      >
        {/* Aurora Animation Background - Behind everything */}
        <div className="absolute inset-0 z-0">
          <Aurora 
            colorStops={["#475569", "#64748b", "#475569"]} 
            amplitude={1.2}
            blend={0.6}
            speed={0.8}
          />
        </div>
        
        {/* Gradient Background */}
        <div className="absolute left-0 top-0 z-[1] h-full w-full opacity-20 hero-gradient "></div>
        {/* Hero Cards Section */}
        <div className="w-full relative z-[2]">
          <HeroCards />
        </div>

        {/* Shape Images */}
        {/* <img 
          alt="shape" 
          loading="lazy" 
          width="411" 
          height="276" 
          className="absolute left-0 top-0 -z-10" 
          src="/images/hero/hero-shape-1.svg" 
          style={{ color: 'transparent' }}
        /> */}
        <img 
          alt="shape" 
          loading="lazy" 
          width="820" 
          height="692" 
          className="absolute right-0 top-0 z-[1] opacity-30 dark:opacity-20" 
          src="/images/hero/hero-shape-2.svg" 
          style={{ color: 'transparent' }}
        />
      </section>
    </>
  );
};

export default Hero;
