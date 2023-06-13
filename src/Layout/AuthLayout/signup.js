import React from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import btn from "../../Images/login/button.png";
import google from "../../Images/login/icon.png";
import facebook from "../../Images/login/facebook.png";
import Checkbox from "@mui/material/Checkbox";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const signinToEmailHome = () => navigate("/home");

  const signUpPage = () => navigate("/SignUp");

  return (
    <div className="box">
      <h1 className="my-5 text-center text-white">Join us</h1>
      <Form>
        <input type="hidden" />
        <Form.Group className="form-group" controlId="loginEmail">
          <Form.Control
            className="form-box-shadow"
            type="text"
            placeholder="Username"
            required
          />
        </Form.Group>
        <Form.Group className="form-group" controlId="loginEmail">
          <Form.Control
            className="form-box-shadow"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="form-group" controlId="loginpassword">
          <Form.Control
            className="form-box-shadow"
            type="password"
            placeholder="Repeat Password"
            required
          />
        </Form.Group>
        <Form.Group className="form-group" controlId="loginpassword">
          <Form.Control
            className="form-box-shadow"
            type="email"
            placeholder="Email Address"
            required
          />
        </Form.Group>
        <Form.Group className="form-group">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div class="form-check d-flex">
                <input
                  type="checkbox"
                  class="custom-checkbox"
                  style={{ boxShadow: "none !important"}}
                />
                <span className="mx-2 mt-3 text-white agreed">
                  AGREED TO TERMS?
                </span>
              </div>
            </div>
            <div className="img">
              <img src={btn} width="100%" alt="" />
            </div>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Signup;
