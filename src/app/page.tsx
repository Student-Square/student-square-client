import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Partners from "@/components/Partners";
import Stories from "@/components/Pricing";
import OurProject from "@/components/Project/OurProject";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Square",
  description: "Student Square - Connect, learn, and grow.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <OurProject />
      <Stories />
      <Testimonials />
      <News />
      <Partners />
      <Blog />
      <Contact />
    </>
  );
}
