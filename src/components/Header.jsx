import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import syLogo from "../assets/sy_logo.png";
import "../styles/Header.css";

function Header() {
  const headerRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const initAnimation = () => {
      logoRef.current.style.position = "fixed";
      logoRef.current.style.top = "50%";
      logoRef.current.style.left = "50%";
      logoRef.current.style.transform = "translate(-50%, -50%)";
      logoRef.current.style.width = "400px";
      logoRef.current.style.zIndex = "1000";

      headerRef.current.style.opacity = "0";
      headerRef.current.style.transform = "translateY(-50px)";

      const tl = gsap.timeline({ delay: 1 });

      tl.to(logoRef.current, {
        duration: 2,
        width: "60px",
        top: "30px",
        left: "30px",
        transform: "translate(0, 0)",
        ease: "power2.inOut",
      }).to(
        headerRef.current,
        {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "power2.out",
        },
        "-=0.3"
      );
    };

    initAnimation();
  }, []);

  return (
    <div>
      <img ref={logoRef} src={syLogo} alt="SY Logo" />
      <header
        ref={headerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          background: "#F5F5F1",
          zIndex: 999,
          padding: "20px 30px",
          borderBottom: "1px solid #E0E0E0",
        }}>
        <div
          className="header-content"
          style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "1.4",
              fontFamily: "'GmarketSans', sans-serif",
            }}>
            2024 Korea University
            <br />
            Department of. Culture Contents
            <br />
            Graduate Exhibition
          </h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
