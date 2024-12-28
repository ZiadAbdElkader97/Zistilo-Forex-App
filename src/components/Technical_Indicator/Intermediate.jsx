import "./Tech_Section.css";
import { useContext, useEffect } from "react";
import { intermediate_signal_data } from "../../assets/data/TechData";
import { DataContext } from "../../context/DataContext";

export default function Intermediate() {
  const { otherData2, activeTimeframe, activeSymbol, filterData, ValueBar } =
    useContext(DataContext);

  useEffect(() => {
    if (!activeTimeframe) {
      filterData("H1", "EURUSD");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterOtherData = otherData2.filter(
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
            {intermediate_signal_data.map((signal) => (
              <p key={signal.id}>{signal.name}</p>
            ))}
          </div>

          {filterOtherData.map((chart) => (
            <div key={chart.id} className="chart_values">
              <ValueBar value={chart.macd_value} />
              <ValueBar value={chart.supertrend_value} />
              <ValueBar value={chart.donchian_value} />
              <ValueBar value={chart.dpo_value} />
              <ValueBar value={chart.aroon_value} />
              <ValueBar value={chart.fractal_value} />
              <ValueBar value={chart.waddah_value} />
              <ValueBar value={chart.ultimate_value} />
              <ValueBar value={chart.adx_value} />
              <ValueBar value={chart.supply_demand_value} />
            </div>
          ))}

          {filterOtherData.map((item) => (
            <div key={item.id} className="status_values">
              <p>{item.macd_signal}</p>
              <p>{item.supertrend_signal}</p>
              <p>{item.donchian_signal}</p>
              <p>{item.dpo_signal}</p>
              <p>{item.aroon_signal}</p>
              <p>{item.fractal_signal}</p>
              <p>{item.waddah_signal}</p>
              <p>{item.ultimate_signal}</p>
              <p>{item.adx_signal}</p>
              <p>{item.supply_demand_signal}</p>
            </div>
          ))}
        </div>
        <div className="tech_ads"></div>
      </div>
    </>
  );
}
