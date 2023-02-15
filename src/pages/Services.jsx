import React from "react";

const Services = () => {
  return (
    <div className="bg-red-500">
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="../assets/our.svg"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Knausgaard typewriter readymade marfa
            </h1>

            <p class="text-sm mt-2 text-gray-500 mb-8 w-full">
              <p class="mb-8 leading-relaxed text-lg py-2">
                At Zap Technologies, we're passionate about using digital
                innovation to transform businesses and drive growth. Our agency
                was founded in 2022 with a mission to provide a more
                customer-centric approach to digital marketing and design.
              </p>
              <p class="mb-8 leading-relaxed text-lg py-2">
                As we grew, we saw firsthand the impact that quality software
                development can have on a business's success. That's why we've
                made it a priority to not only deliver top-notch development
                services, but also to train and mentor the next generation of
                software developers. Our team of experts is comprised of
                experienced software developers who are dedicated to staying on
                the cutting edge of the latest technologies and best practices.
                But we don't just keep that knowledge to ourselves - we believe
                in sharing our expertise and helping others grow in their skills
                and careers. Through our training and mentoring programs, we've
                helped countless individuals develop the skills and confidence
                they need to succeed in the software development industry.
              </p>
              <p class="mb-8 leading-relaxed text-lg py-2">
                From coding bootcamps to one-on-one coaching, we offer a range
                of programs designed to meet the needs of individuals at any
                stage of their career. At ZapTek, we believe that investing in
                our people is the key to our success. By providing ongoing
                training and mentoring, we ensure that our team is always
                equipped with the skills and knowledge they need to deliver the
                best possible results for our clients. So whether you're looking
                for top-quality software development services or seeking to grow
                your skills as a developer, we're here to help. Let's work
                together to create a brighter future for your business and your
                career.
              </p>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
