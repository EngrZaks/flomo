import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./nav.scss";
import { MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd";
const { SubMenu } = Menu;

export const MobileNav = ({ logo }) => {
  // const windowWidth = useWindowSize().width;
  return (
    <nav>
      <Menu
        className="menu"
        style={{ width: "100%", padding: 5, zIndex: 1 }}
        defaultSelectedKeys={[""]}
        defaultOpenKeys={[""]}
        mode="inline"
      >
        <div className="logo">
          <img src={logo} alt="Flomo logo" />
        </div>
        {/* <MenuOutlined /> */}
        <Router>
          <SubMenu key="sub1" icon={<MenuOutlined />} title="">
            <Menu.Item key="1">
              <Link to="shop">Shop</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="wear">What to wear</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/fashion">Fashion</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/sell">Sell on Flomo</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/learn">Learn More</Link>
            </Menu.Item>
          </SubMenu>
        </Router>
      </Menu>
    </nav>
  );
};

export const DesktopNav = ({ logo, showSignin, showSignup }) => {
  return (
    <nav className="desktop-nav">
      <div className="logo">
        <img src={logo} alt="Flomo logo" />
      </div>
      {/* <MenuOutlined /> */}
      <Router>
        <ul>
          <li>
            <Link to="/shop">shop</Link>
          </li>
          <li>
            <Link to="/wear">What to wear</Link>
          </li>
          <li>
            <Link to="/fashion">Fashion</Link>
          </li>
          <li>
            <Link to="/sell">Sell on Flomo</Link>
          </li>
          <li>
            <Link to="/learn">Learn More</Link>
          </li>
        </ul>
      </Router>
    </nav>
  );
};
