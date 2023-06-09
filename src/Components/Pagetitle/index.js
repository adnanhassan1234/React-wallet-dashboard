import React, { useState } from "react";
import { Form, InputGroup, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./index.module.scss";
import notification from "../../Images/navbar/activity.png";
import message from "../../Images/navbar/messages.png";

const PageTitle = (props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={classes.pageTitle}>
      <header id={classes.header}>
        <div className={classes.headerRight}>
          <div className="d-flex">
            <div className="mt-1">
              <img
                src={message}
                className={classes.notification}
                width="100"
                alt=""
              />
            </div>
            <div>
              <img
                src={notification}
                className={classes.notification}
                width="100"
                alt=""
              />
            </div>

            <div className={classes.plus}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </div>

            <div className={classes.headerIcon}>
              <Dropdown show={isDropdownOpen} onToggle={toggleDropdown}>
                <Dropdown.Toggle id="dropdown-basic" className={classes.avator}>
                  A
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {/* Dropdown menu items */}
                  <Dropdown.Item>Profile</Dropdown.Item>
                  <Dropdown.Item>Setting</Dropdown.Item>
                  <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className={classes.headerRight}>
          <Form>
            <InputGroup  className={classes.searchIcon}>
              <InputGroup.Text id="basic-addon1">
                <i className="fal fa-search"></i>
              </InputGroup.Text>
              <Form.Control
                className={classes.search}
                placeholder="Search for a number.."
                aria-label="Username"
                aria-describedby="basic-addon1"
                style={{width:'550px'}}
              />
            </InputGroup>
          </Form>
        </div>
      </header>
    </div>
  );
};

export default PageTitle;
