import React from "react";
import { PartnerList } from "../Data/partnerData";

const Partners = () => {
  return (
    <>
      <section className="bg-red-300">
        <div className="container py-12">
          <h2 className="text-3xl font-bold text-center mb-2">Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-7">
            {PartnerList.map((item) => {
              return (
                <div key={item.id} className="flex justify-center items-center">
                  <img
                    src={item.image}
                    alt="Partner company logo"
                    className="max-h-18 sm:max-h-20 md:max-h-26 lg:max-h-30 w-auto object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
