import "./AllSymbols.css";
import axios from "axios";
import { useState, useEffect } from "react";
import PM_Symbols from "../PopularMarkets/PM_Symbols/PM_Symbols.jsx";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

export default function AllSymbols() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [openTabs, setOpenTabs] = useState(false);

  const handleToggle = (id) => {
    setOpenTabs((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

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

  console.log();

  return (
    <>
      <div className="symbol">
        <div className="symbol_section">
          {filteredData.map((item) => (
            <div key={item.id} className="category_symbol">
              <div
                className="category_symbol_section"
                onClick={() => handleToggle(item.id)}
              >
                <i>
                  {openTabs[item.id] ? (
                    <IoMdArrowDropdown />
                  ) : (
                    <IoMdArrowDropright />
                  )}
                </i>
                <p>{item.category}</p>
              </div>
              {openTabs[item.id] ? <PM_Symbols /> : <></>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
