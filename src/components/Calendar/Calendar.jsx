/* eslint-disable react/prop-types */
import "./Calendar.css";
import { useContext, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { DataContext } from "../../context/DataContext";

export default function Calendar() {
  const { calendarData } = useContext(DataContext);

  const [toggleState, setToggleState] = useState(5);
  const handleToggleState = (index) => {
    setToggleState(index);
  };

  const [selectedOption, setSelectedOption] = useState("today");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const uniqueClassifications = [
    ...new Set(calendarData.map((item) => item.classification)),
  ];

  const [importanceFilter, setImportanceFilter] = useState(null);

  const ProgressBar = ({ importance }) => {
    const getWidth = () => {
      switch (importance) {
        case 1:
          return "30%";
        case 2:
          return "60%";
        case 3:
          return "90%";
        default:
          return "0%";
      }
    };

    const getColor = () => {
      switch (importance) {
        case 1:
          return "green";
        case 2:
          return "orange";
        case 3:
          return "red";
        default:
          return "#e0e0e0";
      }
    };
    return (
      <div className="progress_bar">
        <div
          className="progress"
          style={{ width: getWidth(), backgroundColor: getColor() }}
        >
          {importance}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="calendar">
        <div className="calendar_content">
          <div className="calendar_tabs">
            {uniqueClassifications.map((classification, index) => (
              <span
                key={index}
                className={
                  toggleState === index
                    ? "calendar_tab calendar_tab_active"
                    : "calendar_tab"
                }
                onClick={() => (
                  handleOptionClick(classification), handleToggleState(index)
                )}
              >
                {classification}
              </span>
            ))}
          </div>
          <div className="importance_filter">
            <label>
              <input
                type="checkbox"
                name="importance"
                value=""
                checked={importanceFilter === null}
                onChange={() => setImportanceFilter(null)}
              />
              All
            </label>
            <label>
              <input
                type="checkbox"
                name="importance"
                value="1"
                checked={importanceFilter === 1}
                onChange={() => setImportanceFilter(1)}
              />
              Importance 1
            </label>
            <label>
              <input
                type="checkbox"
                name="importance"
                value="2"
                checked={importanceFilter === 2}
                onChange={() => setImportanceFilter(2)}
              />
              Importance 2
            </label>
          </div>
          {selectedOption && (
            <div className="calendar_section">
              {calendarData
                .filter((item) => item.classification === selectedOption)
                .filter((item) =>
                  importanceFilter ? item.importance === importanceFilter : true
                )
                .map((item) => (
                  <div key={item.id} className="calendar_info">
                    <hr className="hr_bottom" />
                    <div className="calendar_time_country">
                      <div className="calendar_time">
                        <span className="time_icon">
                          <FaRegClock />
                        </span>
                        <span className="calendar_date">{item.date}</span>
                      </div>
                      <div className="calendar_country">
                        <div className="country_currency">
                          <p>{item.country}</p>
                          <p>Country</p>
                        </div>
                        <div className="country_currency">
                          <p>{item.currency}</p>
                          <p>Currency</p>
                        </div>
                      </div>
                    </div>
                    <p className="calendar_title">{item.title}</p>
                    <div className="calendar_details">
                      <div className="calendar_data importance">
                        <ProgressBar importance={item.importance} />
                        <p className="word">importance</p>
                      </div>
                      <hr className="hr_side" />
                      <div className="calendar_data actual">
                        <p className="percent">{item.actual}</p>
                        <p className="word">Actual</p>
                      </div>
                      <hr className="hr_side" />
                      <div className="calendar_data forecast">
                        <p className="percent">{item.forecast}</p>
                        <p className="word">Forecast</p>
                      </div>
                      <hr className="hr_side" />
                      <div className="calendar_data previous">
                        <p className="percent">{item.previous}</p>
                        <p className="word">Previous</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
