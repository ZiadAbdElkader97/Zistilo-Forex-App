/* eslint-disable react/prop-types */
import "./InfoModal.css";
import { useState } from "react";
import Modal from "../Modal/Modal";
import InfoButton from "../InfoButton/InfoButton";

export default function InfoModal({ title, description, videoUrl }) {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <InfoButton
        onClick={handleButtonClick}
        description={description}
        videoUrl={videoUrl}
      />
      <Modal title={title} show={showModal} onClose={handleCloseModal}>
        <div className="modal_section">
          <p className="info_description">{description}</p>
          <video width="560" height="315" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Modal>
    </>
  );
}
