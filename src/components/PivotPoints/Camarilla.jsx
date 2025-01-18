import "./PivotPoints.css";
import { useContext, useEffect } from "react";
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

  const getMultiplier = (price) => {
    if (price < 10) return 10000;
    if (price < 100) return 1000;
    if (price < 1000) return 100;
    if (price < 10000) return 10;
    return 1;
  };

  const getCurrentPriceDetails = (item, larger, smaller) => {
    const multiplier = getMultiplier(item.current_price);
    const positiveDifference = Math.round(
      (larger - item.current_price) * multiplier
    );
    const negativeDifference = Math.round(
      (item.current_price - smaller) * multiplier
    );
    const topOffset =
      ((item.current_price - smaller) / (larger - smaller)) * 100;

    return (
      <div className="pivot_current_container" style={{ top: `${topOffset}%` }}>
        <span className="pivot_price_empty"></span>
        <span className="price_difference positive">
          {`+ ${positiveDifference}`}
        </span>
        <span className="pivot_price">{item.current_price}</span>
        <span className="price_difference negative">
          {`- ${negativeDifference}`}
        </span>
      </div>
    );
  };

  const formatToSixDigits = (num) => {
    const parts = num.toString().split(".");
    const integerPart = parts[0];
    const decimalPart = parts[1] || "";
    const formattedDecimalPart = decimalPart.slice(0, 6 - integerPart.length);
    return (
      integerPart + (formattedDecimalPart ? "." + formattedDecimalPart : "")
    );
  };
  const formattedPivot = filterOtherData.map((item) => ({
    ...item,
    R3: formatToSixDigits(item.R3),
    R2: formatToSixDigits(item.R2),
    R1: formatToSixDigits(item.R1),
    PP: formatToSixDigits(item.PP),
    S1: formatToSixDigits(item.S1),
    S2: formatToSixDigits(item.S2),
    S3: formatToSixDigits(item.S3),
    current_price: formatToSixDigits(item.current_price),
  }));

  return (
    <>
      <div className="pivot_section">
        <div className="pivot_header">
          <p className="pivot_header_p">Level</p>
          <p className="pivot_header_p">Value</p>
          <p className="pivot_header_p">Current Value</p>
        </div>
        {formattedPivot.map((item) => (
          <div key={item.id} className="pivot_data_general">
            <div className="pivot_data_div">
              <span className="pivot_level">R3</span>
              <span className="pivot_value">{item.R3}</span>
              <span className="pivot_empty">
                {item.current_price > item.R2 ? (
                  <>
                    <span className="pivot_price_empty"></span>
                    {getCurrentPriceDetails(item, item.R3, item.R2)}
                  </>
                ) : (
                  <span className="pivot_empty"></span>
                )}
              </span>
            </div>

            <div className="pivot_data_div">
              <span className="pivot_level">R2</span>
              <span className="pivot_value">{item.R2}</span>
              <span className="pivot_empty">
                {item.current_price > item.R1 &&
                item.current_price <= item.R2 ? (
                  <>
                    <span className="pivot_price_empty"></span>
                    {getCurrentPriceDetails(item, item.R2, item.R1)}
                  </>
                ) : (
                  <span className="pivot_empty"></span>
                )}
              </span>
            </div>

            <div className="pivot_data_div">
              <span className="pivot_level">R1</span>
              <span className="pivot_value">{item.R1}</span>
              <span className="pivot_empty">
                {item.current_price > item.PP &&
                item.current_price <= item.R1 ? (
                  <>
                    <span className="pivot_price_empty"></span>
                    {getCurrentPriceDetails(item, item.R1, item.PP)}
                  </>
                ) : (
                  <span className="pivot_empty"></span>
                )}
              </span>
            </div>

            <div className="pivot_data_div">
              <span className="pivot_level">PP</span>
              <span className="pivot_value">{item.PP}</span>
              <span className="pivot_empty">
                {item.current_price > item.S1 &&
                item.current_price <= item.PP ? (
                  <>
                    <span className="pivot_price_empty"></span>
                    {getCurrentPriceDetails(item, item.PP, item.S1)}
                  </>
                ) : (
                  <span className="pivot_empty"></span>
                )}
              </span>
            </div>

            <div className="pivot_data_div">
              <span className="pivot_level">S1</span>
              <span className="pivot_value">{item.S1}</span>
              <span className="pivot_empty">
                {item.current_price > item.S2 &&
                item.current_price <= item.S1 ? (
                  <>
                    <span className="pivot_price_empty"></span>
                    {getCurrentPriceDetails(item, item.S1, item.S2)}
                  </>
                ) : (
                  <span className="pivot_empty"></span>
                )}
              </span>
            </div>

            <div className="pivot_data_div">
              <span className="pivot_level">S2</span>
              <span className="pivot_value">{item.S2}</span>
              <span className="pivot_empty">
                {item.current_price > item.S3 &&
                item.current_price <= item.S2 ? (
                  <>
                    <span className="pivot_price_empty"></span>
                    {getCurrentPriceDetails(item, item.S2, item.S3)}
                  </>
                ) : (
                  <span className="pivot_empty"></span>
                )}
              </span>
            </div>

            <div className="pivot_data_div">
              <span className="pivot_level">S3</span>
              <span className="pivot_value">{item.S3}</span>
              <span className="pivot_empty">
                {item.current_price <= item.S3 ? (
                  <>
                    <span className="pivot_price_empty"></span>
                    {getCurrentPriceDetails(item, item.S3, item.current_price)}
                  </>
                ) : (
                  <span className="pivot_empty"></span>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
