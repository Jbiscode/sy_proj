import PropTypes from "prop-types";
import tomato from "../assets/tomato1.svg";
import "../styles/guestbook.css";

const TomatoGuest = ({ entry, onDelete, onEdit }) => (
  <div className="tomato-wrapper">
    <img src={tomato} alt="토마토" className="tomato-background" />
    <div className="content-overlay">
      <div className="entry-content">
        <p
          style={{
            fontFamily: "GmarketSans",
            color: "#FFF",
            fontWeight: "300",
          }}>
          {entry.message}
        </p>
        <em>({new Date(entry.created_at).toLocaleString()})</em>
      </div>
      <span
        style={{
          fontSize: "0.8rem",
          color: "#FFF",
          position: "relative",
          fontFamily: "GmarketSans",
          fontWeight: "500",
          top: "10px",
        }}>
        - {entry.name} -
      </span>
      <div className="entry-buttons">
        <button
          onClick={() => {
            const inputPassword = prompt(
              "수정을 위해 비밀번호를 입력해주세요:"
            );
            if (inputPassword) onEdit(entry.id, inputPassword);
          }}>
          수정
        </button>
        <button
          onClick={() => {
            const inputPassword = prompt(
              "삭제를 위해 비밀번호를 입력해주세요:"
            );
            onDelete(entry.id, inputPassword);
          }}>
          삭제
        </button>
      </div>
    </div>
  </div>
);

TomatoGuest.propTypes = {
  entry: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TomatoGuest;
