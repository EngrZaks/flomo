import React from "react";
import "./fashionfootStyle.scss";
import image from "../../../assets/flomomobile.png";
import { CheckCircleOutlined } from "@ant-design/icons";
const data = [
  "Buy products based on your body type.",
  "Expert and honest opinion.",
  "Personalised styling tips totally free of cost.",
  "Option to subscribe to a surprise fashion box curated by our fashion stylists.",
];
export default function FashionFoot() {
  const childrenToRender = data.map((item, i) => {
    return (
      <div key={i} className="list-wrapper-list">
        <div className={`list-wrapper-icon`}>
          <CheckCircleOutlined />
        </div>
        <div className={`list-wrapper-text`}>
          <h1>{item}</h1>
        </div>
      </div>
    );
  });
  return (
    <div className="FashionFoot">
      <h1 className="heading">Put Your First Fashion Foot Forward</h1>
      <div className="imgnlist">
        <div className="image">
          <img src={image} alt="mobile render view" />
        </div>
        <div className="list-wrapper">{childrenToRender}</div>
      </div>
    </div>
  );
}
