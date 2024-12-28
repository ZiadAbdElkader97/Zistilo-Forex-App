/* eslint-disable react/prop-types */
import "./Calendar.css";
import { useContext, useEffect, useRef, useState } from "react";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { DataContext } from "../../context/DataContext";

export default function Calendar() {
  const { calendarData } = useContext(DataContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [selectedOption, setSelectedOption] = useState("today");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [toggleState, setToggleState] = useState(null);
  const handleToggleState = (index) => {
    setToggleState(index);
  };

  const uniqueClassifications = [
    ...new Set(calendarData.map((item) => item.classification)),
  ];

  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    <div className="calendar">
      <div className="calendar_content">
        <div className="calendar_dropdown" ref={dropdownRef}>
          <div>
            <FaRegCalendarAlt />
          </div>
          <button className="dropdown_btn" onClick={toggleDropdown}>
            {selectedOption}
            <span className="dropdown_icon">
              {isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
            </span>
          </button>
          {isOpen && (
            <ul className="dropdown_menu">
              {uniqueClassifications.map((classification, index) => (
                <li
                  key={index}
                  className={
                    toggleState === index
                      ? "dropdown_item dropdown_item_active"
                      : "dropdown_item"
                  }
                  onClick={() => (
                    handleOptionClick(classification), handleToggleState(index)
                  )}
                >
                  {classification}
                </li>
              ))}
            </ul>
          )}
        </div>
        {selectedOption && (
          <div className="calendar_section">
            {calendarData
              .filter((item) => item.classification === selectedOption)
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
  );
}
