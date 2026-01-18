import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The Power of Youth: Transformative Journeys in Bangladesh",
    paragraph:
      "Explore how students are leading community development projects and creating lasting impact through Student Square's initiatives.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-03.png",
      designation: "Program Coordinator",
    },
    tags: ["Leadership"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Green Innovation: Students Planting 1 Lakh Palm Trees",
    paragraph:
      "Learn about our ambitious environmental mission and the dedicated students making our green initiatives a reality.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Environmentalist",
    },
    tags: ["Sustainability"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Emergency Response: Training the Next Generation",
    paragraph:
      "Discover the critical skills our volunteers are learning to serve their communities during natural disasters and emergencies.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Safety Trainer",
    },
    tags: ["Service"],
    publishDate: "2025",
  },
];
export default blogData;
