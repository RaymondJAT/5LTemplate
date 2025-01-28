import React from "react";
import logo from "../assets/5L_logo(red).png";
import { FaFacebook } from "react-icons/fa6";
import { FloatButton } from "antd";

const Footer = () => {
  return (
    <>
      <section className="py-4">
        <div className="container mx-auto flex flex-col items-center space-y-4 text-center">
          {/* Logo */}
          <div>
            <img src={logo} alt="5L logo" className="h-12 w-auto" />
          </div>

          {/* Description */}
          <p className="text-sm max-w-md font-mono">
            5L Solutions provides IT equipment and services, along with design,
            installation, and repair of electronic systems like CCTV, cabling,
            air conditioning, and security systems, tailored to customer needs.
          </p>

          {/* Social Media */}
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://facebook.com" // Replace with the actual link
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white hover:text-red-600"
              >
                <FaFacebook className="text-2xl text-primary" />
              </a>
            </li>
          </ul>

          {/* Footer Text */}
          <div className="text-xs font-mono">
            Powered By 5L Solutions Supply's & Allied Services Corp. &copy; 2025
            All rights reserved.
          </div>
          <div>
            <FloatButton.BackTop
              type="text-primary"
              style={{
                bottom: 80,
                right: 20,
                backgroundColor: "red",
                color: "white",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
