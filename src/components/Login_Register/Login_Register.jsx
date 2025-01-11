import "./Login_Register.css";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { PiUserCirclePlusBold } from "react-icons/pi";

export default function Login_Register() {
  const [activeForm, setActiveForm] = useState("login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const switchForm = (form) => {
    setActiveForm(form);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={handleInputChange}
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
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
