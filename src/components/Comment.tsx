import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
export const Comment = () => {
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
              <p>E ai, pessoal! Como estão?</p>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p></p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
