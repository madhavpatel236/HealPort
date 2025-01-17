import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import adminContextProvider from "./context/AdminContext.jsx";
import doctorContextProvider from "./context/DoctorContext.jsx";
import appContextProvider from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <adminContextProvider>
      <doctorContextProvider>
        <appContextProvider>
          <App />
        </appContextProvider>
      </doctorContextProvider>
    </adminContextProvider>
  </BrowserRouter>
);
