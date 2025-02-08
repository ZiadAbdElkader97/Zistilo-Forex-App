/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState({});
  const [otherData1, setOtherData1] = useState([]);
  const [otherData2, setOtherData2] = useState([]);
  const [otherData3, setOtherData3] = useState([]);
  const [calendarData, setCalendarData] = useState([]);
  const [symbolData, setSymbolData] = useState([]);
  const [patternsData, setPatternsData] = useState([]);
  const [patternsSignalsData, setPatternsSignalsData] = useState([]);
  const [movingAverageSMAData, setMovingAverageSMAData] = useState([]);
  const [movingAverageEMAData, setMovingAverageEMAData] = useState([]);
  const [pivotClassicData, setPivotClassicData] = useState([]);
  const [pivotFibonacciData, setPivotFibonacciData] = useState([]);
  const [pivotCamarillaData, setPivotCamarillaData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeTimeframe, setActiveTimeframe] = useState(null);
  const [activeSymbol, setActiveSymbol] = useState(null);
  const [inputSymbolValue, setInputSymbolValue] = useState("");
  const [inputWatchlistValue, setInputWatchlistValue] = useState("");
  const [inputPatternValue, setInputPatternValue] = useState("");
  const [watchlist, setWatchlist] = useState([]);
  const [infoModalData, setInfoModalData] = useState([]);
  const inputRef = useRef(null);

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

  const [isSingleChart, setIsSingleChart] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/market_watch_prices_api.php?timeframe=M1"
      );
      setData(response.data);
      setFilteredData(response.data.filter((item) => item.timeframe === "M1"));
    };
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const [openTabs, setOpenTabs] = useState(false);
  const [filteredSearchData, setFilteredSearchData] = useState({});

  const [categoryCounts, setCategoryCounts] = useState({});

  const filterByTimeframe = (data, timeframe) => {
    return data.filter((item) => item.timeframe === timeframe);
  };

  const handleToggle = async (id, category) => {
    setOpenTabs((prevState) => ({ ...prevState, [id]: !prevState[id] }));

    if (!categoryData[id]) {
      const response = await axios.get(
        `https://notifications.copyforexsignals.com/apii/market_watch_prices_api.php?category=${category}`
      );
      const filteredData = filterByTimeframe(response.data, "M1");
      setCategoryData((prevState) => ({ ...prevState, [id]: filteredData }));
      setFilteredSearchData((prevState) => ({
        ...prevState,
        [id]: filteredData,
      }));
      setCategoryCounts((prevState) => ({
        ...prevState,
        [id]: filteredData.length,
      }));
    }
  };

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

  useEffect(() => {
    const fetchMovingAverageSMAData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/moving_averages_api.php?ma_type=SMA",
        {
          headers: {
            "Content-Type": "application/json",
            api_password: "5BhZWHeSp463Q7sU",
          },
        }
      );
      setMovingAverageSMAData(response.data);
    };
    fetchMovingAverageSMAData();
  }, []);

  useEffect(() => {
    const fetchMovingAverageEMAData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/moving_averages_api.php?ma_type=EMA",
        {
          headers: {
            "Content-Type": "application/json",
            api_password: "5BhZWHeSp463Q7sU",
          },
        }
      );
      setMovingAverageEMAData(response.data);
    };
    fetchMovingAverageEMAData();
  }, []);

  useEffect(() => {
    const fetchPivotClassicData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/support_resistance_levels_api.php?calculation_type=Classic",
        {
          headers: {
            "Content-Type": "application/json",
            api_password: "5BhZWHeSp463Q7sU",
          },
        }
      );
      setPivotClassicData(response.data);
    };
    fetchPivotClassicData();
  }, []);

  useEffect(() => {
    const fetchPivotFibonacciData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/support_resistance_levels_api.php?calculation_type=Fibonacci",
        {
          headers: {
            "Content-Type": "application/json",
            api_password: "5BhZWHeSp463Q7sU",
          },
        }
      );
      setPivotFibonacciData(response.data);
    };
    fetchPivotFibonacciData();
  }, []);

  useEffect(() => {
    const fetchPivotCamarillaData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/support_resistance_levels_api.php?calculation_type=Camarilla",
        {
          headers: {
            "Content-Type": "application/json",
            api_password: "5BhZWHeSp463Q7sU",
          },
        }
      );
      setPivotCamarillaData(response.data);
    };
    fetchPivotCamarillaData();
  }, []);

  useEffect(() => {
    const fetchInfoModalData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/hrlper_api.php",
        {
          headers: {
            "Content-Type": "application/json",
            api_password: "5BhZWHeSp463Q7sU",
          },
        }
      );
      setInfoModalData(response.data);
    };
    fetchInfoModalData();
  }, []);

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
        categoryData,
        setCategoryData,
        openTabs,
        filteredSearchData,
        setFilteredSearchData,
        handleToggle,
        otherData1,
        otherData2,
        otherData3,
        calendarData,
        symbolData,
        patternsData,
        patternsSignalsData,
        movingAverageSMAData,
        movingAverageEMAData,
        pivotClassicData,
        pivotFibonacciData,
        pivotCamarillaData,
        ValueBar,
        filteredData,
        filterData,
        activeTimeframe,
        activeSymbol,
        setSymbol,
        inputSymbolValue,
        setInputSymbolValue,
        inputWatchlistValue,
        setInputWatchlistValue,
        inputPatternValue,
        setInputPatternValue,
        inputRef,
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
        isSingleChart,
        setIsSingleChart,
        categoryCounts,
        infoModalData,
        setInfoModalData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
