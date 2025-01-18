import React from "react";
import { useState, useContext } from "react";
import "./App.css";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import {adminContext} from "./context/AdminContext" 

function App() {
  // const aToken  = useContext(adminContext);
  // console.log(aToken)

  return <div>
      <Login />
      <ToastContainer />
    </div>

}

export default App;
