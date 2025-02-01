import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const Sample = () => {
  return (
    <div className="bg-zinc-900 px-4 py-12 text-zinc-50">
      <div className="container mx-auto">
        {" "}
        {/* Custom container added */}
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
        >
          <HeaderBlock />
          <SocialsBlock />
        </motion.div>
      </div>
    </div>
  );
};

export default Sample;

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 md:col-span-6 row-span-2">
    {/* Removed content inside */}
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block className="col-span-6 bg-red-500 md:col-span-6 h-64">
      {/* Removed content inside */}
    </Block>

    <Block className="col-span-6 bg-blue-500 md:col-span-6 h-64">
      {/* Removed content inside */}
    </Block>
  </>
);
