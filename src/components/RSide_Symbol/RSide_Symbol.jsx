import "./RSide_Symbol.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { symbol_data } from "../../assets/data/SymbolData";

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
    <div className="rSide_symbol">
      <div className="rSide_content">
        <div className="rSide_section">
          <div className="symbol_data_name">
            {symbol_data.map((item) => (
              <p key={item.id} className="data_name_p">
                {item.name}
              </p>
            ))}
          </div>
          {filterOtherData.map((item) => (
            <div key={item.id} className="symbol_data_value">
              <p className="data_value_p">{item.ask_price}</p>
              <p className="data_value_p">{item.bid_price}</p>
              <p className="data_value_p">{item.daily_range}</p>
              <p className="data_value_p">{item.high_price}</p>
              <p className="data_value_p">{item.low_price}</p>
              <p className="data_value_p">{item.high_price_daily}</p>
              <p className="data_value_p">{item.low_price_daily}</p>
              <p className="data_value_p">{item.highest_52_weeks}</p>
              <p className="data_value_p">{item.lowest_52_weeks}</p>
              <p className="data_value_p">{item.annual_range}</p>
              <p className="data_value_p">{item.percent_change}</p>
              <p className="data_value_p">{item.volume}</p>
              <p className="data_value_p">{item.volume_daily}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
