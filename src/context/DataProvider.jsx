/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [otherData1, setOtherData1] = useState([]);
  const [otherData2, setOtherData2] = useState([]);
  const [otherData3, setOtherData3] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
  const [symbolData, setSymbolData] = useState([]);
  const [patternsData, setPatternsData] = useState([]);
  const [patternsSignalsData, setPatternsSignalsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeTimeframe, setActiveTimeframe] = useState(null);
  const [activeSymbol, setActiveSymbol] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [watchlist, setWatchlist] = useState([]);

  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const filteredSearchData = data.filter((item) =>
    item.symbol.toLowerCase().includes(inputValue.toLowerCase())
  );

  const clearInput = () => {
    setInputValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist"));
    if (savedWatchlist) {
      setWatchlist(savedWatchlist);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (item) => {
    setWatchlist((prevList) => [...prevList, item]);
  };
  const removeFromWatchlist = (id) => {
    setWatchlist((prevList) => prevList.filter((item) => item.id !== id));
  };

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
        "https://notifications.copyforexsignals.com/apii/economic_news_api.php",
        {
          headers: {
            "Content-Type": "application/json",
            api_password: "5BhZWHeSp463Q7sU",
          },
        }
      );
      setCalendarData(response.data);
    };
    fetchCalendarData();
  }, []);

  useEffect(() => {
    const fetchSymbolData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/market_watch_prices_api.php"
      );
      setSymbolData(response.data);
    };
    fetchSymbolData();
  }, []);

  useEffect(() => {
    const fetchPatternsData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/candle_patterns_api.php",
        {
          headers: {
            "Content-Type": "application/json",
            api_password: "5BhZWHeSp463Q7sU",
          },
        }
      );
      setPatternsData(response.data);
    };
    fetchPatternsData();
  }, []);

  useEffect(() => {
    const fetchPatternsSignalsData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/patterns_signals.php",
        {
          headers: {
            "Content-Type": "application/json",
            api_password: "5BhZWHeSp463Q7sU",
          },
        }
      );
      setPatternsSignalsData(response.data);
    };
    fetchPatternsSignalsData();
  }, []);

  // console.log(data);

  const ValueBar = ({ value }) => {
    const getWidth = () => {
      const percentage = Math.min(Math.abs(value) * 10, 100);
      return `${percentage}%`;
    };

    const getColor = () => {
      return value > 0 ? "#60d938" : "#ed250e";
    };

    return (
      <div className="value_bar_container">
        <div className="value_bar_center"></div>
        <div
          className={`value_bar ${
            value > 0 ? "value_bar_right" : "value_bar_left"
          }`}
          style={{
            width: getWidth(),
            backgroundColor: getColor(),
          }}
        ></div>
      </div>
    );
  };

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
        symbolData,
        patternsData,
        patternsSignalsData,
        ValueBar,
        filteredData,
        filterData,
        activeTimeframe,
        activeSymbol,
        setSymbol,
        inputValue,
        inputRef,
        handleInputChange,
        clearInput,
        filteredSearchData,
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
