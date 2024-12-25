/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeTimeframe, setActiveTimeframe] = useState("M1");
  const [activeSymbol, setActiveSymbol] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/market_watch_prices_api.php"
      );
      setData(response.data);
      setFilteredData(
        response.data.filter((item) => item.timeframe === activeTimeframe)
      );
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(data);

  const filterData = (timeframe, symbol) => {
    setActiveTimeframe(timeframe || activeTimeframe);
    setActiveSymbol(symbol || activeSymbol);

    const filtered = data.filter(
      (item) =>
        (!timeframe || item.timeframe === timeframe) &&
        (!symbol || item.symbol === symbol)
    );
    setFilteredData(filtered);
  };

  return (
    <DataContext.Provider
      value={{ data, filteredData, filterData, activeTimeframe, activeSymbol }}
    >
      {children}
    </DataContext.Provider>
  );
};
