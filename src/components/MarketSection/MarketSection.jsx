import "./MarketSection.css";
import { useState, useContext } from "react";
import { symbols_search, marketData } from "../../assets/data/MarketData.js";
import { LiaSearchSolid } from "react-icons/lia";
import { MdCancel } from "react-icons/md";
import Watchlists from "../Watchlists/Watchlists.jsx";
import AllSymbols from "../AllSymbols/AllSymbols.jsx";
import { DataContext } from "../../context/DataContext.jsx";

export default function MarketSection() {
  const {
    filterData,
    activeSymbol,
    inputValue,
    inputRef,
    handleInputChange,
    clearInput,
  } = useContext(DataContext);

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

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="market_section">
        {/* Market Tabs */}
        <div className="market_tabs">
          <div
            className={toggleState === 1 ? "tab_list active_tab" : "tab_list"}
            onClick={() => toggleTab(1)}
          >
            {marketData.tab1}
          </div>
          <div
            className={toggleState === 2 ? "tab_list active_tab" : "tab_list"}
            onClick={() => toggleTab(2)}
          >
            {marketData.tab2}
          </div>
        </div>

        {/* Search Section */}
        <div className="search_section">
          <div className="search_field">
            <input
              type="search"
              placeholder={marketData.search_ph}
              className="search_input"
              value={inputValue}
              ref={inputRef}
              onChange={handleInputChange}
            />
            <i onClick={clearInput}>
              {inputValue ? <MdCancel /> : <LiaSearchSolid />}
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

        {toggleState === 1 ? <AllSymbols /> : <Watchlists />}
      </div>
    </>
  );
}
