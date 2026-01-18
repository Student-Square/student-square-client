"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  category?: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Student Square Launches One Minute Investment Project",
    date: "December 15, 2024",
    image: "/images/hero/student-square-one-minute-investment-project.jpg",
    category: "INITIATIVE",
  },
  {
    id: 2,
    title: "16th Group Counselling Workshop Held in Godagari, Rajshahi",
    date: "November 28, 2024",
    image: "/images/hero/Student-square-16th-group-counselling-workshop-godagari-rajshahi.jpg",
  },
  {
    id: 3,
    title: "Tree Plantation Drive: Students Lead Environmental Action",
    date: "November 10, 2024",
    image: "/images/hero/tree-plantation-by-student-square.jpg",
  },
];

const News = () => {
  return (
    <section className="bg-white dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
      <div className="container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-black dark:text-white">
          Student Square in the news
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Main News Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 group cursor-pointer"
          >
            <Link href="/news-details" className="block h-full">
              <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Background image */}
                <Image
                  src={newsData[0].image}
                  alt={newsData[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
                  {newsData[0].category && (
                    <span className="inline-block text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl mb-3 drop-shadow-lg">
                      {newsData[0].category}
                    </span>
                  )}
                  <p className="text-white/90 text-sm md:text-base mb-3 font-medium">{newsData[0].date}</p>
                  <h3 className="text-white text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
                    {newsData[0].title}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Side News Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {newsData.slice(1).map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer flex-1"
              >
                <Link href="/news-details" className="block h-full">
                  <div className="relative h-full min-h-[200px] md:min-h-[240px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                      <p className="text-white/90 text-xs md:text-sm mb-2 font-medium">{news.date}</p>
                      <h3 className="text-white text-sm md:text-base lg:text-lg font-semibold leading-tight">
                        {news.title}
                      </h3>
                    </div>
                    {/* User icon indicator */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-500/80 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All News Button */}
        <div className="text-center relative">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 px-8 py-4 text-white font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            View All News
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          {/* User icon next to button */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hidden lg:flex">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

