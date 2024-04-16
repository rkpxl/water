import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center rounded-xl">
          <div className="w-full px-4 lg:w-1/2 rounded-xl">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0 rounded-xl"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/createNewUser.png"
                alt="about image"
                fill
                className="drop-shadow-three rounded-xl"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Pioneering the Future of Research
                </h3>
                <p className="text-base leading-relaxed  font-[340] sm:text-lg sm:leading-relaxed">
                Our team is continuously innovating, ensuring Knowledge Link not only meets but exceeds the evolving needs of researchers worldwide. With Knowledge Link, you’re not just adopting a tool; you’re joining a community dedicated to the future of research.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Innovation Unleashed, Challenges Conquered
                </h3>
                <p className="text-base leading-relaxed  font-[340] sm:text-lg sm:leading-relaxed">
                  Unleash innovation with us as your ally. Our solution is designed to conquer challenges, ensuring your research endeavors reach new heights.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Your Partner in Progress
                </h3>
                <p className="text-base leading-relaxed  font-[340] sm:text-lg sm:leading-relaxed">
                  We have more than a solution; we have re your dedicated partner. Choose us for unwavering support and the best-in-class solution to propel your research forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
