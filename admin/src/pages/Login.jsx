import React, { useContext, useState } from "react";
import axios from "axios";
import { adminContext, backendUrl } from "../context/AdminContext";
import { ToastContainer, toast } from "react-toastify";
function Login() {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("admin@healportal.com");
  const [password, setPassword] = useState("Admin@236");
  // TODO: const {setToken}  = useContext(adminContext); // Linked with the AdminContext.jsx

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "Admin") {
        const response = await axios.post(`${backendUrl}/api/admin/login`, {
          email,
          password,
        });
        if (response.data.success) {
          console.log(response.data.token);
          localStorage.setItem("token", response.data.token);
          //TODO: setToken(response.data.token); Linked with the AdminContext.jsx
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
