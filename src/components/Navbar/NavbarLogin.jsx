/* eslint-disable react/prop-types */
import "./Navbar.css";
// import { useState } from "react";
import Modal from "../Modal/Modal";
import Login_Register from "../Login_Register/Login_Register";
import { useModal, useUser } from "../../context/UserContext";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

export default function NavbarLogin({ isRightSideOpen }) {
  const { user, setUser } = useUser();
  const { showModal, openModal, closeModal } = useModal();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <>
      <div className="navbar_login">
        {user ? (
          <button
            className={isRightSideOpen ? "login_btn" : "icon_btn"}
            onClick={handleLogout}
          >
            {isRightSideOpen ? "Logout" : <FaSignOutAlt />}
          </button>
        ) : (
          <button
            className={isRightSideOpen ? "login_btn" : "icon_btn"}
            onClick={openModal}
          >
            {isRightSideOpen ? "Login" : <FaSignInAlt />}
          </button>
        )}

        <Modal show={showModal} onClose={closeModal}>
          <Login_Register closeModal={closeModal} />
        </Modal>
      </div>
    </>
  );
}
