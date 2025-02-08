/* eslint-disable react/prop-types */
import "./InfoButton.css";
import { IoInformationCircleOutline } from "react-icons/io5";

export default function InfoButton({ onClick, description, videoUrl }) {
  const handleClick = () => {
    onClick(description, videoUrl);
  };

  return (
    <button className="info_btn" onClick={handleClick}>
      <IoInformationCircleOutline />
    </button>
  );
}
