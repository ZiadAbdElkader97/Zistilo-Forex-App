/* eslint-disable react/prop-types */
import "./Calendar.css";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function Calendar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [selectedOption, setSelectedOption] = useState("Today");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [toggleState, setToggleState] = useState(1);
  const handleToggleState = (index) => {
    setToggleState(index);
  };

  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/economic_news_api.php"
      );
      const apiData = response.data;
      setData(apiData);
    };
    fetchData();
  }, []);

  // console.log(data);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const ProgressBar = ({ impact }) => {
    const getWidth = () => {
      switch (impact) {
        case "Low":
          return "30%";
        case "Medium":
          return "60%";
        case "High":
          return "90%";
        default:
          return "0%";
      }
    };

    const getColor = () => {
      switch (impact) {
        case "Low":
          return "green";
        case "Medium":
          return "orange";
        case "High":
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
          {impact}
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
              <li
                className={
                  toggleState === 1
                    ? "dropdown_item dropdown_item_active"
                    : "dropdown_item"
                }
                onClick={() => (
                  handleOptionClick("Today"), handleToggleState(1)
                )}
              >
                Today
              </li>
              <li
                className={
                  toggleState === 2
                    ? "dropdown_item dropdown_item_active"
                    : "dropdown_item"
                }
                onClick={() => (
                  handleOptionClick("Tomorrow"), handleToggleState(2)
                )}
              >
                Tomorrow
              </li>
              <li
                className={
                  toggleState === 3
                    ? "dropdown_item dropdown_item_active"
                    : "dropdown_item"
                }
                onClick={() => (
                  handleOptionClick("Yesterday"), handleToggleState(3)
                )}
              >
                Yesterday
              </li>
              <li
                className={
                  toggleState === 4
                    ? "dropdown_item dropdown_item_active"
                    : "dropdown_item"
                }
                onClick={() => (
                  handleOptionClick("Current Week"), handleToggleState(4)
                )}
              >
                Current Week
              </li>
              <li
                className={
                  toggleState === 5
                    ? "dropdown_item dropdown_item_active"
                    : "dropdown_item"
                }
                onClick={() => (
                  handleOptionClick("Next Week"), handleToggleState(5)
                )}
              >
                Next Week
              </li>
            </ul>
          )}
        </div>
        {selectedOption === "Today" && (
          <div className="calendar_section">
            {data.map((item) => (
              <div key={item.id} className="calendar_info">
                <hr className="hr_bottom" />
                <div className="calendar_time_country">
                  <div className="calendar_time">
                    <span className="time_icon">
                      <FaRegClock />
                    </span>
                    <span className="event_time">{item.event_time}</span>
                  </div>
                  <div className="calendar_country">{item.country}</div>
                </div>
                <p className="calendar_title">{item.title}</p>
                <div className="calendar_details">
                  <div className="calendar_data impact">
                    <ProgressBar impact={item.impact} />
                    <p className="word">Impact</p>
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
        {/* {selectedOption === "Tomorrow" && (
          <div className="calendar_section">Content Option Two</div>
        )}
        {selectedOption === "Yesterday" && (
          <div className="calendar_section">Content Option Three</div>
        )}
        {selectedOption === "Current Week" && (
          <div className="calendar_section">Content Option Four</div>
        )}
        {selectedOption === "Next Week" && (
          <div className="calendar_section">Content Option Five</div>
        )} */}
      </div>
    </div>
  );
}
