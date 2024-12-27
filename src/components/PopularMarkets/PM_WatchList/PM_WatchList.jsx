import "./PM_WatchList.css";
import { useContext, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { DataContext } from "../../../context/DataContext.jsx";

export default function PM_WatchList() {
  const { data, setSymbol, filterData, activeTimeframe } =
    useContext(DataContext);

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
      {data.map((item) => (
        <div
          key={item.id}
          className="view_data"
          onClick={() => handleItemClick(item.symbol)}
        >
          <div className="view_sec1">
            <i className="view_icon">
              <FaCheck />
            </i>
            <p className="view_symbol">{item.symbol}</p>
          </div>
          <div className="view_sec2">
            <p className="view_percent_change">{item.percent_change}</p>
            <p className="view_ask_price">{item.ask_price}</p>
            <p className="view_bid_price">{item.bid_price}</p>
          </div>
        </div>
      ))}
    </>
  );
}
