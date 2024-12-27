/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [otherData, setOtherData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeTimeframe, setActiveTimeframe] = useState(null);
  const [activeSymbol, setActiveSymbol] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/market_watch_prices_api.php?timeframe=M1"
      );
      setData(response.data);
      setFilteredData(response.data.filter((item) => item.timeframe === "M1"));
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchOtherData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/indicators_for_beginner_api.php",
        {
          headers: {
            "Content-Type": "application/json",
            api_password: "5BhZWHeSp463Q7sU",
          },
        }
      );
      setOtherData(response.data);
    };
    fetchOtherData();
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

  const setSymbol = (symbol) => {
    setActiveSymbol(symbol);
    filterData(activeTimeframe, symbol);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        otherData,
        filteredData,
        filterData,
        activeTimeframe,
        activeSymbol,
        setSymbol,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
