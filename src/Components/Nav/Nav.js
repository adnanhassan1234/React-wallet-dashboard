import React from "react";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import home from '../../Images/sidebar icon/home.png';
import dashboard from '../../Images/sidebar icon/dashboard.png';
import wallet from '../../Images/sidebar icon/wallet.png';
import inventory from '../../Images/sidebar icon/inventory.png';
import calender from '../../Images/sidebar icon/calendar.png';
import order from '../../Images/sidebar icon/orders.png';
import setting from '../../Images/sidebar icon/settings.png';
import logout from '../../Images/sidebar icon/logout.png';

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/dashboard"}>
              <img src={home} width="100%" alt="" />
            </Link>
          </li>
          <li>
            <Link to={"/challenges"}>
              {" "}
              <img src={dashboard} width="100%" alt="" />
            </Link>
          </li>
          <li>
            <Link to={"/affirmations"}>
              {" "}
              <img src={wallet} width="100%" alt="" />
            </Link>
          </li>
          <li>
            <Link to={"/reminder"}>
              {" "}
              <img src={inventory} width="100%" alt="" />
            </Link>
          </li>
          <li>
            <Link to={"/calender"}>
              {" "}
              <img src={calender} width="100%" alt="" />
            </Link>
          </li>
          <li>
            <Link to={"/support"}>
              {" "}
              <img src={order} width="100%" alt="" />
            </Link>
          </li>
        </ul>
        <div className="bottomProfile" style={{marginTop:"65px"}}>
          <ul>
            <li>
              <Link to={"/guidelines"}>
                {" "}
                <img src={setting} width="100%" alt="" />
              </Link>
            </li>
            <li>
              <Link to={"/sponsorship"}>
                {" "}
                <img src={logout} width="100%" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
