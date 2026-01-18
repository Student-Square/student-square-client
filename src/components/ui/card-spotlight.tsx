"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CardSpotlightProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CardSpotlight({ children, className }: CardSpotlightProps) {
  const boxWrapper = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = React.useState<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });

  React.useEffect(() => {
    const updateMousePosition = (ev: globalThis.MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });
  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = (currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    setOverlayColor({ x, y });
  };

  return (
    <div className={cn("relative", className)}>
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={boxWrapper}
        className={cn(
          "group relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden w-full h-full"
        )}
      >
        {isHovered && (
          <div
            className="pointer-events-none absolute opacity-0 z-10 rounded-[2rem] sm:rounded-[2.5rem] w-full h-full group-hover:opacity-100 transition duration-300"
            style={{
              background: `radial-gradient(250px circle at ${overlayColor.x}px ${overlayColor.y}px, rgba(255,255,255,0.068), transparent 80%)`,
            }}
          />
        )}

        <div
          className="absolute opacity-0 group-hover:opacity-100 z-10 inset-0 bg-fixed rounded-[2rem] sm:rounded-[2.5rem]"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #ffffff76 0%, transparent 20%, transparent) fixed`,
          }}
        ></div>

        <div className="relative z-20 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}


