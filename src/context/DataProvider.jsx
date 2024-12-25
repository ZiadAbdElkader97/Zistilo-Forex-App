/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const defaultTimeframe = "M1";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/market_watch_prices_api.php"
      );
      setData(response.data);
      setFilteredData(
        response.data.filter((item) => item.timeframe === defaultTimeframe)
      );
    };
    fetchData();
  }, []);

  // console.log(data);

  const filterData = (timeframe) => {
    const filtered = timeframe
      ? data.filter((item) => item.timeframe === timeframe)
      : data;
    setFilteredData(filtered);
  };

  return (
    <DataContext.Provider value={{ data, filteredData, filterData }}>
      {children}
    </DataContext.Provider>
  );
};
