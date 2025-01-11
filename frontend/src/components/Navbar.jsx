import React from "react";
import logo from "../assets/logo.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import profile_pic from "../assets/profile_pic.png";
import dropdown_icon from "../assets/dropdown_icon.svg";
import manu_icon from "../assets/menu_icon.svg";
import cross_icon from "../assets/cross_icon.png";

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = React.useState(false);
  const [token, setToken] = React.useState(true);

  return (
    <div className="flex justify-between items-center text-sm py-4 mb-5 border-b border-b-gray-400">
      <p
        onClick={() => navigate("/")}
        className="rounded-full text-2xl lg:text-4xl font-bold text-primary "
      >
        {" "}
        HealPortal{" "}
      </p>
      <ul className=" hidden md:flex items-center gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto  " />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto  " />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto  " />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTECT</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto  " />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={profile_pic} alt=""></img>
            <img className="w-2.5" src={dropdown_icon} alt=""></img>
            <div className="hidden absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 group-hover:block ">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 ">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments{" "}
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block bg-primary text-white px-8 py-3 rounded-full font-light "
          >
            Create Account
          </button>
        )}

        <img
          onClick={() => setShowMenu(true)}
          src={manu_icon}
          alt=""
          className="w-6 md:hidden"
        />
        {/* ------- Mobile menu -------- */}
        <div
          className={` ${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex justify-between m-2">
            <span className="w-36 text-primary font-bold text-lg">
              HealPortal{" "}
            </span>
            <img
              className="w-7"
              src={cross_icon}
              onClick={() => setShowMenu(false)}
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              {" "}
              <p className="px-4 py-2 rounded inline-block">HOME</p>{" "}
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              {" "}
              <p className="px-4 py-2 rounded inline-block">ALL DOCTORS</p>{" "}
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              {" "}
              <p className="px-4 py-2 rounded inline-block">ABOUT</p>{" "}
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contect">
              {" "}
              <p className="px-4 py-2 rounded inline-block">CONTECT </p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
