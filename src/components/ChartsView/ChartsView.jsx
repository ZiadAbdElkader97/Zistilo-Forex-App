/* eslint-disable react/prop-types */
import "./ChartsView.css";
import PatternsSignals from "../PatternsSignals/PatternsSignals";
import { useContext, useEffect, useMemo, useRef } from "react";
import { DataContext } from "../../context/DataContext";

function ChartsView({ isLightMode }) {
  const { activeTimeframe, activeSymbol, isSingleChart } =
    useContext(DataContext);

  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);

  const widgetOptions = useMemo(
    () => ({
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
    }),
    [activeSymbol, activeTimeframe, isLightMode]
  );

  const widgetOptions2 = useMemo(
    () => ({
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
    }),
    [isLightMode]
  );

  useEffect(() => {
    if (
      chart1Ref.current &&
      chart1Ref.current._innerWidget &&
      chart1Ref.current._innerWidget.parentNode
    ) {
      chart1Ref.current.remove();
      chart1Ref.current = null;
    }
    chart1Ref.current = new window.TradingView.widget(widgetOptions);
  }, [widgetOptions]);

  useEffect(() => {
    if (
      chart2Ref.current &&
      chart2Ref.current._innerWidget &&
      chart2Ref.current._innerWidget.parentNode
    ) {
      chart2Ref.current.remove();
      chart2Ref.current = null;
    }
    if (!isSingleChart) {
      chart2Ref.current = new window.TradingView.widget(widgetOptions2);
    }
  }, [widgetOptions2, isSingleChart]);

  useEffect(() => {
    if (isSingleChart) {
      if (
        chart2Ref.current &&
        chart2Ref.current._innerWidget &&
        chart2Ref.current._innerWidget.parentNode
      ) {
        chart2Ref.current.remove();
        chart2Ref.current = null;
      }
    }
  }, [isSingleChart]);

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
