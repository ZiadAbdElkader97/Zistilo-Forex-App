import axios from "axios";
import "./PopularMarket.css";
import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";

export default function PopularMarket() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/market_watch_prices_api.php"
      );
      setData(response.data);
    };
    fetchData();
  }, []);
  //   console.log(data);
  return (
    <>
      {data.map((item) => (
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
