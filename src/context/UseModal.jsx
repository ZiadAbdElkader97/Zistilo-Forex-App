import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export default function UseModal() {
  return useContext(ModalContext);
}
