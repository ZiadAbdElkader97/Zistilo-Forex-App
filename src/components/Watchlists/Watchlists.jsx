import { useContext, useEffect } from "react";
import "./Watchlists.css";
import { FiPlus } from "react-icons/fi";
import { DataContext } from "../../context/DataContext";
import { FaCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

export default function Watchlists() {
  const {
    setSymbol,
    filterData,
    activeTimeframe,
    watchlist,
    removeFromWatchlist,
  } = useContext(DataContext);

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
        <div className="watchlist_section">
          <div className="copied_items_section">
            {watchlist.map((item) => (
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

          <div className="new_watchlist">
            <i>
              <FiPlus />
            </i>
            <p>Create new Watchlist</p>
          </div>
        </div>
      </div>
    </>
  );
}
