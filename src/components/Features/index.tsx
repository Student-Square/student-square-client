"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import Stats from "@/components/Stats"
import TextAnimate from "@/components/ui/text-animate"
import { StarPopIn } from "./StarPopIn"

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
        className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-white dark:bg-[#131B4C]"
      >
        <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-20 "></div>

        <div className="absolute inset-0 overflow-hidden">
          {/* Large shapes - visible on md and up */}
          <ElegantShape
            delay={0.2}
            width={500}
            height={120}
            rotate={15}
            gradient="from-purple-500/[0.12]"
            className="hidden md:block left-[-8%] top-[10%]"
          />

          <ElegantShape
            delay={0.4}
            width={400}
            height={100}
            rotate={-12}
            gradient="from-blue-500/[0.12]"
            className="hidden lg:block right-[-5%] top-[60%]"
          />

          <ElegantShape
            delay={0.3}
            width={300}
            height={80}
            rotate={-10}
            gradient="from-emerald-500/[0.12]"
            className="hidden md:block left-[8%] bottom-[8%]"
          />

          <ElegantShape
            delay={0.5}
            width={250}
            height={70}
            rotate={18}
            gradient="from-pink-500/[0.12]"
            className="hidden xl:block right-[12%] top-[15%]"
          />

          <ElegantShape
            delay={0.6}
            width={180}
            height={50}
            rotate={-20}
            gradient="from-cyan-500/[0.12]"
            className="hidden lg:block left-[18%] top-[8%]"
          />

          {/* Smaller shapes for mobile and tablet */}
          <ElegantShape
            delay={0.2}
            width={200}
            height={60}
            rotate={15}
            gradient="from-purple-500/[0.12]"
            className="block md:hidden left-[-10%] top-[5%]"
          />

          <ElegantShape
            delay={0.4}
            width={150}
            height={50}
            rotate={-12}
            gradient="from-blue-500/[0.12]"
            className="block md:hidden right-[-8%] top-[50%]"
          />

          <ElegantShape
            delay={0.3}
            width={120}
            height={40}
            rotate={-10}
            gradient="from-emerald-500/[0.12]"
            className="block sm:hidden left-[5%] bottom-[5%]"
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
                    pacifico.className,
                  )}
                >
                  <TextAnimate
                    text="Starts Here"
                    type="fadeInUp"
                    className={cn(
                      "mt-0 py-0 px-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 dark:from-indigo-300 dark:via-white/90 dark:to-rose-300 inline-block",
                      pacifico.className,
                    )}
                    style={{ display: "inline-flex", overflow: "hidden" }}
                  />
                  {" "}
                  <StarPopIn pacificoClassName={pacifico.className} />
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

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-md:max-w-md mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={getTransition(0.6 + index * 0.15)}
              className="group relative"
            >
              <Link
                href={card.href}
                className="block h-full"
              >
                <div className="relative h-full bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-800/80 dark:to-slate-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]">
                  {/* Animated gradient border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${card.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                  
                  {/* Image container */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      src={card.image || "/placeholder.svg"}
                      width={400}
                      height={300}
                      alt={card.title}
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-80 dark:opacity-90 group-hover:opacity-70 transition-opacity duration-500`} />
                  </div>

                  {/* Content section */}
                  <div className="relative p-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                        {card.title}
                      </h3>
                      
                      {/* Icon button - only visible on hover */}
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${card.accent} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0`}>
                        <svg
                          className="w-5 h-5 text-white"
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
                      </div>
                    </div>
                    
                    {/* Explore text - only visible on hover */}
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Explore →
                    </p>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </Link>
            </motion.div>
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
