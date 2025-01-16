import { createContext, useContext } from "react";

export const UserContext = createContext();


export const useUser = () => useContext(UserContext);

export const useModal = () => useContext(UserContext);
