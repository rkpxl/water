import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch with Digital Workflow - We’re Here to Help",
  description: "Questions or ideas? Contact Digital Workflow today. Our team is ready to support your journey towards digital transformation and success.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="We're here to help. For inquiries, support, or feedback, reach out and connect with our team today. Your journey towards innovation starts with a conversation."
        title="Get in Touch with Us"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
