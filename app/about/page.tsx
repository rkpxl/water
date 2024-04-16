import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Workflow - Pioneering Tech Solutions for Tomorrow",
  description: "Learn about Digital Workflow's mission to transform industries through innovative technology. Discover our story, values, and the vision driving our advancements.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="Welcome to Digital Workflow, where we're dedicated to transforming the research process through innovation and technology. Founded by Avinash with a vision to streamline the cumbersome aspects of research management, we've developed Knowledge Link to bring that vision to life."
        title="Empowering Your Research Journey"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;


