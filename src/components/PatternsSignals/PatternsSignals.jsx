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
  console.log(filterSignals);

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
            <div className="patterns_signals_info">
              <div className="patterns_signals_header">
                <p className="header_p">Symbol</p>
                <p className="header_p">Timeframe</p>
                <p className="header_p">Recommendation</p>
                <p className="header_p">Pattern Type</p>
                <p className="header_p">Entry</p>
                <p className="header_p">Take Profit</p>
                <p className="header_p">Stop Loss</p>
              </div>
              <hr />
              {toggleState === 1 &&
                filterSignals.map((item) => (
                  <div key={item.id} className="patterns_signals_data">
                    <p className="patterns_data_p" style={{ width: "50px" }}>
                      {item.symbol}
                    </p>
                    <p className="patterns_data_p" style={{ width: "25px" }}>
                      {item.timeframe}
                    </p>
                    <p
                      className="patterns_data_p"
                      style={{
                        width: "65px",
                        marginLeft: "70px",
                        textAlign: "center",
                      }}
                    >
                      {item.recommendation}
                    </p>
                    <p
                      className="patterns_data_p"
                      style={{ width: "150px", textAlign: "center" }}
                    >
                      {item.pattern_type}
                    </p>
                    <p
                      className="patterns_data_p"
                      style={{ width: "60px", textAlign: "right" }}
                    >
                      {item.entry}
                    </p>
                    <p
                      className="patterns_data_p"
                      style={{ width: "60px", textAlign: "right" }}
                    >
                      {item.take_profit}
                    </p>
                    <p
                      className="patterns_data_p"
                      style={{ width: "60px", textAlign: "right" }}
                    >
                      {item.stop_loss}
                    </p>
                  </div>
                ))}
              {toggleState === 2 &&
                filterSignals.map((item) => (
                  <div key={item.id} className="patterns_signals_data">
                    <p
                      className="patterns_data_p"
                      style={{ width: "50px", textAlign: "right" }}
                    >
                      {item.symbol}
                    </p>
                    <p className="patterns_data_p" style={{ width: "25px" }}>
                      {item.timeframe}
                    </p>
                    <p className="patterns_data_p" style={{ width: "65px" }}>
                      {item.recommendation}
                    </p>
                    <p className="patterns_data_p" style={{ width: "150px" }}>
                      {item.pattern_type}
                    </p>
                    <p className="patterns_data_p" style={{ width: "60px" }}>
                      {item.entry}
                    </p>
                    <p className="patterns_data_p" style={{ width: "60px" }}>
                      {item.take_profit}
                    </p>
                    <p className="patterns_data_p" style={{ width: "60px" }}>
                      {item.stop_loss}
                    </p>
                  </div>
                ))}
              {toggleState === 3 &&
                filterSignals.map((item) => (
                  <div key={item.id} className="patterns_signals_data">
                    <p className="patterns_data_p" style={{ width: "50px" }}>
                      {item.symbol}
                    </p>
                    <p className="patterns_data_p" style={{ width: "25px" }}>
                      {item.timeframe}
                    </p>
                    <p className="patterns_data_p" style={{ width: "65px" }}>
                      {item.recommendation}
                    </p>
                    <p className="patterns_data_p" style={{ width: "150px" }}>
                      {item.pattern_type}
                    </p>
                    <p className="patterns_data_p" style={{ width: "60px" }}>
                      {item.entry}
                    </p>
                    <p className="patterns_data_p" style={{ width: "60px" }}>
                      {item.take_profit}
                    </p>
                    <p className="patterns_data_p" style={{ width: "60px" }}>
                      {item.stop_loss}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
