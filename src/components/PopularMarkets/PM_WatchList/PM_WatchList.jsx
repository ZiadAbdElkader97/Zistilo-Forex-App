import axios from "axios";
import "./PM_WatchList.css";
import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";

export default function PM_WatchList() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/market_watch_prices_api.php"
      );
      const uniqueNames = new Set();
      const filtered = response.data.filter((item) => {
        if (!uniqueNames.has(item.symbol)) {
          uniqueNames.add(item.symbol);
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
      {filteredData.map((item) => (
        <div key={item.id} className="view_data">
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
