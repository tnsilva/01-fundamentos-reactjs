import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Lucas"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cupiditate nobis, facilis, fugit eum, doloremque voluptas sunt enim asperiores eaque accusantium beatae ad nesciunt similique ea explicabo officia reprehenderit dolores!"
          />
          <Post
            author="Maria"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cupiditate nobis, facilis, fugit eum, doloremque voluptas sunt enim asperiores eaque accusantium beatae ad nesciunt similique ea explicabo officia reprehenderit dolores!"
          />
        </main>
      </div>
    </div>
  );
}
