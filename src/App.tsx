import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/117245895?v=4",
      name: "Alice Andrade",
      role: "Estudante @Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Fala pessoal! Hoje gostaria de comemorar que estou entendendo React e tô curtindo muito!",
      },

      { type: "link", content: " #feliz " },
      { type: "link", content: "  #React " },
      { type: "link", content: "  #JS " },
    ],
    publishedAt: new Date("2025-02-15 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/60861872?v=4",
      name: "Gabriel André",
      role: "Estudante @Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        content:
          "Fala pessoal! Hoje gostaria de comemorar que estou entendendo React e curtindo muito!",
      },
      { type: "link", content: " #feliz " },
      { type: "link", content: "  #React " },
      { type: "link", content: "  #JS " },
    ],
    publishedAt: new Date("2025-01-04 21:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
