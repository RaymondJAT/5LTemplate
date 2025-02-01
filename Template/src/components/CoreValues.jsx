import React from "react";
import { motion } from "framer-motion";
import { coreData } from "../data/coreValue";
import { Card } from "antd";

const { Meta } = Card;

const CoreValues = () => {
  return (
    <>
      <section>
        <div className="container py-8">
          <h2 className="text-3xl font-bold text-center mb-8 font-mono">
            core value
          </h2>
          {/* Core Value card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2">
            {coreData.map((item) => (
              <Card key={item.id} hoverable className="shadow-sm bg-white">
                <div className="flex justify-center">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.6 }}
                    className="w-full h-auto object-cover rounded-t-xl max-w-[200px] sm:max-w-[250px] md:max-w-full"
                  />
                </div>

                <div className="p-4 h-44 flex flex-col items-center justify-center">
                  <Meta
                    title={
                      <h3 className="text-xl font-semibold text-center font-mono">
                        {item.title}
                      </h3>
                    }
                    description={
                      <p className="text-sm text-center text-black font-mono">
                        {item.description}
                      </p>
                    }
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoreValues;
