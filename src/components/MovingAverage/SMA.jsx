import "./MovingAverage.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";

export default function SMA() {
  const { movingAverageSMAData, activeTimeframe, activeSymbol, filterData } =
    useContext(DataContext);

  useEffect(() => {
    if (!activeTimeframe) {
      filterData("H1", "EURUSD");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterOtherData = movingAverageSMAData.filter(
    (item) =>
      (!activeTimeframe || item.timeframe === activeTimeframe) &&
      (!activeSymbol || item.symbol === activeSymbol)
  );

  return (
    <>
      <div className="moving_section">
        {filterOtherData.map((item) => (
          <div key={item.id} className="moving_data_general">
            <div className="moving_data_div">
              <span className="moving_title">SMA 5</span>
              <span className="moving_period">{item.period_5}</span>
              <span
                className="moving_signal"
                style={{
                  backgroundColor: `${
                    item.signal_5 === "Buy" ? "#60d938" : "#ed250e"
                  }`,
                }}
              >
                {item.signal_5}
              </span>
            </div>
            <hr />

            <div className="moving_data_div">
              <span className="moving_title">SMA 10</span>
              <span className="moving_period">{item.period_10}</span>
              <span
                className="moving_signal"
                style={{
                  backgroundColor: `${
                    item.signal_10 === "Buy" ? "#60d938" : "#ed250e"
                  }`,
                }}
              >
                {item.signal_10}
              </span>
            </div>
            <hr />

            <div className="moving_data_div">
              <span className="moving_title">SMA 20</span>
              <span className="moving_period">{item.period_20}</span>
              <span
                className="moving_signal"
                style={{
                  backgroundColor: `${
                    item.signal_20 === "Buy" ? "#60d938" : "#ed250e"
                  }`,
                }}
              >
                {item.signal_20}
              </span>
            </div>
            <hr />

            <div className="moving_data_div">
              <span className="moving_title">SMA 50</span>
              <span className="moving_period">{item.period_50}</span>
              <span
                className="moving_signal"
                style={{
                  backgroundColor: `${
                    item.signal_50 === "Buy" ? "#60d938" : "#ed250e"
                  }`,
                }}
              >
                {item.signal_50}
              </span>
            </div>
            <hr />

            <div className="moving_data_div">
              <span className="moving_title">SMA 100</span>
              <span className="moving_period">{item.period_100}</span>
              <span
                className="moving_signal"
                style={{
                  backgroundColor: `${
                    item.signal_100 === "Buy" ? "#60d938" : "#ed250e"
                  }`,
                }}
              >
                {item.signal_100}
              </span>
            </div>
            <hr />

            <div className="moving_data_div">
              <span className="moving_title">SMA 200</span>
              <span className="moving_period">{item.period_200}</span>
              <span
                className="moving_signal"
                style={{
                  backgroundColor: `${
                    item.signal_200 === "Buy" ? "#60d938" : "#ed250e"
                  }`,
                }}
              >
                {item.signal_200}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
