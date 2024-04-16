import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium  font-[340]">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Our Journey to Innovation"
                paragraph="Explore our evolution, milestones, and unwavering commitment to revolutionizing research processes, providing solutions that empower and inspire transformative breakthroughs."
                mb="44px"
              />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Innovative Solutions" />
                    <List text="User-Centric Design" />
                    <List text="Seamless Workflow Solutions" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Intelligent AI Integration" />
                    <List text="Revolutionizing Workflows" />
                    <List text="Efficient Approval Mechanisms" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <div className="flex space-between">
                  <div className="flex-auto">
                    <Image
                      src="/images/about/alltasks.webp"
                      alt="about image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '95%', height: 'auto' }}
                      className="drop-shadow-three rounded-xl"
                    />
                    <Image
                      src="/images/about/ptasks.webp"
                      alt="about image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '95%', height: 'auto' }}
                      className="drop-shadow-three rounded-xl mt-2"
                    />
                  </div>
                  <div className="flex-auto">
                    <Image
                      src="/images/about/tasksp.webp"
                      alt="about image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '95%', height: 'auto' }}
                      className="drop-shadow-three rounded-xl"
                    />
                    <Image
                      src="/images/about/alltasks.webp"
                      alt="about image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '95%', height: 'auto' }}
                      className="drop-shadow-three rounded-xl mt-2"
                    />
                  </div>
                </div>
                <Image
                  src="/images/about/filter.webp"
                  alt="about image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '97%', height: 'auto' }}
                  className="drop-shadow-three rounded-xl w-full mt-2"
                />
                <Image
                  src="/images/about/doc.webp"
                  alt="about image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '97%', height: 'auto' }}
                  className="drop-shadow-three rounded-xl w-full mt-2"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
