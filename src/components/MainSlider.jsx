import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// 이미지 파일을 import
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";

function MainSlider() {
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
          bottom: "40px",
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
            border: "2px solid #000",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#000";
            e.target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#000";
          }}>
          Entry
        </button>
      </div>

      {/* Swiper */}
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
    </div>
  );
}

export default MainSlider;
