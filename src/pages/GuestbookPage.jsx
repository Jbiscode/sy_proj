import bcrypt from "bcryptjs";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/pagenation.css";
import { supabase } from "../supabase";

const ITEMS_PER_PAGE = 5; // 페이지당 항목 수

const GuestbookPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // 방명록 데이터 가져오기
  const fetchEntries = async () => {
    const { count } = await supabase
      .from("guestbook")
      .select("*", { count: "exact" });

    const { data, error } = await supabase
      .from("guestbook")
      .select("*")
      .order("created_at", { ascending: false })
      .range(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE - 1
      );

    if (error) console.error("Error fetching entries:", error);
    else {
      setGuestbookEntries(data);
      setTotalPages(Math.ceil(count / ITEMS_PER_PAGE));
    }
  };

  // 방명록 데이터 작성
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 비밀번호 해시화
    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase
      .from("guestbook")
      .insert([{ name, message, password: hashedPassword }]);
    if (error) {
      console.error("Error submitting entry:", error);
    } else {
      setName("");
      setMessage("");
      setPassword("");
      fetchEntries(); // 새 데이터 로드
    }
  };

  const handleDelete = async (id, inputPassword) => {
    const entry = guestbookEntries.find((entry) => entry.id === id);

    // 비밀번호 검증
    const isPasswordCorrect = await bcrypt.compare(
      inputPassword,
      entry.password
    );
    if (!isPasswordCorrect) {
      alert("Incorrect password!");
      return;
    }

    // 데이터 삭제
    const { error } = await supabase.from("guestbook").delete().eq("id", id);
    if (error) {
      console.error("Error deleting entry:", error);
    } else {
      fetchEntries(); // 새 데이터 로드
    }
  };

  const handleEdit = async (id, inputPassword) => {
    const entry = guestbookEntries.find((entry) => entry.id === id);

    // 비밀번호 검증
    const isPasswordCorrect = await bcrypt.compare(
      inputPassword,
      entry.password
    );
    if (!isPasswordCorrect) {
      alert("비밀번호가 일치하지 않습니다!");
      return;
    }

    // 비밀번호가 맞으면 새 메시지 입력 받기
    const newMessage = prompt("수정할 메시지를 입력해주세요:");
    if (!newMessage) return; // 취소하거나 빈 문자열인 경우 중단

    // 데이터 업데이트
    const { error } = await supabase
      .from("guestbook")
      .update({ message: newMessage })
      .eq("id", id);
    if (error) {
      console.error("Error updating entry:", error);
    } else {
      fetchEntries();
    }
  };

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchEntries();
  }, [currentPage]); // currentPage가 변경될 때마다 데이터 다시 로드

  return (
    <>
      <Header />

      <h1>방명록</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="메시지"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required></textarea>
        <input
          type="password"
          placeholder="수정/삭제 비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">등록</button>
      </form>

      <h2>방명록</h2>
      <ul>
        {guestbookEntries.map((entry) => (
          <li key={entry.id}>
            <strong>{entry.name}</strong>: {entry.message}{" "}
            <em>({new Date(entry.created_at).toLocaleString()})</em>
            <button
              onClick={() => {
                const inputPassword = prompt(
                  "삭제를 위해 비밀번호를 입력해주세요:"
                );
                handleDelete(entry.id, inputPassword);
              }}>
              삭제
            </button>
            <button
              onClick={() => {
                const inputPassword = prompt(
                  "수정을 위해 비밀번호를 입력해주세요:"
                );
                if (inputPassword) handleEdit(entry.id, inputPassword);
              }}>
              수정
            </button>
          </li>
        ))}
      </ul>

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
    </>
  );
};

export default GuestbookPage;