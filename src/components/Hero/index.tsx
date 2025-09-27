import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-[#080321] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* Gradient Background */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-20 hero-gradient"></div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">
                  Next.js Template and Boilerplate for Crypto, ICO and Web3
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mx-auto mb-4 max-w-[620px] text-lg font-medium">
                  A Next.js website template for Crypto Currency, Blockchain, ICO, and Web3, meticulously styled with Tailwind CSS. This boilerplate includes essential integrations, UI components, pages, and enabling you to launch a comprehensive website or landing page for anything related to Crypto, Blockchain, and Web3.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="#"
                    className="rounded-full bg-primary px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90"
                  >
                    Buy Tokens 47% Off
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Shape Images */}
        <img 
          alt="shape" 
          loading="lazy" 
          width="411" 
          height="276" 
          className="absolute left-0 top-0 -z-10" 
          src="/images/hero/hero-shape-1.svg" 
          style={{ color: 'transparent' }}
        />
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
