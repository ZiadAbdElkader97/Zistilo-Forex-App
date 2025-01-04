/* eslint-disable react/prop-types */
import "./Sidebar.css";
import { useState } from "react";
import TradeSection from "../TradeSection/TradeSection";
import { sidebar_menu } from "../../assets/data/SidebarData";
import { LuFullscreen } from "react-icons/lu";
import { CgDarkMode } from "react-icons/cg";
import { AiOutlineTrademark } from "react-icons/ai";
import { FaRegCopy, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { IoHelpCircleOutline } from "react-icons/io5";
import { GrPlan } from "react-icons/gr";
import {
  MdOutlineEmail,
  MdLanguage,
  MdPermContactCalendar,
} from "react-icons/md";
import Modal from "../Modal/Modal";
import Contact_Us from "../Contact_Us/Contact_Us";
import SubscriptionPlans from "../SubscriptionPlans/SubscriptionPlans";

export default function Sidebar({ toggleMode }) {
  const [open, setOpen] = useState(true);
  const [isVisibleTrade, setIsVisibleTrade] = useState(true);

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      const elem = document.documentElement;

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };
  const [isMuted, setIsMuted] = useState(false);

  const [showContactModal, setShowContactModal] = useState(false);

  const handleOpenContactModal = () => {
    setShowContactModal(true);
  };
  const handleCloseContactModal = () => {
    setShowContactModal(false);
  };

  const [showSubPlansModal, setShowSubPlansModal] = useState(false);

  const handleOpenSubPlansModal = () => {
    setShowSubPlansModal(true);
  };
  const handleCloseSubPlansModal = () => {
    setShowSubPlansModal(false);
  };

  return (
    <>
      <div className={open ? "sidebar" : "sm_sidebar"}>
        {/* Top Menu */}
        <div className="top_menu">
          <div
            className="top_menu_bar"
            onClick={() => (setOpen(!open), setIsVisibleTrade(!isVisibleTrade))}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="top_menu_icons">
            <i title="Email Alerts">
              <MdOutlineEmail />
            </i>
            <i title="Full-screen mode (F11)" onClick={handleFullScreen}>
              <LuFullscreen />
            </i>
            <i title="Switch color theme" onClick={toggleMode}>
              <CgDarkMode />
            </i>
            <i
              title={isMuted ? "Sound is off" : "Sound is on"}
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </i>
            <i title="Change Language">
              <MdLanguage />
            </i>
          </div>
        </div>

        {/* Center Menu */}
        <div className="center_menu">
          <div
            className={
              toggleState === 1
                ? "center_menu_list  center_menu_active"
                : "center_menu_list"
            }
            onClick={() => (
              toggleTab(1), setIsVisibleTrade(!isVisibleTrade), setOpen(!open)
            )}
          >
            <i title={sidebar_menu.menu1}>
              <AiOutlineTrademark />
            </i>
            <h4>{sidebar_menu.menu1}</h4>
          </div>
          {toggleState === 1 && isVisibleTrade ? <TradeSection /> : <></>}
          <div
            className={
              toggleState === 2
                ? "center_menu_list center_menu_active"
                : "center_menu_list"
            }
            onClick={() => toggleTab(2)}
          >
            <i title={sidebar_menu.menu2}>
              <FaRegCopy />
            </i>
            <h4>{sidebar_menu.menu2}</h4>
          </div>
          <div
            className={
              toggleState === 3
                ? "center_menu_list center_menu_active"
                : "center_menu_list"
            }
            onClick={() => (toggleTab(3), handleOpenContactModal())}
          >
            <i title={sidebar_menu.menu3}>
              <MdPermContactCalendar />
            </i>
            <h4>{sidebar_menu.menu3}</h4>
          </div>
          <Modal show={showContactModal} onClose={handleCloseContactModal}>
            <Contact_Us />
          </Modal>
          <div
            className={
              toggleState === 4
                ? "center_menu_list center_menu_active"
                : "center_menu_list"
            }
            onClick={() => (toggleTab(4), handleOpenSubPlansModal())}
          >
            <i title={sidebar_menu.menu4}>
              <GrPlan />
            </i>
            <h4>{sidebar_menu.menu4}</h4>
          </div>
          <Modal show={showSubPlansModal} onClose={handleCloseSubPlansModal}>
            <SubscriptionPlans />
          </Modal>
          <div
            className={
              toggleState === 5
                ? "center_menu_list center_menu_active"
                : "center_menu_list"
            }
            onClick={() => toggleTab(5)}
          >
            <i title={sidebar_menu.menu5}>
              <IoHelpCircleOutline />
            </i>
            <h4>{sidebar_menu.menu5}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
