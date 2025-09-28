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
      className="mx-auto px-4 container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Grid Container */}
      <div className="grid grid-cols-3 gap-6 h-[700px] border ">
        {/* First Column - Takes 2/3 width (2 columns) */}
        <div className="col-span-2 flex flex-col gap-6">
          {/* First Row - Full width card taking 2/3 height */}
          <motion.div
            className="flex-[2] rounded-3xl overflow-hidden relative group shadow-2xl"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Boys in boat on river with cityscape"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
              blurIntensity={2}
            />
            <div className="absolute bottom-0 p-6 flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span className="text-white/90 text-sm uppercase tracking-wider mb-3 font-semibold">
                  Feature Stories
                </span>
                <h3 className="text-3xl font-bold text-white leading-tight drop-shadow-lg">
                  Conserving & restoring waterways can mitigate extreme urban heat in Bangladesh
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Second Row - Two cards side by side */}
          <div className="flex gap-6 flex-[1]">
            {/* Travelogue Card */}
            <motion.div
              className="flex-1 rounded-3xl overflow-hidden relative group shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="People dining together"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <ProgressiveBlur
                className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
                blurIntensity={2}
              />
              <div className="absolute bottom-0 p-6 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <span className="text-white/90 text-sm uppercase tracking-wider mb-3 font-semibold">
                    Travelogue
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-lg">
                    A full circle moment
                  </h3>
                </motion.div>
              </div>
            </motion.div>

            {/* Reportage Card */}
            <motion.div
              className="flex-1 rounded-3xl overflow-hidden relative group shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Person riding bicycle rickshaw in rain"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <ProgressiveBlur
                className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
                blurIntensity={2}
              />
              <div className="absolute bottom-0 p-6 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <span className="text-white/90 text-sm uppercase tracking-wider mb-3 font-semibold">
                    Reportage
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-lg">
                    Cyclone Remal downgraded, moves inland
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Second Column - Takes 1/3 width (1 column) */}
        <div className="col-span-1 flex flex-col gap-6">
          {/* First Row - Equal height card */}
          <motion.div
            className="flex-1 rounded-3xl overflow-hidden relative group shadow-2xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Person pointing in forest"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
              blurIntensity={2}
            />
            <div className="absolute bottom-0 p-6 flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span className="text-white/90 text-sm uppercase tracking-wider mb-3 font-semibold">
                  Feature Stories
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-lg">
                  Scientists are racing to save South Asia's butterflies from the threat of extinction
                </h3>
              </motion.div>
            </div>
          </motion.div>

          {/* Second Row - Equal height card */}
          <motion.div
            className="flex-1 rounded-3xl overflow-hidden relative group shadow-2xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Two young boys portrait"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
              blurIntensity={2}
            />
            <div className="absolute bottom-0 p-6 flex flex-col justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <span className="text-white/90 text-sm uppercase tracking-wider mb-3 font-semibold">
                  Feature Stories
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-lg">
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
