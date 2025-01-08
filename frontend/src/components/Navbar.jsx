import React from "react";
import logo from "../assets/logo.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import profile_pic from "../assets/profile_pic.png";
import dropdown_icon from "../assets/dropdown_icon.svg";

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = React.useState(false);
  const [token, setToken] = React.useState(true);

  return (
    <div className="flex justify-between items-center text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-12 h-12  rounded-full " src={logo} alt="Logo" />
      <ul className=" hidden md:flex items-center gap-5 font-medium">
        <NavLink to='/'>
          <li className="py-1">HOME</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto  " />
        </NavLink>
        <NavLink to='/doctors'>
          <li className="py-1">ALL DOCTORS</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto  " />
        </NavLink>
        <NavLink to='/about' >
          <li className="py-1">ABOUT</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto  " />
        </NavLink>
        <NavLink to='/contect' >
          <li className="py-1">CONTECT</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto  " />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {
          token 
          ? <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={profile_pic} alt="" ></img>
            <img className="w-2.5" src={dropdown_icon} alt="" ></img>
            <div className="hidden absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 group-hover:block ">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 ">
                <p onClick={()=> navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={()=> navigate('/my-appointments')} className="hover:text-black cursor-pointer">My Appointments  </p>
                <p onClick={()=>setToken(false)}  className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>

          </div>
          : <button onClick={() => navigate('/login') } className="hidden md:block bg-primary text-white px-8 py-3 rounded-full font-light ">Create Account</button>
          
        }
      </div>
    </div>
  );
}

export default Navbar;
