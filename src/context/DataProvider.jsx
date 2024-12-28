/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [otherData1, setOtherData1] = useState([]);
  const [otherData2, setOtherData2] = useState([]);
  const [otherData3, setOtherData3] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
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
    const fetchOtherData1 = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/indicators_for_beginner_api.php",
        {
          headers: {
            "Content-Type": "application/json",
            api_password: "5BhZWHeSp463Q7sU",
          },
        }
      );
      setOtherData1(response.data);
    };
    fetchOtherData1();
  }, []);

  useEffect(() => {
    const fetchOtherData2 = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/indicators_for_intermediate_api.php",
        {
          headers: {
            "Content-Type": "application/json",
            api_password: "5BhZWHeSp463Q7sU",
          },
        }
      );
      setOtherData2(response.data);
    };
    fetchOtherData2();
  }, []);

  useEffect(() => {
    const fetchOtherData3 = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/indicators_for_advanced_api.php",
        {
          headers: {
            "Content-Type": "application/json",
            api_password: "5BhZWHeSp463Q7sU",
          },
        }
      );
      setOtherData3(response.data);
    };
    fetchOtherData3();
  }, []);

  useEffect(() => {
    const fetchCalendarData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/economic_news_api.php"
      );
      setCalendarData(response.data);
    };
    fetchCalendarData();
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
        otherData1,
        otherData2,
        otherData3,
        calendarData,
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
