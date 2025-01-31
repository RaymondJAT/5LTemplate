import React from "react";
import Cards from "./Cards";

const DragCards = () => {
  return (
    <>
      <section className="relative grid min-h-[40vh] w-full place-content-center overflow-hidden bg-neutral-950">
        <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]">
          5L.
        </h2>
        <Cards />
      </section>
    </>
  );
};

export default DragCards;
