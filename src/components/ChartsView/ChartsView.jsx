/* eslint-disable react/prop-types */
import "./ChartsView.css";
import PatternsSignals from "../PatternsSignals/PatternsSignals";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";

function ChartsView({ isLightMode }) {
  const { activeTimeframe, activeSymbol, isSingleChart } =
    useContext(DataContext);

  useEffect(() => {
    const widgetOptions = {
      container_id: "chart1",
      autosize: true,
      symbol: activeSymbol || "EURUSD",
      interval: activeTimeframe || "H1",
      timezone: "Etc/UTC",
      theme: isLightMode ? "light" : "dark",
      style: "1",
      background_color: "#525252",
      locale: "en",
      allow_symbol_change: true,
      hide_volume: true,
      overrides: {
        "mainSeriesProperties.candleStyle.upColor": "#60d938",
        "mainSeriesProperties.candleStyle.downColor": "#ed250e",
        "mainSeriesProperties.candleStyle.borderUpColor": "#60d938",
        "mainSeriesProperties.candleStyle.borderDownColor": "#ed250e",
        "mainSeriesProperties.candleStyle.wickUpColor": "#60d938",
        "mainSeriesProperties.candleStyle.wickDownColor": "#ed250e",
      },
    };

    new window.TradingView.widget(widgetOptions);

    if (!isSingleChart) {
      const widgetOptions2 = {
        container_id: "chart2",
        autosize: true,
        symbol: "XAUUSD",
        interval: "H1",
        timezone: "Etc/UTC",
        theme: isLightMode ? "light" : "dark",
        style: "1",
        background_color: "#525252",
        locale: "en",
        allow_symbol_change: true,
        hide_volume: true,
        overrides: {
          "mainSeriesProperties.candleStyle.upColor": "#60d938",
          "mainSeriesProperties.candleStyle.downColor": "#ed250e",
          "mainSeriesProperties.candleStyle.borderUpColor": "#60d938",
          "mainSeriesProperties.candleStyle.borderDownColor": "#ed250e",
          "mainSeriesProperties.candleStyle.wickUpColor": "#60d938",
          "mainSeriesProperties.candleStyle.wickDownColor": "#ed250e",
        },
      };
      new window.TradingView.widget(widgetOptions2);
    }
  });

  return (
    <>
      <div className="charts">
        <div className="charts_view">
          <div
            id="chart1"
            className={`chart ${isSingleChart ? "full-width" : ""}`}
          ></div>
          {!isSingleChart && <div id="chart2" className="chart"></div>}
        </div>
        <PatternsSignals />
      </div>
    </>
  );
}

export default ChartsView;
