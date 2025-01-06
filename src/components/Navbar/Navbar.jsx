import "./Navbar.css";
import { useContext, useState } from "react";
import Modal from "../Modal/Modal";
import Login_Register from "../Login_Register/Login_Register";
import { FaSquare } from "react-icons/fa";
import { HiMiniSquare2Stack } from "react-icons/hi2";
import { DataContext } from "../../context/DataContext";

export default function Navbar() {
  const { setIsSingleChart } = useContext(DataContext);

  const [activeChartTab, setActiveChartTab] = useState(1);

  const handleActiveChartTab = (tab) => {
    setActiveChartTab(tab);
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
      <div className="navbar">
        <div className="navbar_main">
          <div className="charts_tabs">
            <div
              className={
                activeChartTab === 1 ? "chart_tab chart_active" : "chart_tab"
              }
              onClick={() => (setIsSingleChart(true), handleActiveChartTab(1))}
            >
              <i>
                <FaSquare />
              </i>
              <p>Single Chart</p>
            </div>
            <div
              className={
                activeChartTab === 2 ? "chart_tab chart_active" : "chart_tab"
              }
              onClick={() => (setIsSingleChart(false), handleActiveChartTab(2))}
            >
              <i>
                <HiMiniSquare2Stack />
              </i>
              <p>Double Chart</p>
            </div>
          </div>
        </div>
        <div className="navbar_login">
          <button className="login_btn" onClick={handleOpenModal}>
            Login
          </button>
          <Modal show={showModal} onClose={handleCloseModal}>
            <Login_Register />
          </Modal>
        </div>
      </div>
    </>
  );
}
