import "./RSide_Symbol.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { useTranslation } from "react-i18next";

export default function RSide_Symbol() {
  const { t } = useTranslation();

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

  const formatToSixDigits = (num) => {
    const parts = num.toString().split(".");
    const integerPart = parts[0];
    const decimalPart = parts[1] || "";
    const formattedDecimalPart = decimalPart.slice(0, 6 - integerPart.length);
    return (
      integerPart + (formattedDecimalPart ? "." + formattedDecimalPart : "")
    );
  };

  const formattedSymbol = filterOtherData.map((item) => ({
    ...item,
    ask_price: formatToSixDigits(item.ask_price),
    bid_price: formatToSixDigits(item.bid_price),
    high_price: formatToSixDigits(item.high_price),
    low_price: formatToSixDigits(item.low_price),
    high_price_daily: formatToSixDigits(item.high_price_daily),
    low_price_daily: formatToSixDigits(item.low_price_daily),
    daily_range: formatToSixDigits(item.daily_range),
    highest_52_weeks: formatToSixDigits(item.highest_52_weeks),
    lowest_52_weeks: formatToSixDigits(item.lowest_52_weeks),
    annual_range: formatToSixDigits(item.annual_range),
    volume_daily: formatToSixDigits(item.volume_daily),
  }));

  return (
    <>
      <div className="rSide_symbol">
        <div className="rSide_content">
          <div className="rSide_section">
            {formattedSymbol.map((item) => (
              <div key={item.id} className="symbol_data">
                <div className="symbol_data_title">
                  <p className="symbol_data_head">{t("Real-time Prices:")}</p>
                  <p className="symbol_data_frame">
                    {t("Timeframe")}: (
                    <span style={{ color: "#2ecc71" }}>{activeTimeframe}</span>)
                  </p>
                  <p className="symbol_data_symbol">
                    {t("Symbol")}: (
                    <span style={{ color: "#2ecc71" }}>{activeSymbol}</span>)
                  </p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">{t("Ask Price")}</p>
                  <p className="data_value">{item.ask_price}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">{t("Bid Price")}</p>
                  <p className="data_value">{item.bid_price}</p>
                </div>
                <hr />
                <p className="symbol_data_head">{t("Current Candle Data:")}</p>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">{t("High Price")}</p>
                  <p className="data_value">{item.high_price}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">{t("Low Price")}</p>
                  <p className="data_value">{item.low_price}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">{t("Candle Volume")}</p>
                  <p className="data_value">{item.volume}</p>
                </div>
                <hr />
                <p className="symbol_data_head">{t("Daily Statistics:")}</p>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">{t("High Price Daily")}</p>
                  <p className="data_value">{item.high_price_daily}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">{t("Low Price Daily")}</p>
                  <p className="data_value">{item.low_price_daily}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">{t("Daily Range")}</p>
                  <p className="data_value">{item.daily_range}</p>
                </div>
                <hr />
                <p className="symbol_data_head">{t("52-Week Range:")}</p>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">{t("Highest 52 Weeks")}</p>
                  <p className="data_value">{item.highest_52_weeks}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">{t("Lowest 52 Weeks")}</p>
                  <p className="data_value">{item.lowest_52_weeks}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">{t("Annual Range")}</p>
                  <p className="data_value">{item.annual_range}</p>
                </div>
                <hr />
                <p className="symbol_data_head">{t("Additonal Metrics:")}</p>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">{t("Daily Volume")}</p>
                  <p className="data_value">{item.volume_daily}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">{t("Percent Change")}</p>
                  <p className="data_value">{item.percent_change}</p>
                </div>
                <hr />
                <div className="symbol_data_div">
                  <p className="data_name">{t("Description")}</p>
                  <p className="data_value">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
