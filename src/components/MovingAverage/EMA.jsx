import "./MovingAverage.css";
import { PieChart, Pie, Cell } from "recharts";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";

export default function EMA() {
  const { movingAverageEMAData, activeTimeframe, activeSymbol, filterData } =
    useContext(DataContext);

  useEffect(() => {
    if (!activeTimeframe) {
      filterData("H1", "EURUSD");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterOtherData = movingAverageEMAData.filter(
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
  const formattedSignals = filterOtherData.map((item) => ({
    ...item,
    period_5: formatToSixDigits(item.period_5),
    period_10: formatToSixDigits(item.period_10),
    period_20: formatToSixDigits(item.period_20),
    period_50: formatToSixDigits(item.period_50),
    period_100: formatToSixDigits(item.period_100),
    period_200: formatToSixDigits(item.period_200),
  }));

  const chartData =
    formattedSignals.length > 0
      ? [
          {
            name: "Sell",
            value: formattedSignals[0].total_sell,
            color: "#FF0000",
          },
          {
            name: "Neutral",
            value: formattedSignals[0].total_neutral,
            color: "#D3D3D3",
          },
          {
            name: "Buy",
            value: formattedSignals[0].total_buy,
            color: "#008000",
          },
        ]
      : [
          { name: "Sell", value: 0, color: "#FF0000" },
          { name: "Neutral", value: 0, color: "#D3D3D3" },
          { name: "Buy", value: 0, color: "#008000" },
        ];

  const cx = 100;
  const cy = 100;
  const iR = 60;
  const oR = 85;

  const summary =
    formattedSignals.length > 0 ? formattedSignals[0].summary : "No Data";

  const getSummaryColor = (summary) => {
    switch (summary) {
      case "Sell":
        return "#FF0000";
      case "Neutral":
        return "#D3D3D3";
      case "Buy":
        return "#008000";
      default:
        return "#191919";
    }
  };

  const summaryColor = getSummaryColor(summary);

  // console.log(filterOtherData);

  return (
    <>
      <div className="moving_section">
        {formattedSignals.map((item) => (
          <div key={item.id} className="moving_data_general">
            <div className="moving_data_div">
              <span className="moving_title">EMA 5</span>
              <span className="moving_period">{item.period_5}</span>
              <span
                className="moving_signal"
                style={{
                  backgroundColor: `${
                    item.signal_5 === "Buy" ? "#60d938" : "#ed250e"
                  }`,
                }}
              >
                {item.signal_5}
              </span>
            </div>
            <hr />

            <div className="moving_data_div">
              <span className="moving_title">EMA 10</span>
              <span className="moving_period">{item.period_10}</span>
              <span
                className="moving_signal"
                style={{
                  backgroundColor: `${
                    item.signal_10 === "Buy" ? "#60d938" : "#ed250e"
                  }`,
                }}
              >
                {item.signal_10}
              </span>
            </div>
            <hr />

            <div className="moving_data_div">
              <span className="moving_title">EMA 20</span>
              <span className="moving_period">{item.period_20}</span>
              <span
                className="moving_signal"
                style={{
                  backgroundColor: `${
                    item.signal_20 === "Buy" ? "#60d938" : "#ed250e"
                  }`,
                }}
              >
                {item.signal_20}
              </span>
            </div>
            <hr />

            <div className="moving_data_div">
              <span className="moving_title">EMA 50</span>
              <span className="moving_period">{item.period_50}</span>
              <span
                className="moving_signal"
                style={{
                  backgroundColor: `${
                    item.signal_50 === "Buy" ? "#60d938" : "#ed250e"
                  }`,
                }}
              >
                {item.signal_50}
              </span>
            </div>
            <hr />

            <div className="moving_data_div">
              <span className="moving_title">EMA 100</span>
              <span className="moving_period">{item.period_100}</span>
              <span
                className="moving_signal"
                style={{
                  backgroundColor: `${
                    item.signal_100 === "Buy" ? "#60d938" : "#ed250e"
                  }`,
                }}
              >
                {item.signal_100}
              </span>
            </div>
            <hr />

            <div className="moving_data_div">
              <span className="moving_title">EMA 200</span>
              <span className="moving_period">{item.period_200}</span>
              <span
                className="moving_signal"
                style={{
                  backgroundColor: `${
                    item.signal_200 === "Buy" ? "#60d938" : "#ed250e"
                  }`,
                }}
              >
                {item.signal_200}
              </span>
            </div>
          </div>
        ))}

        <div className="tech_chart">
          {formattedSignals.map((item) => (
            <div key={item.id} className="chart_info">
              <div className="chart_info_div">
                <span
                  className="chart_shape"
                  style={{ backgroundColor: "#60d938" }}
                ></span>
                <p className="chart_name">Buy</p>
                <p className="chart_num">({item.total_buy})</p>
              </div>
              <div className="chart_info_div">
                <span
                  className="chart_shape"
                  style={{ backgroundColor: "#ed250e" }}
                ></span>
                <p className="chart_name">Sell</p>
                <p className="chart_num">({item.total_sell})</p>
              </div>
              <div className="chart_info_div">
                <span
                  className="chart_shape"
                  style={{ backgroundColor: "#bfbfbf" }}
                ></span>
                <p className="chart_name">Neutral</p>
                <p className="chart_num">({item.total_neutral})</p>
              </div>
            </div>
          ))}
          <PieChart width={200} height={200}>
            <Pie
              data={chartData}
              cx={cx}
              cy={cy}
              startAngle={360}
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
            <svg width="200" height="200">
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
                className={`summary_text ${
                  summaryColor === "#191919" ? "default" : summary.toLowerCase()
                }`}
              >
                {formattedSignals.map((item) => item.summary)}
              </text>
            </svg>
          </PieChart>
        </div>
      </div>
    </>
  );
}
