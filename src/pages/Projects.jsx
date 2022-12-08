import React from 'react'
import Layout from '../components/Layout';

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
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"></div>
                <div class="flex-grow">
                  <h2 class="text-gray-300 text-lg title-font font-medium mb-3">
                    Shooting Stars
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a class="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                  </a>
                </div>
              </div>
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"></div>
                <div class="flex-grow">
                  <h2 class="text-gray-300 text-lg title-font font-medium mb-3">
                    The Catalyzer
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a class="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                  </a>
                </div>
              </div>
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"></div>
                <div class="flex-grow">
                  <h2 class="text-gray-300 text-lg title-font font-medium mb-3">
                    Neptune
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                  <a class="mt-3 text-indigo-500 ">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default Projects