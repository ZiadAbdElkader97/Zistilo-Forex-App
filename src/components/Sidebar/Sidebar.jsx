/* eslint-disable react/prop-types */
import "./Sidebar.css";
import { useState } from "react";
import TradeSection from "../TradeSection/TradeSection";
import { center_menu, bottom_menu } from "../../assets/data/SidebarData";
import { FaRegHandPointer } from "react-icons/fa6";
import { LuKeyboard, LuFullscreen } from "react-icons/lu";
import { CgDarkMode } from "react-icons/cg";
import { AiOutlineTrademark } from "react-icons/ai";
import { FaRegCopy, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { IoSettingsOutline, IoHelpCircleOutline } from "react-icons/io5";
import { GrPlan } from "react-icons/gr";
import {
  MdOutlineEmail,
  MdLanguage,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdPermContactCalendar,
} from "react-icons/md";

export default function Sidebar({ toggleMode }) {
  const [open, setOpen] = useState(true);
  const [visibleBottomMenu, setVisibleBottomMenu] = useState(true);
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
            <i title="Quick Trade">
              <FaRegHandPointer />
            </i>
            <i title="Hotkeys">
              <LuKeyboard />
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
            <i title={center_menu.center1}>
              <AiOutlineTrademark />
            </i>
            <h4>{center_menu.center1}</h4>
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
            <i title={center_menu.center2}>
              <FaRegCopy />
            </i>
            <h4>{center_menu.center2}</h4>
          </div>
          <div
            className={
              toggleState === 3
                ? "center_menu_list center_menu_active"
                : "center_menu_list"
            }
            onClick={() => toggleTab(3)}
          >
            <i title={center_menu.center3}>
              <MdPermContactCalendar />
            </i>
            <h4>{center_menu.center3}</h4>
          </div>
        </div>

        {/* Bottom Menu */}
        <div className="arrow_btn">
          <button
            className="btn_icon"
            onClick={() => setVisibleBottomMenu(!visibleBottomMenu)}
          >
            {visibleBottomMenu ? (
              <MdOutlineKeyboardArrowDown />
            ) : (
              <MdOutlineKeyboardArrowUp />
            )}
          </button>
        </div>
        <div className={visibleBottomMenu ? "bottom_menu" : "sm_bottom_menu"}>
          <div className="bottom_menu_list">
            <i title={bottom_menu.bottom1}>
              <GrPlan />
            </i>
            <h4>{bottom_menu.bottom1}</h4>
          </div>
          <div className="bottom_menu_list">
            <i title={bottom_menu.bottom2}>
              <IoSettingsOutline />
            </i>
            <h4>{bottom_menu.bottom2}</h4>
          </div>
          <div className="bottom_menu_list">
            <i title={bottom_menu.bottom3}>
              <IoHelpCircleOutline />
            </i>
            <h4>{bottom_menu.bottom3}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
