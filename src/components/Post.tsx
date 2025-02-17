import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { useState } from "react";
interface PostContent {
  type: "paragraph" | "link";
  content: string;
}
interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}
interface Post {
  author: Author;
  content: PostContent[];
  publishedAt: Date;
}
export const Post: React.FC<Post> = ({ author, content, publishedAt }) => {
  const [comments, setComments] = useState<string[]>([
    "Post muito bacana, né?",
  ]);

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  function handleCreateNewComment(e: React.FormEvent) {
    e.preventDefault();

    // Joga o texto do estado "newCommentText" para o array de "comments"
    setComments([...comments, newCommentText]);

    // Limpa o campo
    setNewCommentText("");
  }
  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    );
    setComments(commentsWithoutDeletedOne);
  }

  const [newCommentText, setNewCommentText] = useState("");

  function handleNewCommentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(e.target.value);
    event?.target.setCustomValidity("");
  }

  function handleNewCommentInvalid(): void {
    event?.target.setCustomValidity("Esse campo é obrigatório!");
  }
  const isNewCommentEmpty = newCommentText.length == 0;
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} url={author.avatarUrl} />

          <div className={styles.authorInfo}>
            {author.name}
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedDateFormatted}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <a key={line.content} className={styles.link} href="#">
                {line.content}
              </a>
            );
          }
          return null;
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};
