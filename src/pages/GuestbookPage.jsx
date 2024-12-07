import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import {
  createGuestbook,
  deleteGuestbook,
  editGuestbook,
  getGuestbookEntries,
} from "../api/api";
import Header from "../components/Header";
import TomatoGuest from "../components/TomatoGuest";
import "../styles/guestbook.css";
import "../styles/pagination.css";

// const ITEMS_PER_PAGE = 5; // 페이지당 항목 수

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin: 8px 0;
  border: 2px solid #ffe5e5;
  border-radius: 12px;
  font-size: 1rem;
  font-family: "GmarketSans";
  background-color: #fff;
  color: #333;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: #ffb3b3;
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    border-color: #ff6b6b;
    box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.1);
    background-color: #fff9f9;
  }

  &:hover {
    border-color: #ffb3b3;
    background-color: #fff9f9;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  margin: 8px 0;
  border: 2px solid #ffe5e5;
  border-radius: 12px;
  font-size: 1rem;
  font-family: "GmarketSans";
  background-color: #fff;
  color: #333;
  min-height: 120px;
  resize: vertical;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: #ffb3b3;
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    border-color: #ff6b6b;
    box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.1);
    background-color: #fff9f9;
  }

  &:hover {
    border-color: #ffb3b3;
    background-color: #fff9f9;
  }
`;

const InputLabel = styled.label`
  font-family: "GmarketSans";
  font-size: 1rem;
  font-weight: 500;
  color: #ff6b6b;
  margin-bottom: 8px;
  display: block;
  position: relative;
  padding-left: 1.2rem;

  &:before {
    content: "🍅";
    position: absolute;
    left: 0;
    font-size: 0.9rem;
    top: 50%;
    transform: translateY(-50%);
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 1.2rem;
    width: calc(100% - 1.2rem);
    height: 2px;
    background: linear-gradient(to right, #ff6b6b, transparent);
  }
`;

const PageTitle = styled.h1`
  font-family: "GmarketSans";
  font-size: 2.5rem;
  font-weight: 700;
  color: #ff6b6b;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  right: 30px;

  &:after {
    content: "🍅";
    position: absolute;
    font-size: 1.8rem;
    margin-left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  margin-top: 2rem;
  margin-bottom: 3rem;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-family: "GmarketSans";
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ff5252;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(255, 107, 107, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const FormContainer = styled.div`
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  margin-bottom: ${({ $isOpen }) => ($isOpen ? "2rem" : "0")};
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  min-width: 300px;
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  ${({ $type }) => {
    switch ($type) {
      case "create":
        return `
          border: 3px solid #FF6B6B;
          box-shadow: 0 4px 20px rgba(255, 107, 107, 0.2);
          .icon { color: #FF6B6B; font-size: 3rem; }
          .message { color: #FF6B6B; }
        `;
      case "edit":
        return `
          border: 3px solid #4CAF50;
          box-shadow: 0 4px 20px rgba(76, 175, 80, 0.2);
          .icon { color: #4CAF50; font-size: 3rem; }
          .message { color: #4CAF50; }
        `;
      case "delete":
        return `
          border: 3px solid #F44336;
          box-shadow: 0 4px 20px rgba(244, 67, 54, 0.2);
          .icon { color: #F44336; font-size: 3rem; }
          .message { color: #F44336; }
        `;
      default:
        return "";
    }
  }}
`;

const GuestbookPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [completeMessage, setCompleteMessage] = useState("");
  const [modalType, setModalType] = useState(null); // 'create', 'edit', 'delete' 중 하나

  // 방명록 데이터 가져오기
  const fetchEntries = useCallback(async () => {
    try {
      const { entries, totalPages } = await getGuestbookEntries(currentPage);
      setGuestbookEntries(entries);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching entries:", error);
    }
  }, [currentPage]);

  // 방명록 데이터 작성
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createGuestbook(name, message, password);
      setName("");
      setMessage("");
      setPassword("");
      setIsFormOpen(false);
      fetchEntries();
      setCompleteMessage("토마토심기 완료!");
      setModalType("create");
      setShowCompleteModal(true);
      setTimeout(() => setShowCompleteModal(false), 2500);
    } catch (error) {
      console.error("Error creating entry:", error);
    }
  };

  const handleDelete = async (id, inputPassword) => {
    try {
      await deleteGuestbook(id, inputPassword);
      fetchEntries();
      setCompleteMessage("삭제가 완료되었습니다.");
      setModalType("delete");
      setShowCompleteModal(true);
      setTimeout(() => setShowCompleteModal(false), 2500);
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  const handleEdit = async (id, password, content) => {
    try {
      await editGuestbook(id, password, content);
      fetchEntries();
      setCompleteMessage("수정이 완료되었습니다.");
      setModalType("edit");
      setShowCompleteModal(true);
      setTimeout(() => setShowCompleteModal(false), 2500);
      return true;
    } catch (error) {
      alert(error.message);
      return false;
    }
  };

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchEntries();
  }, [currentPage, fetchEntries]); // currentPage가 변경될 때마다 데이터 다시 로드

  return (
    <div className="guestbook-container">
      <Header />
      <div className="guestbook-content" style={{ padding: "32px" }}>
        <h1 className="tomato-title">
          <span className="tomato-text" style={{ color: "#FF6347" }}>
            토마토로
          </span>{" "}
          <span className="tomato-message-text">마음을 전해요</span>
        </h1>
        <StyledButton
          style={{
            backgroundColor: `${isFormOpen ? "#000" : "#ff6b6b"}`,
          }}
          type="button"
          onClick={() => setIsFormOpen(!isFormOpen)}>
          {isFormOpen ? "닫기" : "버튼을 눌러 토마토를 심어보세요!"}
        </StyledButton>

        <FormContainer $isOpen={isFormOpen}>
          <form onSubmit={handleSubmit}>
            <div>
              <InputLabel>이름</InputLabel>
              <StyledInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력해주세요"
                required
              />
            </div>

            <div>
              <InputLabel>메시지</InputLabel>
              <StyledTextArea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="메시지를 입력하세요"
                required
              />
            </div>

            <div>
              <InputLabel>비밀번호</InputLabel>
              <StyledInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호는 암호화되며, 수정/삭제시 사용"
                required
              />
            </div>

            <StyledButton type="submit">토마토심기</StyledButton>
          </form>
        </FormContainer>

        <PageTitle>토마토 농장</PageTitle>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto",
            marginBottom: "50px",
          }}>
          {guestbookEntries.map((entry) => (
            <TomatoGuest
              key={entry.id}
              entry={entry}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>

        {/* 페이지네이션 UI */}
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}>
            이전
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              style={{
                fontWeight: currentPage === index + 1 ? "bold" : "normal",
                backgroundColor: currentPage === index + 1 ? "#eee" : "white",
              }}>
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}>
            다음
          </button>
        </div>

        {/* 완료 모달을 최상위에 배치 */}
        {showCompleteModal && (
          <ModalOverlay>
            <ModalContent $type={modalType}>
              <div className="icon">
                {modalType === "create" && "🍅"}
                {modalType === "edit" && "✔️"}
                {modalType === "delete" && "🗑️"}
              </div>
              <p
                className="message"
                style={{
                  fontFamily: "GmarketSans",
                  fontSize: "1.2rem",
                  fontWeight: "500",
                }}>
                {completeMessage}
              </p>
            </ModalContent>
          </ModalOverlay>
        )}
      </div>
    </div>
  );
};

export default GuestbookPage;
