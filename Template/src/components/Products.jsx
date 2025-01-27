import React from "react";
import { ProductData } from "../Data/productData";

const Products = () => {
  return (
    <>
      <section className="bg-slate-200">
        <div className="container py-24 border border-amber-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border border-blue-500">
            {ProductData.map((item) => {
              return (
                <div
                  key={item.id} // Add a unique key here
                  className="space-y-4 p-6 bg-white hover:bg-amber-50 rounded-xl border border-red-200"
                >
                  <div className="text-4xl">
                    <img src={item.image} alt={item.title} className="w-full" />
                  </div>
                  <p className="text-2xl font-semibold">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
