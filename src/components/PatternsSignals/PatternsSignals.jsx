import "./PatternsSignals.css";
import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { LiaSearchSolid } from "react-icons/lia";
import { MdCancel } from "react-icons/md";
import Modal from "../Modal/Modal";
import Login_Register from "../Login_Register/Login_Register";
import { useUser } from "../../context/UserContext";
import InfoModal from "../InfoModal/InfoModal";
import { useTranslation } from "react-i18next";

export default function PatternsSignals() {
  const { t } = useTranslation();

  const {
    patternsSignalsData,
    inputPatternValue,
    setInputPatternValue,
    inputRef,
    infoModalData,
  } = useContext(DataContext);

  const getImagesArray = (data) => {
    const images = [];
    if (data?.image1) images.push(data.image1);
    if (data?.image2) images.push(data.image2);
    if (data?.image3) images.push(data.image3);
    return images;
  };

  const { user } = useUser();

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [displayedSignals, setDisplayedSignals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(50);

  const containerRef = useRef(null);

  useEffect(() => {
    setDisplayedSignals(patternsSignalsData.slice(0, visibleCount));
  }, [patternsSignalsData, visibleCount]);

  const handleScroll = () => {
    if (
      containerRef.current.scrollTop + containerRef.current.clientHeight !==
      containerRef.current.scrollHeight
    )
      return;
    setVisibleCount((prevCount) => prevCount + 50);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleInputChange = (event) => {
    setInputPatternValue(event.target.value);
  };

  const clearInput = () => {
    setInputPatternValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const filterSignals = displayedSignals.filter((signal) => {
    const matchesStatus =
      (toggleState === 1 && signal.status === "Open") ||
      (toggleState === 2 && signal.status === "Pending") ||
      (toggleState === 3 && signal.status === "Close");

    const matchesSymbol = signal.symbol
      .toLowerCase()
      .includes(inputPatternValue.toLowerCase());

    return matchesStatus && matchesSymbol;
  });

  const formatToSixDigits = (num) => {
    const parts = num.toString().split(".");
    const integerPart = parts[0];
    const decimalPart = parts[1] || "";
    const formattedDecimalPart = decimalPart.slice(0, 6 - integerPart.length);
    return (
      integerPart + (formattedDecimalPart ? "." + formattedDecimalPart : "")
    );
  };
  const formattedSignals = filterSignals.map((item) => ({
    ...item,
    entry: formatToSixDigits(item.entry),
    take_profit: formatToSixDigits(item.take_profit),
    stop_loss: formatToSixDigits(item.stop_loss),
  }));

  // console.log(filterSignals);

  return (
    <>
      <div className="patternsSignals_general">
        <div
          className={`patterns_signals ${!user ? "patterns_signals_blur" : ""}`}
        >
          <div className="patterns_signals_tabs">
            <div className="left_tabs">
              <div
                className={toggleState === 1 ? "tab tab_active" : "tab"}
                title="Opened Signals"
                onClick={() => toggleTab(1)}
              >
                <p>{t("Opened Signals")}</p>
                <InfoModal
                  title={infoModalData[9]?.title}
                  description={infoModalData[9]?.description}
                  images={getImagesArray(infoModalData[9])}
                  videoUrl={infoModalData[9]?.video_link}
                />
              </div>
              <div
                className={toggleState === 2 ? "tab tab_active" : "tab"}
                title="Pending Signals"
                onClick={() => toggleTab(2)}
              >
                <p>{t("Pending Signals")}</p>
                <InfoModal
                  title={infoModalData[10]?.title}
                  description={infoModalData[10]?.description}
                  images={getImagesArray(infoModalData[10])}
                  videoUrl={infoModalData[10]?.video_link}
                />
              </div>
              <span
                className={toggleState === 3 ? "tab tab_active" : "tab"}
                title="Closed Signals"
                onClick={() => toggleTab(3)}
              >
                {t("Closed Signals")}
              </span>
            </div>
            <div className="right_search">
              <InfoModal
                title={infoModalData[11]?.title}
                description={infoModalData[11]?.description}
                images={getImagesArray(infoModalData[11])}
                videoUrl={infoModalData[11]?.video_link}
              />
              <div className="search_field">
                <input
                  type="search"
                  placeholder={t("Enter symbol name")}
                  className="search_input"
                  value={inputPatternValue}
                  ref={inputRef}
                  onChange={handleInputChange}
                />
                <i onClick={clearInput}>
                  {inputPatternValue ? <MdCancel /> : <LiaSearchSolid />}
                </i>
              </div>
            </div>
          </div>
          <div className="patterns_signals_content">
            <div className="patterns_signals_section" ref={containerRef}>
              {toggleState === 1 &&
                formattedSignals.map((item) => (
                  <div key={item.id}>
                    <div className="patterns_signals_info">
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "50px" }}
                      >
                        <p className="patterns_s_header">{"Symbol"}</p>
                        <p className="patterns_s_value">{item.symbol}</p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "80px" }}
                      >
                        <p className="patterns_s_header">{t("Timeframe")}</p>
                        <p className="patterns_s_value">{item.timeframe}</p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "100px" }}
                      >
                        <p className="patterns_s_header">
                          {t("Recommendation")}
                        </p>
                        <p className="patterns_s_value">
                          {item.recommendation}
                        </p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "120px" }}
                      >
                        <p className="patterns_s_header">{t("Pattern Type")}</p>
                        <p className="patterns_s_value">{item.pattern_type}</p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "60px" }}
                      >
                        <p className="patterns_s_header">{t("Entry")}</p>
                        <p className="patterns_s_value">{item.entry}</p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "60px" }}
                      >
                        <p className="patterns_s_header">{t("Take Profit")}</p>
                        <p className="patterns_s_value">{item.take_profit}</p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "60px" }}
                      >
                        <p className="patterns_s_header">{t("Stop Loss")}</p>
                        <p className="patterns_s_value">{item.stop_loss}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              {toggleState === 2 &&
                formattedSignals.map((item) => (
                  <div key={item.id}>
                    <div className="patterns_signals_info">
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "50px" }}
                      >
                        <p className="patterns_s_header">{t("Symbol")}</p>
                        <p className="patterns_s_value">{item.symbol}</p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "80px" }}
                      >
                        <p className="patterns_s_header">{t("Timeframe")}</p>
                        <p className="patterns_s_value">{item.timeframe}</p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "100px" }}
                      >
                        <p className="patterns_s_header">
                          {t("Recommendation")}
                        </p>
                        <p className="patterns_s_value">
                          {item.recommendation}
                        </p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "120px" }}
                      >
                        <p className="patterns_s_header">{t("Pattern Type")}</p>
                        <p className="patterns_s_value">{item.pattern_type}</p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "60px" }}
                      >
                        <p className="patterns_s_header">{t("Entry")}</p>
                        <p className="patterns_s_value">{item.entry}</p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "60px" }}
                      >
                        <p className="patterns_s_header">{t("Take Profit")}</p>
                        <p className="patterns_s_value">{item.take_profit}</p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "60px" }}
                      >
                        <p className="patterns_s_header">{t("Stop Loss")}</p>
                        <p className="patterns_s_value">{item.stop_loss}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
              {toggleState === 3 &&
                formattedSignals.map((item) => (
                  <div key={item.id}>
                    <div className="patterns_signals_info">
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "50px" }}
                      >
                        <p className="patterns_s_header">{t("Symbol")}</p>
                        <p className="patterns_s_value">{item.symbol}</p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "80px" }}
                      >
                        <p className="patterns_s_header">{t("Timeframe")}</p>
                        <p className="patterns_s_value">{item.timeframe}</p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "100px" }}
                      >
                        <p className="patterns_s_header">
                          {t("Recommendation")}
                        </p>
                        <p className="patterns_s_value">
                          {item.recommendation}
                        </p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "120px" }}
                      >
                        <p className="patterns_s_header">{t("Pattern Type")}</p>
                        <p className="patterns_s_value">{item.pattern_type}</p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "60px" }}
                      >
                        <p className="patterns_s_header">{t("Entry")}</p>
                        <p className="patterns_s_value">{item.entry}</p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "60px" }}
                      >
                        <p className="patterns_s_header">{t("Take Profit")}</p>
                        <p className="patterns_s_value">{item.take_profit}</p>
                      </div>
                      <div
                        className="patterns_s_info_div"
                        style={{ width: "60px" }}
                      >
                        <p className="patterns_s_header">{t("Stop Loss")}</p>
                        <p className="patterns_s_value">{item.stop_loss}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <Modal show={showModal} onClose={handleCloseModal}>
          <Login_Register closeModal={handleCloseModal} />
        </Modal>

        {!user && (
          <button className="login_btn_signal" onClick={handleOpenModal}>
            {t("Please login to view this content")}
          </button>
        )}
      </div>
    </>
  );
}
