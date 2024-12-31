import "./Login_Register.css";
import { useState } from "react";

export default function Login_Register() {
  const [activeForm, setActiveForm] = useState("login");

  const switchForm = (form) => {
    setActiveForm(form);
  };
  return (
    <>
      <div className="form_switcher">
        <button
          className={activeForm === "login" ? "active" : ""}
          onClick={() => switchForm("login")}
        >
          Login
        </button>
        <button
          className={activeForm === "register" ? "active" : ""}
          onClick={() => switchForm("register")}
        >
          Sign Up
        </button>
      </div>
      {activeForm === "login" && (
        <div className="login_form">
          <h1>Login</h1>
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
          <h1>Sign Up</h1>
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
