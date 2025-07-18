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
            Tin tức
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

      <div
        style={{ display: "flex", height: "100vh", fontFamily: "system-ui" }}
      >
        <div
          style={{
            flex: 1,
            backgroundImage: "url('/images/sunset.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "slideInLeft 1s ease",
          }}
        >
          <h1
            style={{
              color: "#fff",
              fontSize: "52px",
              fontWeight: "bold",
              textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
              animation: "fadeIn 2s ease",
              lineHeight: "1.2",
            }}
          >
            Khơi nguồn <br /> ý tưởng
          </h1>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: "#ffe0e9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "slideInRight 1s ease",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              width: "100%",
              maxWidth: "400px",
              animation: "fadeInUp 1.2s ease",
            }}
          >
            <h2
              style={{
                color: "#d6336c",
                textAlign: "center",
                marginBottom: 30,
              }}
            >
              Chào mừng bạn đến với <b>PinkPin</b>
            </h2>
            <label style={{ fontWeight: "bold", color: "#333" }}>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                backgroundColor: "#f0f5ff",
                transition: "all 0.3s ease",
              }}
            />
            <label style={{ fontWeight: "bold", color: "#333" }}>
              Mật khẩu
            </label>
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "20px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                backgroundColor: "#f0f5ff",
                transition: "all 0.3s ease",
              }}
            />
            <button
              onClick={handleLogin}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#ff69b4",
                border: "none",
                borderRadius: "999px",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                marginBottom: "12px",
                transition: "all 0.3s ease",
              }}
            >
              Đăng nhập
            </button>
            <button
              onClick={handleSignup}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "white",
                border: "2px solid #d6336c",
                borderRadius: "999px",
                color: "#d6336c",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Đăng ký
            </button>
          </div>
        </div>
      </div>

      {/* Giới thiệu section */}
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

      {/* Khám phá section */}
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
