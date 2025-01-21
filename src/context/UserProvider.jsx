/* eslint-disable react/prop-types */
import { useState } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <UserContext.Provider
      value={{ user, setUser, showModal, openModal, closeModal }}
    >
      {children}
    </UserContext.Provider>
  );
}
