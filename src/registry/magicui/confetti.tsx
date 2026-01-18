"use client"

import { useRef, useEffect, forwardRef, useImperativeHandle } from "react"
import confetti from "canvas-confetti"
import { cn } from "@/lib/utils"

export interface ConfettiRef {
  fire: (options?: confetti.Options) => void
}

interface ConfettiProps extends React.HTMLAttributes<HTMLCanvasElement> {
  onMouseEnter?: () => void
}

const Confetti = forwardRef<ConfettiRef, ConfettiProps>(
  ({ className, onMouseEnter, ...props }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const confettiRef = useRef<confetti.CreateTypes | null>(null)

    useEffect(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        
        // Set initial canvas size before creating confetti
        const rect = canvas.getBoundingClientRect()
        canvas.width = rect.width || window.innerWidth
        canvas.height = rect.height || 400
        
        // Create confetti instance - resize: true will handle automatic resizing
        confettiRef.current = confetti.create(canvas, {
          resize: true,
          useWorker: false, // Disable worker to allow manual resizing if needed
        })
      }
    }, [])

    useImperativeHandle(ref, () => ({
      fire: (options?: confetti.Options) => {
        if (confettiRef.current) {
          confettiRef.current({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            ...options,
          })
        }
      },
    }))

    return (
      <canvas
        ref={canvasRef}
        className={cn("pointer-events-none absolute inset-0 z-[100]", className)}
        onMouseEnter={onMouseEnter}
        {...props}
      />
    )
  }
)

Confetti.displayName = "Confetti"

export { Confetti }

