import React from "react";
import { useState, useContext } from "react";
import "./App.css";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import { adminContext } from "./context/AdminContext";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  // const aToken  = useContext(adminContext);
  // console.log(aToken)

  return (
    <div>
      <Provider store={store}>
        <Login />
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
