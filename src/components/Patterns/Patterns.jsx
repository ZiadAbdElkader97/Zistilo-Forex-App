import "./Patterns.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";

export default function Patterns() {
  const { patternsData, activeTimeframe, filterData } = useContext(DataContext);

  useEffect(() => {
    if (!activeTimeframe) {
      filterData("H1");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterOtherData = patternsData.filter(
    (item) => !activeTimeframe || item.timeframe === activeTimeframe
  );

  // console.log(filterOtherData);

  return (
    <div className="patterns">
      <div className="patterns_content">
        <div className="patterns_section">
          <div className="patterns_div">
            <div className="patterns_info">
              <p className="patterns_header">Symbol</p>
              <p className="patterns_header">Signal</p>
              <p className="patterns_header">Type</p>
              <p className="patterns_header">Age</p>
              <p className="patterns_header">Strength</p>
            </div>
            <hr />
            {filterOtherData.map((item) => (
              <div key={item.id} className="patterns_details">
                <p className="patterns_value patterns_value1">{item.symbol}</p>
                <p className="patterns_value patterns_value2">
                  {item.trade_signal}
                </p>
                <p className="patterns_value patterns_value3">
                  {item.candle_type}
                </p>
                <p className="patterns_value patterns_value4">
                  {item.formatted_age}
                </p>
                <p className="patterns_value patterns_value5">
                  {item.candle_strength}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
