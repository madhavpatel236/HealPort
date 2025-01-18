
import { createContext, useState } from "react";

export const adminContext = createContext({});
export const backendUrl = import.meta.env.VITE_BACKEND_URL;

console.log("Backend URL:", backendUrl); // Verify the URL is loaded

const adminContextProvider = (props) => {
  const [atoken, setAtoken] = useState();


  const value = {
    atoken,
    // TODO: setAtoken, liked with the Login.jsx
    backendUrl,
  };

  return (
    <adminContext.Provider value={value}>
      {props.children}
    </adminContext.Provider>
  );
};

export default adminContextProvider;
