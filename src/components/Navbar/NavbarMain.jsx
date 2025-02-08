import "./Navbar.css";
import { useContext, useState } from "react";
import { FaSquare } from "react-icons/fa";
import { HiMiniSquare2Stack } from "react-icons/hi2";
import { DataContext } from "../../context/DataContext";
import { useTranslation } from "react-i18next";
import InfoModal from "../InfoModal/InfoModal";

export default function NavbarMain() {
  const { t } = useTranslation();

  const { setIsSingleChart, infoModalData } = useContext(DataContext);

  const [activeChartTab, setActiveChartTab] = useState(1);

  const handleActiveChartTab = (tab) => {
    setActiveChartTab(tab);
  };

  const getImagesArray = (data) => {
    const images = [];
    if (data?.image1) images.push(data.image1);
    if (data?.image2) images.push(data.image2);
    if (data?.image3) images.push(data.image3);
    return images;
  };

  return (
    <>
      <div className="navbar_main">
        <div className="charts_tabs">
          <div
            className={
              activeChartTab === 1 ? "chart_tab chart_active" : "chart_tab"
            }
            onClick={() => (setIsSingleChart(true), handleActiveChartTab(1))}
          >
            <i>
              <FaSquare />
            </i>
            <p>{t("Single Chart")}</p>
          </div>
          <div
            className={
              activeChartTab === 2 ? "chart_tab chart_active" : "chart_tab"
            }
            onClick={() => (setIsSingleChart(false), handleActiveChartTab(2))}
          >
            <i>
              <HiMiniSquare2Stack />
            </i>
            <p>{t("Double Chart")}</p>
          </div>
        </div>
        <InfoModal
          title={infoModalData[8]?.title}
          description={infoModalData[8]?.description}
          images={getImagesArray(infoModalData[8])}
          videoUrl={infoModalData[8]?.video_link}
        />
      </div>
    </>
  );
}
