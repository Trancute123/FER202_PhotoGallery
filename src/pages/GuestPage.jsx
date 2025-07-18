import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Đặt styles lên trước
const styles = {
  wrapper: { fontFamily: "system-ui, sans-serif" },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 40px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #eee",
  },
  logo: { fontWeight: "bold", fontSize: "24px", color: "#d6336c" },
  navItems: { display: "flex", gap: "12px" },
  navButton: {
    backgroundColor: "#ff69b4",
    border: "none",
    borderRadius: "999px",
    padding: "8px 16px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
  },
  navButtonOutline: {
    backgroundColor: "transparent",
    border: "2px solid #d6336c",
    borderRadius: "999px",
    padding: "8px 16px",
    color: "#d6336c",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
  },
  content: { display: "flex", height: "calc(100vh - 60px)" },
  leftSide: {
    flex: 1,
    backgroundImage: "url('/images/sunset.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  slogan: {
    color: "white",
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: "1.2",
  },
  rightSide: {
    flex: 1,
    backgroundColor: "#ffe0e9",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 40px",
  },
  welcome: {
    fontSize: "20px",
    color: "#d6336c",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: "calc(50% - 150px)",
    fontSize: "14px",
    color: "#333",
    marginTop: "10px",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    maxWidth: "300px",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "14px",
    marginBottom: "10px",
  },
  loginButton: {
    width: "100%",
    maxWidth: "300px",
    padding: "12px",
    backgroundColor: "#ff69b4",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  signupButton: {
    width: "100%",
    maxWidth: "300px",
    padding: "12px",
    backgroundColor: "#fff",
    color: "#d6336c",
    border: "2px solid #d6336c",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
  },
};

// ✅ Sau đó mới định nghĩa component
const GuestPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/gallery");
    } else {
      alert(
        "Email hoặc mật khẩu sai hoặc chưa có tài khoản, vui lòng đăng ký."
      );
    }
  };

  const handleSignup = () => navigate("/register");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.navbar}>
        <div style={styles.logo}>PinkPin</div>
        <div style={styles.navItems}>
          <span style={styles.navButton} onClick={() => navigate("/gallery")}>
            Khám phá
          </span>
          <span style={styles.navButton} onClick={() => navigate("/about")}>
            Giới thiệu
          </span>
          <span style={styles.navButton} onClick={() => navigate("/create")}>
            Tạo
          </span>
          {isAuthenticated ? (
            <span style={styles.navButtonOutline} onClick={handleLogout}>
              Đăng xuất
            </span>
          ) : (
            <>
              <span style={styles.navButton} onClick={() => navigate("/")}>
                Đăng nhập
              </span>
              <span style={styles.navButtonOutline} onClick={handleSignup}>
                Đăng ký
              </span>
            </>
          )}
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.leftSide}>
          <div style={styles.overlay}>
            <h1 style={styles.slogan}>
              Khơi nguồn
              <br />ý tưởng
            </h1>
          </div>
        </div>

        <div style={styles.rightSide}>
          <h2 style={styles.welcome}>Chào mừng bạn đến với PinkPin</h2>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <label style={styles.label}>Mật khẩu</label>
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleLogin} style={styles.loginButton}>
            Đăng nhập
          </button>
          <button onClick={handleSignup} style={styles.signupButton}>
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestPage;
