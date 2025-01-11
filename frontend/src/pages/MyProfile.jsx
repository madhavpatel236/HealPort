import React, { useState } from "react";
import profile_pic from "../assets/profile_pic.png";
function MyProfile() {
  const [userData, setUserData] = useState({
    name: "madhav",
    email: "madhav@gmail.com",
    image: profile_pic,
    phone: 9722919177,
    address: "Jamjodhpur,Tirupati socity",
    gender: "male",
    dob: "2023-04-01",
  });

  const [isEditable, setIsEditable] = useState(false);

  return (
    <div className=" max-w-lg flex flex-col gap-4 text-sm">
      <img src={userData.image} alt="Profile" className="w-36 rounded" />
      {isEditable ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {" "}
          {userData.name}{" "}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTECT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500"> {userData.email} </p>
          <p className="font-medium">Phone: </p>
          {isEditable ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium"> Address: </p>
          {isEditable ? (
            <input
              className="bg-gray-100"
              type="text"
              value={userData.address}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, address: e.target.value }))
              }
            />
          ) : (
            <p className="text-gray-500">{userData.address}</p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3"> BASIC INFORMATION </p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">GENDER: </p>
          {isEditable ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}

          <p className="font-medium"> Birthday: </p>
          {isEditable ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEditable ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary  hover:text-white transition-all"
            onClick={() => isEditable(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary  hover:text-white transition-all"
            onClick={() => isEditable(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
