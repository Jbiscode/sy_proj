import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Image4_1 from "../assets/11-1.jpeg";
import Image4_2 from "../assets/12-1.png";
import Image4_3 from "../assets/13-1.png";
import Image4_4 from "../assets/14-1.png";
import Image4_5 from "../assets/14-2.png";
import Image4_6 from "../assets/14-3.png";
import Image4_7 from "../assets/14-4.png";
import Image4_8 from "../assets/15-1.png";
import Image4_9 from "../assets/15-2.png";
import Image4_10 from "../assets/15-3.png";
import Image4_11 from "../assets/15-4.png";
import Image4_12 from "../assets/16-1.jpeg";
import Image4_13 from "../assets/17-1.png";
import Header from "../components/Header";

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  const navigate = useNavigate();
  // 각 요소에 대한 개별 ref 생성
  const title1Ref = useRef(null);
  const image1Ref = useRef(null);
  const text1Ref = useRef(null);
  const title2Ref = useRef(null);
  const image2Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const image3Ref = useRef(null);
  const text4Ref_1 = useRef(null);
  const image4Ref_1 = useRef(null);
  const text4Ref_2 = useRef(null);
  const image4Ref_2 = useRef(null);
  const text5Ref_1 = useRef(null);
  const image5Ref_1 = useRef(null);
  const text5Ref_2 = useRef(null);
  const image5Ref_2 = useRef(null);
  const text6Ref = useRef(null);
  const image6Ref = useRef(null);
  const text7Ref_1 = useRef(null);
  const image7Ref = useRef(null);
  const text7Ref_2 = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setTimeout(() => {
      // 첫 번째 섹션 애니메이션
      gsap.fromTo(
        title1Ref.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title1Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        image1Ref.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: image1Ref.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        text1Ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power1.out",
          scrollTrigger: {
            trigger: text1Ref.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 두 번째 섹션 애니메이션
      gsap.fromTo(
        title2Ref.current,
        { opacity: 0, rotate: -15, y: 40 },
        {
          opacity: 1,
          rotate: 0,
          x: 30,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: title2Ref.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        image2Ref.current,
        { opacity: 0, scale: 1.5, x: -120 },
        {
          opacity: 1,
          scale: 1.5,
          x: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image2Ref.current,
            start: "top 50%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        text2Ref.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 15,
          y: -50,
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: text2Ref.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 세번째 섹션 애니메이션
      gsap.fromTo(
        text3Ref.current,
        { opacity: 0, y: 30, x: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text3Ref.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        image3Ref.current,
        { opacity: 0, scale: 1.5, x: +120 },
        {
          opacity: 1,
          scale: 1.5,
          x: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image3Ref.current,
            start: "top 50%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 네번째 섹션 애니메이션
      gsap.fromTo(
        text4Ref_1.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text4Ref_1.current,
            start: "top 55%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        image4Ref_1.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 10,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image4Ref_1.current,
            start: "top 55%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        text4Ref_2.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text4Ref_2.current,
            start: "top 55%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        image4Ref_2.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.3,
          ease: "circ.in",
          scrollTrigger: {
            trigger: image4Ref_2.current,
            start: "top 70%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 다섯번째 섹션 애니메이션
      gsap.fromTo(
        text5Ref_1.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text5Ref_1.current,
            start: "top 65%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        image5Ref_1.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image5Ref_1.current,
            start: "top 70%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        text5Ref_2.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text5Ref_2.current,
            start: "top 55%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        image5Ref_2.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image5Ref_2.current,
            start: "top 65%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 여섯번째 섹션 애니메이션
      gsap.fromTo(
        text6Ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          x: 30,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text6Ref.current,
            start: "top 55%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        image6Ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 40,
          scale: 1.3,
          duration: 1.3,
          ease: "sine.in",
          scrollTrigger: {
            trigger: image6Ref.current,
            start: "top 55%",
            end: "bottom 25%",
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
        <div className="max-w-3xl mx-auto px-4 py-12 space-y-32">
          {/* 첫 번째 섹션 */}
          <section className="flex flex-col items-center text-center">
            <div className="space-y-4 font-bold">
              <h2 ref={title1Ref} className="text-[30px] text-right">
                자연스러움과
                <br />
                순수함을 상징하는
                <br />
                토마토의 한결같은
                <br />
                울퉁불퉁함은,
              </h2>
              <img
                ref={image1Ref}
                src={Image4_1}
                alt="삼단 토마토"
                className="w-72 h-72 object-contain mx-auto"
              />
              <p ref={text1Ref} className="text-[26px] text-right">
                보는 이에게
                <br />
                소박한 아름다움을
                <br />
                전달합니다
              </p>
            </div>
          </section>

          {/* 두 번째 섹션 */}
          <section className="flex flex-col items-center text-center">
            <div className="space-y-4">
              <h2 ref={title2Ref} className="text-[50px] font-bold text-right">
                게다가!
              </h2>
              <img
                ref={image2Ref}
                src={Image4_2}
                alt="자른 토마토"
                className="w-64 h-96 object-contain mx-auto scale-150"
              />
              <p ref={text2Ref} className="text-[40px] text-right">
                <span className="font-bold">
                  토마토는
                  <br />
                  <span className="text-red-500">겉</span>과{" "}
                  <span className="text-red-500">속</span>이 같은
                </span>
                <br />
                열매입니다
              </p>
            </div>
          </section>

          {/* 세번째 섹션 */}
          <section className="flex flex-col items-center text-center">
            <div className="space-y-4">
              <h2 ref={text3Ref} className="text-[30px] font-bold text-right">
                우리 주변에
                <br />
                <span className="text-red-500">겉과 속이 같은 열매</span>는
                <br />
                그리 많지 않습니다
              </h2>
              <img
                ref={image3Ref}
                src={Image4_3}
                alt="토마토 씨앗"
                className="w-64 h-94 object-contain mx-auto"
              />
            </div>
          </section>

          {/* 네번째 섹션 */}
          <section className="flex flex-col items-center text-center">
            <div className="space-y-8">
              <h2
                ref={text4Ref_1}
                className="text-[40px] font-normal text-right">
                멋진 줄무늬를 가진
                <br />
                <span className="text-green-600 font-bold">수박</span>이나{" "}
                <span className="text-yellow-500 font-bold">참외</span>는
              </h2>
              <div ref={image4Ref_1} className="grid grid-cols-2 gap-4">
                <img
                  src={Image4_4}
                  alt="수박 겉면"
                  className="w-56 h-56 object-contain mx-auto scale-150"
                />
                <img
                  src={Image4_5}
                  alt="참외 겉면"
                  className="w-56 h-56 object-contain mx-auto scale-150"
                />
              </div>
              <h2
                ref={text4Ref_2}
                className="text-[40px] font-normal text-right">
                갈라보면
                <br />
                <strong>민무늬</strong>일 뿐이고,
              </h2>
              <div ref={image4Ref_2} className="grid grid-cols-2 gap-4">
                <img
                  src={Image4_6}
                  alt="수박 단면"
                  className="w-56 h-56 object-contain mx-auto scale-150"
                />
                <img
                  src={Image4_7}
                  alt="참외 단면"
                  className="w-56 h-56 object-contain mx-auto scale-150"
                />
              </div>
            </div>
          </section>

          {/* 다섯번째 섹션 */}
          <section className="flex flex-col items-center text-center">
            <div className="space-y-8">
              <h2
                ref={text5Ref_1}
                className="text-[40px] font-normal text-right">
                뾰족뾰족한
                <br />
                <span className="text-green-600 font-bold">용과</span>이나{" "}
                <span className="text-yellow-500 font-bold">파인애플</span>의{" "}
                <span>속살은</span>
              </h2>
              <div ref={image5Ref_1} className="grid grid-cols-2 gap-4">
                <img
                  src={Image4_8}
                  alt="용과 겉면"
                  className="w-56 h-56 object-contain mx-auto scale-150"
                />
                <img
                  src={Image4_9}
                  alt="파인애플 겉면"
                  className="w-56 h-56 object-contain mx-auto scale-150"
                />
              </div>
              <h2
                ref={text5Ref_2}
                className="text-[40px] font-normal text-right">
                <strong>부드럽기</strong> 마련입니다
              </h2>
              <div ref={image5Ref_2} className="grid grid-cols-2 gap-4">
                <img
                  src={Image4_10}
                  alt="용과 단면"
                  className="w-56 h-56 object-contain mx-auto scale-150"
                />
                <img
                  src={Image4_11}
                  alt="파인애플 단면"
                  className="w-56 h-56 object-contain mx-auto scale-150"
                />
              </div>
            </div>
          </section>

          {/* 여섯번째 섹션 */}
          <section className="flex flex-col items-center text-center">
            <div className="space-y-4">
              <h2 ref={text6Ref} className="text-[30px] font-bold text-right">
                우리가 겪는 일상도
                <br />
                자연의 세계와 많이
                <br />
                다르지 않습니다
              </h2>
              <img
                ref={image6Ref}
                src={Image4_12}
                alt="사과 거울"
                className="w-64 h-94 object-contain mx-auto"
              />
            </div>
          </section>
          <div className="h-8"></div>

          {/* 마지막 섹션 */}
          <section className="flex flex-col items-center text-center">
            <div className="space-y-4">
              <h2
                ref={text7Ref_1}
                className="text-[26px] font-normal text-right">
                전시에 방문해주신 여러분,
                <br />긴 글을 읽어 주신 여러분,
              </h2>
              <img
                ref={image7Ref}
                src={Image4_13}
                alt="토마토 거울"
                className="w-64 h-94 object-contain mx-auto scale-150"
              />
              <p ref={text7Ref_2} className="text-[22px] font-light text-left">
                겉 모습에 속지 않고
                <br />
                내면의 아름다움을 찾아주신
                <br />
                저의 작품을 향유해 주셔서
                <br />
                감사합니다
                <br />
                <br />
                여러분의 향유는
                <br />
                오늘의 토마토입니다
              </p>
            </div>
          </section>
        </div>
        <div className="flex justify-center">
          <button
            style={{
              // position: "relative",
              // bottom: "-120px",
              left: "50%",
              // transform: "translateX(-50%)",
              marginBottom: "24px",
              backgroundColor: "#FFE4E1",
              color: "#B22222",
              padding: "12px 48px", // 패딩 증가
              borderRadius: "50px",
              border: "none",
              fontSize: "20px", // 폰트 크기 증가
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
              e.target.style.transition = "transform 2s ease";
              e.target.style.transform = "scale(1.4)";
              setTimeout(() => {
                navigate("/page5");
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

export default Page4;
