"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "motion/react"
import TextAnimate from "@/components/ui/text-animate"
import { cn } from "@/lib/utils"

interface LoopingTextProps {
  text: string
  className?: string
  pacificoClassName?: string
}

export function LoopingText({ 
  text, 
  className,
  pacificoClassName 
}: LoopingTextProps) {
  const [key, setKey] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isInView) {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current)
      }
      return
    }

    // Start initial animation
    setKey(0)

    const triggerAnimation = () => {
      setKey((prev) => prev + 1)
    }

    // Animation takes ~3.5 seconds (delayChildren 0.3s + stagger 0.15s * ~13 chars + duration 1.2s)
    // Then wait 10 seconds before next animation
    // Total cycle: ~13.5 seconds (3.5s animation + 10s wait)
    const ANIMATION_DURATION = 3500 // ~3.5 seconds for full animation
    const WAIT_TIME = 10000 // 10 seconds wait after animation
    const TOTAL_CYCLE = ANIMATION_DURATION + WAIT_TIME // 13.5 seconds

    const scheduleNext = () => {
      // Wait for animation to complete + 10 seconds wait
      intervalRef.current = setTimeout(() => {
        triggerAnimation()
        scheduleNext() // Schedule the next cycle
      }, TOTAL_CYCLE)
    }

    // Start the cycle after initial animation completes and 10s wait
    intervalRef.current = setTimeout(() => {
      scheduleNext()
    }, TOTAL_CYCLE) // Wait for animation + 10s before first restart

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current)
      }
    }
  }, [isInView])

  return (
    <span ref={ref} className="inline-block">
      <TextAnimate
        key={key}
        text={text}
        type="fadeInUp"
        className={cn(
          "mt-0 py-0 px-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-300 via-gray-500 to-green-300 dark:from-indigo-300 dark:via-white/90 dark:to-rose-300",
          pacificoClassName,
          className
        )}
        style={{ display: "inline-flex", overflow: "hidden" }}
        transition={{
          staggerChildren: 0.15,
          delayChildren: 0.3,
          duration: 1.2,
        }}
      />
    </span>
  )
}

