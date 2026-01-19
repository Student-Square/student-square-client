"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import Stats from "@/components/Stats"
import TextAnimate from "@/components/ui/text-animate"
import { StarPopIn } from "./StarPopIn"
import featuresData from "./featuresData"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  // Map featuresData to pipeline format
  const pillars = featuresData.map((feature, index) => ({
    title: feature.title,
    desc: feature.paragraph,
    icon: feature.icon,
    id: feature.id,
  }))

  return (
    <>
      <section
        ref={sectionRef}
        id="features"
        className="relative py-12 sm:py-26 px-4 overflow-hidden bg-gradient-to-b from-white to-slate-50 text-slate-900 dark:from-[#0a1233] dark:via-[#0b163d] dark:to-[#0a1233] dark:text-white"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/15 dark:bg-cyan-400/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/15 dark:bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-200/30 via-transparent to-transparent dark:from-[#0f1f4d]/40"></div>
        </div>

        <div className="container relative z-10 max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16 sm:mb-24 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 text-cyan-700 border border-cyan-200 backdrop-blur-md text-sm font-medium mb-6 dark:bg-white/10 dark:border-white/20 dark:text-cyan-200">
              Student Square — What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white text-balance mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-indigo-100">
                Your Change
              </span>
              {" "}
              <span className={cn(pacifico.className)}>
                <TextAnimate
                  text="Starts Here"
                  type="fadeInUp"
                  className={cn(
                    "text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-emerald-400 to-teal-400 inline-block dark:from-cyan-300 dark:via-emerald-300 dark:to-teal-300",
                    pacifico.className,
                  )}
                  style={{ display: "inline-flex", overflow: "hidden" }}
                />
                {" "}
                <StarPopIn pacificoClassName={pacifico.className} />
              </span>
            </h2>
            <p className="text-base sm:text-xl text-slate-700 max-w-4xl mx-auto font-light leading-relaxed dark:text-white/80">
              Student Square empowers Bangladeshi students with mentorship, community action, and real-world opportunities.
            </p>
          </motion.div>

          {/* Pipeline Design */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Pipeline line */}
              <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-300/70 via-emerald-300/50 to-transparent dark:from-cyan-200/70 dark:via-emerald-200/50" />

              <ul className="space-y-6">
                {pillars.map((pillar, index) => (
                  <motion.li
                    key={pillar.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex gap-5 items-start">
                      {/* Node */}
                      <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md border border-slate-200 shrink-0 dark:bg-[#0f1b3f]/80 dark:border-white/10 backdrop-blur">
                        <div className="text-cyan-600 dark:text-cyan-200">
                          {pillar.icon}
                        </div>
                        {/* Connector to next node */}
                        {index !== pillars.length - 1 && (
                          <div className="absolute left-1/2 top-full -translate-x-1/2 h-6 w-px bg-gradient-to-b from-emerald-400/70 to-transparent dark:from-teal-400/70" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="group relative rounded-2xl bg-white/80 backdrop-blur-2xl border border-slate-200 hover:border-cyan-300/60 transition-colors p-5 sm:p-6 shadow-lg dark:bg-[#0c1639]/70 dark:border-white/10 dark:backdrop-blur-xl dark:shadow-[0_12px_40px_rgba(5,12,35,0.55)]">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors dark:text-white dark:group-hover:text-cyan-200">
                              {pillar.title}
                            </h3>
                            <span className="text-xs text-slate-500 font-medium dark:text-white/60">0{index + 1}</span>
                          </div>
                          <p className="mt-2 text-sm sm:text-base text-slate-700 group-hover:text-slate-900 leading-relaxed font-light transition-colors dark:text-white/80 dark:group-hover:text-white">
                            {pillar.desc}
                          </p>
                          <div className="mt-4 h-[2px] bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full w-10 group-hover:w-full transition-all duration-500 dark:from-cyan-300 dark:to-emerald-300" />
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40 dark:from-[#0b163d] dark:via-transparent dark:to-[#0b163d]/40 pointer-events-none" />
      </section>

      <Stats />
    </>
  )
}

export default Features
