/* eslint-disable react/prop-types */
import "./Modal_login.css";

export default function Modal_login({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  const handleClickOutside = (event) => {
    if (event.target.className === "modal_overlay") {
      onClose();
    }
  };

  return (
    <>
      <div className="modal_overlay" onClick={handleClickOutside}>
        <div className="modal_content">
          <div className="close_btn_div">
            <button className="close_btn" onClick={onClose}>
              &times;
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
