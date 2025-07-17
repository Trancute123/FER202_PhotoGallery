import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice"; // Import action login từ Redux
import { useNavigate } from "react-router-dom"; // Import hook useNavigate để chuyển hướng

const GuestPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      // Tạo đối tượng người dùng (trong thực tế, có thể lấy từ API)
      const user = { email, password };
      dispatch(login(user)); // Đăng nhập và lưu trữ vào Redux
      localStorage.setItem("isAuthenticated", true); // Lưu trạng thái đăng nhập vào localStorage
      localStorage.setItem("user", JSON.stringify(user)); // Lưu thông tin người dùng vào localStorage
      navigate("/gallery"); // Chuyển hướng đến trang Gallery
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <input
          className="input-field"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default GuestPage;
