import React from "react";
import { useSelector } from "react-redux";
import home_icon from "../assets/home_icon.svg";
import appointment_icon from "../assets/appointment_icon.svg"
import add_icon from "../assets/add_icon.svg";
import people_icon from "../assets/people_icon.svg";
import { NavLink } from "react-router-dom";
function Sidebar() {
  const tokenSelector = useSelector((store) => store.addtoken);
  const token = localStorage.getItem("token") || tokenSelector;

  return (
    <div className="min-h-screen bg-white border-r">
      {token && (
        <ul className="text-[#515151] mt-5">
          <NavLink className={({isActive}) => `flex items-center gap-3 py-3 px-3 md:px-9 md:max-h-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : '' } `} to={'/admin-dashboard'}>
            <img src={home_icon} alt="home-icon" />
            <p>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:max-h-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : '' } `} to={'/all-apointment'}>
            <img src={appointment_icon} alt="home-icon" />
            <p>Appointments</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:max-h-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : '' } `} to={'/add-doctor'}>
            <img src={add_icon} alt="home-icon" />
            <p>Add Doctor</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:max-h-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : '' } `} to={'/doctor-list'}>
            <img src={people_icon} alt="home-icon" />
            <p>Doctors List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
