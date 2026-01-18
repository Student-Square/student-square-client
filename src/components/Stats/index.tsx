"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

const stats = [
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          className="stroke-blue-500 dark:stroke-blue-400"
        />
      </svg>
    ),
    number: 115.0,
    suffix: "",
    description: "children reached",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accent: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500 dark:text-blue-400",
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          className="stroke-purple-500 dark:stroke-purple-400"
        />
      </svg>
    ),
    number: 121.0,
    suffix: "",
    description: "countries where we worked",
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500 dark:text-purple-400",
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-1.964-1.333-2.732 0L3.732 16c-.77 1.333.192 3 1.732 3z"
          className="stroke-emerald-500 dark:stroke-emerald-400"
        />
      </svg>
    ),
    number: 99.0,
    suffix: "",
    description: "emergencies responded to",
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "from-emerald-500 to-teal-500",
    iconColor: "text-emerald-500 dark:text-emerald-400",
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          className="stroke-orange-500 dark:stroke-orange-400"
        />
      </svg>
    ),
    number: 99.0,
    suffix: "",
    description: "policy changes achieved",
    gradient: "from-orange-500/20 to-amber-500/20",
    accent: "from-orange-500 to-amber-500",
    iconColor: "text-orange-500 dark:text-orange-400",
  },
]

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Set initial value immediately
  useEffect(() => {
    if (ref.current && !ref.current.textContent) {
      const formatted = value % 1 === 0 ? value.toFixed(0) : value.toFixed(1)
      ref.current.textContent = `${formatted}${suffix}`
    }
  }, [value, suffix])

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    } else {
      // If not in view yet, still set the value (for immediate display)
      if (ref.current) {
        const formatted = value % 1 === 0 ? value.toFixed(0) : value.toFixed(1)
        ref.current.textContent = `${formatted}${suffix}`
      }
    }
  }, [motionValue, isInView, value, suffix])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        // Format number with one decimal place if it's not a whole number
        const formatted = latest % 1 === 0 ? latest.toFixed(0) : latest.toFixed(1)
        ref.current.textContent = `${formatted}${suffix}`
      }
    })
    
    return () => unsubscribe()
  }, [springValue, suffix])

  return <span ref={ref} className="inline-block" />
}


const Stats = () => {
  return (
    <section className="relative pt-6 pb-12 sm:pt-8 sm:pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24 overflow-hidden bg-white dark:bg-[#131B4C]">
      {/* Glassmorphism background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/6 transform -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-1/6 transform -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-indigo-500/8 dark:bg-indigo-500/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />

      <div className="container relative mx-auto px-4">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Our Impact in Numbers
            </span>
          </motion.div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight px-4">
          A Strong Community of 
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            5000+ Students
            </span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed px-4">
            Making a difference across the globe with measurable impact
          </p>
        </motion.div>

        {/* Mobile Grid Layout */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={`mobile_${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/60 dark:bg-slate-800/30 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-xl">
                {/* Icon container */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-2 sm:p-3 mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.gradient} backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg`}
                >
                  <div className={stat.iconColor}>
                    {stat.icon}
                  </div>
                </motion.div>

                {/* Number with counter animation */}
                <div className={`text-xl sm:text-2xl font-bold mb-1 sm:mb-2 bg-gradient-to-br ${stat.accent} bg-clip-text text-transparent`}>
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative gradient accent */}
                <div className={`absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${stat.gradient} rounded-bl-full opacity-30`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop & Tablet Grid Layout */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              {/* Animated gradient glow on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.accent} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500`} />

              {/* Glassmorphism Card */}
              <div className="relative h-full p-6 sm:p-7 lg:p-8 rounded-2xl bg-white/60 dark:bg-slate-800/30 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                {/* Icon container with glassmorphism */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-3 sm:p-4 mb-4 sm:mb-6 rounded-xl bg-gradient-to-br ${stat.gradient} backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <div className={stat.iconColor}>
                    {stat.icon}
                  </div>
                </motion.div>

                {/* Number with counter animation */}
                <div className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 bg-gradient-to-br ${stat.accent} bg-clip-text text-transparent transition-all duration-300`}>
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative gradient accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${stat.gradient} rounded-bl-full opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 sm:mt-16 md:mt-20 h-px w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-gray-300/50 dark:via-white/20 to-transparent"
        />
      </div>
    </section>
  )
}

export default Stats
