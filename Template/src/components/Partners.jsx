import React from "react";
import { PartnerList } from "../Data/partnerData";

const Partners = () => {
  return (
    <>
      <section>
        <div className="container py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {PartnerList.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex justify-center items-center border border-red-500"
                >
                  <img
                    src={item.image}
                    alt="Partner company logo"
                    className="max-h-16 sm:max-h-18 md:max-h-20 lg:max-h-22 w-auto object-contain"
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
