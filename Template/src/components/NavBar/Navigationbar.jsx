import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavbarLinks } from "../../data/data";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../assets/logo5L.png";
import { IoMenuSharp } from "react-icons/io5";

const Navigationbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300 ${
          isScrolled ? "py-3 h-21" : "py-4 h-27"
        }`}
      >
        <div className="container flex justify-between items-center transition-all duration-300">
          {/* Logo */}
          <div className="text-2xl flex items-center gap-2 font-bold transition-all duration-300">
            <Link to="/">
              <img
                src={logo}
                alt="5L Solutions logo"
                className={`cursor-pointer transition-all duration-300 ${
                  isScrolled ? "w-20 h-14" : "w-28 h-20"
                }`}
              />
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10 text-md font-mono">
              {NavbarLinks.map((item) => {
                return (
                  <li key={item.id}>
                    {item.id === 5 ? (
                      <Link
                        to={item.path}
                        className="px-4 py-2 text-sm font-medium bg-primary text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <a
                        href={item.path}
                        className="hover:text-primary duration-200"
                      >
                        {item.title}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Dropdown Menu */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <IoMenuSharp className="text-3xl text-primary cursor-pointer" />
          </div>
        </div>

        {/* Responsive Menu */}
        <div>
          <ResponsiveMenu open={open} setOpen={setOpen} />
        </div>
      </nav>
    </>
  );
};

export default Navigationbar;
