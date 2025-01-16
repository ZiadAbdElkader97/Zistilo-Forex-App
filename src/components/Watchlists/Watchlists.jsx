import "./Watchlists.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { marketData, symbols_search } from "../../assets/data/MarketData";
import { FaCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import { MdCancel } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Watchlists() {
  const { t } = useTranslation();

  const {
    inputWatchlistValue,
    setInputWatchlistValue,
    inputRef,
    filterData,
    setSymbol,
    activeSymbol,
    activeTimeframe,
    watchlist,
    removeFromWatchlist,
  } = useContext(DataContext);

  const handleInputChange = (event) => {
    setInputWatchlistValue(event.target.value);
  };

  const filteredSearchInputData = watchlist.filter((item) =>
    item.symbol.toLowerCase().includes(inputWatchlistValue.toLowerCase())
  );

  const clearInput = () => {
    setInputWatchlistValue("");
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

  const handleStarClick = (id) => {
    removeFromWatchlist(id);
  };

  useEffect(() => {
    if (!activeTimeframe) {
      filterData("M1", null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleItemClick = (symbol) => {
    setSymbol(symbol);
  };

  // console.log(data);

  return (
    <>
      <div className="watchlist">
        {/* Search Section */}
        <div className="search_section">
          <div className="search_field">
            <input
              type="search"
              placeholder={t(marketData.search_ph)}
              className="search_input"
              value={inputWatchlistValue}
              ref={inputRef}
              onChange={handleInputChange}
            />
            <i onClick={clearInput}>
              {inputWatchlistValue ? <MdCancel /> : <LiaSearchSolid />}
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
            {t("Symbol")}
          </p>
          <p className="data_header_p">{t("Change %")}</p>
          <p
            className="data_header_p"
            style={{ width: "20px", marginLeft: "10px" }}
          >
            {t("Ask")}
          </p>
          <p
            className="data_header_p"
            style={{ width: "20px", marginLeft: "30px" }}
          >
            {t("Bid")}
          </p>
        </div>

        <div className="watchlist_section">
          <div className="copied_items_section">
            {filteredSearchInputData.map((item) => (
              <div
                key={item.id}
                className="view_data"
                onClick={() => handleItemClick(item.symbol)}
              >
                <i
                  className="view_icon_star starred"
                  onClick={() => handleStarClick(item.id)}
                >
                  <FaStar />
                </i>
                <i className="view_icon_check">
                  <FaCheck />
                </i>
                <p className="view_symbol">{item.symbol}</p>
                <p className="view_percent_change">{item.percent_change}</p>
                <p className="view_ask_price" style={{ color: item.ask_color }}>
                  {item.ask_price}
                </p>
                <p className="view_bid_price" style={{ color: item.bid_color }}>
                  {item.bid_price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
