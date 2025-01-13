/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Login_Register from "../Login_Register/Login_Register";

export default function LoginRequired({ children }) {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Login_Register />;
  }

  return children;
}
