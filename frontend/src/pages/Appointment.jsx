// in this page we show the individual doctor details for the appointment by selecting any doctor from the doctors page or home page

import React, { useContext, useEffect, useState } from "react";
import { doctors } from "../assets/assets";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import verified_icon from "../assets/verified_icon.svg";
import info_icon from "../assets/info_icon.svg";
import ReletedDoctors from "../components/ReletedDoctors";
function Appointment() {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((eachDoc) => eachDoc._id === docId);
    setDocInfo(docInfo);
    // console.log(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      // Setting start time
      if (i === 0) {
        // If it's today
        let currentHour = currentDate.getHours();
        currentDate.setHours(currentHour + 1); // Next available hour
        currentDate.setMinutes(0, 0, 0);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      let timeSlots = [];

      while (currentDate <= endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <div>
        {/* -------- Doctor details -------- */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* -------- Doctor img */}
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo?.image}
            />
          </div>

          {/* -------------- Doctor name, degree, years of experiance ----------- */}

          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* -------- Doctor Info:name, degree, speciality, experience -------- */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img src={verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600 ">
              <p>
                {" "}
                {docInfo.degree} -{docInfo.speciality}{" "}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {" "}
                {docInfo.experience}{" "}
              </button>
            </div>

            {/* ------- Doctor About -------- */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                {" "}
                About <img src={info_icon} />{" "}
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            {/* --------- Doctor Fees ---------- */}
            <p className="text-gray-500 font-medium mt-4">
              {" "}
              Appointment fee:{" "}
              <span className="text-gray-600">
                {" "}
                {currencySymbol} {docInfo.fees}{" "}
              </span>{" "}
            </p>
          </div>
        </div>

        {/* -------- Booking Slots -------- */}

        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length > 0 &&
              docSlots.map((slot, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}  `}
                  key={index}
                >
                  <p>{slot[0] && daysOfWeek[slot[0].datetime.getDay()]}</p>
                  <p>{slot[0] && slot[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {
              docSlots.length && docSlots[slotIndex].map((slot,index)=>(
                <p onClick={()=> setSlotTime(slot.time)} key={index} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${slot.time === slotTime ? 'bg-primary text-white': ' text-gray-400 border border-gray-300'} `}>
                  {slot.time}
                </p>
              ))
            }
          </div>
          <button className="bg-primary text-white text-sm mt-3 font-light px-14 py-3 rounded-full ">Book an appointment</button>
        </div>
        {/* ---------- listing releted doctors -------- */}
        <ReletedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
}

export default Appointment;










// const getAvailableSlots = async () => {
//   setDocSlots([]);

//   // get current date
//   let today = new Date();

//   for (let i = 0; i < 7; i++) {
//     // getting date with index
//     let currentDate = new Date(today); // Here we set the curreant/today's date
//     currentDate.setDate(today.getDate() + i); // Here with the help of the .setDate(today.getDate() + i) we will set the date from today to 6 days further(1 Week) for the Appointment.

//     // setting end time of the date with index
//     let endTime = new Date();
//     endTime.setDate(today.getDate() + 1);
//     // console.log(endTime.setDate(today.getDate() + 1))
//     endTime.setHours(21, 0, 0, 0);

//     // setting hours
//     if (today.getDate() === currentDate.getDate()) {
//       // Here we check if the date is today then we set the time +1 hours(if current time 11 then the next slot is 12) , and if not then start with the 10AM.
//       currentDate.setHours(
//         currentDate.setHours() > 10 ? currentDate.getHours() + 1 : 10
//       );
//       currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
//     } else {
//       currentDate.setHours(10);
//       currentDate.setMinutes(0);
//     }

//     let timeSlots = [];

//     while (currentDate < endTime) {
//       let formattedTime = currentDate.toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       });
//     }
//     // add slot to array
//     timeSlots.push({
//       datetime: new Date(currentDate),
//       time: formattedTime,
//     });

//     // increment current time by 30 min
//     currentDate.setMinutes(currentDate.getMinutes() + 30);

//     setDocSlots((prev) => ([...prev, timeSlots]));
//   }
// }; this is not working please find the problem and solve that problem