import React from "react";
import { Collapse, Divider } from "antd";
import { faqData } from "../data/faqData";

const Faqs = () => {
  return (
    <section>
      <div className="container">
        <Divider orientation="left">FAQs</Divider>
        <Collapse
          accordion
          size="large"
          bordered={false}
          items={faqData.map((item) => ({
            key: item.key,
            label: <span className="font-bold font-mono">{item.label}</span>,
            children: <p className="font-mono">{item.description}</p>,
          }))}
        />
      </div>
    </section>
  );
};

export default Faqs;
