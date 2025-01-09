// All Doctors or specific doctor page

import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
function Doctors() {
  const { speciality } = useParams();
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilteredDoctors(
        doctors.filter((eachDoctor) => eachDoctor.speciality === speciality)
      );
    } else {
      setFilteredDoctors(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      {/* ---------- left side ---------- */}
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p onClick={() => speciality === '' ? navigate('/doctors') : navigate(`/doctors/General physician`) } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "" ? "bg-indigo-100 text-black" : ""} `}>General physician</p>
          <p onClick={() => speciality === '' ? navigate('/doctors') : navigate(`/doctors/Gynecologist`) } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "" ? "bg-indigo-100 text-black" : ""} `}>Gynecologist</p>
          <p onClick={() => speciality === '' ? navigate('/doctors') : navigate(`/doctors/Dermatologist`) } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "" ? "bg-indigo-100 text-black" : ""} `}>Dermatologist</p>
          <p onClick={() => speciality === '' ? navigate('/doctors') : navigate(`/doctors/Pediatricians`) } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "" ? "bg-indigo-100 text-black" : ""} `}>Pediatricians</p>
          <p onClick={() => speciality === '' ? navigate('/doctors') : navigate(`/doctors/Neurologist`) } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "" ? "bg-indigo-100 text-black" : ""} `}>Neurologist</p>
          <p onClick={() => speciality === '' ? navigate('/doctors') : navigate(`/doctors/Gastroenterologist`) } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "" ? "bg-indigo-100 text-black" : ""} `}>Gastroenterologist</p>
        </div>
        {/* ---------- right side doctor cards ---------- */}
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filteredDoctors.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border  border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
            >
              <img className="bg-blue-50" src={item.image} />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"> </p>{" "}
                  <p>Available</p>
                </div>
                <p className="text-lg font-medium text-gray-900">{item.name}</p>
                <p className="text-gray-600 text-sm"> {item.speciality} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
