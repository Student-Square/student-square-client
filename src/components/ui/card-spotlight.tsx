"use client";

import React, { MouseEvent, useRef, useState } from "react";
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
    const updateMousePosition = (ev: MouseEvent | any) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition as any);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition as any);
    };
  }, []);

  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });
  const handleMouseMove = ({ currentTarget, clientX, clientY }: any) => {
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
          "group relative rounded-lg overflow-hidden w-full h-full"
        )}
      >
        {isHovered && (
          <div
            className="pointer-events-none absolute opacity-0 z-10 rounded-xl w-full h-full group-hover:opacity-100 transition duration-300"
            style={{
              background: `radial-gradient(250px circle at ${overlayColor.x}px ${overlayColor.y}px, rgba(255,255,255,0.068), transparent 80%)`,
            }}
          />
        )}

        <div
          className="absolute opacity-0 group-hover:opacity-100 z-10 inset-0 bg-fixed rounded-lg"
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


