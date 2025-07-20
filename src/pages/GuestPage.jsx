import React, { useState, useRef, useEffect } from "react";
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

const backgroundImages = [
  "/images/sunset.jpg",
  "/images/switzerland4.jpg",
  "/images/kevin.jpg",
  "/images/nature3.jpg",
  "/images/nature19.jpg",
  "/images/cat-pilot.jpg",
];

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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // chuyển mỗi 5 giây

    return () => clearInterval(interval);
  }, []);

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

      {/* Màn hình chào mừng + login */}
      <div
        style={{ display: "flex", height: "100vh", fontFamily: "system-ui" }}
      >
        {/* Nền full ảnh */}
        <div
          style={{
            position: "relative",
            height: "100vh",
            width: "100vw",
            backgroundImage: `url(${backgroundImages[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 1s ease-in-out",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "'Outfit', sans-serif",
            padding: "0 5%",
          }}
        >
          {/* Câu chữ truyền cảm */}
          <div style={{ maxWidth: "500px" }}>
            <h1
              style={{
                color: "#fff",
                fontSize: "56px",
                fontWeight: "bold",
                lineHeight: "1.2",
                textShadow: "2px 2px 12px rgba(0,0,0,0.5)",
                marginBottom: "16px",
              }}
            >
              Khơi nguồn <br /> ý tưởng
            </h1>
            <p
              style={{
                color: "#fff",
                fontSize: "20px",
                lineHeight: "1.6",
                textShadow: "1px 1px 8px rgba(0,0,0,0.4)",
              }}
            >
              Nơi những cảm hứng nhỏ bé tạo nên điều phi thường. <br />
              Lưu lại điều bạn yêu thích. Khám phá điều bạn đam mê.
            </p>
          </div>

          {/* Form login chồng lên ảnh */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              padding: "40px",
              borderRadius: "24px",
              boxShadow: "0 12px 36px rgba(0,0,0,0.2)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              width: "100%",
              maxWidth: "400px",
              zIndex: 10,
            }}
          >
            <h2 style={{ color: "#d6336c", textAlign: "center", marginBottom: 30 }}>
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
              }}
            />
            <label style={{ fontWeight: "bold", color: "#333" }}>Mật khẩu</label>
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
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          color: "#fff",
        }}
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            filter: "brightness(0.5)",
          }}
        >
          <source src="/videos/nature-video.mp4" type="video/mp4" />
        </video>

        {/* Content on top */}
        <div
          style={{
            zIndex: 2,
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "0 40px",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              marginBottom: "20px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              borderRight: "4px solid #fff",
              width: "21ch",
              animation: "typing 3.5s steps(25), blink 0.75s step-end infinite",
            }}
          >
            Xem, làm, thử, thực hiện
          </h1>

          <p style={{ fontSize: "20px", maxWidth: "600px", color: "#eee" }}>
            Điều tuyệt nhất trên PinkPin là khám phá những nội dung và ý tưởng mới từ mọi người khắp thế giới.
          </p>

          <button
            onClick={() => navigate("/gallery")}
            style={{
              marginTop: "30px",
              backgroundColor: "#ff69b4",
              color: "#fff",
              padding: "12px 28px",
              fontSize: "16px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
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
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Orb Background */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "60%",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,105,180,0.4), transparent 60%)",
            filter: "blur(60px)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            right: "50px",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(100,150,255,0.3), transparent 60%)",
            filter: "blur(50px)",
            zIndex: 0,
          }}
        />

        {/* Floating Images */}
        {[
          { src: "/images/puppy.jpg", top: "60px", left: "60px", rotate: "-6deg", width: "160px" },
          { src: "/images/mountain.jpg", bottom: "80px", left: "180px", rotate: "4deg", width: "200px" },
          { src: "/images/switzerland3.jpg", top: "140px", right: "100px", rotate: "-3deg", width: "180px" },
          { src: "/images/cities11.jpg", bottom: "120px", right: "120px", rotate: "5deg", width: "170px" },
          { src: "/images/nature45.jpg", top: "200px", left: "300px", rotate: "-5deg", width: "160px" },
          { src: "/images/nature37.jpg", bottom: "60px", right: "250px", rotate: "6deg", width: "150px" },
        ].map((img, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              ...img,
              zIndex: 1,
              animation: `float${(idx % 3) + 1} ${6 + idx}s ease-in-out infinite`,
            }}
          >
            <img
              src={img.src}
              alt={`floating-${idx}`}
              className="floating-img"
              style={{
                width: img.width,
                borderRadius: "24px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                transform: `rotate(${img.rotate})`,
              }}
            />
          </div>
        ))}

        {/* Text Section */}
        <div style={{ zIndex: 2, maxWidth: "600px", textAlign: "left" }}>
          <h2 style={{ fontSize: "44px", color: "#b30059", fontWeight: "bold", marginBottom: "20px" }}>
            Tìm kiếm ý tưởng
          </h2>
          <p style={{ fontSize: "20px", color: "#4b2c39", marginBottom: "30px" }}>
            Bạn muốn thử điều gì tiếp theo? Hãy nghĩ về ý tưởng bạn yêu thích — như "phong cảnh Thụy Sĩ" — và xem bạn tìm thấy gì.
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
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            Khám phá
          </button>
        </div>
      </div>

{/* Cảm hứng Section */}
<div
  style={{
    display: "flex",
    backgroundColor: "#fff3f6",
    padding: "80px 60px",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "60px",
  }}
>
  {/* Text Content */}
  <div style={{ flex: "1 1 400px", maxWidth: "500px" }}>
    <h2
      style={{
        fontSize: "44px",
        color: "#b02e53",
        fontWeight: "bold",
        marginBottom: "20px",
      }}
    >
      Lưu giữ khoảnh khắc
    </h2>
    <p style={{ fontSize: "20px", color: "#555", marginBottom: "30px" }}>
      Những khoảnh khắc đáng nhớ không chỉ nên được lưu giữ trong tâm trí – mà
      còn nên được chia sẻ để lan toả cảm hứng. Tạo một pin, kể câu chuyện
      của bạn, và cùng PinkPin chạm đến trái tim người khác.
    </p>
    <button
      onClick={() => navigate("/create")}
      style={{
        backgroundColor: "#d6336c",
        color: "#fff",
        border: "none",
        borderRadius: "999px",
        padding: "12px 24px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      Tạo ngay
    </button>
  </div>

  {/* Grid Layout với ảnh to - nhỏ đan xen */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(2, 180px)",
      gap: "20px",
      width: "540px", // 3 cột × 180
      flexShrink: 0,
    }}
  >
    {[
      { src: "/images/cat-pilot.jpg", title: "Mèo phi công", colSpan: 2 },
      { src: "/images/puppy.jpg", title: "Cún và hoa", rowSpan: 2 },
      { src: "/images/mountain.jpg", title: "Núi tuyết" },
      { src: "/images/switzerland3.jpg", title: "Hồ Thụy Sĩ" },
      { src: "/images/nature30.jpg", title: "Rừng xanh" },
      { src: "/images/nature31.jpg", title: "Suối" },
      { src: "/images/nature32.jpg", title: "Rừng Tuyết" },
    ].map((img, i) => (
      <div
        key={i}
        style={{
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
          gridColumn: img.colSpan ? `span ${img.colSpan}` : undefined,
          gridRow: img.rowSpan ? `span ${img.rowSpan}` : undefined,
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.05)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        <img
          src={img.src}
          alt={img.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))",
            color: "#fff",
            padding: "8px 12px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {img.title}
        </div>
      </div>
    ))}
  </div>
</div>


    </div>
  );
};

export default GuestPage;
