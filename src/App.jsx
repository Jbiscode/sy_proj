import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Header from "./components/Header";
import MainSlider from "./components/MainSlider";

function App() {
  const mainRef = useRef(null);

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
      <Header />
      <main ref={mainRef}>
        {/* 메인 컨텐츠 */}
        <MainSlider />
      </main>
    </div>
  );
}

export default App;
