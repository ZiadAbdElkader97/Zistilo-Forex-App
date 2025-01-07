import { useContext, useEffect } from "react";
import "./PivotPoints.css";
import { DataContext } from "../../context/DataContext";

export default function Camarilla() {
  const { pivotCamarillaData, activeTimeframe, activeSymbol, filterData } =
    useContext(DataContext);

  useEffect(() => {
    if (!activeTimeframe) {
      filterData("H1", "EURUSD");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterOtherData = pivotCamarillaData.filter(
    (item) =>
      (!activeTimeframe || item.timeframe === activeTimeframe) &&
      (!activeSymbol || item.symbol === activeSymbol)
  );

  return (
    <>
      <div className="pivot_section">
        <div className="pivot_header">
          <p className="pivot_header_p">Level</p>
          <p className="pivot_header_p">Value</p>
          <p className="pivot_header_p">Current Value</p>
        </div>
        {filterOtherData.map((item) => (
          <div key={item.id} className="pivot_data_general">
            <div className="pivot_data_div">
              <span className="pivot_level">R3</span>
              <span className="pivot_value">{item.R3}</span>
              <span className="pivot_empty"></span>
            </div>

            <div className="pivot_data_div">
              <span className="pivot_level">R2</span>
              <span className="pivot_value">{item.R2}</span>
              <span className="pivot_empty"></span>
            </div>

            <div className="pivot_data_div">
              <span className="pivot_level">R1</span>
              <span className="pivot_value">{item.R1}</span>
              <span className="pivot_empty"></span>
            </div>

            <div className="pivot_data_div">
              <span className="pivot_level">PP</span>
              <span className="pivot_value">{item.PP}</span>
              <div className="pivot_current_value">
                <span
                  className="pivot_high_low"
                  style={{
                    color: item.high ? "#60d938" : item.low ? "#ed250e" : "",
                  }}
                >
                  {item.high
                    ? `+ ${item.high}`
                    : item.low
                    ? `- ${item.low}`
                    : ""}
                </span>
                <span className="pivot_current_price">
                  {item.current_price}
                </span>
              </div>
            </div>

            <div className="pivot_data_div">
              <span className="pivot_level">S1</span>
              <span className="pivot_value">{item.S1}</span>
              <span className="pivot_empty"></span>
            </div>

            <div className="pivot_data_div">
              <span className="pivot_level">S2</span>
              <span className="pivot_value">{item.S2}</span>
              <span className="pivot_empty"></span>
            </div>

            <div className="pivot_data_div">
              <span className="pivot_level">S3</span>
              <span className="pivot_value">{item.S3}</span>
              <span className="pivot_empty"></span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
