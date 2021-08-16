// import React from "react";
import "./style.scss";
import { useMediaQuery } from "react-responsive";
import { DesktopNav, MobileNav } from "./nav/nav";

import logo from "../../assets/flomologo.png";
import Slideshow from "./headerSlide/slides";
import { Button } from "antd";
import Features from "./features/features";
import FashionFoot from "./fashionFoot/fashionFoot";
const headerText = ["Tips", "Personalised Experience", "Delivery Portal"];
const offerings = ["Tailored Solution", "Express Delivery", "Value For Money"];
const Landing = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div className="home">
      {isMobile ? <MobileNav logo={logo} /> : <DesktopNav logo={logo} />}
      <header>
        <h1 className="heading">India’s First Hyperlocal Fashion</h1>
        <Slideshow text={headerText} />
        <p>
          Get set to know what would look good on you by connecting with our
          fashion experts.
        </p>
        <Button type="primary" size="large" danger>
          Talk to a Fashion Expert
        </Button>
      </header>
      <Features />
      <div className="offering">
        <h1>Offering You</h1>
        <Slideshow text={offerings} />
        <p>
          At Flomo, we make you connect with fashion curators for chic fashion
          advice based on your personal attributes. Our fashion curators
          understand your requirements and give you the best. Just click the
          link below.
        </p>
        <Button type="primary" size="large" danger>
          Talk to a Fashion Expert
        </Button>
      </div>
      <FashionFoot />
    </div>
  );
};
export default Landing;
