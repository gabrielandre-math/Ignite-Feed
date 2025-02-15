import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder={true}
            url="https://avatars.githubusercontent.com/u/60861872?v=4"
          />

          <div className={styles.authorInfo}>
            Gabriel André
            <span>Web Developer</span>
          </div>
        </div>

        <time title="14 de fevereiro às 02:29" dateTime="2025-02-14 02:29:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Fala pessoal! Hoje gostaria de comemorar que estou entendendo React e
          tô
        </p>
        <p>curtindo muito! </p>{" "}
        <a className={styles.link} href="#">
          #feliz
        </a>{" "}
        <a className={styles.link} href="#">
          #React
        </a>{" "}
        <a className={styles.link} href="#">
          #JS
        </a>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
