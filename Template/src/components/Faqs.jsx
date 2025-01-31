import React from "react";
import { Collapse, Divider } from "antd";

const text = (
  <p
    style={{
      paddingInlineStart: 24,
    }}
  >
    {" "}
    A dog is a type of domesticated animal. Known for its loyalty and
    faithfulness, it can be found as a welcome guest in many households across
    the world.
  </p>
);
const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];
const Faqs = () => {
  return (
    <>
      <section>
        <div className="container ">
          <Divider orientation="left">FAQs</Divider>
          <Collapse accordion size="large" items={items} bordered={false} />
        </div>
      </section>
    </>
  );
};

export default Faqs;
