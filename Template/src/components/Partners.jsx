import React from "react";
import background from "../assets/mainbg.png";
import { motion } from "framer-motion";
import { fade } from "../animations/variants";
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

  return (
    <>
      <section className="py-15" style={style}>
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-center font-mono">
            Our Partners
          </h2>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center gap-7">
            {PartnerList.map((item) => (
              <div key={item.id} className="flex justify-center items-center">
                <motion.img
                  src={item.image}
                  alt="Partner company logo"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.6 }}
                  className="max-h-18 sm:max-h-20 md:max-h-26 lg:max-h-30 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
