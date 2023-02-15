import Link from 'next/link'
import React from 'react'






const Project = () => {
  const Projects = [
    {
      id: 1,
      image:'../assets/pit.png',
      url: "",
    },
    {
      id: 2,
      image: "../assets/to.png",
      url: "",
    },

    {
      id: 3,
      image:'../assets/barc.png',
      url: "https://www.saferoyal.com",
    },
  ];
  return (
    <div className="text-white" id={4}>
      <img src='../assets/add.png' className="p-3" />
      <h3 className="m-2 pl-4 text-4xl font-bold">Our Awesome Portfolio</h3>
      <img src='../assets/v2.svg'alt="" className="p-3 absolute right-0" />

      <div class="text-white body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {Projects.map(({ id, image , url}) => (
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <Link href={url}>
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full sm:object-cover sm:object-center"
                      src={image}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src='../assets/v1.svg' className="p-3" alt="" />
    </div>
  );
}

export default Project