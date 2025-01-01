import "./Navbar.css";
import { useState } from "react";
import Modal_login from "../Modal_login/Modal_login";
import Login_Register from "../Login_Register/Login_Register";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar_main"></div>
        <div className="navbar_login">
          <button className="login_btn" onClick={handleOpenModal}>
            Login
          </button>
          <Modal_login show={showModal} onClose={handleCloseModal}>
            <Login_Register />
          </Modal_login>
        </div>
      </div>
    </>
  );
}
