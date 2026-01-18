"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { projectsData, Project } from "./projectData";

interface ProjectCarouselProps {
  projects?: Project[];
}

const ProjectCarousel = ({ projects = projectsData }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const handleProjectClick = (project: Project) => {
    // You can implement navigation logic here
    // Example: router.push(project.link);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={project.id} className="w-full flex-shrink-0">
              <div 
                className="relative cursor-pointer group"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Dark gradient overlay with progressive backdrop blur */}
                  <div className="absolute bottom-0 left-0 right-0 h-[25%]">
                    {/* Dark gradient overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.65) 20%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.2) 85%, transparent 100%)',
                      }}
                    />
                    
                    {/* Progressive backdrop blur layers - strongest at bottom, reducing upward */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        maskImage: 'linear-gradient(to top, black 0%, black 25%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, black 0%, black 25%, transparent 100%)',
                      }}
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)',
                        maskImage: 'linear-gradient(to top, transparent 0%, black 25%, black 50%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 25%, black 50%, transparent 100%)',
                      }}
                    />
                    <div 
                      className="absolute inset-0"
                      style={{
                        backdropFilter: 'blur(2px)',
                        WebkitBackdropFilter: 'blur(2px)',
                        maskImage: 'linear-gradient(to top, transparent 50%, black 75%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, transparent 50%, black 75%, transparent 100%)',
                      }}
                    />
                  </div>
                  
                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Previous project"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Next project"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default ProjectCarousel;
