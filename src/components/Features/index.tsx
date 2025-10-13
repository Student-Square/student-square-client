"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import Stats from "@/components/Stats"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15] dark:border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

const cards = [
  {
    href: "/blog",
    title: "Blog",
    image: "/images/blog/post-01.jpg",
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "from-purple-500 to-pink-500",
  },
  {
    href: "/",
    title: "Magazine",
    image: "/images/hero/dhaka-international-featured.jpg",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    href: "/",
    title: "Real‑life Stories",
    image: "/images/hero/relation-will-be-cooperative-for-social-building.jpg",
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "from-emerald-500 to-teal-500",
  },
]

const Features = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const getTransition = (delay: number) => ({
    duration: 1,
    delay,
    ease: "easeOut" as const,
  })

  return (
    <>
      <section
        id="features"
        className="relative py-20 md:py-24 lg:py-32 overflow-hidden bg-white dark:bg-[#080321]"
      >
        <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-20 hero-gradient"></div>

        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            delay={0.2}
            width={500}
            height={120}
            rotate={15}
            gradient="from-purple-500/[0.12]"
            className="left-[-8%] top-[10%]"
          />

          <ElegantShape
            delay={0.4}
            width={400}
            height={100}
            rotate={-12}
            gradient="from-blue-500/[0.12]"
            className="right-[-5%] top-[60%]"
          />

          <ElegantShape
            delay={0.3}
            width={300}
            height={80}
            rotate={-10}
            gradient="from-emerald-500/[0.12]"
            className="left-[8%] bottom-[8%]"
          />

          <ElegantShape
            delay={0.5}
            width={250}
            height={70}
            rotate={18}
            gradient="from-pink-500/[0.12]"
            className="right-[12%] top-[15%]"
          />

          <ElegantShape
            delay={0.6}
            width={180}
            height={50}
            rotate={-20}
            gradient="from-cyan-500/[0.12]"
            className="left-[18%] top-[8%]"
          />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={getTransition(0.3)}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-700 dark:from-white dark:to-white/80">
                  Your Change
                </span>
                <br />
                <span
                  className={cn(
                    "bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-gray-500 to-green-300 dark:from-indigo-300 dark:via-white/90 dark:to-rose-300",
                    pacifico.className,
                  )}
                >
                  Starts Here ✨
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={getTransition(0.45)}
            >
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-white/50 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
                All you need is real time data and real‑life Stories to shape your career
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-slate-950/50 transition-all duration-500 hover:-translate-y-2 border border-slate-200/50 dark:border-slate-800/50"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 dark:group-hover:from-blue-500/20 dark:group-hover:via-purple-500/20 dark:group-hover:to-pink-500/20 transition-all duration-500 z-10 pointer-events-none" />

              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  src={card.image || "/placeholder.svg"}
                  width={400}
                  height={300}
                  alt={card.title}
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="relative p-6 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-900/50 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      Explore more →
                    </p>
                  </div>

                  {/* Modern button */}
                  <button
                    className="relative w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-500 flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-xl group-hover:shadow-blue-500/50 dark:group-hover:shadow-blue-500/30"
                    aria-label={`View ${card.title}`}
                  >
                    {/* Arrow icon */}
                    <svg
                      className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-white transition-all duration-500 transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>

                    {/* Ripple effect */}
                    <span className="absolute inset-0 rounded-full bg-white/30 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  </button>
                </div>

                {/* Decorative line */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700" />
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          ))}
        </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60 dark:from-[#030303] dark:via-transparent dark:to-[#030303]/60 pointer-events-none" />
      </section>
      
      <Stats />
    </>
  )
}

export default Features
