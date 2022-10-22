import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Lucas"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cupiditate nobis, facilis, fugit eum, doloremque voluptas sunt enim asperiores eaque accusantium beatae ad nesciunt similique ea explicabo officia reprehenderit dolores!"
      />
      <Post
        author="Maria"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cupiditate nobis, facilis, fugit eum, doloremque voluptas sunt enim asperiores eaque accusantium beatae ad nesciunt similique ea explicabo officia reprehenderit dolores!"
      />
    </div>
  );
}
