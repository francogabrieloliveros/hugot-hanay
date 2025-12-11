import { useState } from "react";
import Game from "./Game.jsx";
import Header from "../assets/Header.jsx";
import words from "../data/words.js";
import shuffle from "../methods/shuffle.js";

function GamePage() {
  const [wordInd, setWordInd] = useState(0);
  const [shuffledWords, setShuffledWords] = useState(shuffle(words));

  return (
    <>
      <Header />
      <Game
        word={shuffledWords[wordInd]}
        setWordInd={setWordInd}
        key={wordInd}
      />
    </>
  );
}

export default GamePage;
