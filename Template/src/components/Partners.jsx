import React, { useRef } from "react";
import background from "../assets/mainbg.png";
import { motion, useInView } from "framer-motion";
import { PartnerList } from "../Data/partnerData";

const Partners = () => {
  const style = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "inherit",
    innerWidth: "100%",
  };

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <section ref={sectionRef} className="bg-background py-12" style={style}>
        <motion.div
          className="container"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.h2
            className="text-3xl font-bold text-center mb-8 font-mono"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            Our Partners
          </motion.h2>

          {/* Partner Logos */}
          <motion.div
            className="flex flex-wrap justify-center gap-7"
            variants={containerVariants}
          >
            {PartnerList.map((item) => (
              <motion.div
                key={item.id}
                className="flex justify-center items-center"
                variants={itemVariants}
              >
                <img
                  src={item.image}
                  alt="Partner company logo"
                  className="max-h-18 sm:max-h-20 md:max-h-26 lg:max-h-30 w-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Partners;
