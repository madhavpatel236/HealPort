// in this file we will create a header component in which we have a photo poster in the home page below the navbar.

import React from "react";
import group_profiles from "../assets/group_profiles.png";
import arrow_icon from "../assets/arrow_icon.svg";
import header_img from "../assets/header_img.png";

function Header() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-16">
      {/* -------- Left Side -------- */}
      <div className="md:w-1/2  flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[vw] md:pb-[-30px] ">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight ">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light ">
          <img className="w-28" src={group_profiles} />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" /> schedule your appointment
            hassle-free.
          </p>
        </div>
        <a
          href="#speciality" // speciality is a id and it is defined in the SpecialityManu.jsx 
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book Appointment <img className="w-3" src={arrow_icon} />
        </a>
      </div>

      {/* -------- Right Side -------- */}
      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={header_img}
        />
      </div>
    </div>
  );
}

export default Header;
