import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const navItems = [
  { id: 0, name: "home" },
  { id: 1, name: "skills" },
  { id: 2, name: "works" },
  { id: 3, name: "resume" },
  { id: 4, name: "contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    if (name) setActiveIndex(name);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full mx-auto fixed top-0 py-5 sm:py-4 z-30 transition-all duration-300 ${
        scrollPosition > 0 ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container m-auto flex items-center justify-between px-4">
        <div data-aos="fade-down" className="logo">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-3xl font-bold sm:text-3xl text-black"
          >
            Portfolio.
          </Link>
        </div>
        <div data-aos="fade-down" className="nav-items flex items-center space-x-11">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-2xl hidden md:block text-black"
          >
            <HiMenu size={25} />
          </button>

          <ul
            className={`flex items-center space-x-11 transition-all duration-300 ${
              isOpen ? "md:right-0" : "md:right-[-100%]"
            } md:flex-col md:absolute md:top-0 md:w-[78%] md:h-screen md:bg-white md:shadow-lg md:space-x-0 md:pt-20`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl hidden md:block absolute right-6 top-6 text-black"
            >
              <RxCross2 size={25} />
            </button>
            {navItems.map((item) => (
              <li
                key={item.id}
                className="md:m-6 md:flex md:items-center md:justify-center"
              >
                <a
                  onClick={() => toggleNav(item.name)}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-black hover:text-gray-500 font-bold transition-colors ${
                    item.name === activeIndex ? "border-b-2 border-black" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <a
              href="https://www.linkedin.com/in/guillermo-ariel-del-fresno/"
              className="bg-black text-[1rem] text-white px-8 py-2 rounded-lg font-bold hover:bg-gray-800 transition-all md:mt-4"
            >
              HIRE ME
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;