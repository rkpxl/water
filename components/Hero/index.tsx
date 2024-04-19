import Link from "next/link";
import ScrollingSVG from "./ScrollingSVG";

const Hero = () => {

  const today = new Date();

// Format the year and month for the URL
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // JavaScript months are 0-based

  // Construct the Calendly link with the current year and month
  const calendlyLink = `https://calendly.com/ritikjainkkar/30min?month=${year}-${month}`;
  

  return (
    <>
      <section
        id="home"
        className="justify-center items-center z-0 dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container h-[100%]">
          <div className="-mx-4 flex flex-wrap h-[100%] mt-[-48px] flex items-center">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[870px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Revolutionize Research Management with Next-Gen Platform
                </h1>
                <p className="font-[350] mb-12 text-base !leading-relaxed sm:text-lg md:text-xl">
                Discover the future of research efficiency with our cutting-edge platform. Enhance collaboration, streamline processes, and gain insights to set new standards in innovation. Propel your research ahead with the latest technology.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 rounded-xl">
                  <Link
                    href={calendlyLink}
                    target="_blank"
                    className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Start Free Trial
                  </Link>
                  <Link
                    target="_blank"
                    href={calendlyLink}
                    className="inline-block rounded-xl bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Book Demo Meeting
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollingSVG />
      </section>
    </>
  );
};

export default Hero;
