import "./MarketSection.css";
import { useContext, useState } from "react";
import { marketData } from "../../assets/data/MarketData.js";
import Watchlists from "../Watchlists/Watchlists.jsx";
import AllSymbols from "../AllSymbols/AllSymbols.jsx";
import InfoModal from "../InfoModal/InfoModal.jsx";
import { DataContext } from "../../context/DataContext.jsx";
import { useTranslation } from "react-i18next";

export default function MarketSection() {
  const { t } = useTranslation();

  const { infoModalData } = useContext(DataContext);

  const getImagesArray = (data) => {
    const images = [];
    if (data?.image1) images.push(data.image1);
    if (data?.image2) images.push(data.image2);
    if (data?.image3) images.push(data.image3);
    return images;
  };

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
            <p>{t(marketData.tab1)}</p>
            <InfoModal
              title={infoModalData[1]?.title}
              description={infoModalData[1]?.description}
              images={getImagesArray(infoModalData[1])}
              videoUrl={infoModalData[1]?.video_link}
            />
          </div>
          <div
            className={toggleState === 2 ? "tab_list active_tab" : "tab_list"}
            onClick={() => toggleTab(2)}
          >
            <p>{t(marketData.tab2)}</p>
            <InfoModal
              title={infoModalData[2]?.title}
              description={infoModalData[2]?.description}
              images={getImagesArray(infoModalData[2])}
              videoUrl={infoModalData[2]?.video_link}
            />
          </div>
        </div>

        {toggleState === 1 ? <AllSymbols /> : <Watchlists />}
      </div>
    </>
  );
}
