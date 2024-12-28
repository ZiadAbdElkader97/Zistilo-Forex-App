import "./Tech_Section.css";
import { useContext, useEffect } from "react";
import { advanced_signal_data } from "../../assets/data/TechData";
import { DataContext } from "../../context/DataContext";

export default function Advanced() {
  const { otherData3, activeTimeframe, activeSymbol, filterData, ValueBar } =
    useContext(DataContext);

  useEffect(() => {
    if (!activeTimeframe) {
      filterData("H1", "EURUSD");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterOtherData = otherData3.filter(
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
            {advanced_signal_data.map((signal) => (
              <p key={signal.id}>{signal.name}</p>
            ))}
          </div>

          {filterOtherData.map((chart) => (
            <div key={chart.id} className="chart_values">
              <ValueBar value={chart.ichimoku_value} />
              <ValueBar value={chart.elder_impulse_value} />
              <ValueBar value={chart.schaff_value} />
              <ValueBar value={chart.cmf_value} />
              <ValueBar value={chart.mega_fx_value} />
              <ValueBar value={chart.misus_value} />
              <ValueBar value={chart.vortex_value} />
              <ValueBar value={chart.volume_oscillator_value} />
              <ValueBar value={chart.elder_ray_value} />
              <ValueBar value={chart.pivot_points_value} />
              <ValueBar value={chart.hma_value} />
              <ValueBar value={chart.qqe_value} />
              <ValueBar value={chart.cci_value} />
              <ValueBar value={chart.semafor_value} />
              <ValueBar value={chart.ama_value} />
              <ValueBar value={chart.ao_value} />
            </div>
          ))}

          {filterOtherData.map((item) => (
            <div key={item.id} className="status_values">
              <p>{item.ichimoku_signal}</p>
              <p>{item.elder_impulse_signal}</p>
              <p>{item.schaff_signal}</p>
              <p>{item.cmf_signal}</p>
              <p>{item.mega_fx_signal}</p>
              <p>{item.misus_signal}</p>
              <p>{item.vortex_signal}</p>
              <p>{item.volume_oscillator_signal}</p>
              <p>{item.elder_ray_signal}</p>
              <p>{item.pivot_points_signal}</p>
              <p>{item.hma_signal}</p>
              <p>{item.qqe_signal}</p>
              <p>{item.cci_signal}</p>
              <p>{item.semafor_signal}</p>
              <p>{item.ama_signal}</p>
              <p>{item.ao_signal}</p>
            </div>
          ))}
        </div>
        <div className="tech_ads"></div>
      </div>
    </>
  );
}
