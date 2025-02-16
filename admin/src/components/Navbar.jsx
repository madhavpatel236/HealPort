import React from "react";
import admin_logo from "../assets/admin_logo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../store/Slices/adminSlice";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const dispatch = useDispatch();
  const tokenFromSelector = useSelector((store) => store.adminToken);
  const token = localStorage.getItem("token") || tokenFromSelector;

  const navigate = useNavigate();

  const logout = () => {
    navigate('/')
    token && localStorage.removeItem("token");
    token && dispatch(removeToken());
  };

  return (
    <div className="flex justify-between items-center px-4 py-3 sm:px-10 border-b bg-white">
      <div className="flex items-center gap-4 text-xs">
        <img
          className="max-w-10 h-14 sm:max-w-20 max-h-10 rounded-full cursor-pointer"
          src={admin_logo}
          alt="admin logo"
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {" "}
          {token ? "Admin" : "Doctor"}{" "}
        </p>
      </div>
      <button
        onClick={logout}
        className="bg-primary text-white text-sm px-10 py-2 rounded-full"
      >
        {" "}
        Logout{" "}
      </button>
    </div>
  );
}

export default Navbar;
