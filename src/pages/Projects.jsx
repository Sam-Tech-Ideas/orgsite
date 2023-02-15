import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Projects = () => {
  return (
    <div>
      <Layout>
        <section class="text-gray-300  body-font">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300 text-center">
            Our Projects
          </h1>
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="feature"
                class="object-cover object-center h-full w-full"
                src="assets/in.svg"
              />
            </div>
            <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-left">
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="flex-grow">
                  <h2 class="text-gray-300 text-lg title-font font-medium mb-3">
                    SafeRoyal(An online room reservation system)
                  </h2>
                  <p class="leading-relaxed text-lg">
                    We developed an online booking system to help university
                    students book their accommodation in hostels and homestels
                    in their comfort zone. The system was designed to be
                    user-friendly, with a simple and intuitive interface that
                    made the booking process seamless and efficient. The system
                    allowed students to easily view available rooms, select
                    their preferred room, and complete the booking process with
                    a secure payment system.
                  </p>

                  <a
                    class="mt-3 text-indigo-500 "
                    href="https://www.saferoyal.com"
                    target="_blank"
                  >
                    Visit Website
                  </a>
                </div>
              </div>

              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="flex-grow">
                  <h2 class="text-gray-300 text-lg title-font font-medium mb-3">
                    LearnWithAxes
                  </h2>
                  <p class="leading-relaxed text-lg">
                    LearnWithAxes is a learning inititative that aims to help
                    train and equip young people with the skills they need to
                    succeed in the 21st century.We organize bootcamps during the
                    holidays to help young people learn new skills and build
                    their confidence.
                  </p>
                  <a
                    class="mt-3 text-indigo-500 "
                    href="https://www.axes-tech.com"
                    target="_blank"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Projects;
