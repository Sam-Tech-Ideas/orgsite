import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

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
    // {
    //   id: 3,
    //   icon: (
    //     <FaFacebook
    //       size={30}
    //       className="m-3 cursor-pointer hover:text-blue-600 hover:bg-text-white"
    //     />
    //   ),
    //   url: "https://www.facebook.com/Axes-Technologies-111751934975096",
    // },
  ];
  return (
    <div>
      <footer class="text-white body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a
            class="flex  font-medium items-center md:justify-start justify-center "
            href="#home"
          >
            <img src="./axes.png" alt="" className="w-40 h-40" />
          </a>
          <p class="text-xl text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 Zap Technology
          </p>
          <p className="p-2 text-xl"> Privacy Policy</p>
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
