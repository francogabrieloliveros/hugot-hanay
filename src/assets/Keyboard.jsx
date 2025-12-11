function Keyboard({
  showHint,
  handleKeyPress,
  currIndex,
  setCurrIndex,
  guess,
  setGuess,
  revealed,
}) {
  const topChars = "qwertyuiop".split("");
  const midChars = "asdfghjkl".split("");
  const lastChars = "zxcvbnm⌫".split("");

  const topKeys = topChars.map((char) => (
    <div
      key={char}
      className="key-shadow flex cursor-pointer items-center justify-center rounded-md bg-white p-1 transition-all select-none hover:scale-105 active:scale-95 active:bg-gray-200"
      onClick={() =>
        handleKeyPress(char, currIndex, setCurrIndex, guess, setGuess, revealed)
      }
    >
      {char}
    </div>
  ));

  const midKeys = midChars.map((char) => (
    <div
      key={char}
      className="key-shadow flex cursor-pointer items-center justify-center rounded-md bg-white p-1 transition-all select-none hover:scale-105 active:scale-95 active:bg-gray-200"
      onClick={() =>
        handleKeyPress(char, currIndex, setCurrIndex, guess, setGuess, revealed)
      }
    >
      {char}
    </div>
  ));

  const lastKeys = lastChars.map((char) => (
    <div
      key={char}
      className="key-shadow flex cursor-pointer items-center justify-center rounded-md bg-white p-1 transition-all select-none hover:scale-105 active:scale-95 active:bg-gray-200"
      onClick={() =>
        handleKeyPress(char, currIndex, setCurrIndex, guess, setGuess, revealed)
      }
    >
      {char}
    </div>
  ));

  return (
    <div
      className={`fixed right-0 bottom-2 left-0 flex flex-col items-center ${showHint ? "opacity-50" : undefined}`}
    >
      <div className="w-[90dvw] max-w-[660px]">
        <div className="mb-2 grid grid-cols-10 gap-1">{topKeys}</div>
        <div className="mb-2 grid grid-cols-9 gap-1">{midKeys}</div>
        <div className="mb-2 grid grid-cols-8 gap-1">{lastKeys}</div>
      </div>
    </div>
  );
}

export default Keyboard;
