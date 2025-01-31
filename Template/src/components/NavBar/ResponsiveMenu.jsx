import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NavbarLinks } from "../../data/data";

const ResponsiveMenu = ({ open, setOpen }) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 767) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setOpen]);
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-23 left-0 w-full h-screen z-20  "
        >
          {/* Links */}
          <div className=" text-md font-semibold  bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-4 font-mono">
              {NavbarLinks.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.path}
                      className="inline-block py-1 px-3 hover:text-black duration-200"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
