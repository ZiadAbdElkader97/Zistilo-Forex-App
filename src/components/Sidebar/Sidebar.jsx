/* eslint-disable react/prop-types */
import "./Sidebar.css";
import { useEffect, useState } from "react";
import MarketSection from "../MarketSection/MarketSection";
import { sidebar_menu } from "../../assets/data/SidebarData";
import { LuFullscreen } from "react-icons/lu";
import { CgDarkMode } from "react-icons/cg";
import { AiOutlineTrademark } from "react-icons/ai";
import { FaRegCopy, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { IoHelpCircleOutline } from "react-icons/io5";
import { GrPlan } from "react-icons/gr";
import { MdOutlineEmail, MdPermContactCalendar } from "react-icons/md";
import en_lang from "../../assets/img/en.png";
import ar_lang from "../../assets/img/ar.png";
import de_lang from "../../assets/img/de.png";
import Modal from "../Modal/Modal";
import MailingList from "../MailingList/MailingList";
import Contact_Us from "../Contact_Us/Contact_Us";
import SubscriptionPlans from "../SubscriptionPlans/SubscriptionPlans";
import i18n from "../../i18n.js";
import { useTranslation } from "react-i18next";

export default function Sidebar({ toggleMode }) {
  const { t } = useTranslation();

  const [open, setOpen] = useState(true);
  const [isVisibleTrade, setIsVisibleTrade] = useState(true);

  const [openMenuLang, SetOpenMenuLang] = useState(false);
  const [toggleOption, setToggleOption] = useState(1);
  const [selectedLang, setSelectedLang] = useState(en_lang);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    const savedLangImage = localStorage.getItem("selectedLangImage") || en_lang;
    i18n.changeLanguage(savedLanguage);
    setSelectedLang(savedLangImage);
    if (savedLanguage === "ar") {
      setToggleOption(2);
    } else if (savedLanguage === "de") {
      setToggleOption(3);
    } else {
      setToggleOption(1);
    }
  }, []);

  const handleToggle = () => {
    SetOpenMenuLang(!openMenuLang);
  };

  const handleToggleOption = (option, langImage, langCode) => {
    setToggleOption(option);
    setSelectedLang(langImage);
    i18n.changeLanguage(langCode);
    localStorage.setItem("selectedLanguage", langCode);
    localStorage.setItem("selectedLangImage", langImage);
    SetOpenMenuLang(false);
  };

  const [toggleState, setToggleState] = useState(1);
  const [modalTitle, setModalTitle] = useState("");
  const toggleTab = (index, title = "") => {
    setToggleState(index);
    setModalTitle(title);
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

  const [showMailingModal, setShowMailingModal] = useState(false);

  const handleOpenMailingModal = () => {
    setShowMailingModal(true);
    setModalTitle(t("Mailing List"));
  };
  const handleCloseMailingModal = () => {
    setShowMailingModal(false);
  };

  const [showContactModal, setShowContactModal] = useState(false);

  const handleOpenContactModal = () => {
    setShowContactModal(true);
    setModalTitle(t("Contact Us"));
  };
  const handleCloseContactModal = () => {
    setShowContactModal(false);
  };

  const [showSubPlansModal, setShowSubPlansModal] = useState(false);

  const handleOpenSubPlansModal = () => {
    setShowSubPlansModal(true);
    setModalTitle(t("Subscription Plans"));
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
            <i
              title={t("Mailing List")}
              onClick={() => handleOpenMailingModal()}
            >
              <MdOutlineEmail />
            </i>
            <i title={t("Full-screen mode (F11)")} onClick={handleFullScreen}>
              <LuFullscreen />
            </i>
            <i title={t("Switch color theme")} onClick={toggleMode}>
              <CgDarkMode />
            </i>
            <i
              title={isMuted ? t("Sound is off") : t("Sound is on")}
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </i>
            <i title={t("Change Language")} onClick={handleToggle}>
              <img className="lang_img_icon" src={selectedLang} />
            </i>
          </div>
          <Modal
            show={showMailingModal}
            onClose={handleCloseMailingModal}
            title={modalTitle}
          >
            <MailingList />
          </Modal>
        </div>

        <div className="lang_dropdown">
          {openMenuLang && (
            <div className="dropdown_menu">
              <div className="dropdown_group">
                <img
                  src={en_lang}
                  onClick={() => handleToggleOption(1, en_lang, "en")}
                />
                <p
                  className={
                    toggleOption === 1
                      ? "dropdown_tab dropdown_active"
                      : "dropdown_tab"
                  }
                  onClick={() => handleToggleOption(1, en_lang, "en")}
                >
                  EN
                </p>
              </div>
              <div className="dropdown_group">
                <img
                  src={ar_lang}
                  onClick={() => handleToggleOption(2, ar_lang, "ar")}
                />
                <p
                  className={
                    toggleOption === 2
                      ? "dropdown_tab dropdown_active"
                      : "dropdown_tab"
                  }
                  onClick={() => handleToggleOption(2, ar_lang, "ar")}
                >
                  AR
                </p>
              </div>
              <div className="dropdown_group">
                <img
                  src={de_lang}
                  onClick={() => handleToggleOption(3, de_lang, "de")}
                />
                <p
                  className={
                    toggleOption === 3
                      ? "dropdown_tab dropdown_active"
                      : "dropdown_tab"
                  }
                  onClick={() => handleToggleOption(3, de_lang, "de")}
                >
                  DE
                </p>
              </div>
            </div>
          )}
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
            <i title={t(sidebar_menu.menu1)}>
              <AiOutlineTrademark />
            </i>
            <h4>{t(sidebar_menu.menu1)}</h4>
          </div>
          {toggleState === 1 && isVisibleTrade ? <MarketSection /> : <></>}
          <div
            className={
              toggleState === 2
                ? "center_menu_list center_menu_active"
                : "center_menu_list"
            }
            onClick={() => toggleTab(2)}
          >
            <i title={t(sidebar_menu.menu2)}>
              <FaRegCopy />
            </i>
            <h4>{t(sidebar_menu.menu2)}</h4>
          </div>
          <div
            className={
              toggleState === 3
                ? "center_menu_list center_menu_active"
                : "center_menu_list"
            }
            onClick={() => (toggleTab(3), handleOpenContactModal())}
          >
            <i title={t(sidebar_menu.menu3)}>
              <MdPermContactCalendar />
            </i>
            <h4>{t(sidebar_menu.menu3)}</h4>
          </div>
          <Modal
            show={showContactModal}
            onClose={handleCloseContactModal}
            title={modalTitle}
          >
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
            <i title={t(sidebar_menu.menu4)}>
              <GrPlan />
            </i>
            <h4>{t(sidebar_menu.menu4)}</h4>
          </div>
          <Modal
            show={showSubPlansModal}
            onClose={handleCloseSubPlansModal}
            title={modalTitle}
          >
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
            <i title={t(sidebar_menu.menu5)}>
              <IoHelpCircleOutline />
            </i>
            <h4>{t(sidebar_menu.menu5)}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
