"use client";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cardData } from "@/data/cardData";

// Simple Progress Animation Component
const ProgressSpan = ({ children, duration = 4000 }: { children: React.ReactNode; duration?: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      const startTime = performance.now();
      
      const updateProgress = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progressPercent = Math.min((elapsed / duration) * 100, 100);
        setProgress(progressPercent);
        
        if (progressPercent < 100) {
          animationId = requestAnimationFrame(updateProgress);
        } else {
          // Reset and restart immediately
          setProgress(0);
          animationId = requestAnimationFrame(animate);
        }
      };
      
      animationId = requestAnimationFrame(updateProgress);
    };
    
    animate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [duration]);

  return (
    <span className="relative inline-block text-white text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-1 sm:mb-2 font-semibold rounded-full px-2 py-0.5 bg-gradient-to-r from-black/40 via-black/20 to-transparent backdrop-blur-sm shadow-lg border-l-2 border-red-500 pl-2.5 overflow-hidden">
      {/* Progress bar background */}
      <div
        className="absolute inset-0 bg-gray-500/15 rounded-full"
        style={{ width: `${progress}%` }}
      />
      {/* Text content */}
      <span className="relative z-10">
        {children}
      </span>
    </span>
  );
};

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

  // State for current data indices and a global image tick for sync
  const [currentMainFeature, setCurrentMainFeature] = useState(0);
  const [imageTick, setImageTick] = useState(0);
  // Other cards are static: use first item only, no extra state

  // Shuffle functions for each card type with image cycling
  useEffect(() => {
    let masterTimer = 0;
    const masterInterval = 1000; // 1 second precision
    
    const masterClock = setInterval(() => {
      masterTimer += masterInterval;
      
      // Main feature card changes every 7 seconds (7, 14, 21, 28...)
      if (masterTimer !== 0 && masterTimer % 7000 === 0) {
        setCurrentMainFeature((prev) => (prev + 1) % cardData.mainFeature.length);
      }
      
      // Other cards do not rotate
      
      // Reset timer after 120 seconds to prevent overflow
      if (masterTimer >= 120000) {
        masterTimer = 0;
      }
    }, masterInterval);

    // Global image tick so all titles use the same image index
    const mainImageInterval = setInterval(() => {
      setImageTick((prev) => prev + 1);
    }, 3000); // 3 seconds synchronized cycle

    // No image cycling for other cards

    return () => {
      clearInterval(masterClock);
      clearInterval(mainImageInterval);
      // No other intervals to clear
    };
  }, []); // Remove dependencies to prevent recreation

  // Get current data with current image and fallbacks
  const mainFeatureData = {
    ...cardData.mainFeature[currentMainFeature],
    image:
      (() => {
        const images = cardData.mainFeature[currentMainFeature]?.images || [];
        if (images.length === 0) return "/images/hero/dhaka-bangladesh.jpg";
        const idx = images.length > 0 ? (imageTick % images.length) : 0;
        return images[idx] || images[0];
      })()
  };
  
  const secondaryFeatureData = {
    ...cardData.secondaryFeature[0],
    image: cardData.secondaryFeature[0]?.images?.[0] || "/images/hero/butterfly-baby.webp"
  };
  const thirdFeatureData = {
    ...cardData.thirdFeature[0],
    image: cardData.thirdFeature[0]?.images?.[0] || "/images/hero/dhaka-international-featured.jpg"
  };
  const blogCard1Data = cardData.blogCard1[0] || {
    id: "fallback1",
    image: "/images/hero/full-circle-featured.webp",
    title: "A full circle moment",
    category: "Travelogue"
  };
  const blogCard2Data = cardData.blogCard2[0] || {
    id: "fallback2", 
    image: "/images/hero/cyclone-featured.webp",
    title: "Cyclone Remal downgraded, moves inland",
    category: "Reportage"
  };

  return (
    <motion.div
      className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 2xl:pb-8 xl:pb-6 lg:pb-4 sm:gap-6 h-auto md:h-auto lg:h-auto xl:h-[600px] 2xl:h-[800px] 3xl:h-[900px]">
        {/* First Column - Takes 2/3 width (2 columns) on desktop */}
        <div className="md:col-span-2 xl:col-span-2 flex flex-col gap-4 sm:gap-6">
          {/* First Row - Full width card taking 2/3 height */}
          <motion.div
            className="h-[250px] sm:h-[300px] md:min-h-[360px] md:flex-[2] rounded-3xl sm:rounded-[2rem] overflow-hidden relative group z-10"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <motion.div
              key={mainFeatureData.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 z-10"
            >
              <Image
                src={mainFeatureData.image}
                alt={mainFeatureData.title || "Main feature image"}
                fill
                className="object-cover transition-transform duration-700 relative z-10
                          [mask-image:linear-gradient(to_bottom,transparent_0%,black_70%,black_100%)]
                          [mask-repeat:no-repeat] [mask-size:100%_100%]"
                priority
              />
            </motion.div>

            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[40%] lg:h-[25%] w-full"
              blurIntensity={2}
            />

            <div className="absolute bottom-0 p-4 sm:p-6 flex flex-col justify-end z-10">
              <motion.div
                key={`${mainFeatureData.id}-content`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0 }}
              >
                <ProgressSpan duration={7000}>
                  {mainFeatureData.category}
                </ProgressSpan>
                <motion.h3 
                  key={`${mainFeatureData.id}-title`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: 0 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight drop-shadow-lg"
                >
                  {mainFeatureData.title}
                </motion.h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Second Row - Two cards side by side */}
          {/* Show Feature 2 and 3 on small/medium; Blogs on xl+ */}
          <div className="flex flex-row gap-4 sm:gap-6 md:flex-[1] xl:hidden">
            {/* Feature 2 (Secondary) for small/medium */}
            <motion.div
              className="flex-1 h-[220px] sm:h-[160px] md:h-[300px] rounded-3xl sm:rounded-[2rem] overflow-hidden relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                key={`${secondaryFeatureData.id}-sm`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={secondaryFeatureData.image}
                  alt={secondaryFeatureData.title || "Secondary feature image"}
                  fill
                  className="object-cover transition-transform duration-700"
                />
              </motion.div>
              <ProgressiveBlur
                className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
                blurIntensity={2}
              />
              <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="relative inline-block text-white text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-1 sm:mb-2 font-semibold rounded-full px-2 py-0.5 bg-gradient-to-r from-black/40 via-black/20 to-transparent backdrop-blur-sm shadow-lg border-l-2 border-red-500 pl-2.5 overflow-hidden">
                    {secondaryFeatureData.category}
                  </span>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white leading-tight drop-shadow-lg">
                    {secondaryFeatureData.title}
                  </h3>
                </motion.div>
              </div>
            </motion.div>

            {/* Feature 3 (Third) for small/medium */}
            <motion.div
              className="flex-1 h-[220px] sm:h-[160px] md:h-[300px] rounded-3xl sm:rounded-[2rem] overflow-hidden relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                key={`${thirdFeatureData.id}-sm`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={thirdFeatureData.image}
                  alt={thirdFeatureData.title || "Third feature image"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              <ProgressiveBlur
                className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
                blurIntensity={2}
              />
              <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="relative inline-block text-white text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-1 sm:mb-2 font-semibold rounded-full px-2 py-0.5 bg-gradient-to-r from-black/40 via-black/20 to-transparent backdrop-blur-sm shadow-lg border-l-2 border-red-500 pl-2.5 overflow-hidden">
                    {thirdFeatureData.category}
                  </span>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white leading-tight drop-shadow-lg">
                    {thirdFeatureData.title}
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Blogs on xl and up */}
          <div className="hidden xl:flex flex-row gap-4 sm:gap-6 md:flex-[1]">
            {/* Travelogue Card (Blog 1) */}
            <motion.div
              className="flex-1 h-[200px] sm:h-[180px] md:h-auto rounded-3xl sm:rounded-[2rem] overflow-hidden relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                key={blogCard1Data.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={blogCard1Data.image}
                  alt={blogCard1Data.title || "Blog card image"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
              {/* Dark gradient overlay for text readability */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-[50%] md:h-[45%]"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.65) 20%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.2) 85%, transparent 100%)',
                }}
              />
              
              {/* Progressive Blur */}
              <ProgressiveBlur
                className="pointer-events-none absolute bottom-0 left-0 h-[50%] md:h-[45%] w-full"
                blurIntensity={3}
                blurLayers={10}
              />
              
              <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end z-20">
                <motion.div
                  key={`${blogCard1Data.id}-content`}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                >
                  <span className="relative inline-block text-white text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-1 sm:mb-2 font-semibold rounded-full px-2 py-0.5 bg-gradient-to-r from-black/40 via-black/20 to-transparent backdrop-blur-sm shadow-lg border-l-2 border-red-500 pl-2.5 overflow-hidden">
                    {blogCard1Data.category}
                  </span>
                  <motion.h3 
                    key={`${blogCard1Data.id}-title`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight drop-shadow-lg"
                  >
                    {blogCard1Data.title}
                  </motion.h3>
                </motion.div>
              </div>
            </motion.div>

            {/* Reportage Card (Blog 2) */}
            <motion.div
              className="flex-1 h-[200px] sm:h-[180px] md:h-auto rounded-3xl sm:rounded-[2rem] overflow-hidden relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src={blogCard2Data.image}
                alt={blogCard2Data.title || "Blog card image"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <ProgressiveBlur
                className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
                blurIntensity={2}
              />
              <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <span className="relative inline-block text-white text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-1 sm:mb-2 font-semibold rounded-full px-2 py-0.5 bg-gradient-to-r from-black/40 via-black/20 to-transparent backdrop-blur-sm shadow-lg border-l-2 border-red-500 pl-2.5 overflow-hidden">
                    {blogCard2Data.category}
                  </span>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                    {blogCard2Data.title}
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Second Column - Takes 1/3 width (1 column) on desktop */}
        <div className="md:col-span-1 hidden xl:flex flex-row md:flex-col gap-4 sm:gap-6">
          {/* First Row - Equal height card */}
          <motion.div
            className="h-[220px] xl:h-[260px] flex-1 md:flex-1 rounded-3xl sm:rounded-[2rem] overflow-hidden relative group"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              key={secondaryFeatureData.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={secondaryFeatureData.image}
                alt={secondaryFeatureData.title || "Secondary feature image"}
                fill
                className="object-cover transition-transform duration-700 md:[mask-image:linear-gradient(to_bottom,transparent_0%,black_70%,black_100%)] md:[mask-repeat:no-repeat] md:[mask-size:100%_100%]"
              />
            </motion.div>
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
              blurIntensity={2}
            />
            <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span className="relative inline-block text-white text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-1 sm:mb-2 font-semibold rounded-full px-2 py-0.5 bg-gradient-to-r from-black/40 via-black/20 to-transparent backdrop-blur-sm shadow-lg border-l-2 border-red-500 pl-2.5 overflow-hidden">
                  {secondaryFeatureData.category}
                </span>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                  {secondaryFeatureData.title}
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Second Row - Equal height card */}
          <motion.div
            className="h-[220px] xl:h-[260px] flex-1 md:flex-1 rounded-3xl sm:rounded-[2rem] overflow-hidden relative group"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              key={thirdFeatureData.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={thirdFeatureData.image}
                alt={thirdFeatureData.title || "Third feature image"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
              blurIntensity={2}
            />
            <div className="absolute bottom-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span className="relative inline-block text-white text-[10px] sm:text-xs md:text-sm uppercase tracking-wider mb-1 sm:mb-2 font-semibold rounded-full px-2 py-0.5 bg-gradient-to-r from-black/40 via-black/20 to-transparent backdrop-blur-sm shadow-lg border-l-2 border-red-500 pl-2.5 overflow-hidden">
                  {thirdFeatureData.category}
                </span>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                  {thirdFeatureData.title}
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