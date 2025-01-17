import { createContext } from "react";

export const appContext = createContext({});

const appContextProvider = (props) => {
  const value = {};

  return;
  <appContext.Provider value={value}>
    {props.children} 
  </appContext.Provider>;
};

export default appContextProvider;
