import React from "react";
import Navigationbar from "../components/NavBar/Navigationbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Faqs from "../components/Faqs";
import { contactInfo } from "../data/contactInfo";

const Contact = () => {
  return (
    <>
      <Navigationbar />
      <Header title="Get in Touch" />

      {/* Container with full width, shadow, and border */}
      <div className="container py-12 mx-auto grid grid-cols-12 gap-8">
        {/* Contact Form */}
        <div className="col-span-12 md:col-span-8 bg-white p-8 shadow-md rounded-sm border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send a Message
          </h3>
          <form action="">
            <div className="space-y-6">
              <div>
                <label htmlFor="full-name" className="font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  placeholder="Full Name"
                  autoComplete="name"
                  className="p-4 text-sm outline-none w-full border border-gray-300 rounded-sm placeholder:text-gray-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company Name"
                    autoComplete="organization"
                    className="p-4 text-sm outline-none w-full border border-gray-300 rounded-sm placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="contact-number" className="font-medium">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contact-number"
                    name="contact-number"
                    placeholder="Contact Number"
                    autoComplete="tel"
                    className="p-4 text-sm outline-none w-full border border-gray-300 rounded-sm placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  autoComplete="email"
                  className="p-4 text-sm outline-none w-full border border-gray-300 rounded-sm placeholder:text-gray-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  autoComplete="off"
                  className="p-4 w-full text-sm outline-none border border-gray-300 rounded-sm placeholder:text-gray-500 resize-none min-h-40"
                ></textarea>
              </div>

              <div className="text-center">
                <input
                  type="submit"
                  value="Send Message"
                  className="bg-black text-white border-none text-sm font-semibold cursor-pointer py-3 px-6 rounded-sm w-full mt-5 hover:bg-gray-800 transition"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-col gap-6 h-full">
          {/* Contact Info Box */}
          <div className="bg-white p-8 shadow-md rounded-sm border border-gray-200 flex-1 flex flex-col justify-between min-h-[256px]">
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                Contact Info
              </h3>
              {contactInfo.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <span className="text-black text-2xl">{item.icon}</span>
                  <p className="text-sm md:text-base text-gray-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Map Box */}
          <div className="bg-white w-full rounded-sm shadow-md flex-1 min-h-[256px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.59621675433627!2d121.06109020459182!3d14.338162580940534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d7466c0be66b%3A0x2e96b302c6c16dd1!2s5L%20SOLUTIONS%20SUPPLY%20%26%20ALLIED%20SERVICES%20CORP.!5e0!3m2!1sen!2sph!4v1738392118857!5m2!1sen!2sph"
              className="w-full h-full rounded-sm shadow-md"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <Faqs />
      </div>

      <Footer />
    </>
  );
};

export default Contact;
