import React from "react";
import { motion } from "framer-motion";
import owner from "../assets/owner.jpg";
import hooman from "../assets/5L-hooman.jpg";
import company from "../assets/company.jpg";
import fam from "../assets/fam.jpg";

const ImageBento = () => {
  return (
    <div className="flex flex-col justify-center w-full bg-gray-50 shadow-lg border border-gray-200">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="container grid grid-flow-dense grid-cols-12 gap-4 p-6"
      >
        <ImageBlock
          src={owner}
          className="col-span-12 row-span-2 md:col-span-6"
          alt="random picture"
        />
        <ImageBlock
          src={fam}
          className="col-span-6 md:col-span-3"
          alt="random picture"
        />
        <ImageBlock
          src={hooman}
          className="col-span-6 md:col-span-3"
          alt="random picture"
        />
        {/* Company image now takes the place of RandD and White */}
        <ImageBlock
          src={company}
          className="col-span-12 md:col-span-6"
          alt="random picture"
        />
      </motion.div>
    </div>
  );
};

const ImageBlock = ({ src, className, alt }) => (
  <motion.img
    src={src}
    alt={alt}
    className={`w-full h-full object-cover  ${className}`}
    initial={{ scale: 0.5, y: 50, opacity: 0 }}
    animate={{ scale: 1, y: 0, opacity: 1 }}
    transition={{ type: "spring", mass: 3, stiffness: 400, damping: 50 }}
    whileHover={{ scale: 1.1 }}
  />
);

export default ImageBento;
