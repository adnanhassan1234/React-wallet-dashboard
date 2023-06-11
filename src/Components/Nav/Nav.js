import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./index.module.scss";
import { Dropdown } from "react-bootstrap";
import home from "../../Images/sidebar icon/home.png";
import dashboard from "../../Images/sidebar icon/dashboard.png";
import wallet from "../../Images/sidebar icon/wallet.png";
import inventory from "../../Images/sidebar icon/inventory.png";
import calender from "../../Images/sidebar icon/calendar.png";
import order from "../../Images/sidebar icon/orders.png";
import setting from "../../Images/sidebar icon/settings.png";
import logout from "../../Images/sidebar icon/logout.png";
import message from "../../Images/navbar/messages.png";

const Nav = () => {
  const navigate = useNavigate();

  const logoutPage = () => {
    navigate("/");
  };

  return (
    <nav className={classes.navBar}>
      <ul>
        <NavItem to="/home" title="Home" icon={home} />
        <NavItem to="/dashboard" title="Dashboard" icon={dashboard} />
        <NavItem to="/wallet" title="Wallet" icon={wallet} />
        <NavItem to="/inventory" title="Inventory" icon={inventory} />
        {/* <NavItem to="/calendar" title="Calendar" icon={calender} /> */}
        <NavItem to="/order" title="Order" icon={order} />
        <NavItem to="/support" title="Message" icon={message} />
      </ul>
      <div className="bottomProfile" style={{ marginTop: "72px" }}>
        <ul>
          <NavItem to="/setting" title="Setting" icon={setting} />
          <NavItem to="/" title="Logout" onClick={logoutPage} icon={logout} />
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ to, title, icon }) => (
  <li>
    <Link to={to} title={title}>
      <img src={icon} width="100%" alt="" />
    </Link>
  </li>
);

export default Nav;
