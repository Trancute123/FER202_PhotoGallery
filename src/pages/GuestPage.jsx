import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  wrapper: { fontFamily: "system-ui, sans-serif" },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 40px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    zIndex: 1000,
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

const GuestPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const introduceRef = useRef(null);
  const exploreRef = useRef(null);

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

  const scrollToIntroduce = () => {
    if (introduceRef.current) {
      introduceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExplore = () => {
    if (exploreRef.current) {
      exploreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.navbar}>
        <div style={styles.logo}>PinkPin</div>
        <div style={styles.navItems}>
          <span style={styles.navButton} onClick={scrollToIntroduce}>
            Khám phá
          </span>
          <span style={styles.navButton} onClick={scrollToExplore}>
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

      {/* Explore section */}
      <div
        ref={exploreRef}
        style={{
          display: "flex",
          backgroundColor: "#ffe0e9",
          height: "100vh",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundImage: "url('/images/pinkpin-model.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "40px",
          }}
        >
          <h1
            style={{ fontSize: "48px", color: "#b02e53", marginBottom: "20px" }}
          >
            Xem, làm, thử, thực hiện
          </h1>
          <p style={{ fontSize: "20px", color: "#333", maxWidth: "500px" }}>
            Điều tuyệt nhất trên PinkPin là khám phá những nội dung và ý tưởng
            mới từ mọi người khắp thế giới.
          </p>
          <button
            onClick={() => navigate("/gallery")}
            style={{
              marginTop: "30px",
              backgroundColor: "#d6336c",
              color: "white",
              padding: "12px 28px",
              fontSize: "16px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Khám phá
          </button>
        </div>
      </div>

      {/* Image Collage section */}
      <div
        ref={introduceRef}
        style={{
          display: "flex",
          height: "100vh",
          width: "100%",
          backgroundColor: "#fff9ae",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 40px",
          gap: "80px",
        }}
      >
        <div style={{ position: "relative", width: "350px", height: "450px" }}>
          <img
            src="/images/puppy.jpg"
            alt="ảnh 1"
            style={{
              width: "180px",
              borderRadius: "32px",
              position: "absolute",
              top: "0",
              left: "0",
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            }}
          />
          <img
            src="/images/mountain.jpg"
            alt="ảnh 2"
            style={{
              width: "200px",
              borderRadius: "32px",
              position: "absolute",
              bottom: "0",
              left: "80px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            }}
          />
          <img
            src="/images/switzerland3.jpg"
            alt="ảnh 3"
            style={{
              width: "180px",
              borderRadius: "32px",
              position: "absolute",
              top: "160px",
              right: "0",
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            }}
          />
        </div>
        <div style={{ maxWidth: "500px", textAlign: "left" }}>
          <h2
            style={{
              fontSize: "44px",
              color: "#c2185b",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Tìm kiếm ý tưởng
          </h2>
          <p
            style={{ fontSize: "20px", color: "#b23c6f", marginBottom: "30px" }}
          >
            Bạn muốn thử điều gì tiếp theo? Hãy nghĩ về ý tưởng bạn yêu thích —
            như "phong cảnh Thụy Sĩ" — và xem bạn tìm thấy gì.
          </p>
          <button
            style={{
              backgroundColor: "#d6336c",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Khám phá
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestPage;
