import { ThumbsUp, Trash } from "phosphor-react";

import styles from "./Comment.module.css";

import { Avatar } from "./Avatar";
import { useState } from "react";

interface IComment {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: IComment) {
  const [likeCount, setLikeCount] = useState(0);
  const [allowedLike, setAllowedLike] = useState(true);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleCommentLike() {
    if (allowedLike) {
      setLikeCount(likeCount + 1);
      setAllowedLike(false);
    } else {
      setLikeCount(likeCount - 1);
      setAllowedLike(true);
    }
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/DanielAbrante.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>DanielAbrante</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleCommentLike}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
