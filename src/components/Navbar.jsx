import React from "react";
import { FaTimes } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Home",
      url: "/",
    },
    {
      id: 2,
      link: "About Us",
      url: "/about",
    },
    {
      id: 3,
      link: "Services",
      url: "/services",
    },
    {
      id: 4,
      link: "Projects",
      url: "/projects",
    },
  ];
  return (
    <>
      <div className=" w-screen   h-20 text-white z-[5000]  mb-4">
        <div className="flex items-center justify-between w-full h-full px-3">
          <div className="flex items-center pt-[40px]  pb-5">
            <img
              src="../assets/axes.png"
              alt=""
              height=""
              width=""
              className="h-40 w-40"
            />
          </div>
          <ul className="hidden md:flex">
            {links.map(({ id, link, url }) => (
              <li
                key={id}
                className="p-4 hover:text-blue-600 duration-300 text-xl cursor-pointer"
              >
                <Link to={url}>{link}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex mr-[12px]">
            <a
              href="mailto:axestech1@gmail.com"
              className=" hover:text-white px-6   bg-blue-600 py-2 rounded hover:bg-blue-700"
              target="_blank"
            >
              Contact us
            </a>
          </div>

          <div
            className=" md:hidden cursor-pointer p-3"
            onClick={() => {
              setNav(true);
            }}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>

        {/**menu */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-full bg-gray-600/70 backdrop-blur"
              : ""
          }
        >
          <div
            className={
              nav
                ? "shadow-xl fixed left-0 top-0 w-4/5 bg-black text-white h-full p-10 ease-in duration-300"
                : "fixed top-0 left-[-100%] p-10 duration-300 ease-in h-full "
            }
          >
            <div className="flex items-center justify-between w-full text-white">
              <img
                src="../assets/axes.png"
                alt=""
                height=""
                width=""
                className="h-40 w-40"
              />

              <div onClick={() => setNav(false)} className="cursor-pointer p-3">
                <FaTimes size={30} />
              </div>
            </div>
            <ul className="pt-10">
              {links.map(({ id, link, url }) => (
                <li
                  key={id}
                  className="p-4 hover:text-blue-600 duration-300 text-lg cursor-pointer"
                >
                  <Link to={url}>{link}</Link>
                </li>
              ))}
            </ul>
            <div>
              <a
                href="mailto:axestech1@gmail.com"
                target="_blank"
                className="bg-blue-600 w-full ml-3 rounded-md hover:bg-blue-800 px-4 py-2"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
