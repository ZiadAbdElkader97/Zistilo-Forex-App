import "./MarketSection.css";
import { useState } from "react";
import { marketData } from "../../assets/data/MarketData.js";
import Watchlists from "../Watchlists/Watchlists.jsx";
import AllSymbols from "../AllSymbols/AllSymbols.jsx";
import { useTranslation } from "react-i18next";

export default function MarketSection() {
  const { t } = useTranslation();

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="market_section">
        {/* Market Tabs */}
        <div className="market_tabs">
          <div
            className={toggleState === 1 ? "tab_list active_tab" : "tab_list"}
            onClick={() => toggleTab(1)}
          >
            {t(marketData.tab1)}
          </div>
          <div
            className={toggleState === 2 ? "tab_list active_tab" : "tab_list"}
            onClick={() => toggleTab(2)}
          >
            {t(marketData.tab2)}
          </div>
        </div>

        {toggleState === 1 ? <AllSymbols /> : <Watchlists />}
      </div>
    </>
  );
}
