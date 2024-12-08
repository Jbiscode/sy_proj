import { useNavigate } from "react-router-dom";
import page1_1 from "../assets/page1_1.svg";
import Header from "../components/Header";

const Page1 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div
        style={{
          padding: "0px 32px",
          paddingTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "12px", // 줄 간격
          fontFamily: "GmarketSans",
          fontSize: "26px",
        }}>
        <strong>여러분은</strong>
        <span>
          <span
            style={{
              fontSize: "50px",
              color: "#FF6347",
            }}>
            토마토
          </span>
          <span style={{ color: "#000" }}>를</span>
        </span>
        <span>얼마나 알고 계신가요?</span>
      </div>
      <div style={{ padding: "85px 0px 0px 50px", position: "relative" }}>
        <img
          src={page1_1}
          alt="토마토"
          style={{
            scale: "1.4",
            width: "266px",
            // height: "auto",
          }}
        />
        <button
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#FFE4E1",
            color: "#B22222",
            padding: "12px 48px", // 패딩 증가
            borderRadius: "50px",
            border: "none",
            fontSize: "20px", // 폰트 크기 증가
            cursor: "pointer",
            marginTop: "24px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
          onClick={(e) => {
            e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
            e.target.style.transition = "transform 2s ease";
            e.target.style.transform = "translateX(-50%) scale(1.4)";
            setTimeout(() => {
              navigate("/page2");
            }, 1000);
          }}
          onMouseOut={(e) => {
            e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
          }}>
          Next • • •
        </button>
      </div>
    </>
  );
};

export default Page1;
