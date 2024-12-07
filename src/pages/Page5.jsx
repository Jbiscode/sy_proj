import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import slide1 from "../assets/19-1.png";
import slide2 from "../assets/20-1.jpeg";
import slide3 from "../assets/21-1.png";
import slide4 from "../assets/22-1.png";
import Header from "../components/Header";
const data = [
  {
    id: 1,
    image: slide1,
    title: "방울토마토",
    description:
      "방울토마토는 주변에서 가장 흔하게 관찰할 수 있는 토마토입니다. 작고 매끄러운 겉모습이 특징입니다. 비타민과 무기질을 풍부하게 가지고 있어요!",
    period: "2001 ~ 2012",
    story:
      "어린 시절의 저는 잠재력을 가지고 있는 보통의 학생이었답니다. 방송국 활동에 최선을 다하고 악기연주를 취미로 했어요.",
  },
  {
    id: 2,
    image: slide2,
    title: "대추 토마토",
    description:
      "대추토마토는 방울토마토의 일종이지만, 타원형으로 다양한 색깔을 가지고 있어요. 아삭한 식감과 달콤한 맛으로 인기가 많아요!",
    period: "2013 ~ 2019",
    story:
      "다양한 악기를 배우던 중, 가야금에 재능을 보여 다양한 지역 공연과 대회에 나가게 되었어요. 남들의 평가와 겉으로 보이는 나의 모습에 더 집중했던 것 같아서 아쉬워요.",
  },
  {
    id: 3,
    image: slide3,
    title: "브랜디와인 토마토",
    description:
      "과일이 익는 데 80~100일이 걸려요. 일반 토마토 품종 중에서 가장 느리게 숙성되지만, 가장 좋은 토마토 맛을 가진 품종이랍니다!",
    period: "2020 ~ 2024",
    story:
      "가야금을 그만둔 뒤, 반수를 선택하여 또래들보다 1년 늦게 학교에 입학했어요. 하지만, 3번의 인턴십과 영상문화학회 발제 등 다양한 성취를 이루고 졸업하게 되었어요!",
  },
  {
    id: 4,
    image: slide4,
    title: "쿠마토",
    description:
      "완숙 토마토보다 약간 작고, 검은색을 띠지만, 유해산소를 예방하는 작용이 일반 토마토보다 무려 3배가 높아요. 과육도 단단하여 절대 쉽게 무르지 않는답니다!!",
    period: "Now~",
    story:
      "앞으로는 쿠마토 같은 사람이 되고 싶어요. 지금 처한 조건과 겉모습이 어떠 하든가에 상관없이, 문화콘텐츠전공에서 배운 탄탄한 지식과 단단한 내면을 통해 성장하겠습니다!",
  },
];

const Page5 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [loadingDots, setLoadingDots] = useState(".");
  const sliderRef = React.useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setShowModal(true);
    const timer = setTimeout(() => {
      setIsButtonActive(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isButtonActive) {
      const interval = setInterval(() => {
        setLoadingDots((dots) => (dots.length >= 3 ? "." : dots + "."));
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isButtonActive]);

  const handleSeedClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirm = () => {
    navigate("/guestbook");
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  const handleSlideClick = (index) => {
    const diff = index - currentSlide;

    if (diff > 1) {
      sliderRef.current.slickGoTo(currentSlide + 1);
    } else if (diff < -1) {
      sliderRef.current.slickGoTo(currentSlide - 1);
    } else {
      sliderRef.current.slickGoTo(index);
    }
    setCurrentSlide(index);
  };

  return (
    <>
      <Header />
      <Container>
        {showModal && (
          <ModalOverlay onClick={() => setShowModal(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalTitle>토마토처럼 성장하는 이야기</ModalTitle>
              <ModalText>
                슬라이드를 넘기면서 저의 이야기를 확인해보세요! 각 토마토는 제
                인생의 특별한 시기를 나타냅니다.
                <br />
                글을 보고 계시면 제가 곧 토마토씨앗을 준비해올게요!
              </ModalText>
              <ModalButton onClick={() => setShowModal(false)}>
                보러가기
              </ModalButton>
            </ModalContent>
          </ModalOverlay>
        )}
        {showConfirmModal && (
          <ModalOverlay onClick={() => setShowConfirmModal(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <ModalTitle>토마토를 심으러 가시겠어요?</ModalTitle>
              <ModalText>
                아직 보지 않은 내용이 있을 수 있어요.
                <br />
                계속 보시겠습니까?
              </ModalText>
              <ConfirmButtonContainer>
                <ConfirmButton onClick={() => setShowConfirmModal(false)}>
                  더 볼래요
                </ConfirmButton>
                <ConfirmButton primary onClick={handleConfirm}>
                  심으러 가기
                </ConfirmButton>
              </ConfirmButtonContainer>
            </ModalContent>
          </ModalOverlay>
        )}
        <TitleContainer>
          <TomatoButton
            $isActive={isButtonActive}
            disabled={!isButtonActive}
            onClick={handleSeedClick}>
            {isButtonActive ? "씨앗 받기" : `씨앗 준비중${loadingDots}`}
          </TomatoButton>
          <Title>Change!</Title>
        </TitleContainer>
        <SubTitle>and me</SubTitle>
        <SliderContainer>
          <StyledSlider ref={sliderRef} {...settings}>
            {data.map((item, index) => (
              <SlideItem key={item.id} onClick={() => handleSlideClick(index)}>
                <SlideImage src={item.image} alt={item.title} />
              </SlideItem>
            ))}
          </StyledSlider>
        </SliderContainer>
        <ContentBox>
          <ContentTitle>{data[currentSlide].title}</ContentTitle>
          <ContentDescription>
            {data[currentSlide].description}
          </ContentDescription>
          <PeriodText>{data[currentSlide].period}</PeriodText>
          <StoryText>{data[currentSlide].story}</StoryText>
        </ContentBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  padding: 20px;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
  padding-right: 0;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 0;
  text-align: right;
`;

const SubTitle = styled.h2`
  font-size: 32px;
  margin-top: 0;
  text-align: right;
`;

const SliderContainer = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 0 5px;
    opacity: 0.5;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  .slick-center {
    opacity: 1;

    &:hover {
      opacity: 1;
    }
  }

  .slick-dots {
    bottom: -30px;
  }
`;

const SlideItem = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const SlideImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;

  .slick-center & {
    transform: scale(1.05);
  }
`;

const ContentBox = styled.div`
  margin-top: 10px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: all 0.5s ease-in-out;
  font-family: "GmarketSans";
`;

const ContentTitle = styled.h3`
  font-size: 24px;
  margin: 0;
  color: #333;
  font-family: "GmarketSans";
`;

const ContentDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #555;
  margin: 0;
  font-family: "GmarketSans";
`;

const PeriodText = styled.h4`
  font-size: 20px;
  color: #2c786c;
  margin: 15px 0 5px 0;
  font-weight: bold;
  font-family: "GmarketSans";
`;

const StoryText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  margin: 0;
  font-family: "GmarketSans";
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px 25px;
  border-radius: 15px;
  width: 90%;
  max-width: 350px;
  text-align: center;
  font-family: "GmarketSans";
  animation: slideUp 0.5s ease-out;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  color: #2c786c;
  margin-bottom: 20px;
  font-weight: bold;
  letter-spacing: -0.5px;
`;

const ModalText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  margin-bottom: 25px;
  font-family: "GmarketSans";
  word-break: keep-all;
  white-space: pre-line;
  letter-spacing: -0.3px;
`;

const ModalButton = styled.button`
  background-color: #2c786c;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "GmarketSans";
  letter-spacing: -0.3px;

  &:hover {
    background-color: #1f5f54;
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(44, 120, 108, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const TomatoButton = styled.button`
  padding: 8px 16px;
  border-radius: 50px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  font-family: "GmarketSans";
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
  background-color: ${(props) => (props.$isActive ? "#FF6B6B" : "#9e9e9e")};
  color: white;
  transition: all 0.5s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-right: auto;
  margin-left: 20px;
  min-width: 110px;

  &:hover {
    transform: ${(props) => (props.$isActive ? "translateY(-2px)" : "none")};
    background-color: ${(props) => (props.$isActive ? "#FF5252" : "#9e9e9e")};
    box-shadow: ${(props) =>
      props.$isActive
        ? "0 4px 12px rgba(255, 107, 107, 0.3)"
        : "0 2px 8px rgba(0, 0, 0, 0.1)"};
  }

  &:active {
    transform: ${(props) => (props.$isActive ? "translateY(0)" : "none")};
  }
`;

const ConfirmButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  background-color: ${(props) => (props.primary ? "#FF6B6B" : "#f5f5f5")};
  color: ${(props) => (props.primary ? "white" : "#333")};
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "GmarketSans";
  letter-spacing: -0.3px;
  flex: 1;
  max-width: 120px;

  &:hover {
    transform: translateY(-2px);
    background-color: ${(props) => (props.primary ? "#FF5252" : "#e5e5e5")};
    box-shadow: ${(props) =>
      props.primary
        ? "0 4px 12px rgba(255, 107, 107, 0.3)"
        : "0 4px 12px rgba(0, 0, 0, 0.1)"};
  }

  &:active {
    transform: translateY(0);
  }
`;

export default Page5;
