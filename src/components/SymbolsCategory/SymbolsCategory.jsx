/* eslint-disable react/prop-types */
import "./SymbolsCategory.css";
import { useContext, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { DataContext } from "../../context/DataContext.jsx";

export default function SymbolsCategory({ data, filteredSearchData }) {
  const {
    setSymbol,
    filterData,
    activeTimeframe,
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
  } = useContext(DataContext);

  const handleStarClick = (item) => {
    const isItemInWatchlist = watchlist.some(
      (watchlistItem) => watchlistItem.id === item.id
    );
    if (!isItemInWatchlist) {
      addToWatchlist(item);
    } else {
      removeFromWatchlist(item.id);
    }
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

  return (
    <>
      {data && data.length > 0 ? (
        filteredSearchData.map((item) => {
          const isItemInWatchlist = watchlist.some(
            (watchlistItem) => watchlistItem.id === item.id
          );
          return (
            <div
              key={item.id}
              id={`view_data_${item.id}`}
              className="view_data"
              onClick={() => handleItemClick(item.symbol)}
            >
              <i
                className={`view_icon_star ${
                  isItemInWatchlist ? "starred" : ""
                }`}
                onClick={() => handleStarClick(item)}
              >
                {isItemInWatchlist ? <FaStar /> : <FaRegStar />}
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
          );
        })
      ) : (
        <></>
      )}
    </>
  );
}
