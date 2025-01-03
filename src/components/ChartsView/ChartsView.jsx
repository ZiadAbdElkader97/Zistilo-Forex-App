/* eslint-disable react/prop-types */
import "./ChartsView.css";
import { useEffect } from "react";
import PatternsSignals from "../PatternsSignals/PatternsSignals";

function ChartsView({ isLightMode }) {
  useEffect(() => {
    const widgetOptions = {
      container_id: "chart1",
      autosize: true,
      symbol: "BITSTAMP:BTCUSD",
      interval: "D",
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

    const widgetOptions2 = {
      ...widgetOptions,
      container_id: "chart2",
    };
    new window.TradingView.widget(widgetOptions2);
  });

  return (
    <>
      <div className="charts">
        <div className="charts_view">
          <div id="chart1" className="chart"></div>
          <div id="chart2" className="chart"></div>
        </div>
        <PatternsSignals />
      </div>
    </>
  );
}

export default ChartsView;
