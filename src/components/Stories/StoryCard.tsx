"use client";

import Image from "next/image";
import { StudentStory } from "./storiesData";

const StoryCard = (props: {
  story: StudentStory;
}) => {
  const { story } = props;

  const handleCardClick = () => {
    window.location.href = `/stories/${story.id}`;
  };

  return (
    <div className="w-full">
      <div 
        className="shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark relative z-10 rounded-lg bg-white overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
        onClick={handleCardClick}
      >
        {/* Rectangular Image Header */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={story.image}
            alt={story.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Student Name Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white text-xl font-bold mb-1">
              {story.name}
            </h3>
            <p className="text-white/90 text-sm font-medium">
              {story.role}
            </p>
            <p className="text-white/80 text-xs">
              {story.university}
            </p>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Quote */}
          <div className="mb-4">
            <blockquote className="text-body-color italic text-center text-sm leading-relaxed border-l-4 border-primary pl-4 line-clamp-2">
              "{story.quote}"
            </blockquote>
          </div>

          {/* Story */}
          <div className="mb-4">
            <p className="text-body-color text-sm leading-relaxed line-clamp-2">
              {story.story}
            </p>
          </div>

          {/* Achievement */}
          <div className="text-center">
            <div className="bg-primary/10 text-primary inline-block rounded-full px-4 py-2 text-xs font-semibold">
              {story.achievement}
            </div>
          </div>
        </div>

        {/* Bottom SVG Decoration */}
        <div className="absolute right-0 bottom-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
