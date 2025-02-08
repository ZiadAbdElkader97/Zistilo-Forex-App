/* eslint-disable react/prop-types */
import "./RightSide.css";
import { useContext, useState } from "react";
import Tech_Section from "../Technical_Indicator/Tech_Section.jsx";
import RSide_Symbol from "../RSide_Symbol/RSide_Symbol.jsx";
import Calendar from "../Calendar/Calendar.jsx";
import Patterns from "../Patterns/Patterns.jsx";
import MovingAverage from "../MovingAverage/MovingAverage.jsx";
import PivotPoints from "../PivotPoints/PivotPoints.jsx";
import { FaProjectDiagram, FaRegCalendarAlt } from "react-icons/fa";
import { FaCalculator, FaChartBar, FaChartLine } from "react-icons/fa6";
import { SiSymbolab } from "react-icons/si";
import InfoModal from "../InfoModal/InfoModal.jsx";
import { DataContext } from "../../context/DataContext.jsx";
import { useTranslation } from "react-i18next";

export default function RightSide({ isRightSideOpen, toggleRightSide }) {
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
    if (!isRightSideOpen) {
      toggleRightSide();
    }
  };

  return (
    <div className={isRightSideOpen ? "right_side" : "sm_right_side"}>
      <div className="tabs">
        <div
          title={t("Symbol")}
          className={toggleState === 1 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(1);
            isRightSideOpen(true);
          }}
        >
          <span>
            {isRightSideOpen ? (
              t("Symbol")
            ) : (
              <SiSymbolab style={{ fontSize: "20px" }} />
            )}
          </span>
          {isRightSideOpen ? (
            <></>
          ) : (
            <InfoModal
              title={infoModalData[12]?.title}
              description={infoModalData[12]?.description}
              images={getImagesArray(infoModalData[12])}
              videoUrl={infoModalData[12]?.video_link}
            />
          )}
        </div>
        <div
          title={t("Calendar")}
          className={toggleState === 2 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(2);
            isRightSideOpen(true);
          }}
        >
          <span>
            {isRightSideOpen ? (
              t("Calendar")
            ) : (
              <FaRegCalendarAlt style={{ fontSize: "20px" }} />
            )}
          </span>
          {isRightSideOpen ? (
            <></>
          ) : (
            <InfoModal
              title={infoModalData[13]?.title}
              description={infoModalData[13]?.description}
              images={getImagesArray(infoModalData[13])}
              videoUrl={infoModalData[13]?.video_link}
            />
          )}
        </div>
        <div
          title={t("Technical Indicator")}
          className={toggleState === 3 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(3);
            isRightSideOpen(true);
          }}
        >
          <span>
            {isRightSideOpen ? (
              t("Tech")
            ) : (
              <FaChartBar style={{ fontSize: "20px" }} />
            )}
          </span>
          {isRightSideOpen ? (
            <></>
          ) : (
            <InfoModal
              title={infoModalData[14]?.title}
              description={infoModalData[14]?.description}
              images={getImagesArray(infoModalData[14])}
              videoUrl={infoModalData[14]?.video_link}
            />
          )}
        </div>
        <div
          title={t("Patterns")}
          className={toggleState === 4 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(4);
            isRightSideOpen(true);
          }}
        >
          <span>
            {isRightSideOpen ? (
              t("Patterns")
            ) : (
              <FaProjectDiagram style={{ fontSize: "20px" }} />
            )}
          </span>
          {isRightSideOpen ? (
            <></>
          ) : (
            <InfoModal
              title={infoModalData[15]?.title}
              description={infoModalData[15]?.description}
              images={getImagesArray(infoModalData[15])}
              videoUrl={infoModalData[15]?.video_link}
            />
          )}
        </div>
        <div
          title={t("Moving Average")}
          className={toggleState === 5 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(5);
            isRightSideOpen(true);
          }}
        >
          <span>
            {isRightSideOpen ? (
              t("M.A")
            ) : (
              <FaChartLine style={{ fontSize: "20px" }} />
            )}
          </span>
          {isRightSideOpen ? (
            <></>
          ) : (
            <InfoModal
              title={infoModalData[16]?.title}
              description={infoModalData[16]?.description}
              images={getImagesArray(infoModalData[16])}
              videoUrl={infoModalData[16]?.video_link}
            />
          )}
        </div>
        <div
          title={t("Pivot Points")}
          className={toggleState === 6 ? "tab tab_active" : "tab"}
          onClick={() => {
            toggleTab(6);
            isRightSideOpen(true);
          }}
        >
          <span>
            {isRightSideOpen ? (
              t("P.P")
            ) : (
              <FaCalculator style={{ fontSize: "20px" }} />
            )}
          </span>
          {isRightSideOpen ? (
            <></>
          ) : (
            <InfoModal
              title={infoModalData[17]?.title}
              description={infoModalData[17]?.description}
              images={getImagesArray(infoModalData[17])}
              videoUrl={infoModalData[17]?.video_link}
            />
          )}
        </div>

        <div className="right_side_bar" onClick={toggleRightSide}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {isRightSideOpen && (
        <>
          {toggleState === 1 && <RSide_Symbol />}
          {toggleState === 2 && <Calendar />}
          {toggleState === 3 && <Tech_Section />}
          {toggleState === 4 && <Patterns />}
          {toggleState === 5 && <MovingAverage />}
          {toggleState === 6 && <PivotPoints />}
        </>
      )}
    </div>
  );
}
