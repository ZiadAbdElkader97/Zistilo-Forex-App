import "./Watchlists.css";
import { useState } from "react";
import PopularMarket from "../PopularMarket/PopularMarket";
import { FiPlus } from "react-icons/fi";
import { FaListUl } from "react-icons/fa";
import { HiSquares2X2 } from "react-icons/hi2";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

export default function Watchlists() {
  const [toggleState, setToggleState] = useState(true);
  const [changeIcon, setChangeIcon] = useState(true);

  return (
    <>
      <div className="watchlist">
        <div className="popular">
          <div
            className="popular_section"
            onClick={() => setToggleState(!toggleState)}
          >
            <div className="pop_section">
              <i>
                {toggleState ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
              </i>
              <p>Popular Markets</p>
            </div>
          </div>
          <div className="view_section">
            <i
              title={changeIcon ? "Tiles" : "List"}
              onClick={() => setChangeIcon(!changeIcon)}
            >
              {changeIcon ? <HiSquares2X2 /> : <FaListUl />}
            </i>
          </div>
        </div>

        {toggleState ? <PopularMarket /> : <></>}

        <div className="new_watchlist">
          <i>
            <FiPlus />
          </i>
          <p>Create new Watchlist</p>
        </div>
      </div>
    </>
  );
}
