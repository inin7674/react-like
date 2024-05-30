import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [like, unlike] = useState(false);
  const [hate, unhate] = useState(false);
  //Like를 누를시 hate가 true 면 false로 바꾸고 like를 true로 바꿈
  const Like_1 = () => {
    if(hate === true) {
      unhate(false)
    }
    unlike((좋아요) => !좋아요)}
    
  //Hate를 누를시 like가 true 면 false로 바꾸고 hate를 true로 바꿈
  const Hate_1 = () => {
    if(like === true) {
      unlike(false)
    }
    unhate((싫어요) => !싫어요)}

  const Like =
    like ? (
      <button onClick={Like_1}>👍🏿</button>
    ) : (
      <button onClick={Like_1}>👍</button>
    );

  const Hate =
    hate ? (
      <button onClick={Hate_1}>👎🏿</button>
    ) : (
      <button onClick={Hate_1}>👎</button>
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
