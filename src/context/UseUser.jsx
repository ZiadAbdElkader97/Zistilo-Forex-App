import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function UseUser() {
  return useContext(UserContext);
}
