import "./Tech_Section.css";
import { useContext, useEffect } from "react";
import { signalsData } from "../../assets/data/TechData";
import { DataContext } from "../../context/DataContext";

export default function Beginner() {
  const { otherData, activeTimeframe, activeSymbol, filterData } =
    useContext(DataContext);

  useEffect(() => {
    if (!activeTimeframe) {
      filterData("H1", "EURUSD");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterOtherData = otherData.filter(
    (item) =>
      (!activeTimeframe || item.timeframe === activeTimeframe) &&
      (!activeSymbol || item.symbol === activeSymbol)
  );

  console.log(filterOtherData);

  return (
    <>
      <div className="tech_section">
        <div className="tech_values">
          <div className="values_signal">
            {signalsData.map((signal) => (
              <p key={signal.id}>{signal.name}</p>
            ))}
          </div>

          {filterOtherData.map((item) => (
            <div key={item.id} className="data_values">
              <p className="num_status">{item.rsi_value}</p>
              <p className="num_status">{item.stoch_value}</p>
              <p className="num_status">{item.williams_value}</p>
              <p className="num_status">{item.momentum_value}</p>
              <p className="num_status">{item.mfi_value}</p>
              <p className="num_status">{item.bb_value}</p>
              <p className="num_status">{item.atr_value}</p>
              <p className="num_status">{item.ha_value}</p>
              <p className="num_status">{item.candle_value}</p>
              <p className="num_status">{item.sar_value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
