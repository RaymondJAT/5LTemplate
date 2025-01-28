import React from "react";
import { ProductData } from "../Data/productData";
import { Card } from "antd";

const { Meta } = Card;

const Products = () => {
  return (
    <>
      <section className="bg-slate-200">
        <div className="container py-14">
          <h2 className="text-3xl font-bold text-center mb-8">Products</h2>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {ProductData.map((item) => (
              <Card
                key={item.id}
                hoverable
                className="rounded-xl shadow-sm border border-red-200 bg-white"
              >
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover rounded-t-xl max-w-[200px] sm:max-w-[250px] md:max-w-full"
                  />
                </div>

                <div className="p-4 h-32 flex flex-col items-center justify-center">
                  <Meta
                    title={
                      <h3 className="text-xl font-semibold text-center">
                        {item.title}
                      </h3>
                    }
                    description={
                      <p className="text-sm text-center text-gray-500">
                        {item.description}
                      </p>
                    }
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* button */}
          <div className="flex justify-center mt-8">
            <a
              href="/products"
              className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 ease-in hover:translate-x-1 hover:border-2 hover:border-solid hover:border-red-600 hover:bg-transparent hover:text-black"
            >
              See More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
