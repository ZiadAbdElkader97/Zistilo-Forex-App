import "./PM_Symbols.css";
import { useEffect, useContext } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { DataContext } from "../../../context/DataContext";

export default function PM_Symbols() {
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

  // console.log(data);

  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="view_data"
          onClick={() => handleItemClick(item.symbol)}
        >
          <div className="view_sec1">
            <i className="view_icon1">
              <FaRegStar />
            </i>
            <i className="view_icon2">
              <FaCheck />
            </i>
            <p className="view_symbol">{item.symbol}</p>
          </div>
          <div className="view_sec2">
            <p className="view_ask_price">{item.ask_price}</p>
            <p className="view_bid_price">{item.bid_price}</p>
          </div>
        </div>
      ))}
    </>
  );
}
