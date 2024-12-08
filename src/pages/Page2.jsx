import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import page2_1 from "../assets/7-1.png";
import page2_2 from "../assets/7-2.png";
import page2_3 from "../assets/7-3.png";
import Header from "../components/Header";

const Page2 = () => {
  const navigate = useNavigate();
  const text1Ref = useRef(null);
  const numberImgRef = useRef(null);
  const text2Ref = useRef(null);
  const image2Ref = useRef(null);
  const text3Ref = useRef(null);
  const image3Ref = useRef(null);
  const text4Ref = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    setTimeout(() => {
      gsap.fromTo(
        text1Ref.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.in",
        }
      );
    }, 300);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md" />
      <div className="min-h-screen bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <section className="flex flex-col items-end pt-3 pb-20">
            <p ref={text1Ref} className="text-[30px] text-right font-bold">
              <span className="text-[#FF6347]">토마토</span>는
              <br />
              <span>전 세계에서</span>
            </p>

            <div className="relative">
              <p
                style={{ fontFamily: "GmarketSans" }}
                className="text-[#FF0000] text-[100px] text-right font-extrabold leading-tight">
                5,- - -
              </p>
              <img
                ref={numberImgRef}
                className="absolute top-6 left-20 w-[80%]"
                src={page2_1}
                alt="토마토"
              />
            </div>
            <p
              ref={text2Ref}
              className="text-[26px] font-bold text-right relative">
              <img
                ref={image2Ref}
                className="absolute -top-10 -left-48 w-full scale-125"
                src={page2_2}
                alt="토마토"
              />
              <span>가지가 넘는</span>
              <br />
              <span>모습으로 존재하지만</span>
            </p>

            <div className="flex justify-start w-full">
              <p
                style={{ fontFamily: "GmarketSans" }}
                className="text-[26px] font-bold text-left mt-20 relative">
                <img
                  ref={image3Ref}
                  className="absolute -top-10 left-48 w-full scale-125"
                  src={page2_3}
                  alt="토마토"
                />
                <span ref={text3Ref}>
                  <span>
                    어떤{" "}
                    <strong className="font-extrabold text-[40px]">모양</strong>
                    이든
                  </span>
                  <br />
                  <span>
                    어떤{" "}
                    <strong className="font-extrabold text-[40px]">맛</strong>
                    이든
                  </span>
                </span>
              </p>
            </div>

            <p
              ref={text4Ref}
              className="text-[30px] font-bold text-right mt-12">
              그것이{" "}
              <span
                style={{ fontFamily: "GmarketSans" }}
                className="text-[#FF0000] font-extrabold text-[50px]">
                토마토
              </span>
              라는
              <br />
              <span>사실은 변치 않습니다</span>
            </p>
          </section>
        </div>
        <div className="flex justify-center">
          <button
            style={{
              left: "50%",
              backgroundColor: "#FFE4E1",
              color: "#B22222",
              padding: "12px 48px", // 패딩 증가
              borderRadius: "50px",
              border: "none",
              fontSize: "20px", // 폰트 크기 증가
              cursor: "pointer",
              marginBottom: "40px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
            onClick={(e) => {
              e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
              e.target.style.transition = "transform 2s ease";
              e.target.style.transform = "scale(1.4)";
              setTimeout(() => {
                navigate("/page3");
              }, 1000);
            }}
            onMouseOut={(e) => {
              e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
            }}>
            Next • • •
          </button>
        </div>
      </div>
    </>
  );
};

export default Page2;
