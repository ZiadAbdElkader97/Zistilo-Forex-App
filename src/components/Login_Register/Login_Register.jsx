import "./Login_Register.css";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { PiUserCirclePlusBold } from "react-icons/pi";

export default function Login_Register() {
  const [activeForm, setActiveForm] = useState("login");

  const switchForm = (form) => {
    setActiveForm(form);
  };
  return (
    <>
      {activeForm === "login" && (
        <div className="login_form">
          <div className="form_header">
            <i className="form_icon">
              <FaCircleUser />
            </i>
            <h1>Login</h1>
          </div>
          {/* Login Form */}
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <div className="keep_login">
              <input type="checkbox" name="keep_login" id="keep_login" />
              <label htmlFor="keep_login">Remember me</label>
            </div>
            <button type="submit">Login</button>
          </form>
          <span className="login_span" onClick={() => switchForm("register")}>
            Forget Email / Password?
          </span>
        </div>
      )}
      {activeForm === "register" && (
        <div className="signup_form">
          <div className="form_header">
            <i className="form_icon">
              <PiUserCirclePlusBold />
            </i>
            <h1>Sign Up</h1>
          </div>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Confirm your password"
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          <span className="signup_span">
            Already have an account?
            <span onClick={() => switchForm("login")}>Login Here</span>
          </span>
        </div>
      )}
    </>
  );
}
