import React from "react";
import building from "../../assets/building.jpg";
import background from "../../assets/background.png";
import { motion } from "framer-motion";
import { fade } from "../../animations/variants";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const style = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "inherit",
    innerWidth: "100%",
  };

  return (
    <>
      <section style={style}>
        <div className="container pt-10 pb-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Text Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex flex-col justify-center w-full p-12 bg-gray-50 shadow-lg border border-gray-200"
          >
            <div className="space-y-15 text-center md:text-left">
              <h1 className="text-2xl lg:text-3xl font-bold leading-relaxed lg:leading-8">
                What is{" "}
                <span className="text-primary font-mono">
                  5L Solutions Supply & Allied Service Corp.
                </span>
                ?{" "}
              </h1>
              <p className="text-justify font-mono">
                5L Solutions Supply and Allied Services specializes in providing
                technical equipment and IT services for offices, residences,
                companies, and manufacturing organizations across diverse
                industries. The company also designs, installs, and repairs
                electronic and electrical systems, including CCTV, cabling, air
                conditioning, and security systems, tailored to meet
                customer-specific requirements.
              </p>
              {/* Button */}
              <div className="text-primary flex gap-4">
                <Link
                  to="/about"
                  className="flex items-center gap-2 pb-2 cursor-pointer font-mono hover:text-black duration-200"
                >
                  Learn More <CgArrowLongRight />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Image Box */}
          <motion.div
            variants={fade(0.2, "left", 150, 0.5)}
            initial="hidden"
            whileInView={"show"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            viewport={{ once: true, amount: 0.7 }}
            className="flex justify-center items-center w-full p-6 bg-white shadow-lg border border-gray-200"
          >
            <motion.img
              src={building}
              alt="5L CEO"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="w-[450px] md:w-[550px] xl:w-[750px] drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
