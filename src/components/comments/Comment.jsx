import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import scss from "./Comment.module.scss";

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
    <div id={scss.box}>
      <div className={scss.comment_box}>
        {comments.map((comment, index) => (
          <div key={index} className={scss.comment}>
            {comment}
            <button
              className={scss.delete_button}
              onClick={() => handleDeleteComment(index)}
            >
              <DeleteIcon />
            </button>
          </div>
        ))}
      </div>

      <div className={scss.inputBox}>
        <input
          type="text"
          value={newComment}
          onChange={handleInputChange}
          onKeyUp={(e) => {
            if (e.key === "Enter") handleCommentSubmit();
          }}
          placeholder="Напишите комментарий..."
          className={scss.input}
        />
        <button onClick={handleCommentSubmit} className={scss.submit_button}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default CommentBox;
