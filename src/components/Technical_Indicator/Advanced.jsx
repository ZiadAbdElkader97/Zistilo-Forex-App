import "./Tech_Section.css";
import { PieChart, Pie, Cell } from "recharts";
import { useContext, useEffect } from "react";
import { advanced_signal_data } from "../../assets/data/TechData";
import { DataContext } from "../../context/DataContext";
import { useTranslation } from "react-i18next";

export default function Advanced() {
  const { t } = useTranslation();

  const { otherData3, activeTimeframe, activeSymbol, filterData, ValueBar } =
    useContext(DataContext);

  useEffect(() => {
    if (!activeTimeframe) {
      filterData("H1", "EURUSD");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterOtherData = otherData3.filter(
    (item) =>
      (!activeTimeframe || item.timeframe === activeTimeframe) &&
      (!activeSymbol || item.symbol === activeSymbol)
  );

  const chartData = [
    { name: "Strong Sell", value: 20, color: "#FF0000" },
    { name: "Sell", value: 20, color: "#FFAAAA" },
    { name: "Neutral", value: 20, color: "#D3D3D3" },
    { name: "Buy", value: 20, color: "#90EE90" },
    { name: "Strong Buy", value: 20, color: "#008000" },
  ];

  const backgroundSpan = (value) => {
    if (value === "Strong Sell") {
      return "#FF0000";
    } else if (value === "Sell") {
      return "#FFAAAA";
    } else if (value === "Neutral") {
      return "#D3D3D3";
    } else if (value === "Buy") {
      return "#90EE90";
    } else {
      return "#008000";
    }
  };

  const convertSummaryToValue = (summary) => {
    switch (summary) {
      case "Strong Sell":
        return -40;
      case "Sell":
        return -20;
      case "Neutral":
        return 0;
      case "Buy":
        return 20;
      case "Strong Buy":
        return 40;
      default:
        return 0;
    }
  };

  const RADIAN = Math.PI / 180;
  const cx = 80;
  const cy = 100;
  const iR = 60;
  const oR = 85;

  const needleValue =
    filterOtherData.length > 0
      ? convertSummaryToValue(filterOtherData[0].summary)
      : 0;
  const dynamicLength = 35;

  const needle = (value, data, cx, cy, length, width, color) => {
    const total = data.reduce((a, b) => a + b.value, 0);
    const angle = (180 * value) / total;
    const x = cx + length * Math.cos((angle - 90) * RADIAN);
    const y = cy + length * Math.sin((angle - 90) * RADIAN);
    return (
      <g key="needle">
        <line
          x1={cx}
          y1={cy}
          x2={x}
          y2={y}
          stroke={color}
          strokeWidth={width}
          strokeLinecap="round"
        />
        <circle cx={cx} cy={cy} r={width * 2} fill={color} />
      </g>
    );
  };

  // console.log(filterOtherData);

  return (
    <>
      <div className="tech_section">
        <div className="tech_values">
          <div className="data_values">
            {advanced_signal_data.map((signal) => (
              <p key={signal.id}>{signal.name}</p>
            ))}
          </div>

          {filterOtherData.map((chart) => (
            <div key={chart.id} className="chart_values">
              <ValueBar value={chart.ichimoku_value} />
              <ValueBar value={chart.elder_impulse_value} />
              <ValueBar value={chart.schaff_value} />
              <ValueBar value={chart.cmf_value} />
              <ValueBar value={chart.mega_fx_value} />
              <ValueBar value={chart.misus_value} />
              <ValueBar value={chart.vortex_value} />
              <ValueBar value={chart.volume_oscillator_value} />
              <ValueBar value={chart.elder_ray_value} />
              <ValueBar value={chart.pivot_points_value} />
              <ValueBar value={chart.hma_value} />
              <ValueBar value={chart.qqe_value} />
              <ValueBar value={chart.cci_value} />
              <ValueBar value={chart.semafor_value} />
              <ValueBar value={chart.ama_value} />
              <ValueBar value={chart.ao_value} />
            </div>
          ))}

          {filterOtherData.map((item) => (
            <div key={item.id} className="status_values">
              <p>{item.ichimoku_signal}</p>
              <p>{item.elder_impulse_signal}</p>
              <p>{item.schaff_signal}</p>
              <p>{item.cmf_signal}</p>
              <p>{item.mega_fx_signal}</p>
              <p>{item.misus_signal}</p>
              <p>{item.vortex_signal}</p>
              <p>{item.volume_oscillator_signal}</p>
              <p>{item.elder_ray_signal}</p>
              <p>{item.pivot_points_signal}</p>
              <p>{item.hma_signal}</p>
              <p>{item.qqe_signal}</p>
              <p>{item.cci_signal}</p>
              <p>{item.semafor_signal}</p>
              <p>{item.ama_signal}</p>
              <p>{item.ao_signal}</p>
            </div>
          ))}
        </div>
        <div className="tech_chart tech_chart_adv">
          {filterOtherData.map((item) => (
            <div key={item.id} className="chart_info">
              <div className="chart_info_div">
                <span
                  className="chart_shape"
                  style={{ backgroundColor: "#60d938" }}
                ></span>
                <p className="chart_name">{t("Buy")}</p>
                <p className="chart_num">({item.total_buy})</p>
              </div>
              <div className="chart_info_div">
                <span
                  className="chart_shape"
                  style={{ backgroundColor: "#ed250e" }}
                ></span>
                <p className="chart_name">{t("Sell")}</p>
                <p className="chart_num">({item.total_sell})</p>
              </div>
              <div className="chart_info_div">
                <span
                  className="chart_shape"
                  style={{ backgroundColor: "#bfbfbf" }}
                ></span>
                <p className="chart_name">{t("Neutral")}</p>
                <p className="chart_num">({item.total_neutral})</p>
              </div>
            </div>
          ))}
          <PieChart width={170} height={115}>
            <Pie
              data={chartData}
              cx={cx}
              cy={cy}
              startAngle={180}
              endAngle={0}
              innerRadius={iR}
              outerRadius={oR}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            {needle(
              needleValue,
              chartData,
              cx,
              cy,
              dynamicLength,
              3,
              "#191919"
            )}
          </PieChart>
          <span
            className="word"
            style={{
              backgroundColor: backgroundSpan(
                `${filterOtherData.map((item) => item.summary)}`
              ),
            }}
          >
            {filterOtherData.map((item) => t(item.summary))}
          </span>
        </div>
      </div>
    </>
  );
}
