import Image3_4 from "../assets/10-1.png";
import Image3_1 from "../assets/8-1.png";
import Image3_2 from "../assets/8-2.png";
import Image3_3 from "../assets/9-1.jpeg";
import Header from "../components/Header";

const Page3 = () => {
  return (
    <>
      <Header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md" />
      <div className="min-h-screen bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <section className="flex flex-col items-end pb-44">
            <p className="text-[30px] text-right">
              <span className="font-extrabold text-[60px]">
                <span className="text-[#FF6347]">토마토</span>는
              </span>
            </p>
            <img
              src={Image3_1}
              alt="울퉁불퉁 토마토1"
              className="w-[400px] h-[400px] object-contain"
            />
            <div className="relative w-full -top-10">
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
            <p className="text-[40px] text-right leading-tight">
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
              src={Image3_3}
              alt="매끈한 토마토"
              className="w-[100%] object-contain"
            />
          </section>
          <section className="flex flex-col items-end">
            <p className="text-[36px] font-medium text-right leading-none z-10">
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
              src={Image3_4}
              alt="토마토의 모습"
              className="w-full h-[220px] object-cover relative left-10 bottom-16"
            />
            <p className="text-[64px] text-right whitespace-nowrap relative bottom-14 leading-none">
              <span style={{ fontFamily: "GasoekOne" }}>울퉁불퉁</span>
              <span className="text-[40px] font-semibold">한</span>
              <br />
              <span className="text-[50px] font-extrabold">몸매</span>
              <span className="text-[40px] font-normal">입니다</span>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Page3;
