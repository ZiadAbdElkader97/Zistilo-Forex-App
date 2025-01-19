import "./PatternsSignals.css";
import { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { LiaSearchSolid } from "react-icons/lia";
import { MdCancel } from "react-icons/md";
import Modal from "../Modal/Modal";
import Login_Register from "../Login_Register/Login_Register";
import { useUser } from "../../context/UserContext";
import { useTranslation } from "react-i18next";

export default function PatternsSignals() {
  const { t } = useTranslation();

  const {
    patternsSignalsData,
    inputPatternValue,
    setInputPatternValue,
    inputRef,
  } = useContext(DataContext);

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
              <span
                className={toggleState === 1 ? "tab tab_active" : "tab"}
                title="Opened Signals"
                onClick={() => toggleTab(1)}
              >
                {t("Opened Signals")}
              </span>
              <span
                className={toggleState === 2 ? "tab tab_active" : "tab"}
                title="Pending Signals"
                onClick={() => toggleTab(2)}
              >
                {t("Pending Signals")}
              </span>
              <span
                className={toggleState === 3 ? "tab tab_active" : "tab"}
                title="Closed Signals"
                onClick={() => toggleTab(3)}
              >
                {t("Closed Signals")}
              </span>
            </div>
            <div className="right_search">
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
