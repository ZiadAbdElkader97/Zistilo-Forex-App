/* eslint-disable react/prop-types */
import "./Navbar.css";
import Modal from "../Modal/Modal";
import Login_Register from "../Login_Register/Login_Register";
import { useModal, useUser } from "../../context/UserContext";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function NavbarLogin({ isRightSideOpen }) {
  const { t } = useTranslation();

  const { user, setUser } = useUser();
  const { showModal, openModal, closeModal } = useModal();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <div className="navbar_login">
        {user ? (
          <button
            className={isRightSideOpen ? "login_btn" : "icon_btn"}
            onClick={handleLogout}
          >
            {isRightSideOpen ? t("Logout") : <FaSignOutAlt />}
          </button>
        ) : (
          <button
            className={isRightSideOpen ? "login_btn" : "icon_btn"}
            onClick={openModal}
          >
            {isRightSideOpen ? t("Login") : <FaSignInAlt />}
          </button>
        )}

        <Modal show={showModal} onClose={closeModal}>
          <Login_Register closeModal={closeModal} />
        </Modal>
      </div>
    </>
  );
}
