import "./PatternsSignals.css";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";

export default function PatternsSignals() {
  const { patternsSignalsData } = useContext(DataContext);

  // console.log(patternsSignalsData);

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const filterSignals = patternsSignalsData.filter((signal) => {
    if (toggleState === 1) return signal.status === "Open";
    if (toggleState === 2) return signal.status === "Pending";
    if (toggleState === 3) return signal.status === "Close";
    return false;
  });
  // console.log(filterSignals);

  return (
    <>
      <div className="patterns_signals">
        <div className="patterns_signals_tabs">
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
        <div className="patterns_signals_content">
          <div className="patterns_signals_section">
            {toggleState === 1 &&
              filterSignals.map((item) => (
                <>
                  <div key={item.id} className="patterns_signals_info">
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
                </>
              ))}
            {toggleState === 2 &&
              filterSignals.map((item) => (
                <>
                  <div key={item.id} className="patterns_signals_info">
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
                </>
              ))}
            {toggleState === 3 &&
              filterSignals.map((item) => (
                <>
                  <div key={item.id} className="patterns_signals_info">
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
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
