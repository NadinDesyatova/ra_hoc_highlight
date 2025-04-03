import "./App.css";
import { useState } from "react";
import postList from "./assets/post-list.json";
import { PostList } from "./ui/PostList";
import { PostPropsType } from "./common/page-components-types";

export default function App() {
  const [list, setList] = useState<Array<PostPropsType>>([]);

  setInterval(() => setList(postList), 500);

  return (
    <PostList list={list} />
  );
}
