import "./ChartsView.css";
import { useEffect } from "react";

function ChartsView() {
  useEffect(() => {
    new window.TradingView.widget({
      container_id: "chart1",
      autosize: true,
      symbol: "BITSTAMP:BTCUSD",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      hide_volume: true,
    });
    new window.TradingView.widget({
      container_id: "chart2",
      autosize: true,
      symbol: "BITSTAMP:BTCUSD",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      hide_volume: true,
    });
  }, []);

  return (
    <>
      <div className="charts">
        <div className="charts_view">
          <div id="chart1" className="chart"></div>
          <div id="chart2" className="chart"></div>
        </div>
        <div className="charts_info"></div>
      </div>
    </>
  );
}

export default ChartsView;
