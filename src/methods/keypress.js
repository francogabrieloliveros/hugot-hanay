export const handlePhysicalKeyPress = (
  e,
  currIndex,
  setCurrIndex,
  guess,
  setGuess,
  revealed
) => {
  handleKeyPress(e.key, currIndex, setCurrIndex, guess, setGuess, revealed);
};

export const handleKeyPress = (
  key,
  currIndex,
  setCurrIndex,
  guess,
  setGuess,
  revealed
) => {
  if (/^[a-z]$/.test(key)) {
    setGuess((guess) => {
      const dup = [...guess];
      dup[currIndex] = key;
      return dup;
    });

    let newIndex = currIndex + 1;
    while (revealed[newIndex]) newIndex++;
    setCurrIndex(newIndex >= guess.length ? guess.length - 1 : newIndex);
  } else if (key === "Backspace" || key === "⌫") {
    setGuess((guess) => {
      const dup = [...guess];
      dup[currIndex] = 0;
      return dup;
    });

    let newIndex = currIndex - 1;
    while (revealed[newIndex]) newIndex--;
    setCurrIndex(newIndex <= 0 ? 0 : newIndex);
  }
};
