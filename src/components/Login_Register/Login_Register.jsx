/* eslint-disable react/prop-types */
import "./Login_Register.css";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { PiUserCirclePlusBold } from "react-icons/pi";
import { useUser } from "../../context/UserContext";
import { useTranslation } from "react-i18next";

export default function Login_Register({ closeModal }) {
  const { t } = useTranslation();

  const { setUser } = useUser();

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
    if (activeForm === "login") {
      setUser({ email: formData.email });
      localStorage.setItem("user", JSON.stringify({ email: formData.email }));
      closeModal();
    } else if (activeForm === "register") {
      setUser({ name: formData.name, email: formData.email });
      localStorage.setItem(
        "user",
        JSON.stringify({ name: formData.name, email: formData.email })
      );
      closeModal();
    }
  };

  return (
    <>
      {activeForm === "login" && (
        <div className="login_form">
          <div className="form_header">
            <i className="form_icon">
              <FaCircleUser />
            </i>
            <h1>{t("Login")}</h1>
          </div>
          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder={t("Enter your email")}
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder={t("Enter your password")}
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            <div className="keep_login">
              <input type="checkbox" name="keep_login" id="keep_login" />
              <label htmlFor="keep_login">{t("Remember me")}</label>
            </div>
            <button type="submit">{t("Login")}</button>
          </form>
          <span className="login_span" onClick={() => switchForm("register")}>
            {t("Forget Email / Password?")}
          </span>
        </div>
      )}
      {activeForm === "register" && (
        <div className="signup_form">
          <div className="form_header">
            <i className="form_icon signup_icon">
              <PiUserCirclePlusBold />
            </i>
            <h1>{t("Sign Up")}</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t("Enter your name")}
              required
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder={t("Enter your email")}
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder={t("Enter your password")}
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder={t("Confirm your password")}
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <button type="submit">{t("Sign Up")}</button>
          </form>
          <span className="signup_span arabic_text">
            {t("Already have an account?")}
            <span onClick={() => switchForm("login")}>{t("Login Here")}</span>
          </span>
        </div>
      )}
    </>
  );
}
