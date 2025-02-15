import styles from "./Avatar.module.css";
interface Avatar {
  url: string;
  hasBorder: boolean;
}

export const Avatar: React.FC<Avatar> = ({ url, hasBorder = true }) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={url}
    />
  );
};
