"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface StarPopInProps {
  pacificoClassName?: string
}

export function StarPopIn({ pacificoClassName }: StarPopInProps) {
  return (
    <motion.span
      className={cn(
        "inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold",
        pacificoClassName
      )}
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      ✨
    </motion.span>
  )
}

