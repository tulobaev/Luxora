import React, { useState } from "react";
import "./Cmment.css";
import DeleteIcon from "@mui/icons-material/Delete";

const CommentBox = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div>
      <div className="comment-box">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
            <button
              className="delete-button"
              onClick={() => handleDeleteComment(index)}
            >
              <DeleteIcon />
            </button>
          </div>
        ))}
      </div>

      <input
        type="text"
        value={newComment}
        onChange={handleInputChange}
        onKeyUp={(e) => {
          if (e.key === "Enter") handleCommentSubmit();
        }}
        placeholder="Напишите комментарий..."
        className="input"
      />
      <button onClick={handleCommentSubmit} className="submit-button">
        Добавить
      </button>
    </div>
  );
};

export default CommentBox;
