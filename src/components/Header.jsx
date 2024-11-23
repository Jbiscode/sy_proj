import syLogo from "../assets/sy_logo.png";
import "../styles/Header.css";

// eslint-disable-next-line react/prop-types
const Header = ({ headerRef, logoRef }) => {
  return (
    <div style={{ height: "120px" }}>
      <img
        ref={logoRef}
        style={{
          width: "60px",
          top: "30px",
          left: "30px",
          zIndex: "1000",
          position: "fixed",
        }}
        src={syLogo}
        alt="SY Logo"
      />
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
              fontSize: "14px",
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
};

export default Header;
