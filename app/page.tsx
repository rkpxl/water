import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { Metadata } from "next";
import PopUp from "./popup/page";
import { app, analytics } from '../util/firebase';
import Testimonials from "@/components/Testimonials";
import Blog from "./blog/page";

export const metadata: Metadata = {
  title: "Digital Workflow - Leading the Future of Tech Innovation",
  description: "Explore Digital Workflow's revolutionary tech solutions that redefine efficiency and creativity in the digital age. Dive into our world of innovation today.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <PopUp />
      <Video />
      <Features />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <Blog />
      {/* <Contact /> */}
    </>
  );
}
