import "./Navbar.css";
import { useContext, useState } from "react";
import { FaSquare } from "react-icons/fa";
import { HiMiniSquare2Stack } from "react-icons/hi2";
import { DataContext } from "../../context/DataContext";
import { useTranslation } from "react-i18next";

export default function NavbarMain() {
  const { t } = useTranslation();

  const { setIsSingleChart } = useContext(DataContext);

  const [activeChartTab, setActiveChartTab] = useState(1);

  const handleActiveChartTab = (tab) => {
    setActiveChartTab(tab);
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
      </div>
    </>
  );
}
