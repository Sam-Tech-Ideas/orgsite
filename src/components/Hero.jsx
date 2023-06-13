import React from 'react'
import {Link} from 'react-router-dom'


const Hero = () => {
  return (
    <div className="text-white" data-aos="zoom-out-left">
      <div className="  flex px-5  md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
          <h1 className="  text-5xl mb-4 font-bold text-white">
            Build Your Awesom
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
     <Link to={"/services"}>
            <button className=" text-white bg-blue-600 border-0 py-2 px-3  hover:bg-blue-700 rounded text-lg">
   
              Our Services

            </button>
    </Link>

          </div>
        </div>

        <img src="../assets/pic1.png" alt="image" className="" />

        <div
          data-tf-popover="tN829PH2"
          data-tf-button-color="#0445AF"
          data-tf-button-text="Launch me"
          data-tf-iframe-props="title=LearnWithAxes"
          data-tf-medium="snippet"
          style={{ all: "unset" }}
        ></div>
      </div>
      <div>
        <section class="text-white ">
          <div class=" py-24 ">
            <div class=" text-center">
              <h1 class="font-bold text-3xl ">
                Why ZapTek Is The Best Choice?
              </h1>
              <p class="p-3 text-xl">
                We provide you the opportunity to interact with top
                professionals around the globe.
              </p>
            </div>
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                  <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                    ROOF PARTY POLAROID
                  </h2>
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    Master Cleanse Reliac Heirloom
                  </h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Whatever cardigan tote bag tumblr hexagon brooklyn
                    asymmetrical gentrify, subway tile poke farm-to-table.
                    Franzen you probably haven't heard of them man bun deep
                    jianbing selfies heirloom prism food truck ugh squid celiac
                    humblebrag.
                  </p>
                </div>
                <div class="flex flex-wrap">
                  <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                      Shooting Stars
                    </h2>
                    <p class="leading-relaxed text-base mb-4">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                  <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                      The Catalyzer
                    </h2>
                    <p class="leading-relaxed text-base mb-4">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                  <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                      Neptune
                    </h2>
                    <p class="leading-relaxed text-base mb-4">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                  <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                      Melanchole
                    </h2>
                    <p class="leading-relaxed text-base mb-4">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                    <a class="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero
