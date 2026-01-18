import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, image, content, designation } = testimonial;

  return (
    <div className="w-full group h-full flex">
      <div className="relative shadow-lg hover:shadow-xl dark:bg-dark dark:shadow-gray-900/50 rounded-2xl bg-white p-8 duration-500 transition-all hover:-translate-y-1 border border-gray-100 dark:border-gray-800/50 hover:border-primary/20 dark:hover:border-primary/30 flex flex-col h-full w-full">
        {/* Decorative quote icon */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        
        <p className="relative text-body-color mb-8 text-base leading-relaxed dark:text-white/90 font-medium flex-grow">
          &ldquo;{content}&rdquo;
        </p>
        
        <div className="flex items-center pt-6 border-t border-gray-100 dark:border-gray-800 mt-auto">
          <div className="relative mr-4 h-[60px] w-[60px] overflow-hidden rounded-full ring-2 ring-primary/20 dark:ring-primary/30 group-hover:ring-primary/40 transition-all duration-300">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="w-full">
            <h3 className="text-dark mb-1 text-lg font-bold lg:text-lg xl:text-xl dark:text-white">
              {name}
            </h3>
            <p className="text-body-color text-sm font-medium dark:text-white/70">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
