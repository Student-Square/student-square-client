"use client"

import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Mohammad Kamrul Hasan",
    designation: "District Magistrate, Dhaka District",
    content:
      "Student Square has been instrumental in empowering our youth and creating positive change in our communities. Their programs on emergency response training, environmental conservation, and community development have made a significant impact.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Dr. Ayesha Khatun",
    designation: "Additional Secretary, Ministry of Education",
    content:
      "The work Student Square is doing with students across Bangladesh is truly commendable. Their focus on practical skills, leadership development, and community service aligns perfectly with our educational goals.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Abdul Karim",
    designation: "Deputy Commissioner, Rajshahi Division",
    content:
      "Student Square's initiatives have transformed how students engage with their communities. Their tree plantation drives, educational workshops, and emergency training programs have created lasting positive change.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Fatima Begum",
    designation: "Mayor, Chittagong City Corporation",
    content:
      "We have seen remarkable improvements in student engagement and community participation since Student Square began their programs in our city. Their commitment to youth development is outstanding.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 5,
    name: "Dr. Rahman Ali",
    designation: "Vice Chancellor, University of Dhaka",
    content:
      "Student Square bridges the gap between academic learning and practical community service. Our students have gained invaluable experience through their programs that complements their education perfectly.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 6,
    name: "Nazma Akter",
    designation: "Director, Social Welfare Department",
    content:
      "The impact of Student Square's work extends far beyond the students themselves. They are building stronger communities and creating a culture of service and responsibility among our youth.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const ReviewCard = ({
  img,
  name,
  designation,
  body,
}: {
  img: string
  name: string
  designation: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 shrink-0 cursor-pointer overflow-hidden rounded-xl border p-6 flex flex-col",
        // light styles
        "border-gray-950/[.1] bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-dark dark:hover:bg-gray-800/50"
      )}
    >
      <div className="flex flex-row items-center gap-3 mb-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/20">
          <Image src={img} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-bold dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/60">{designation}</p>
        </div>
      </div>
      <blockquote className="text-sm leading-relaxed text-body-color dark:text-white/90 flex-grow">
        &ldquo;{body}&rdquo;
      </blockquote>
    </figure>
  )
}

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What People say to us"
          paragraph="Hear from distinguished government officials, educators, and community leaders about the impact of Student Square's programs and initiatives across Bangladesh."
          center
        />

        <div className="relative flex w-full flex-col overflow-hidden mt-12">
          <Marquee pauseOnHover className="[--duration:30s] [--gap:1.5rem] w-full">
            {testimonialData.map((testimonial) => (
              <ReviewCard 
                key={testimonial.id} 
                img={testimonial.image}
                name={testimonial.name}
                designation={testimonial.designation}
                body={testimonial.content}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-light dark:from-bg-color-dark z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-light dark:from-bg-color-dark z-10"></div>
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
