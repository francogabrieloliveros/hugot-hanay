function InputBoxes({ word, guess, currIndex, setCurrIndex, revealed, shake }) {
  const inputBoxes = word.split("").map((letter, index) => (
    <div
      key={index}
      className={`oleo flex h-9 w-9 cursor-pointer items-center justify-center border-2 border-[#900000] p-2 text-2xl ${index === 0 ? "rounded-s-md" : null} ${index === guess.length - 1 ? "rounded-e-md" : null} ${revealed[index] ? "bg-[#FFCF96]" : currIndex == index ? "bg-[#F6FDC3]" : "bg-white"}`}
      onClick={() => setCurrIndex(index)}
    >
      {guess[index] != 0 ? guess[index] : null}
    </div>
  ));

  return (
    <div
      className={`mb-12 inline-flex rounded-lg border-2 border-[#900000] ${shake ? "animate-shake" : undefined}`}
    >
      {inputBoxes}
    </div>
  );
}

export default InputBoxes;
