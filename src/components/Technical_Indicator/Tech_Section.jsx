import "./Tech_Section.css";
import { useState } from "react";
import Beginner from "./Beginner.jsx";
import Intermediate from "./Intermediate.jsx";
import Advanced from "./Advanced.jsx";
import Modal from "../Modal/Modal.jsx";
import Login_Register from "../Login_Register/Login_Register.jsx";
import { useUser } from "../../context/UserContext.jsx";
import { useTranslation } from "react-i18next";

export default function Tech_Section() {
  const { t } = useTranslation();

  const { user } = useUser();

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="tech_general">
        <div className={`tech_indicator ${!user ? "tech_indicator_blur" : ""}`}>
          <div className="tech_tabs">
            <span
              className={
                toggleState === 1 ? "tech_tab tech_tab_active" : "tech_tab"
              }
              onClick={() => toggleTab(1)}
              style={{ borderRadius: "4px 0 0 4px" }}
            >
              {t("Beginner")}
            </span>
            <span
              className={
                toggleState === 2 ? "tech_tab tech_tab_active" : "tech_tab"
              }
              onClick={() => toggleTab(2)}
            >
              {t("Intermediate")}
            </span>
            <span
              className={
                toggleState === 3 ? "tech_tab tech_tab_active" : "tech_tab"
              }
              onClick={() => toggleTab(3)}
              style={{ borderRadius: "0 4px 4px 0px" }}
            >
              {t("Advanced")}
            </span>
          </div>

          {toggleState === 1 ? <Beginner /> : <></>}
          {toggleState === 2 ? <Intermediate /> : <></>}
          {toggleState === 3 ? <Advanced /> : <></>}
        </div>

        <Modal show={showModal} onClose={handleCloseModal}>
          <Login_Register closeModal={handleCloseModal} />
        </Modal>

        {!user && (
          <button className="login_btn_tech" onClick={handleOpenModal}>
            {t("Please login to view this content")}
          </button>
        )}
      </div>
    </>
  );
}
