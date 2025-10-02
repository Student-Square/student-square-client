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

  // State for current data indices and image indices
  const [currentMainFeature, setCurrentMainFeature] = useState(0);
  const [currentMainImage, setCurrentMainImage] = useState(0);
  const [currentSecondaryFeature, setCurrentSecondaryFeature] = useState(0);
  const [currentSecondaryImage, setCurrentSecondaryImage] = useState(0);
  const [currentThirdFeature, setCurrentThirdFeature] = useState(0);
  const [currentThirdImage, setCurrentThirdImage] = useState(0);
  const [currentBlogCard1, setCurrentBlogCard1] = useState(0);
  const [currentBlogCard2, setCurrentBlogCard2] = useState(0);

  // Shuffle functions for each card type with image cycling
  useEffect(() => {
    let masterTimer = 0;
    const masterInterval = 1000; // 1 second precision
    
    const masterClock = setInterval(() => {
      masterTimer += masterInterval;
      
      // Main feature card changes every 7 seconds (7, 14, 21, 28...)
      if (masterTimer !== 0 && masterTimer % 7000 === 0) {
        console.log(`🔄 Main Feature changing at ${masterTimer}ms`);
        setCurrentMainFeature((prev) => (prev + 1) % cardData.mainFeature.length);
        setCurrentMainImage(0);
      }
      
      // All 4 cards change in sequence every 10 seconds - only ONE at a time
      // 10s: Blog Card 1, 20s: Feature 2, 30s: Blog Card 2, 40s: Feature 3, then repeat
      if (masterTimer >= 10000 && masterTimer % 10000 === 0) {
        const cardSequence = ['b1', 'f2', 'b2', 'f3']; // b1=Blog Card 1, f2=Feature 2, b2=Blog Card 2, f3=Feature 3
        const cyclePosition = Math.floor((masterTimer - 10000) / 10000) % 4;
        const currentCard = cardSequence[cyclePosition];
        
        console.log(`🔄 Timer: ${masterTimer}ms, Cycle Position: ${cyclePosition}, Card: ${currentCard}`);
        
        switch (currentCard) {
          case 'b1': // Blog Card 1
            console.log(`🔄 Blog Card 1 changing at ${masterTimer}ms`);
            setCurrentBlogCard1((prev) => (prev + 1) % cardData.blogCard1.length);
            break;
          case 'f2': // Feature 2 (Secondary Feature)
            console.log(`🔄 Feature 2 changing at ${masterTimer}ms`);
            setCurrentSecondaryFeature((prev) => (prev + 1) % cardData.secondaryFeature.length);
            setCurrentSecondaryImage(0);
            break;
          case 'b2': // Blog Card 2
            console.log(`🔄 Blog Card 2 changing at ${masterTimer}ms`);
            setCurrentBlogCard2((prev) => (prev + 1) % cardData.blogCard2.length);
            break;
          case 'f3': // Feature 3 (Third Feature)
            console.log(`🔄 Feature 3 changing at ${masterTimer}ms`);
            setCurrentThirdFeature((prev) => (prev + 1) % cardData.thirdFeature.length);
            setCurrentThirdImage(0);
            break;
        }
      }
      
      // Reset timer after 120 seconds to prevent overflow
      if (masterTimer >= 120000) {
        masterTimer = 0;
      }
    }, masterInterval);

    // Image cycling intervals for cards with multiple images
    const mainImageInterval = setInterval(() => {
      setCurrentMainImage((prev) => {
        const currentData = cardData.mainFeature[currentMainFeature];
        if (currentData.images.length > 1) {
          return (prev + 1) % currentData.images.length;
        }
        return prev;
      });
    }, 3000); // Faster image cycling for main feature (3 seconds)

    const secondaryImageInterval = setInterval(() => {
      setCurrentSecondaryImage((prev) => {
        const currentData = cardData.secondaryFeature[currentSecondaryFeature];
        if (currentData.images.length > 1) {
          return (prev + 1) % currentData.images.length;
        }
        return prev;
      });
    }, 4000); // Image cycling for secondary feature (4 seconds)

    const thirdImageInterval = setInterval(() => {
      setCurrentThirdImage((prev) => {
        const currentData = cardData.thirdFeature[currentThirdFeature];
        if (currentData.images.length > 1) {
          return (prev + 1) % currentData.images.length;
        }
        return prev;
      });
    }, 5000); // Image cycling for third feature (5 seconds)

    return () => {
      clearInterval(masterClock);
      clearInterval(mainImageInterval);
      clearInterval(secondaryImageInterval);
      clearInterval(thirdImageInterval);
    };
  }, []); // Remove dependencies to prevent recreation

  // Get current data with current image and fallbacks
  const mainFeatureData = {
    ...cardData.mainFeature[currentMainFeature],
    image: cardData.mainFeature[currentMainFeature]?.images?.[currentMainImage] || cardData.mainFeature[currentMainFeature]?.images?.[0] || "/images/hero/dhaka-bangladesh.jpg"
  };
  
  // Debug logging
  console.log('Main Feature Debug:', {
    currentMainFeature,
    currentMainImage,
    data: cardData.mainFeature[currentMainFeature],
    selectedImage: mainFeatureData.image
  });
  const secondaryFeatureData = {
    ...cardData.secondaryFeature[currentSecondaryFeature],
    image: cardData.secondaryFeature[currentSecondaryFeature]?.images?.[currentSecondaryImage] || cardData.secondaryFeature[currentSecondaryFeature]?.images?.[0] || "/images/hero/butterfly-baby.webp"
  };
  
  // Debug logging for secondary feature
  console.log('Secondary Feature Debug:', {
    currentSecondaryFeature,
    currentSecondaryImage,
    data: cardData.secondaryFeature[currentSecondaryFeature],
    selectedImage: secondaryFeatureData.image
  });
  const thirdFeatureData = {
    ...cardData.thirdFeature[currentThirdFeature],
    image: cardData.thirdFeature[currentThirdFeature]?.images?.[currentThirdImage] || cardData.thirdFeature[currentThirdFeature]?.images?.[0] || "/images/hero/dhaka-international-featured.jpg"
  };
  
  // Debug logging for third feature
  console.log('Third Feature Debug:', {
    currentThirdFeature,
    currentThirdImage,
    data: cardData.thirdFeature[currentThirdFeature],
    selectedImage: thirdFeatureData.image
  });
  const blogCard1Data = cardData.blogCard1[currentBlogCard1] || {
    id: "fallback1",
    image: "/images/hero/full-circle-featured.webp",
    title: "A full circle moment",
    category: "Travelogue"
  };
  const blogCard2Data = cardData.blogCard2[currentBlogCard2] || {
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
            <motion.div
              key={mainFeatureData.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={mainFeatureData.image}
                alt={mainFeatureData.title}
                fill
                className="object-cover transition-transform duration-700 
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
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <ProgressSpan duration={7000}>
                  {mainFeatureData.category}
                </ProgressSpan>
                <motion.h3 
                  key={`${mainFeatureData.id}-title`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight drop-shadow-lg"
                >
                  {mainFeatureData.title}
                </motion.h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Second Row - Two cards side by side */}
          <div className="flex flex-row gap-4 sm:gap-6 md:flex-[1]">
            {/* Travelogue Card */}
            <motion.div
              className="hidden md:block flex-1 h-[200px] sm:h-[180px] md:h-auto rounded-3xl sm:rounded-[2rem] overflow-hidden relative group drop-shadow-2xl"
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
                  alt={blogCard1Data.title}
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
                  key={`${blogCard1Data.id}-content`}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                >
                  <ProgressSpan duration={10000}>
                    {blogCard1Data.category}
                  </ProgressSpan>
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

            {/* Reportage Card */}
            <motion.div
              className="hidden md:block flex-1 h-[200px] sm:h-[180px] md:h-auto rounded-3xl sm:rounded-[2rem] overflow-hidden relative group drop-shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src={blogCard2Data.image}
                alt={blogCard2Data.title}
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
                  <ProgressSpan duration={10000}>
                    {blogCard2Data.category}
                  </ProgressSpan>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                    {blogCard2Data.title}
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Second Column - Takes 1/3 width (1 column) on desktop */}
        <div className="md:col-span-1 flex flex-row md:flex-col gap-4 sm:gap-6">
          {/* First Row - Equal height card */}
          <motion.div
            className="h-[200px] sm:h-[180px] flex-1 md:flex-1 rounded-3xl sm:rounded-[2rem] overflow-hidden relative group drop-shadow-2xl"
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
                alt={secondaryFeatureData.title}
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
                <ProgressSpan duration={10000}>
                  {secondaryFeatureData.category}
                </ProgressSpan>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white leading-tight drop-shadow-lg">
                  {secondaryFeatureData.title}
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Second Row - Equal height card */}
          <motion.div
            className="h-[200px] sm:h-[180px] flex-1 md:flex-1 rounded-3xl sm:rounded-[2rem] overflow-hidden relative group drop-shadow-2xl"
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
                alt={thirdFeatureData.title}
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
                <ProgressSpan duration={10000}>
                  {thirdFeatureData.category}
                </ProgressSpan>
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