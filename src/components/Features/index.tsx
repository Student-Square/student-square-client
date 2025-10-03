"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"

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
                    "bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-gray-800 to-rose-600 dark:from-indigo-300 dark:via-white/90 dark:to-rose-300",
                    pacifico.className,
                  )}
                >
                  Starts Here
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

          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={getTransition(0.6 + index * 0.15)}
              >
                <Link
                  href={card.href}
                  className="group relative block overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm ring-1 ring-gray-200/50 dark:ring-white/[0.08] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.1)] transition-all duration-500 will-change-transform hover:-translate-y-2 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_25px_60px_-12px_rgba(255,255,255,0.2)] hover:ring-gray-300/50 dark:hover:ring-white/[0.15]"
                >
                  {/* Removed color fill overlay so image stays fully visible on hover */}

                  <div className="relative aspect-[4/5] sm:aspect-[1/1] z-10">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      fill
                      priority={index < 2}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Enhanced gradient overlay for readability - very light */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

                    <div
                      className={`pointer-events-none absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-r ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]`}
                    >
                      <div className="w-full h-full rounded-[2rem] sm:rounded-[2.5rem] bg-transparent" />
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-20">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wide drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">
                        {card.title}
                      </h3>
                      <div
                        className={`relative inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/70 bg-white/15 dark:bg-white/10 text-white shadow-lg ring-2 ring-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
                      >
                        {/* Gradient fill appears on hover */}
                        <span className={`absolute inset-0 rounded-full bg-gradient-to-r ${card.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="relative z-10 h-6 w-6 text-white"
                        >
                          <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M13 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-2 h-2 bg-gray-600/60 dark:bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" />
                  <div
                    className="absolute top-8 right-8 w-1 h-1 bg-gray-500/40 dark:bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-ping"
                    style={{ animationDelay: "300ms" }}
                  />
                  <div
                    className="absolute top-6 right-12 w-1.5 h-1.5 bg-gray-600/50 dark:bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-600 animate-ping"
                    style={{ animationDelay: "150ms" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60 dark:from-[#030303] dark:via-transparent dark:to-[#030303]/60 pointer-events-none" />
      </section>
    </>
  )
}

export default Features
