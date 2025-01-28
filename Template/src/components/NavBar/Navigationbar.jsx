import React, { useState } from "react";
import { NavbarLinks } from "../../Data/data";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../assets/5L_logo-Red.png";
import { IoMenuSharp } from "react-icons/io5";

const Navigationbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-slate-100">
        <div className="container flex justify-between items-center py-8">
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
            <ul className="flex items-center gap-6">
              {NavbarLinks.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.path}
                      className="text-md inline-block py-1 px-3 hover:text-primary duration-200"
                    >
                      {item.title}
                    </a>
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
