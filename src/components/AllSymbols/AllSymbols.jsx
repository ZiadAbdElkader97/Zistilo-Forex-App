/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
import "./AllSymbols.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { marketData, symbols_search } from "../../assets/data/MarketData.js";
import { DataContext } from "../../context/DataContext.jsx";
import SymbolsCategory from "../SymbolsCategory/SymbolsCategory.jsx";
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
    categoryData,
    openTabs,
    filteredSearchData,
    setFilteredSearchData,
    handleToggle,
    categoryCounts,
  } = useContext(DataContext);

  const handleInputChange = (event) => {
    setInputSymbolValue(event.target.value);
    const filteredData = {};
    for (const key in categoryData) {
      if (categoryData.hasOwnProperty(key)) {
        filteredData[key] = categoryData[key].filter((item) =>
          item.symbol.toLowerCase().includes(event.target.value.toLowerCase())
        );
      }
    }
    setFilteredSearchData(filteredData);
  };
  const clearInput = () => {
    setInputSymbolValue("");
    setFilteredSearchData(categoryData);
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

                <div className="category_info">
                  <p className="category_name">{item.category}</p>
                  <span className="category_num">
                    ({categoryCounts[item.id] || 0})
                  </span>
                </div>
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
