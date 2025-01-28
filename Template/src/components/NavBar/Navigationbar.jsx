import React, { useState } from "react";
import { NavbarLinks } from "../../Data/data";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../assets/5L_logo-Red.png";
import { IoMenuSharp } from "react-icons/io5";

const Navigationbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50">
        <div className="container flex justify-between items-center py-6">
          {/* Logo */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <a href="/">
              <img
                src={logo}
                alt="5L Solutions logo"
                className="cursor-pointer w-48 md:w-40 sm:w-36"
              />
            </a>
          </div>
          {/* Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10 text-md font-mono">
              {NavbarLinks.map((item) => {
                return (
                  <li key={item.id}>
                    {item.id === 5 ? (
                      <a
                        href={item.path}
                        className="px-2 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-all duration-100 ease-in hover:translate-x-1 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-transparent hover:text-black"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <a
                        href={item.path}
                        className="text-gray-700 hover:text-primary"
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
