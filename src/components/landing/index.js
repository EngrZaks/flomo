// import React from "react";
import "./style.scss";
import { useMediaQuery } from "react-responsive";
import { DesktopNav, MobileNav } from "./nav/nav";

import logo from "../../assets/flomologo.png";
import Slideshow from "./headerSlide/slides";
import { Button } from "antd";
import Features from "./features/features";
import FashionFoot from "./fashionFoot/fashionFoot";
import "./headerSlide/slide.scss";
import Offering from "./offering/offering";
import { openNotification } from "../helpers";
openNotification();
const Landing = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div className="home">
      {isMobile ? <MobileNav logo={logo} /> : <DesktopNav logo={logo} />}
      <header>
        <h1 className="heading">India’s First Hyperlocal Fashion</h1>
        <Slideshow />
        <p>
          Get set to know what would look good on you by connecting with our
          fashion experts.
        </p>
        <Button type="primary" size="large" danger>
          Talk to a Fashion Expert
        </Button>
      </header>
      <Features />
      <Offering />
      <FashionFoot />
    </div>
  );
};
export default Landing;
