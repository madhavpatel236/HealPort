import React from "react";
import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import store from "./store/store";
import { Provider, useSelector } from "react-redux";

function App() {
  const token = useSelector((store) => store.adminToken);
  // console.log(token)

  return token ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
}

export default App;
