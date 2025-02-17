import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface Comment {
  content: string;
}

export const Comment: React.FC<Comment> = ({ content, onDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0);
  function handleDeleteComment() {
    console.log("Deletar");
    onDeleteComment(content);
  }
  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        url="https://avatars.githubusercontent.com/u/60861872?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel André</strong>
              <time
                title="14 de fevereiro às 02:29"
                dateTime="2025-02-14 02:29:00"
              >
                Cerca de 1h atrás 1h
              </time>
              <p>{content}</p>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p></p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
