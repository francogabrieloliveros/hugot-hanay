import reveal from "../methods/reveal.js";
import { useState } from "react";

function HintBox({
  word,
  show,
  setShow,
  setGuess,
  setClueCount,
  indicatorShown,
  setShowIndicator,
  setIndicatorShown,
  fodderShown,
  setShowFodder,
  setFodderShown,
  definitionShown,
  setShowDefinition,
  setDefinitionShown,
  setRevealed,
  setWon,
}) {
  const [shownLetter, setShownLetter] = useState(0);

  return (
    <div
      className={`fixed right-0 bottom-5 left-0 z-10 flex ${show ? "" : "translate-y-[120%]"} flex-col items-center transition-all`}
    >
      <div className="w-[90dvw] max-w-[660px] rounded-4xl border-3 border-black bg-white p-8 shadow-[3px_5px_0_0_black]">
        <div className="flex items-center justify-between">
          <p>Select hint</p>
          <img
            src="/close.svg"
            onClick={() => setShow(false)}
            className="w-10 cursor-pointer"
          />
        </div>
        <div className="flex flex-col">
          <span className="group relative my-4 inline-block w-53 cursor-pointer transition-all select-none active:opacity-50">
            <p
              className="oleo relative z-10 text-2xl"
              onClick={() => {
                setShow(false);
                setShowIndicator(true);
                setIndicatorShown(true);
                setClueCount((prev) => {
                  const newC = indicatorShown ? prev : prev + 1;
                  if (newC === word.length + 3) {
                    setShowIndicator(false);
                    setWon(true);
                  }
                  return newC;
                });
              }}
            >
              ipakita ang indikador
            </p>
            <div className="absolute right-0 bottom-1 left-0 h-2 rounded-2xl bg-[#FFCF96] transition-all group-hover:scale-110"></div>
          </span>
          <span className="group relative my-4 inline-block w-58 cursor-pointer transition-all select-none active:opacity-50">
            <p
              className="oleo relative z-10 text-2xl"
              onClick={() => {
                setShow(false);
                setShowFodder(true);
                setFodderShown(true);
                setClueCount((prev) => {
                  const newC = fodderShown ? prev : prev + 1;
                  if (newC === word.length + 3) {
                    setShowFodder(false);
                    setWon(true);
                  }
                  return newC;
                });
              }}
            >
              ipakita ang pinagmulan
            </p>
            <div className="absolute right-0 bottom-1 left-0 h-2 rounded-2xl bg-[#F6FDC3] transition-all group-hover:scale-110"></div>
          </span>
          <span className="group relative my-4 inline-block w-55 cursor-pointer transition-all select-none active:opacity-50">
            <p
              className="oleo relative z-10 text-2xl"
              onClick={() => {
                setShow(false);
                setShowDefinition(true);
                setDefinitionShown(true);
                setClueCount((prev) => {
                  const newC = definitionShown ? prev : prev + 1;
                  if (newC === word.length + 3) {
                    setShowDefinition(false);
                    setWon(true);
                  }
                  return newC;
                });
              }}
            >
              ipakita ang kahulugan
            </p>
            <div className="absolute right-0 bottom-1 left-0 h-2 rounded-2xl bg-[#CDFAD5] transition-all group-hover:scale-110"></div>
          </span>
          <hr className="border border-gray-200" />
          <span className="group relative my-4 inline-block w-45 cursor-pointer transition-all select-none active:opacity-50">
            <p
              className="oleo relative z-10 text-2xl"
              onClick={() => {
                setRevealed((prev) => {
                  const newRevealed = reveal(prev);
                  setGuess((prevGuess) =>
                    prevGuess.map((val, ind) => {
                      return newRevealed[ind] ? word.split("")[ind] : val;
                    })
                  );
                  return newRevealed;
                });

                setShow(false);
                setClueCount((prev) => {
                  const newShownLetter = shownLetter + 1;
                  setShownLetter(newShownLetter);

                  const newC = newShownLetter > word.length ? prev : prev + 1;

                  if (newC === word.length + 3) {
                    setWon(true);
                  }
                  return newC;
                });
              }}
            >
              magpakita ng letra
            </p>
            <div className="absolute right-0 bottom-1 left-0 h-2 rounded-2xl bg-[#F6FDC3] transition-all group-hover:scale-110"></div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HintBox;
