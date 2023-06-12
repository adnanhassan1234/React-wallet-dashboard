import React from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./splash.scss";
import btn from "../../Images/login/button.png";
import google from "../../Images/login/icon.png";
import facebook from "../../Images/login/facebook.png";
import logo from "../../Images/login/logo@2x.png";

const Splash = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signinToLogin = () => navigate("/login");
//   const signUpPage = () => navigate("/SignUp");
  return (
    <>
      <div className="splash">
        <div className="container">
          <div className="row">
            <div className="col-12">
             <div className="line_bottom">
             <div className="box">
               <div className="logo">
               <img src={logo} alt="" />
               </div>
                <Form className="splash_field">
                  <input type="hidden" />

                  <Form.Group className="logins form-group">
                    <button className="btn" onClick={signinToLogin}>
                      <span className="m-auto">Login</span>
                    </button>
                  </Form.Group>

                  <Form.Group className="googles form-group">
                    <button className="btn">
                      <img src={google} alt="" />
                      <span className="m-auto">Login with Google</span>
                    </button>
                  </Form.Group>

                  <Form.Group className="facebooks form-group">
                    <button className="btn">
                      <img src={facebook} alt="" />
                      <span className="m-auto">Login with Facebook</span>
                    </button>
                  </Form.Group> <br />

                  <div class="loginbox-or">
                    <div class="or-line"></div>
                    <div class="or">OR</div>
                </div>
                <Form.Group className="signUp form-group mb-5">
                    <button className="btn" onClick={signinToLogin}>
                      <span className="m-auto">Sign up</span>
                    </button>
                  </Form.Group>
                </Form>
              </div>
            
             </div>
             <div className="text text-white">
                    <p>Made by Royalz, V 1.0</p>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Splash;
