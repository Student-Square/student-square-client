import SectionTitle from "../Common/SectionTitle";
import StoryCard from "../Stories/StoryCard";
import { storiesData } from "../Stories/storiesData";

const Stories = () => {
  return (
    <section id="stories" className="relative z-10 py-10 md:py-14 lg:py-22">
      <div className="container px-8 md:px-12 lg:px-16">
          {/* Custom Modern Title Section */}
          <div className="relative mb-16 text-center overflow-hidden px-8 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16 rounded-3xl border-l border-r border-border/50 bg-background/50 dark:border-gray-600/50 backdrop-blur-sm">
          {/* Background blending sides */}
          <div className="absolute inset-y-0 -left-8 w-16 bg-gradient-to-r from-background to-transparent z-20"></div>
          <div className="absolute inset-y-0 -right-8 w-16 bg-gradient-to-l from-background to-transparent z-20"></div>
          
          {/* Subtle Blended Mesh Background */}
          <div className="absolute inset-0 -z-10">
            {/* Soft top gradient */}
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-primary/8 via-blue-500/5 to-transparent"></div>
            
            {/* Soft bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-500/8 via-pink-500/5 to-transparent"></div>
            
            {/* Center subtle glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-primary/6 via-blue-500/3 to-transparent rounded-full blur-3xl animate-pulse"></div>
            
            {/* Side soft accents */}
            <div className="absolute top-1/4 left-0 w-1/4 h-1/2 bg-gradient-to-r from-green-500/4 to-transparent blur-2xl animate-pulse delay-500"></div>
            <div className="absolute bottom-1/4 right-0 w-1/4 h-1/2 bg-gradient-to-l from-orange-500/4 to-transparent blur-2xl animate-pulse delay-1000"></div>
                </div>
          
          {/* Main Title */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 dark:border-border dark:bg-secondary">
              <span className="text-sm font-medium text-muted-foreground dark:text-muted-foreground">Student Success Stories</span>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground dark:text-foreground sm:text-5xl lg:text-6xl">
              Hundreds of Inspiring <span className="text-primary dark:text-primary">Student Success</span>
            </h1>

            {/* Description */}
            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground dark:text-muted-foreground sm:text-xl">
              Discover the transformative journeys of students who have grown, learned, and made a difference through
              Student Square's programs.
            </p>
          </div>
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
