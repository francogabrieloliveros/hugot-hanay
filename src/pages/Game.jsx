import { useState, useRef, useEffect } from "react";
import { handlePhysicalKeyPress, handleKeyPress } from "../methods/keypress.js";

import Keyboard from "../assets/Keyboard.jsx";
import InputBoxes from "../assets/InputBoxes.jsx";
import ClueBox from "../assets/ClueBox.jsx";
import HintBox from "../assets/HintBox.jsx";
import Hint from "../assets/Hint.jsx";
import ClueCount from "../assets/ClueCount.jsx";
import Won from "../assets/Won.jsx";

function Game({ word, setWordInd, end }) {
  const [guess, setGuess] = useState(new Array(word.word.length).fill(0));
  const [currIndex, setCurrIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showIndicator, setShowIndicator] = useState(false);
  const [indicatorShown, setIndicatorShown] = useState(false);
  const [showDefinition, setShowDefinition] = useState(false);
  const [definitionShown, setDefinitionShown] = useState(false);
  const [showFodder, setShowFodder] = useState(false);
  const [fodderShown, setFodderShown] = useState(false);
  const [clueCount, setClueCount] = useState(0);
  const [won, setWon] = useState(false);
  const [shake, setShake] = useState(false);
  const [revealed, setRevealed] = useState(
    new Array(word.word.length).fill(false)
  );
  const divRef = useRef(null);
  useEffect(() => divRef.current?.focus(), []);

  function checkWon() {
    return word.word === guess.join("");
  }

  function validate() {
    if (!checkWon()) {
      setShake(true);
      setTimeout(() => setShake(false), 300);
    } else {
      setWon(true);
    }
  }

  return (
    <div
      tabIndex={0}
      className="mx-auto max-w-[660px] outline-none focus:outline-none"
      onKeyDown={(e) =>
        handlePhysicalKeyPress(
          e,
          currIndex,
          setCurrIndex,
          guess,
          setGuess,
          revealed
        )
      }
    >
      <Won
        show={won}
        clueTotal={word.word.length + 3}
        clueCount={clueCount}
        end={end}
        setWordInd={setWordInd}
      />
      <Hint
        explanation={word.indicator}
        show={showIndicator}
        setShow={setShowIndicator}
        setShowPrev={setShowHint}
      />
      <Hint
        explanation={word.definition}
        show={showDefinition}
        setShow={setShowDefinition}
        setShowPrev={setShowHint}
      />
      <Hint
        explanation={word.fodder}
        show={showFodder}
        setShow={setShowFodder}
        setShowPrev={setShowHint}
      />
      <HintBox
        word={word.word}
        show={showHint}
        setShow={setShowHint}
        setGuess={setGuess}
        setClueCount={setClueCount}
        setShowIndicator={setShowIndicator}
        indicatorShown={indicatorShown}
        setIndicatorShown={setIndicatorShown}
        setShowDefinition={setShowDefinition}
        definitionShown={definitionShown}
        setDefinitionShown={setDefinitionShown}
        setShowFodder={setShowFodder}
        fodderShown={fodderShown}
        setFodderShown={setFodderShown}
        setRevealed={setRevealed}
        setWon={setWon}
      />
      <div className="flex flex-col items-center">
        <ClueBox
          word={word}
          showFodder={fodderShown}
          showDefinition={definitionShown}
          showIndicator={indicatorShown}
        />
        <InputBoxes
          word={word.word}
          guess={guess}
          setGuess={setGuess}
          currIndex={currIndex}
          setCurrIndex={setCurrIndex}
          revealed={revealed}
          shake={shake}
        />
        <ClueCount
          clueTotal={word.word.length + 3}
          clueCount={clueCount}
          won={false}
        />
        <div className="flex">
          <button
            className="oleo mr-5 cursor-pointer rounded-4xl border-2 border-black bg-[#F6FDC3] px-8 py-1.5 text-2xl shadow-[2px_3px_0_0_black] transition-all hover:scale-105 active:scale-95"
            onClick={() => {
              setShowHint(true);
              setShowDefinition(false);
              setShowFodder(false);
              setShowIndicator(false);
            }}
          >
            tulong
          </button>
          <button
            className="oleo cursor-pointer rounded-4xl border-2 border-black bg-[#FFCF96] px-8 py-1.5 text-2xl shadow-[2px_3px_0_0_black] transition-all hover:scale-105 active:scale-95"
            onClick={() => validate()}
          >
            suriin
          </button>
        </div>
      </div>
      <Keyboard
        showHint={
          showHint || showDefinition || showIndicator || showFodder || won
        }
        handleKeyPress={handleKeyPress}
        guess={guess}
        setGuess={setGuess}
        currIndex={currIndex}
        setCurrIndex={setCurrIndex}
        revealed={revealed}
      />
    </div>
  );
}

export default Game;
