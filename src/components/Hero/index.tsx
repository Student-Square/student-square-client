import Link from "next/link";
import HeroCards from "./HeroCards";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pt-20 dark:bg-[#080321] md:pt-20 xl:pt-20 2xl:pt-24 3xl:pt-28"
      >
        {/* Gradient Background */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-20 hero-gradient "></div>
        {/* Hero Cards Section */}
        <div className="w-full   ">
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
          className="absolute right-0 top-0 -z-10" 
          src="/images/hero/hero-shape-2.svg" 
          style={{ color: 'transparent' }}
        />
      </section>
    </>
  );
};

export default Hero;
