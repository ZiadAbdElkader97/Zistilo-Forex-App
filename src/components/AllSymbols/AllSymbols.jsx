import axios from "axios";
import "./AllSymbols.css";
import { useState, useEffect } from "react";
import PM_Symbols from "../PopularMarkets/PM_Symbols/PM_Symbols.jsx";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

export default function AllSymbols() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

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
      setActiveTab(
        response.filteredData.length > 0 ? response.filteredData[0].id : null
      );
    };
    fetchData();
  }, []);
  console.log(data);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="symbol">
        <div className="symbol_section">
          <div className="category_symbol">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="category_symbol_section"
                onClick={() => (
                  handleTabClick(item.id), setActiveTab(!activeTab)
                )}
              >
                <i>
                  {activeTab ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
                </i>
                <p>{item.category}</p>
              </div>
            ))}
          {activeTab ? <PM_Symbols /> : <></>}
          </div>

        </div>
      </div>
    </>
  );
}
