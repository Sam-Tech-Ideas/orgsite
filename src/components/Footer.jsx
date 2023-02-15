import React from "react";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const Icons = [
    {
      id: 1,
      icon: (
        <FaTwitter
          size={30}
          className="m-3 cursor-pointer hover:text-blue-600 hover:bg-text-white"
        />
      ),
      url: "https://twitter.com/zaptechnologies",
    },
    {
      id: 2,
      icon: (
        <FaInstagram
          size={30}
          className="m-3 cursor-pointer hover:text-red-600 hover:bg-text-white"
        />
      ),
      url: "https://www.instagram.com/zap_tek/",
    },

    {
      id: 3,
      icon: (
        <FaWhatsapp size={30} className="m-3 cursor-pointer hover:text-green-600" />
      ),
      url: "https://wa.me/233506442937",
    },


  ];
  return (
    <div>
      <footer class="text-gray-300 body-font">
        <div class="container px-5  mx-auto">
          <div class="flex flex-wrap md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-300 tracking-widest text-lg mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-400">About us</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-400">Projects</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-400">Services</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-300 tracking-widest text-lg mb-3">
                Services
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-400">
                    Mentoring and Training
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-400">
                    Mobile app development
                  </a>
                </li>

                <li>
                  <a class="text-gray-600 hover:text-gray-400">
                    Web Development
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-300 tracking-widest text-lg mb-3">
                Reach out us
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-400">
                    Join Our Community
                  </a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-400">Contact Us</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-300 tracking-widest text-lg mb-3">
                Kumasi, Ghana
              </h2>
              233-50644-2937
            </div>
          </div>
        </div>
      </footer>
      <footer class="text-white body-font">
        <div class="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
          <a
            class="flex  font-medium items-center md:justify-start justify-center "
            href="/"
          >
            <img src="./assets/axes.png" alt="" className="w-40 h-40" />
          </a>
          <p class="text-xl text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Zap Technology
          </p>
          <p className="p-2 text-xl"> Prvacy Policy</p>
          <p className="p-2 text-xl">Support</p>

          <p></p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {Icons.map(({ id, icon, url }) => (
              <a class="text-white-500" href={url} target="_blank">
                {icon}
              </a>
            ))}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
