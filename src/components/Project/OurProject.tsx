import SectionTitle from "../Common/SectionTitle";
import ProjectCarousel from "./ProjectCarousel";

const OurProject = () => {
  return (
    <section id="projects" className="pt-6 md:pt-8 lg:pt-12">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          {/* Section Title */}
          <div className="mb-16 text-center">
            <SectionTitle
              title="Our Amazing Projects"
              paragraph="Explore our portfolio of innovative projects that showcase our expertise in modern web development, mobile applications, and cutting-edge technologies."
              center
              mb="80px"
            />
          </div>

          {/* Project Carousel */}
          <div className="flex justify-center">
            <ProjectCarousel />
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-body-color mb-6 text-lg">
              Interested in working with us? Let&apos;s discuss your next project.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Start Your Project
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
      </div>
    </section>
  );
};

export default OurProject;
