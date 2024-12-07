import bcrypt from "bcryptjs";
import { supabase } from "../supabase";

const ITEMS_PER_PAGE = 5;

// 방명록 목록 조회
export const getGuestbookEntries = async (currentPage) => {
  try {
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

    if (error) throw error;

    return {
      entries: data,
      totalPages: Math.ceil(count / ITEMS_PER_PAGE),
    };
  } catch (error) {
    console.error("Error fetching entries:", error);
    throw error;
  }
};

// 방명록 작성
export const createGuestbook = async (name, message, password) => {
  try {
    const koreanTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Seoul",
    });
    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase
      .from("guestbook")
      .insert([
        { name, message, password: hashedPassword, created_at: koreanTime },
      ]);

    if (error) throw error;
  } catch (error) {
    console.error("Error submitting entry:", error);
    throw error;
  }
};

// 방명록 삭제
export const deleteGuestbook = async (id, inputPassword) => {
  try {
    // 해당 항목 조회
    const { data: entry } = await supabase
      .from("guestbook")
      .select("password")
      .eq("id", id)
      .single();

    // 비밀번호 검증
    const isPasswordCorrect = await bcrypt.compare(
      inputPassword,
      entry.password
    );

    if (!isPasswordCorrect) {
      throw new Error("비밀번호가 일치하지 않습니다!");
    }

    // 데이터 삭제
    const { error } = await supabase.from("guestbook").delete().eq("id", id);
    if (error) throw error;
  } catch (error) {
    alert(error.message);
    throw error;
  }
};

// 방명록 수정
export const editGuestbook = async (id, password, content) => {
  // 해당 항목 조회
  const { data: entry } = await supabase
    .from("guestbook")
    .select("password")
    .eq("id", id)
    .single();

  // 비밀번호 검증
  const isPasswordCorrect = await bcrypt.compare(password, entry.password);

  if (!isPasswordCorrect) {
    throw new Error("비밀번호가 일치하지 않습니다!");
  }

  // 데이터 수정
  const { error } = await supabase
    .from("guestbook")
    .update({ message: content })
    .eq("id", id);

  if (error) throw error;
};
