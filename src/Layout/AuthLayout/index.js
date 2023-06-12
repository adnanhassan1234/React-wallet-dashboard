import React, { useState } from "react";
import Login from "./login";
import "./login.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Signup from "./signup";
import logo from "../../Images/login/base.png";
import arrow from "../../Images/login/arrow (3).png";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const [activeTab, setActiveTab] = useState("login");

  const navigate = useNavigate();

  const signinToAcount = () => navigate("/");

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <>
      <div className="login">
        <div className="arrow" style={{ transform: "translate(31px, 25px)" }}>
          <img src={arrow} alt="" onClick={signinToAcount} />
        </div>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="row">
            <div className="col-12">
              <div className="line_bottom">
                <Tabs
                  activeKey={activeTab}
                  id="fill-tab-example"
                  className="mb-3 tabs_row"
                  fill
                  onSelect={handleTabChange}
                >
                  <Tab eventKey="login" title="LOGIN">
                    <Login />
                  </Tab>
                  <Tab eventKey="sign up" title="SIGN UP">
                    <Signup />
                  </Tab>
                </Tabs>
              </div>
              {activeTab === "login" ? (
                <>
                  <Form.Group className="form-group text-center my-3">
                    <span className="account">new user? </span>
                    <Link
                      className="text_green"
                      onClick={() => handleTabChange("sign up")}
                    >
                      sign up
                    </Link>
                  </Form.Group>
                </>
              ) : (
                <>
                  <Form.Group className="form-group text-center my-3">
                    <span className="account text-white">Already did this? </span>
                    <Link
                      className="text_green text-white"
                      onClick={() => handleTabChange("login")}
                    >
                      login
                    </Link>
                  </Form.Group>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
