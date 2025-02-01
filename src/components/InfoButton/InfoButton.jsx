/* eslint-disable react/prop-types */
import "./InfoButton.css";
import { FaInfoCircle } from "react-icons/fa";

export default function InfoButton({ onClick, description, videoUrl }) {
  const handleClick = () => {
    onClick(description, videoUrl);
  };

  return (
    <button className="info_btn" onClick={handleClick}>
      <i>
        <FaInfoCircle />
      </i>
    </button>
  );
}
