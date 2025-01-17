import { createContext } from "react";

export const adminContext = createContext({});

const adminContextProvider = (props) => {
  const value = {};

  return;
  <adminContext.Provider value={value}>{props.children}</adminContext.Provider>;
};

export default adminContextProvider;
