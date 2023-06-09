import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import btn from "../../Images/login/button.png";
import google from "../../Images/login/icon.png";
import facebook from "../../Images/login/facebook.png";

const Signup = () => {
  const navigate = useNavigate();
  const signinToEmailHome = () => {
    navigate("/dashboard");
  };
  const signUpPage = () => {
    navigate("/SignUp");
  };

  return (
    <>
      <div className="box">
        <h1 className={"my-5 text-center text-white"}>Join us</h1>
        <Form>
          <input type={"hidden"} />
          <Form.Group className={"form-group"} controlId="loginEmail">
            <Form.Control
              className="form-box-shadow"
              type={"text"}
              placeholder="Username"
              required
            />
          </Form.Group>
          <Form.Group className={"form-group"} controlId="loginEmail">
            <Form.Control
              className="form-box-shadow"
              type={"password"}
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className={"form-group"} controlId="loginpassword">
            <Form.Control
              className="form-box-shadow"
              type={"password"}
              placeholder="Repeat Password"
              required
            />
          </Form.Group>
          <Form.Group className={"form-group"} controlId="loginpassword">
            <Form.Control
              className="form-box-shadow"
              type={"email"}
              placeholder="Email Address"
              required
            />
          </Form.Group>
          <Form.Group className={"form-group "}>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <span className="mx-2 mt-3 text-white"> AGREED to TERMS?</span>
              </div>
              <div className="img">
                <img src={btn} width="100%" alt="" />
              </div>
            </div>
          </Form.Group>
          <Form.Group className={"form-group"}>
            <button className="btn" onClick={signinToEmailHome}>
            <img src={google} alt="" /> <span className="m-auto">Login with Google</span>
            </button>
          </Form.Group>
          <Form.Group className={"form-group"} >
            <button className="btn" onClick={signinToEmailHome}>
            <img src={facebook} alt="" /> <span className="m-auto">Login with Facebook</span>
            </button>
          </Form.Group>

          <Form.Group className={"form-group text-center "}>
           <span className="account"> Don’t have an account?</span> {" "}
            <Link className={"text_green"} onClick={signUpPage}>
            &nbsp; login
            </Link>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Signup;
