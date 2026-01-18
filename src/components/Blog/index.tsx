import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Link from "next/link";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Stay updated with the latest news, blog posts, and initiatives from Student Square as we work together for a better Bangladesh."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full flex">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:mt-16 lg:mt-20">
          <Link
            href="/blog"
            className="inline-block rounded-full bg-primary px-8 py-4 text-center text-base font-semibold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg transform hover:-translate-y-1"
          >
            See All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
