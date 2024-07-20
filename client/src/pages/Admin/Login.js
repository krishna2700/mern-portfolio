import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { HideLoading, ShowLoading } from "../../Redux/rootSlice";
import { useDispatch } from "react-redux";
import API_URL from "../../config/api";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const login = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        `${API_URL}/api/portfolio/admin-login`,
        user
      );
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", JSON.stringify(response.data));
        window.location.href = "/admin";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <div className="w-96 flex gap-5 p-5 shadow border border-gray-500 flex-col bg-white">
        <h1 className="text-2xl">Krishna-Admin-Login</h1>
        <hr />
        <input
          type="text"
          name="username"
          placeholder="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="bg-primary text-white p-2" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
