import React from "react";
import Login from "./login";
import "./login.scss";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Signup from "./signup";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Tabs
                defaultActiveKey="login"
                id="fill-tab-example"
                className="mb-3 tabs_row"
                fill
              >
                <Tab eventKey="login" title="LOGIN">
                  <Login />
                </Tab>
                <Tab eventKey="sign up" title="SIGN UP">
                  <Signup />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
