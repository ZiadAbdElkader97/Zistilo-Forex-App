import "./TradeSection.css";
import { useState, useRef } from "react";
import { symbols_search, tradeData } from "../../assets/data/TradeData";
import { LiaSearchSolid } from "react-icons/lia";
import { MdCancel } from "react-icons/md";
import Watchlists from "../Watchlists/Watchlists.jsx";
import Symbols from "../Symbols/Symbols.jsx";

export default function TradeSection() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [activeTab, setActiveTab] = useState(symbols_search[0].id);
  const toggleSearchtab = (id) => {
    setActiveTab(id);
  };

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <div className="trade_section">
        {/* Trade Tabs */}
        <div className="trade_tabs">
          <div
            className={toggleState === 1 ? "tab_list active_tab" : "tab_list"}
            onClick={() => toggleTab(1)}
          >
            {tradeData.tab1}
          </div>
          <div
            className={toggleState === 2 ? "tab_list active_tab" : "tab_list"}
            onClick={() => toggleTab(2)}
          >
            {tradeData.tab2}
          </div>
        </div>

        {/* Search Section */}
        <div className="search_section">
          <div className="search_field">
            <input
              type="search"
              placeholder={tradeData.search_ph}
              className="search_input"
              value={inputValue}
              ref={inputRef}
              onChange={handleInputChange}
            />
            <i onClick={clearInput}>
              {inputValue ? <MdCancel /> : <LiaSearchSolid />}
            </i>
          </div>
          <div className="symbols_search">
            <ul className="symbols_ul">
              {symbols_search.map((tab) => (
                <li
                  key={tab.id}
                  className={
                    activeTab === tab.id
                      ? "symbols_li symbols_active"
                      : "symbols_li"
                  }
                  onClick={() => toggleSearchtab(tab.id)}
                >
                  {tab.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {toggleState === 1 ? <Watchlists /> : <Symbols />}
      </div>
    </>
  );
}
