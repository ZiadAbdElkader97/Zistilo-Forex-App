import "./Navbar.css";
// import { useState } from "react";
import Modal from "../Modal/Modal";
import Login_Register from "../Login_Register/Login_Register";
import { useModal, useUser } from "../../context/UserContext";

export default function NavbarLogin() {
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
          <button className="login_btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className="login_btn" onClick={openModal}>
            Login
          </button>
        )}

        <Modal show={showModal} onClose={closeModal}>
          <Login_Register closeModal={closeModal} />
        </Modal>
      </div>
    </>
  );
}
