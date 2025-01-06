/* eslint-disable no-unused-vars */
import "./AllSymbols.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { marketData, symbols_search } from "../../assets/data/MarketData.js";
import { DataContext } from "../../context/DataContext.jsx";
import SymbolsCategory from "../SymbolsCategory/SymbolsCategory.jsx";
import PM_Symbols from "../PM_Symbols/PM_Symbols.jsx";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";
import { MdCancel } from "react-icons/md";

export default function AllSymbols() {
  const {
    inputSymbolValue,
    setInputSymbolValue,
    inputRef,
    filterData,
    activeSymbol,
  } = useContext(DataContext);

  const handleInputChange = (event) => {
    setInputSymbolValue(event.target.value);
  };

  const clearInput = () => {
    setInputSymbolValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const [activeTimeframeTab, setActiveTimeframeTab] = useState(
    symbols_search[0].id
  );

  const handleTimeframeFilter = (id, timeframe) => {
    if (setActiveTimeframeTab === id) {
      setActiveTimeframeTab(null);
      filterData(null, activeSymbol);
    } else {
      setActiveTimeframeTab(id);
      filterData(timeframe, activeSymbol);
    }
  };

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [openTabs, setOpenTabs] = useState(false);
  const [categoryData, setCategoryData] = useState({});
  const [filteredSearchData, setFilteredSearchData] = useState({});

  const [toggleState, setToggleState] = useState(true);

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
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/market_watch_prices_api.php"
      );
      const uniqueNames = new Set();
      const filtered = response.data.filter((item) => {
        if (!uniqueNames.has(item.category)) {
          uniqueNames.add(item.category);
          return true;
        }
        return false;
      });
      setData(response.data);
      setFilteredData(filtered);
    };
    fetchData();
  }, []);

  // console.log(data);

  return (
    <>
      <div className="symbol">
        {/* Search Section */}
        <div className="search_section">
          <div className="search_field">
            <input
              type="search"
              placeholder={marketData.search_ph}
              className="search_input"
              value={inputSymbolValue}
              ref={inputRef}
              onChange={handleInputChange}
            />
            <i onClick={clearInput}>
              {inputSymbolValue ? <MdCancel /> : <LiaSearchSolid />}
            </i>
          </div>
          <div className="symbols_search">
            <ul className="symbols_ul">
              {symbols_search.map((tab) => (
                <li
                  key={tab.id}
                  className={
                    activeTimeframeTab === tab.id
                      ? "symbols_li symbols_active"
                      : "symbols_li"
                  }
                  onClick={() => handleTimeframeFilter(tab.id, tab.timeframe)}
                >
                  {tab.timeframe}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="data_header">
          <p className="data_header_p" style={{ width: "60px" }}>
            Symbol
          </p>
          <p className="data_header_p">Change %</p>
          <p
            className="data_header_p"
            style={{ width: "20px", marginLeft: "10px" }}
          >
            Ask
          </p>
          <p
            className="data_header_p"
            style={{ width: "20px", marginLeft: "30px" }}
          >
            Bid
          </p>
        </div>

        <div className="symbol_section">
          <div className="popular">
            <div
              className="popular_section"
              onClick={() => setToggleState(!toggleState)}
            >
              <i>
                {toggleState ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
              </i>
              <p>Popular Markets</p>
            </div>
          </div>

          {toggleState ? <PM_Symbols /> : <></>}

          {filteredData.map((item) => (
            <div key={item.id} className="category_symbol">
              <div
                className="category_symbol_section"
                onClick={() => handleToggle(item.id, item.category)}
              >
                <i>
                  {openTabs[item.id] ? (
                    <IoMdArrowDropdown />
                  ) : (
                    <IoMdArrowDropright />
                  )}
                </i>
                <p>{item.category}</p>
              </div>
              {openTabs[item.id] ? (
                <SymbolsCategory
                  data={categoryData[item.id]}
                  filteredSearchData={filteredSearchData[item.id]}
                />
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
