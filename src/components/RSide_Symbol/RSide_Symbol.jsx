import "./RSide_Symbol.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";

export default function RSide_Symbol() {
  const { symbolData, activeTimeframe, filterData, activeSymbol } =
    useContext(DataContext);

  useEffect(() => {
    if (!activeTimeframe) {
      filterData("H1", "EURUSD");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterOtherData = symbolData.filter(
    (item) =>
      (!activeTimeframe || item.timeframe === activeTimeframe) &&
      (!activeSymbol || item.symbol === activeSymbol)
  );

  // console.log(filterOtherData);

  return (
    <>
      <div className="rSide_symbol">
        <div className="rSide_content">
          <div className="rSide_section">
            {filterOtherData.map((item) => (
              <div key={item.id} className="symbol_data">
                <p className="symbol_data_head">Real-time Prices:</p>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">Ask Price</p>
                  <p className="data_value">{item.ask_price}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">Bid Price</p>
                  <p className="data_value">{item.bid_price}</p>
                </div>
                <hr />
                <p className="symbol_data_head">Current Candle Data:</p>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">High Price</p>
                  <p className="data_value">{item.high_price}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">Low Price</p>
                  <p className="data_value">{item.low_price}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">Candle Volume</p>
                  <p className="data_value">{item.volume}</p>
                </div>
                <hr />
                <p className="symbol_data_head">Daily Statistics:</p>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">High Price Daily</p>
                  <p className="data_value">{item.high_price_daily}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">Low Price Daily</p>
                  <p className="data_value">{item.low_price_daily}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">Daily Range</p>
                  <p className="data_value">{item.daily_range}</p>
                </div>
                <hr />
                <p className="symbol_data_head">52-Week Range:</p>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">Highest 52 Weeks</p>
                  <p className="data_value">{item.highest_52_weeks}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">Lowest 52 Weeks</p>
                  <p className="data_value">{item.lowest_52_weeks}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">Annual Range</p>
                  <p className="data_value">{item.annual_range}</p>
                </div>
                <hr />
                <p className="symbol_data_head">Additonal Metrics:</p>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">Daily Volume</p>
                  <p className="data_value">{item.volume_daily}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">Percent Change</p>
                  <p className="data_value">{item.percent_change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
