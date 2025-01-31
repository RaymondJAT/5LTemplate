import React from "react";
import { Collapse, Divider } from "antd";
import { faqData } from "../data/faqData";

const Faqs = () => {
  return (
    <section>
      <div className="container">
        <Divider orientation="left">FAQs</Divider>
        <Collapse accordion size="large" bordered={false}>
          {faqData.map((item) => (
            <Collapse.Panel
              header={item.label}
              key={item.key}
              className="font-semibold"
            >
              <p className="font-normal">{item.description}</p>
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
    </section>
  );
};

export default Faqs;
