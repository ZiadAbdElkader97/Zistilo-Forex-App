import "./PatternsSignals.css";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";

export default function PatternsSignals() {
  const { patternsSignalsData } = useContext(DataContext);

  console.log(patternsSignalsData);

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
            <div className="patterns_signals_info">
              <div className="patterns_signals_header">
                <p className="header_p">Symbol</p>
                <p className="header_p">Timeframe</p>
                <p className="header_p">Recommendation</p>
                <p className="header_p">Status</p>
                <p className="header_p">Pattern Type</p>
                <p className="header_p">Age</p>
                <p className="header_p">Entry</p>
                <p className="header_p">Take Profit</p>
                <p className="header_p">Stop Loss</p>
              </div>
              <hr />
              {toggleState === 1 &&
                filterSignals.map((item) => (
                  <div key={item.id} className="patterns_signals_data">
                    <p className="patterns_data_p data_p1">{item.symbol}</p>
                    <p className="patterns_data_p data_p2">{item.timeframe}</p>
                    <p className="patterns_data_p data_p3">
                      {item.recommendation}
                    </p>
                    <p className="patterns_data_p data_p4">{item.status}</p>
                    <p className="patterns_data_p data_p5">
                      {item.pattern_type}
                    </p>
                    <p className="patterns_data_p data_p6">{item.age}</p>
                    <p className="patterns_data_p data_p7">{item.entry}</p>
                    <p className="patterns_data_p data_p8">
                      {item.take_profit}
                    </p>
                    <p className="patterns_data_p data_p9">{item.stop_loss}</p>
                  </div>
                ))}
              {toggleState === 2 &&
                filterSignals.map((item) => (
                  <div key={item.id} className="patterns_signals_data">
                    <p className="patterns_data_p data_p1">{item.symbol}</p>
                    <p className="patterns_data_p data_p2">{item.timeframe}</p>
                    <p className="patterns_data_p data_p3">
                      {item.recommendation}
                    </p>
                    <p className="patterns_data_p data_p4">{item.status}</p>
                    <p className="patterns_data_p data_p5">
                      {item.pattern_type}
                    </p>
                    <p className="patterns_data_p data_p6">{item.age}</p>
                    <p className="patterns_data_p data_p7">{item.entry}</p>
                    <p className="patterns_data_p data_p8">
                      {item.take_profit}
                    </p>
                    <p className="patterns_data_p data_p9">{item.stop_loss}</p>
                  </div>
                ))}
              {toggleState === 3 &&
                filterSignals.map((item) => (
                  <div key={item.id} className="patterns_signals_data">
                    <p className="patterns_data_p data_p1">{item.symbol}</p>
                    <p className="patterns_data_p data_p2">{item.timeframe}</p>
                    <p className="patterns_data_p data_p3">
                      {item.recommendation}
                    </p>
                    <p className="patterns_data_p data_p4">{item.status}</p>
                    <p className="patterns_data_p data_p5">
                      {item.pattern_type}
                    </p>
                    <p className="patterns_data_p data_p6">{item.age}</p>
                    <p className="patterns_data_p data_p7">{item.entry}</p>
                    <p className="patterns_data_p data_p8">
                      {item.take_profit}
                    </p>
                    <p className="patterns_data_p data_p9">{item.stop_loss}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
