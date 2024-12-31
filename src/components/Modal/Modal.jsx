/* eslint-disable react/prop-types */
import "./Modal.css";

export default function Modal({ show, onClose, children }) {
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
          <button className="close_btn" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
