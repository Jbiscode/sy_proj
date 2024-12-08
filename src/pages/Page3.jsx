import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Image3_4 from "../assets/10-1.png";
import Image3_1 from "../assets/8-1.png";
import Image3_2 from "../assets/8-2.png";
import Image3_3 from "../assets/9-1.jpeg";
import Header from "../components/Header";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const navigate = useNavigate();
  const text1Ref_1 = useRef(null);
  const image1Ref = useRef(null);
  const text_Img1Ref_2 = useRef(null);
  const text2Ref = useRef(null);
  const image2Ref = useRef(null);
  const text3Ref_1 = useRef(null);
  const image3Ref = useRef(null);
  const text3Ref_2 = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    setTimeout(() => {
      gsap.fromTo(
        text1Ref_1.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text1Ref_1.current,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        image1Ref.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 2.5,
          delay: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image1Ref.current,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        text_Img1Ref_2.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 2.5,
          delay: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text_Img1Ref_2.current,
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        text2Ref.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text2Ref.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        image2Ref.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image2Ref.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        text3Ref_1.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text3Ref_1.current,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        image3Ref.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          delay: 1,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image3Ref.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        text3Ref_2.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          delay: 0.7,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text3Ref_2.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
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
        <div className="max-w-5xl mx-auto px-4 py-12">
          <section className="flex flex-col items-end pb-44">
            <p className="text-[30px] text-right">
              <span ref={text1Ref_1} className="font-extrabold text-[60px]">
                <span className="text-[#FF6347]">토마토</span>는
              </span>
            </p>
            <img
              ref={image1Ref}
              src={Image3_1}
              alt="울퉁불퉁 토마토1"
              className="w-[400px] h-[400px] object-contain"
            />
            <div ref={text_Img1Ref_2} className="relative w-full -top-10">
              <img
                src={Image3_2}
                alt="울퉁불퉁 토마토2"
                className="w-[600px] h-[600px] object-contain absolute -left-[45%] -bottom-[110%]"
              />
              <p className="text-[60px] text-right whitespace-nowrap">
                <span style={{ fontFamily: "GasoekOne" }}>울퉁불퉁</span>
                <br />
                합니다
              </p>
            </div>
          </section>
          <section className="flex flex-col items-end pb-44">
            <p ref={text2Ref} className="text-[40px] text-right leading-tight">
              <span className="font-bold">간혹,</span>
              <br />
              <span className="text-[#FF0000] font-extrabold">
                매끈한 토마토
              </span>
              가
              <br />
              <span>보이기도 하지만</span>
            </p>
            <img
              ref={image2Ref}
              src={Image3_3}
              alt="매끈한 토마토"
              className="w-[100%] object-contain"
            />
          </section>
          <section className="flex flex-col items-end">
            <p
              ref={text3Ref_1}
              className="text-[36px] font-medium text-right leading-none z-10">
              <span className="">자꾸만···</span>
              <br />
              <span>돌아보게 만드는</span>
              <br />
              <span
                className="font-extrabold text-6xl"
                style={{ fontFamily: "GmarketSans" }}>
                토마토의
              </span>
              <br />
              <span
                className="font-extrabold leading-relaxed text-6xl"
                style={{ fontFamily: "GmarketSans" }}>
                참 멋은
              </span>
            </p>
            <img
              ref={image3Ref}
              src={Image3_4}
              alt="토마토의 모습"
              className="w-full h-[220px] object-cover relative left-10 bottom-16"
            />
            <p
              ref={text3Ref_2}
              className="text-[64px] text-right whitespace-nowrap relative bottom-14 leading-none">
              <span style={{ fontFamily: "GasoekOne" }}>울퉁불퉁</span>
              <span className="text-[40px] font-semibold">한</span>
              <br />
              <span className="text-[50px] font-extrabold">몸매</span>
              <span className="text-[40px] font-normal">입니다</span>
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
                navigate("/page4");
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

export default Page3;
