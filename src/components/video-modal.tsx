"use client";

import { createPortal } from "react-dom";
import { useEffect } from "react";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
} & (
  | {
      channel: "youtube";
      videoId: string;
    }
  | {
      channel?: "custom";
      src: string;
    }
);

export default function VideoModal({ isOpen, onClose, ...props }: PropsType) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  let src = "";

  if (props.channel === "youtube") {
    // YouTube embed URL with parameters to disable recommendations, ads, and related videos
    const params = new URLSearchParams({
      autoplay: "1",
      rel: "0", // Don't show related videos
      modestbranding: "1", // Reduce YouTube branding
      controls: "1", // Show player controls
      fs: "1", // Allow fullscreen
      iv_load_policy: "3", // Don't show annotations
      cc_load_policy: "0", // Don't show captions by default
      playsinline: "1", // Play inline on mobile
      enablejsapi: "1", // Enable JavaScript API
      origin: typeof window !== "undefined" ? window.location.origin : "",
    });
    src = `https://www.youtube.com/embed/${props.videoId}?${params.toString()}`;
  } else {
    src = props.src;
  }

  return createPortal(
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl mx-4 bg-black rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 text-white hover:text-gray-300 transition-colors"
          aria-label="Close video modal"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Video player"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
