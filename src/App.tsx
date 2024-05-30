import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [like, unlike] = useState(false);
  const [hate, unhate] = useState(false);

  let Like =
    like === false ? (
      <button onClick={() => unlike((좋아요) => !좋아요)}>👍🏿</button>
    ) : (
      <button onClick={() => unlike((좋아요) => (좋아요 = false))}>👍</button>
    );

  let Hate =
    hate === false ? (
      <button onClick={() => unhate((싫어요) => !싫어요)}>👎🏿</button>
    ) : (
      <button onClick={() => unhate((싫어요) => !싫어요)}>👎</button>
    );
  return (
    <>
      <div>
        {Like}
        {Hate}
      </div>
    </>
  );
}

export default App;
