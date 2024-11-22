import gsap from "gsap";
import { useEffect, useRef } from "react";
import Header from "../components/Header";
import MainSlider from "../components/MainSlider";

const Home = () => {
  const mainRef = useRef(null);
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

  useEffect(() => {
    // 초기 상태 설정
    gsap.set(mainRef.current, {
      opacity: 0,
      y: 30,
    });

    // 헤더 애니메이션 완료 후 메인 컨텐츠 표시 (2.2초 후)
    // (로고 1초 대기 + 1초 애니메이션 + 0.2초 추가 대기)
    gsap.to(mainRef.current, {
      delay: 3.2,
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: "power2.out",
    });
  }, []);
  return (
    <div>
      <Header headerRef={headerRef} logoRef={logoRef} />
      <main style={{ marginTop: "-150px" }} ref={mainRef}>
        {/* 메인 컨텐츠 */}
        <MainSlider />
      </main>
    </div>
  );
};

export default Home;
