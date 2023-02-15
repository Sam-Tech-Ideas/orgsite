import React from 'react'


const Serv = () => {
  const Services = [
    {
      id: 1,
      Icon: "../assets/barc.png",
      title: "Web & App Development",
      text: " we  offer top-quality web design and development services to businesses of all sizes. Our team has a passion for all things digital, and we are dedicated to helping our clients achieve their goals through the use of the latest technologies and strategies.",
    },
    {
      id: 2,
      Icon: "../assets/layer.png",
      title: "Mentoring & Training",
      text: "We teach students how to discern the most important ideas in the software industry, how to ignore irrelevant information, and how to integrate the central ideas in a meaningful way.",
    },
    {
      id: 3,
      Icon: "../assets/align-vertically.png",

      title: "Web & App Design",
      text: "We provide you with the best design services, and of course with the best quality.",
    },
  ];

  return (
    <div className="" id={3}>
      <img src="../assets/v3.svg" alt="" />
      <h3 className="text-4xl text-white text-center font-bold ">
        The Service We Provide
      </h3>
      <br />
      <h3 className="text-white text-center text-4xl font-bold">For You</h3>
      <img
        src="../assets/add.png"
        className="flex justify-end items-end right-0 absolute"
        alt=""
      />
      <section class="text-gray-400 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {Services.map(({ Icon, title, text }) => (
              <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div class="w-20 h-20  inline-flex items-center justify-center rounded-full   mb-5 flex-shrink-0">
                  <img src={Icon} alt="" />
                </div>
                <div class="flex-grow">
                  <h2 class="text-white text-lg   mb-3">{title}</h2>
                  <p class=" text-lg">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Serv
