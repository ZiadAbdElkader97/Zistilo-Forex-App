import "./PatternsSignals.css";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { LiaSearchSolid } from "react-icons/lia";
import { MdCancel } from "react-icons/md";

export default function PatternsSignals() {
  const {
    patternsSignalsData,
    inputPatternValue,
    setInputPatternValue,
    inputRef,
  } = useContext(DataContext);

  const handleInputChange = (event) => {
    setInputPatternValue(event.target.value);
  };

  const clearInput = () => {
    setInputPatternValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // console.log(patternsSignalsData);

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const filterSignals = patternsSignalsData.filter((signal) => {
    const matchesStatus =
      (toggleState === 1 && signal.status === "Open") ||
      (toggleState === 2 && signal.status === "Pending") ||
      (toggleState === 3 && signal.status === "Close");

    const matchesSymbol = signal.symbol
      .toLowerCase()
      .includes(inputPatternValue.toLowerCase());

    return matchesStatus && matchesSymbol;
  });
  // console.log(filterSignals);

  return (
    <>
      <div className="patterns_signals">
        <div className="patterns_signals_tabs">
          <div className="left_tabs">
            <span
              className={toggleState === 1 ? "tab tab_active" : "tab"}
              title="Opened Signals"
              onClick={() => toggleTab(1)}
            >
              Opened Signals
            </span>
            <span
              className={toggleState === 2 ? "tab tab_active" : "tab"}
              title="Pending Signals"
              onClick={() => toggleTab(2)}
            >
              Pending Signals
            </span>
            <span
              className={toggleState === 3 ? "tab tab_active" : "tab"}
              title="Closed Signals"
              onClick={() => toggleTab(3)}
            >
              Closed Signals
            </span>
          </div>
          <div className="right_search">
            <div className="search_field">
              <input
                type="search"
                placeholder="Enter your symbol"
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
          <div className="patterns_signals_section">
            {toggleState === 1 &&
              filterSignals.map((item) => (
                <div key={item.id}>
                  <div className="patterns_signals_info">
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "50px" }}
                    >
                      <p className="patterns_s_header">Symbol</p>
                      <p className="patterns_s_value">{item.symbol}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "80px" }}
                    >
                      <p className="patterns_s_header">Timeframe</p>
                      <p className="patterns_s_value">{item.timeframe}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "100px" }}
                    >
                      <p className="patterns_s_header">Recommendation</p>
                      <p className="patterns_s_value">{item.recommendation}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "120px" }}
                    >
                      <p className="patterns_s_header">Pattern Type</p>
                      <p className="patterns_s_value">{item.pattern_type}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "60px" }}
                    >
                      <p className="patterns_s_header">Entry</p>
                      <p className="patterns_s_value">{item.entry}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "60px" }}
                    >
                      <p className="patterns_s_header">Take Profit</p>
                      <p className="patterns_s_value">{item.take_profit}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "60px" }}
                    >
                      <p className="patterns_s_header">Stop Loss</p>
                      <p className="patterns_s_value">{item.stop_loss}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            {toggleState === 2 &&
              filterSignals.map((item) => (
                <div key={item.id}>
                  <div className="patterns_signals_info">
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "50px" }}
                    >
                      <p className="patterns_s_header">Symbol</p>
                      <p className="patterns_s_value">{item.symbol}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "80px" }}
                    >
                      <p className="patterns_s_header">Timeframe</p>
                      <p className="patterns_s_value">{item.timeframe}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "100px" }}
                    >
                      <p className="patterns_s_header">Recommendation</p>
                      <p className="patterns_s_value">{item.recommendation}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "120px" }}
                    >
                      <p className="patterns_s_header">Pattern Type</p>
                      <p className="patterns_s_value">{item.pattern_type}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "60px" }}
                    >
                      <p className="patterns_s_header">Entry</p>
                      <p className="patterns_s_value">{item.entry}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "60px" }}
                    >
                      <p className="patterns_s_header">Take Profit</p>
                      <p className="patterns_s_value">{item.take_profit}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "60px" }}
                    >
                      <p className="patterns_s_header">Stop Loss</p>
                      <p className="patterns_s_value">{item.stop_loss}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            {toggleState === 3 &&
              filterSignals.map((item) => (
                <div key={item.id}>
                  <div className="patterns_signals_info">
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "50px" }}
                    >
                      <p className="patterns_s_header">Symbol</p>
                      <p className="patterns_s_value">{item.symbol}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "80px" }}
                    >
                      <p className="patterns_s_header">Timeframe</p>
                      <p className="patterns_s_value">{item.timeframe}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "100px" }}
                    >
                      <p className="patterns_s_header">Recommendation</p>
                      <p className="patterns_s_value">{item.recommendation}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "120px" }}
                    >
                      <p className="patterns_s_header">Pattern Type</p>
                      <p className="patterns_s_value">{item.pattern_type}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "60px" }}
                    >
                      <p className="patterns_s_header">Entry</p>
                      <p className="patterns_s_value">{item.entry}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "60px" }}
                    >
                      <p className="patterns_s_header">Take Profit</p>
                      <p className="patterns_s_value">{item.take_profit}</p>
                    </div>
                    <div
                      className="patterns_s_info_div"
                      style={{ width: "60px" }}
                    >
                      <p className="patterns_s_header">Stop Loss</p>
                      <p className="patterns_s_value">{item.stop_loss}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
