"use client";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { motion, Variants } from "motion/react";
import Image from "next/image";

const HeroCards = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 2xl:pb-8 xl:pb-6 lg:pb-4 sm:gap-6 h-auto md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px] 3xl:h-[900px]">
        {/* First Column - Takes 2/3 width (2 columns) on desktop */}
        <div className="md:col-span-2 flex flex-col gap-4 sm:gap-6">
          {/* First Row - Full width card taking 2/3 height */}
          <motion.div
  className="h-[250px] sm:h-[300px] md:flex-[2] rounded-3xl sm:rounded-[2rem] overflow-hidden relative group drop-shadow-2xl"
  variants={itemVariants}
  whileHover={{ scale: 1.02, y: -5 }}
  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
>
<Image
  src="/images/hero/dhaka-bangladesh.jpg"
  alt="Boys in boat on river with cityscape"
  fill
   className="object-cover  transition-transform duration-700 
              [mask-image:linear-gradient(to_bottom,transparent_0%,black_70%,black_100%)]
              [mask-repeat:no-repeat] [mask-size:100%_100%]"
  priority
/>


  <ProgressiveBlur
    className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
    blurIntensity={2}
  />

  <div className="absolute bottom-0 p-4 sm:p-6 flex flex-col justify-end">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <span className="text-white/90 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 font-semibold">
        Feature Stories
      </span>
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl  font-bold text-white leading-tight drop-shadow-lg">
        Conserving & restoring waterways can mitigate extreme urban heat in Bangladesh
      </h3>
    </motion.div>
  </div>
</motion.div>





          {/* Second Row - Two cards side by side */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:flex-[1]">
            {/* Travelogue Card */}
            <motion.div
              className="flex-1 h-[200px] sm:h-[180px] md:h-auto rounded-3xl sm:rounded-[2rem] overflow-hidden relative group drop-shadow-2xl "
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/images/hero/full-circle-featured.webp"
                alt="People dining together"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <ProgressiveBlur
                className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
                blurIntensity={2}
              />
              <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <span className="text-white/90 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 font-semibold">
                    Travelogue
                  </span>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                    A full circle moment
                  </h3>
                </motion.div>
              </div>
            </motion.div>

            {/* Reportage Card */}
            <motion.div
              className="flex-1 h-[200px] sm:h-[180px] md:h-auto rounded-3xl sm:rounded-[2rem] overflow-hidden relative group drop-shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/images/hero/cyclone-featured.webp"
                alt="Person riding bicycle rickshaw in rain"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <ProgressiveBlur
                className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
                blurIntensity={2}
              />
              <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <span className="text-white/90 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 font-semibold">
                    Reportage
                  </span>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                    Cyclone Remal downgraded, moves inland
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Second Column - Takes 1/3 width (1 column) on desktop */}
        <div className="md:col-span-1 flex flex-col gap-4 sm:gap-6">
          {/* First Row - Equal height card */}
      <motion.div
            className="h-[200px] sm:h-[180px] md:flex-1 rounded-3xl sm:rounded-[2rem] overflow-hidden relative group drop-shadow-2xl"
        variants={itemVariants}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image
          src="/images/hero/butterfly-baby.webp"
          alt="Person pointing in forest"
          fill
          className="object-cover transition-transform duration-700 
                     [mask-image:linear-gradient(to_bottom,transparent_0%,black_70%,black_100%)]
              [mask-repeat:no-repeat] [mask-size:100%_100%]"
        />
        <ProgressiveBlur
          className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
          blurIntensity={2}
        />
            <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span className="text-white/90 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 font-semibold">
                  Feature Stories
                </span>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                  Scientists are racing to save South Asia's butterflies from the threat of extinction
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Second Row - Equal height card */}
          <motion.div
            className="h-[200px] sm:h-[180px] md:flex-1 rounded-3xl sm:rounded-[2rem] overflow-hidden relative group drop-shadow-2xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/images/hero/dhaka-international-featured.jpg"
              alt="Two young boys portrait"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
              blurIntensity={2}
            />
            <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span className="text-white/90 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-3 font-semibold">
                  Feature Stories
                </span>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                  Dhaka international symposium gathers at the intersection of art & climate crisis
                </h3>
              </motion.div>
            </div>
      </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroCards;
