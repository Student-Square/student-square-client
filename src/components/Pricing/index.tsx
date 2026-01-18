"use client"

import { useRef, useEffect } from "react"
import SectionTitle from "../Common/SectionTitle";
import StoryCard from "../Stories/StoryCard";
import { storiesData } from "../Stories/storiesData";
import { Confetti, type ConfettiRef } from "@/registry/magicui/confetti";

const Stories = () => {
  const confettiRef = useRef<ConfettiRef>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const fireCountRef = useRef(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && confettiRef.current && fireCountRef.current < 2) {
            // Fire confetti when "Student Success Stories" badge comes into view
            confettiRef.current.fire({
              particleCount: 150,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'],
            })
            
            fireCountRef.current += 1
            
            // Fire second time after a short delay
            if (fireCountRef.current === 1) {
              setTimeout(() => {
                if (confettiRef.current) {
                  confettiRef.current.fire({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'],
                  })
                  fireCountRef.current += 1
                }
              }, 500)
            }
            
            // Disconnect after second fire
            if (fireCountRef.current >= 2) {
              observer.disconnect()
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    if (badgeRef.current) {
      observer.observe(badgeRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stories" className="relative z-20 py-10 md:py-14 lg:py-22 overflow-hidden">
      <Confetti
        ref={confettiRef}
        className="absolute top-0 left-0 w-full h-[400px] !z-[100]"
        style={{ width: '100vw', left: '50%', transform: 'translateX(-50%)' }}
      />
      <div className="container relative z-10 px-8 md:px-12 lg:px-16">
          {/* Modern Clean Title Section */}
          <div className="relative mb-16 text-center">
            {/* Badge - Modern Style */}
            <div ref={badgeRef} className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-5 py-2 border border-blue-200/50 dark:border-blue-800/50">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Student Success Stories</span>
            </div>

            {/* Main Heading - Clean & Bold */}
            <h1 className="mb-5 text-balance text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Hundreds of Inspiring{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Student Success
              </span>
            </h1>

            {/* Description - Subtle & Elegant */}
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
              Discover the transformative journeys of students who have grown, learned, and made a difference through
              Student Square's programs.
            </p>
          </div>

        <div className="relative">
          {/* Background blending for stories grid */}
          <div className="absolute inset-y-0 -left-8 w-16 bg-gradient-to-r from-background to-transparent z-20"></div>
          <div className="absolute inset-y-0 -right-8 w-16 bg-gradient-to-l from-background to-transparent z-20"></div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {storiesData.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>

        {/* View All Stories Button */}
        <div className="mt-16 text-center">
          <a
            href="/stories"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 hover:shadow-lg"
          >
            View All Stories
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="ml-2 fill-current"
            >
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 8.5L8 12l-3.5-3.5L6 7h4l1.5 1.5z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Stories;
