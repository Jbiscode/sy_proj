import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// 이미지 파일을 import
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

const MainSlider = () => {
  const navigate = useNavigate();

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {/* 고정 텍스트 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          color: "#FF0000",
          fontSize: "42px",
          fontWeight: "900",
          textAlign: "center",
          fontFamily: "GmarketSans",
          whiteSpace: "nowrap",
        }}>
        All About Tomatoes
      </div>

      {/* 입장 버튼 */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}>
        <button
          style={{
            padding: "15px 40px",
            fontSize: "20px",
            fontFamily: "GmarketSans",
            backgroundColor: "transparent",
            border: "0.3px solid #000",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#FF6B6B";
            e.target.style.color = "#fff";
            e.target.style.transition = "transform 2s ease";
            e.target.style.transform = "scale(1.5)";
            e.target.style.borderColor = "#FF6B6B";
            setTimeout(() => {
              navigate("/page1");
            }, 1500);
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#000";
          }}>
          Entry
        </button>
      </div>

      {/* Swiper */}
      <div>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          style={{
            width: "100%",
            height: "100%",
          }}>
          <SwiperSlide>
            <div
              style={{
                width: "75%",
                height: "100vh",
                margin: "0 auto",
                backgroundImage: `url(${slide1})`, // import한 이미지 사용
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "75%",
                height: "100vh",
                margin: "0 auto",
                backgroundImage: `url(${slide2})`, // import한 이미지 사용
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                width: "75%",
                height: "100vh",
                margin: "0 auto",
                backgroundImage: `url(${slide3})`, // import한 이미지 사용
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </SwiperSlide>
        </Swiper>
        <span
          style={{
            position: "absolute",
            left: "45%",
            bottom: "22%",
            opacity: "0.3",
            fontSize: "32px",
            color: "#FF0000",
            transform: "translateY(-50%) rotate(90deg)", // rotate 90도 추가하여 아래 방향으로 회전
          }}>
          &gt;&gt;
        </span>
      </div>
    </div>
  );
};

export default MainSlider;
