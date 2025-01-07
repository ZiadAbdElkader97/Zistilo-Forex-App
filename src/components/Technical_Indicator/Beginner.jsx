import "./Tech_Section.css";
// import GaugeChart from "react-gauge-chart";
import { useContext, useEffect } from "react";
import { beginner_signal_data } from "../../assets/data/TechData";
import { DataContext } from "../../context/DataContext";

export default function Beginner() {
  const { otherData1, activeTimeframe, activeSymbol, filterData, ValueBar } =
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
              <ValueBar value={chart.rsi_value} />
              <ValueBar value={chart.stoch_value} />
              <ValueBar value={chart.williams_value} />
              <ValueBar value={chart.momentum_value} />
              <ValueBar value={chart.mfi_value} />
              <ValueBar value={chart.bb_value} />
              <ValueBar value={chart.atr_value} />
              <ValueBar value={chart.ha_value} />
              <ValueBar value={chart.candle_value} />
              <ValueBar value={chart.sar_value} />
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
        {/* <div className="tech_chart">
          <h3>Summary</h3>
          <GaugeChart
            id="gauge-chart1"
            nrOfLevels={5}
            arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
            colors={["#FF0000", "#FF5E00", "#A9A9A9", "#00FF00", "#008000"]}
            percent={0.37}
            arcPadding={0.02}
            needleColor="#345243"
            needleBaseColor="#345243"
            textColor="#345243"
          />
        </div> */}
      </div>
    </>
  );
}
