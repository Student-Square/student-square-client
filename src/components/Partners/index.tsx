"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Partner {
  id: number;
  name: string;
  logo: string;
  logoLight?: string;
  website?: string;
}

const partnersData: Partner[] = [
  {
    id: 1,
    name: "Dhaka University",
    logo: "/images/partners/dhaka-university.png",
    website: "https://www.du.ac.bd",
  },
  {
    id: 2,
    name: "US Department of State",
    logo: "/images/partners/U.S._Department_of_State_official_seal.webp",
    website: "https://bd.usembassy.gov",
  },
  {
    id: 3,
    name: "French Embassy",
    logo: "/images/partners/french.png",
    website: "https://bd.ambafrance.org",
  },
  {
    id: 4,
    name: "BRAC University",
    logo: "/images/partners/brac-university.png",
    website: "https://www.bracu.ac.bd",
  },
  {
    id: 5,
    name: "North South University",
    logo: "/images/partners/nsu.png",
    website: "https://www.northsouth.edu",
  },
];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplicate partners for seamless infinite loop (need at least 2 sets)
  const duplicatedPartners = [...partnersData, ...partnersData];

  // Auto-play functionality - continuously running with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Reset seamlessly when reaching end
        if (nextIndex >= partnersData.length) {
          // Use setTimeout to reset position without transition
          setTimeout(() => {
            setCurrentIndex(0);
          }, 1000); // After transition completes
          return partnersData.length;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
      <div className="container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-black dark:text-white">
          Our partners
        </h2>

        <div className="relative overflow-hidden">
          {/* Auto-running Carousel Container */}
          <div className="relative p-6 md:p-8 lg:p-12">
            {/* Partners Slider */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 4)}%)`,
                }}
              >
                {duplicatedPartners.map((partner, index) => (
                  <div
                    key={`${partner.id}-${index}`}
                    className="flex-shrink-0 w-1/2 md:w-1/4 px-2 md:px-3 lg:px-4"
                  >
                    <div className="flex items-center justify-center p-3 md:p-4 hover:scale-105 transition-transform duration-300">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-full h-16 md:h-20 lg:h-24"
                      >
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain"
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

