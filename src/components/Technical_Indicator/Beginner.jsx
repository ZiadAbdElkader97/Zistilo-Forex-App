import "./Tech_Section.css";
import { useContext, useEffect } from "react";
import { beginner_signal_data } from "../../assets/data/TechData";
import { DataContext } from "../../context/DataContext";

export default function Beginner() {
  const { otherData1, activeTimeframe, activeSymbol, filterData } =
    useContext(DataContext);

  useEffect(() => {
    if (!activeTimeframe) {
      filterData("H1", "EURUSD");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterOtherData = otherData1.filter(
    (item) =>
      (!activeTimeframe || item.timeframe === activeTimeframe) &&
      (!activeSymbol || item.symbol === activeSymbol)
  );

  // console.log(filterOtherData);

  return (
    <>
      <div className="tech_section">
        <div className="tech_values">
          <div className="data_values">
            {beginner_signal_data.map((signal) => (
              <p key={signal.id}>{signal.name}</p>
            ))}
          </div>

          {filterOtherData.map((chart) => (
            <div key={chart.id} className="chart_values">
              <p>{chart.rsi_value}</p>
              <p>{chart.stoch_value}</p>
              <p>{chart.williams_value}</p>
              <p>{chart.momentum_value}</p>
              <p>{chart.mfi_value}</p>
              <p>{chart.bb_value}</p>
              <p>{chart.atr_value}</p>
              <p>{chart.ha_value}</p>
              <p>{chart.candle_value}</p>
              <p>{chart.sar_value}</p>
            </div>
          ))}

          {filterOtherData.map((item) => (
            <div key={item.id} className="status_values">
              <p>{item.rsi_signal}</p>
              <p>{item.stoch_signal}</p>
              <p>{item.williams_signal}</p>
              <p>{item.momentum_signal}</p>
              <p>{item.mfi_signal}</p>
              <p>{item.bb_signal}</p>
              <p>{item.atr_signal}</p>
              <p>{item.ha_signal}</p>
              <p>{item.candle_signal}</p>
              <p>{item.sar_signal}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
