"use client";

import React, { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  children: React.ReactNode;
  className?: string;
  ProximitySpotlight?: boolean;
  HoverFocusSpotlight?: boolean;
  CursorFlowGradient?: boolean;
};

export default function Spotlight({
  children,
  className,
  ProximitySpotlight = true,
  HoverFocusSpotlight = false,
  CursorFlowGradient = true,
}: SpotlightProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    wrapperRef.current.style.setProperty("--spot-x", `${x}px`);
    wrapperRef.current.style.setProperty("--spot-y", `${y}px`);
  }, []);

  const enableHover = HoverFocusSpotlight || CursorFlowGradient;

  return (
    <div
      ref={wrapperRef}
      onMouseMove={enableHover ? handleMouseMove : undefined}
      onMouseEnter={enableHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={enableHover ? () => setIsHovered(false) : undefined}
      className={cn(
        className,
        "relative rounded-lg justify-center items-center p-[2px] bg-[#ffffff15] overflow-hidden"
      )}
    >
      {/* Gradient border shimmer (subtle) */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-[inherit] opacity-40 transition-opacity duration-500"
        style={{
          background:
            "conic-gradient(at 20% 20%, #f43f5e, #f59e0b, #84cc16, #22d3ee, #a78bfa, #f43f5e)",
          mask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor" as any,
          maskComposite: "exclude" as any,
          padding: 1,
          opacity: isHovered ? 0.7 : 0.4,
        }}
      />

      {/* Content container */}
      <div className="relative rounded-[inherit] overflow-hidden">
        {children}
        {/* Spotlight overlay */}
        {(ProximitySpotlight || enableHover) && (
          <div
            className={cn(
              "pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300",
              isHovered ? "opacity-100" : HoverFocusSpotlight ? "opacity-0" : "opacity-100"
            )}
            style={{
              background: CursorFlowGradient
                ? `radial-gradient(200px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255,255,255,0.16), transparent 45%),
                   radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(99,102,241,0.08), transparent 60%)`
                : `radial-gradient(180px circle at 50% 50%, rgba(255,255,255,0.14), transparent 45%)`,
            }}
          />
        )}
      </div>
    </div>
  );
}


