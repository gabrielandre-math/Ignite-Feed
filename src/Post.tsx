interface PostProps {
  title: string;
  content: string;
}
export const Post: React.FC<PostProps> = ({ title, content }) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </>
  )
}