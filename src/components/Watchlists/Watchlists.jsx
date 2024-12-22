import "./Watchlists.css";
import { useState } from "react";
import PM_WatchList from "../PopularMarkets/PM_WatchList/PM_WatchList.jsx";
import { FiPlus } from "react-icons/fi";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

export default function Watchlists() {
  const [toggleState, setToggleState] = useState(true);

  return (
    <>
      <div className="watchlist">
        <div className="watchlist_section">
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

          {toggleState ? <PM_WatchList /> : <></>}

          <div className="new_watchlist">
            <i>
              <FiPlus />
            </i>
            <p>Create new Watchlist</p>
          </div>
        </div>
      </div>
    </>
  );
}
