/* eslint-disable no-unused-vars */
import "./AllSymbols.css";
import axios from "axios";
import { useState, useEffect } from "react";
import SymbolsCategory from "../SymbolsCategory/SymbolsCategory.jsx";
import PM_Symbols from "../PM_Symbols/PM_Symbols.jsx";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

export default function AllSymbols() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [openTabs, setOpenTabs] = useState(false);
  const [categoryData, setCategoryData] = useState({});

  const [toggleState, setToggleState] = useState(true);

  const handleToggle = async (id, category) => {
    setOpenTabs((prevState) => ({ ...prevState, [id]: !prevState[id] }));

    if (!categoryData[id]) {
      const response = await axios.get(
        `https://notifications.copyforexsignals.com/apii/market_watch_prices_api.php?category=${category}`
      );
      setCategoryData((prevState) => ({ ...prevState, [id]: response.data }));
    }
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

  // console.log(data);

  return (
    <>
      <div className="symbol">
        <div className="symbol_section">
          <div className="popular">
            <div
              className="popular_section"
              onClick={() => setToggleState(!toggleState)}
            >
              <i>
                {toggleState ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
              </i>
              <p>Popular Markets</p>
            </div>
          </div>

          {toggleState ? <PM_Symbols /> : <></>}

          {filteredData.map((item) => (
            <div key={item.id} className="category_symbol">
              <div
                className="category_symbol_section"
                onClick={() => handleToggle(item.id, item.category)}
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
              {openTabs[item.id] ? (
                <SymbolsCategory data={categoryData[item.id]} />
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
