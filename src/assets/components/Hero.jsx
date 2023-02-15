import React from "react";

const Hero = () => {
  return (
    <div className="text-white  z-20">
      <div className="  flex px-5  md:flex-row flex-col items-center">
        <div
          // className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center"
          // data-aos="fade-down-right"
          // data-aos-easing="linear"
          // data-aos-duration="1500"
        >
          <h1 className="  text-5xl mb-4 font-bold text-white">
            Build Your Awesome
            <br />
            Platform
          </h1>
          <p className="mb-8 ">
            Welcome to Zap Technologies, a leading digital agency firm that also
            specializes in training people on software development. Our team of
            experienced professionals is dedicated to helping businesses and
            individuals succeed in the tech industry through the use of
            cutting-edge technologies and innovative strategies.
          </p>
          <div className="flex justify-center  ">
            <button className=" text-white bg-blue-600 border-0 py-2 px-3  hover:bg-blue-700 rounded text-lg">
              Our Services
            </button>
          </div>
        </div>

        <img
          src="../assets/pic1.png"
          alt="image"
          className=""
          // data-aos="zoom-in-left"
          // data-aos-easing="linear"
          // data-aos-duration="1500"
        />

        <div
          // data-aos="fade-down"
          // data-aos-easing="linear"
          // data-aos-duration="1500"
        ></div>
      </div>
      <div>
        <section class="text-white ">
          <div class=" py-6 ">
            <div class=" text-center">
              <h1 class="font-bold text-3xl ">
                Why ZapTek Is The Best Choice?
              </h1>
              <section
                class="text-gray-400 body-font text-lg"
                // data-aos="fade-down"
                // data-aos-easing="linear"
                // data-aos-duration="1500"
              >
                <div class="container px-5 py-6 mx-auto">
                  <div class="flex flex-wrap">
                    <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                      <h2 class="text-lg sm:text-xl text-gray-300 font-medium title-font mb-2">
                        Customized solutions
                      </h2>
                      <p class="leading-relaxed text-base mb-4">
                        We provide customized solutions that are tailored to
                        your specific business needs and goals.
                      </p>
                    </div>
                    <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                      <h2 class="text-lg sm:text-xl text-gray-300 font-medium title-font mb-2">
                        Cutting-edge technology
                      </h2>
                      <p class="leading-relaxed text-base mb-4">
                        We use cutting-edge technology and tools to deliver
                        innovative solutions that give our clients a competitive
                        edge.
                      </p>
                    </div>
                    <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                      <h2 class="text-lg sm:text-xl text-gray-300 font-medium title-font mb-2">
                        Expertise and experience
                      </h2>
                      <p class="leading-relaxed text-base mb-4">
                        Our team of experts has a wealth of experience and
                        expertise in the areas in which we specialize.
                      </p>
                    </div>
                    <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                      <h2 class="text-lg sm:text-xl text-gray-300 font-medium title-font mb-2">
                        Proven track record
                      </h2>
                      <p class="leading-relaxed text-base mb-4">
                        Our portfolio showcases a range of successful projects,
                        and we have a track record of delivering real results
                        for our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
