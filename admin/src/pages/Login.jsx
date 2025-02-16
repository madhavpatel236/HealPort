import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToken } from "../store/Slices/adminSlice";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
function Login() {
  const dispatch = useDispatch();
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("admin@healportal.com");
  const [password, setPassword] = useState("Admin@236");

  
  const localToken = localStorage.getItem("token");
  // console.log(localToken)
  if (localToken) {
    dispatch(addToken(localToken));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const response = await axios.post(`${backendUrl}/api/admin/login`, {
          email,
          password,
        });
        // console.log("response", response.data.token)
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          dispatch(addToken(response.data.token));
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      if (error.response) {
        console.log("Server error:", error.response.data);
      } else if (error.request) {
        console.log("Network error - no response received");
      } else {
        console.log("Error:", error.message);
      }
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          {" "}
          <span className="text-primary"> {state} </span> Login{" "}
        </p>
        <div className="w-full">
          <p> Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="w-full">
          <p> Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base">
          Login
        </button>
        {state === "Admin" ? (
          <p>
            {" "}
            Doctor Login{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              {" "}
              Click here
            </span>{" "}
          </p>
        ) : (
          <p>
            {" "}
            Admin Login{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              {" "}
              Click here{" "}
            </span>{" "}
          </p>
        )}
      </div>
    </form>
  );
}

export default Login;
