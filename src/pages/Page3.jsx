import Image3_1 from "../assets/8-1.png";
import Image3_2 from "../assets/8-2.png";
import Header from "../components/Header";

const Page3 = () => {
  return (
    <>
      <Header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md" />
      <div className="min-h-screen bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <section className="flex flex-col items-end">
            <p className="text-[30px] text-right">
              <span className="font-bold text-[60px]">토마토</span>는
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
        </div>
      </div>
    </>
  );
};

export default Page3;
