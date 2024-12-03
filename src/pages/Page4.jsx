import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image4_1 from "../assets/11-1.jpeg";
import Image4_2 from "../assets/12-1.png";
import Header from "../components/Header";

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
  // 각 요소에 대한 개별 ref 생성
  const title1Ref = useRef(null);
  const image1Ref = useRef(null);
  const text1Ref = useRef(null);
  const title2Ref = useRef(null);
  const image2Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useEffect(() => {
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
        x: 0,
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

    // 마지막 섹션 애니메이션
    gsap.fromTo(
      text3Ref.current,
      { opacity: 0, y: 30 },
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md" />
      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-16 space-y-32">
          {/* 첫 번째 섹션 */}
          <section className="flex flex-col items-center text-center">
            <div className="space-y-4">
              <h2
                ref={title1Ref}
                className="text-[30px] font-normal text-right">
                자연스러움과
                <br />
                순수함을 상징하는 토마토의
                <br />
                한결같은 울퉁불퉁함은,
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
                className="w-96 h-96 object-contain mx-auto scale-150"
              />
              <p ref={text2Ref} className="text-[40px] pr-10 text-right">
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

          {/* 마지막 섹션 */}
          <section className="flex flex-col items-center text-center">
            <div className="space-y-4">
              <p ref={text3Ref} className="text-lg">
                전시에 방문해주신 여러분,
                <br />
                긴 글을 읽어 주신 여러분,
                <br />
                걸 모습에 속지 않고
                <br />
                내면의 아름다움을 찾아
                <br />
                저의 작품을 황홀해 주셔서
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
      </div>
    </>
  );
};

export default Page4;
