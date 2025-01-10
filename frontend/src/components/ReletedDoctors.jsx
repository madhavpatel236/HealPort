// in this file we will create a component that will show the related doctors at the /doctors, below the time booking slots.

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function ReletedDoctors({ speciality, docId }) {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate() 

  const [ReletedDoctors, setReletedDoctors] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const DoctorData = doctors.filter(
        (eachDoc) => eachDoc.speciality === speciality && eachDoc._id !== docId
      );
      setReletedDoctors(DoctorData);
    }
  }, [doctors, docId, speciality]);

  return (
    <div className=" my-16 text-gray-900 md:mx-10 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold text-center">Top Doctors to Book</h1>
      <p className="text-center sm:w-1/3 text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full  grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 ">
        {/* LEARNINGS: grid-col-auto: see the teilwind.config.js file for the grid-cols-auto */}
        {ReletedDoctors.slice(0, 10).map((item, index) => (
          <div
          key={index}
          onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)} }
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
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
  );    
}

export default ReletedDoctors;
