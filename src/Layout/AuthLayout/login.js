import React from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import btn from "../../Images/login/button.png";
import google from "../../Images/login/icon.png";
import facebook from "../../Images/login/facebook.png";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signinToEmailHome = () => navigate("/home");
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

        <Form.Group className="form-group" controlId="loginpassword">
          <Form.Control
            className="form-box-shadow"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="form-group">
          <div className=" switchs d-flex justify-content-between">
            <div className="d-flex" style={{marginLeft: '-17px'}}>
              <span className=" mt-3 text-white">
                <div class="form-check form-switch d-flex">
                  {/* <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                  />
                  <label class="form-check-label" for="flexSwitchCheckChecked">
                    Remember me?
                  </label> */}
                  <label class="switch">
  <input type="checkbox" style={{boxShadow:'none !important', background:'none'}} />
  <span class="slider round"> </span>
</label>  <span className="remember">Remember me?</span>
                </div>
              </span>
            </div>
            <div className="img">
              <img src={btn} width="100%" alt="" />
            </div>
          </div>
        </Form.Group>

        <Form.Group className="googles  form-group">
          <button className="btn" onClick={signinToEmailHome}>
            <img src={google} alt="" />{" "}
            <span className="m-auto">Login with Google</span>
          </button>
        </Form.Group>

        <Form.Group className="facebooks form-group mb-5">
          <button className="btn" onClick={signinToEmailHome}>
            <img src={facebook} alt="" />{" "}
            <span className="m-auto">Login with Facebook</span>
          </button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
