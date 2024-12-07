import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import tomato from "../assets/tomato2.svg";
import "../styles/guestbook.css";

const TomatoContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: -80px;
  }
`;

const TomatoImage = styled.img`
  width: 400px;
  height: 400px;
  min-width: 400px;
  min-height: 400px;
  object-fit: contain;
  position: relative;
  z-index: 1;
`;

const ContentOverlay = styled.div`
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 280px;
  padding: 20px;
  padding-top: 60px;
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const Message = styled.p`
  font-family: "GmarketSans";
  color: #fff;
  font-weight: 300;
  margin: 0;
  word-break: break-word;
  width: 100%;
  line-height: 1.5;
  font-size: 1rem;
  max-height: 100px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
  }
`;

const DateTime = styled.em`
  color: #fff;
  font-size: 0.8rem;
  opacity: 0.9;
`;

const Author = styled.span`
  font-size: 0.9rem;
  color: #fff;
  font-family: "GmarketSans";
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 8px;

  button {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: white;
    padding: 3px 10px;
    border-radius: 10px;
    cursor: pointer;
    font-family: "GmarketSans";
    font-size: 0.75rem;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

const TomatoGuest = ({ entry, onDelete, onEdit }) => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [password, setPassword] = useState("");
  const [editContent, setEditContent] = useState("");

  const handleEditSubmit = async () => {
    const success = await onEdit(entry.id, password, editContent);
    if (success) {
      setShowEditModal(false);
      setPassword("");
      setEditContent("");
    } else {
      // 실패 시 비밀번호만 초기화
      setPassword("");
    }
  };

  return (
    <TomatoContainer>
      <TomatoImage src={tomato} alt="토마토" />
      <ContentOverlay>
        <Message>{entry.message}</Message>
        <DateTime>({new Date(entry.created_at).toLocaleString()})</DateTime>
        <Author>- {entry.name} -</Author>
        <ButtonContainer>
          <button
            onClick={() => {
              setEditContent(entry.content);
              setShowEditModal(true);
            }}>
            수정
          </button>
          <button
            onClick={() => {
              setShowPasswordModal(true);
            }}>
            삭제
          </button>
        </ButtonContainer>
      </ContentOverlay>

      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg z-50">
            <h3 className="mb-4">삭제를 위해 비밀번호를 입력해주세요:</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 mb-4"
              autoFocus
            />
            <div className="flex gap-2">
              <button
                onClick={async () => {
                  await onDelete(entry.id, password);
                  setShowPasswordModal(false);
                  setPassword("");
                }}
                className="bg-red-500 text-white px-4 py-2 rounded">
                확인
              </button>
              <button
                onClick={() => {
                  setShowPasswordModal(false);
                  setPassword("");
                }}
                className="bg-gray-300 px-4 py-2 rounded">
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg z-50 w-96">
            <h3 className="mb-4">수정하기</h3>

            <div className="mb-4">
              <label className="block mb-2">비밀번호</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 w-full"
                placeholder="비밀번호를 입력하세요"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">내용</label>
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="border p-2 w-full h-32 resize-none"
                placeholder="수정할 내용을 입력하세요"
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleEditSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded">
                수정하기
              </button>
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setPassword("");
                  setEditContent("");
                }}
                className="bg-gray-300 px-4 py-2 rounded">
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </TomatoContainer>
  );
};

TomatoGuest.propTypes = {
  entry: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TomatoGuest;
