import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import image1 from "../assets/slide1.png";
import image2 from "../assets/slide2.png";
import image3 from "../assets/slide3.png";
import Header from "../components/Header";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const backgroundsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundsRef.current) {
        const scrolled = window.scrollY;
        backgroundsRef.current.style.transform = `translateY(${
          scrolled * 0.7
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <div className="relative min-h-screen overflow-hidden">
        <div
          ref={backgroundsRef}
          className="flex flex-col absolute top-[20vh] inset-0 z-0">
          <div
            style={{
              top: 0,
              left: 0,
              width: "200px",
              height: "200px",
              backgroundImage: `url(${image1})`,
            }}
            className={`relative top-0 left-0 w-full h-screen bg-cover bg-center opacity-50`}
          />
          <div
            style={{
              left: 0,
              width: "200px",
              height: "200px",
              backgroundImage: `url(${image2})`,
            }}
            className={`relative left-0 w-full h-screen bg-cover bg-center opacity-50`}
          />
          <div
            style={{
              left: 0,
              width: "200px",
              height: "200px",
              backgroundImage: `url(${image3})`,
            }}
            className={`relative left-0 w-full h-screen bg-cover bg-center opacity-50`}
          />
        </div>

        <main className="relative z-10 flex flex-col px-4">
          <h1
            // ref={titleRef}
            className="text-4xl font-bold text-center opacity-100">
            이런 토마토도 있답니다!
          </h1>
          <div className="flex flex-col items-center mt-8 space-y-2 text-lg">
            <p>Beefsteak tomatoes</p>
            <p>Cherry tomatoes</p>
            <p>Heirloom tomatoes</p>
            <p>Super Sweet 100</p>
            <p>Early Girl</p>
            <p>San Marzano tomato</p>
            <p>Brandywine tomato</p>
            <p>Green Zebra</p>
            <p>Roma tomato</p>
            <p>Creole tomato</p>
            <p>Cherokee Purple</p>
            <p>Kumato</p>
            <p>Grape tomato</p>
            <p>Roma tomato</p>
            <p>On-the-vine</p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page2;
