function ClueBox({ word, showFodder, showDefinition, showIndicator }) {
  const yellowWords = word.yellow;
  const blueWords = word.blue;
  const pinkWords = word.pink;

  const clue = word.clue;

  function HighlightMultiple(text) {
    const words = [...yellowWords, ...blueWords, ...pinkWords];

    const regexSafe = words.map((w) =>
      w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    const regex = new RegExp(`(${regexSafe.join("|")})`, "gi");
    const parts = text.split(regex);

    return (
      <>
        {parts.map((part, i) =>
          yellowWords.includes(part) ? (
            <span key={i} className={showFodder ? "bg-[#F6FDC3]" : undefined}>
              {part}
            </span>
          ) : blueWords.includes(part) ? (
            <span
              key={i}
              className={showDefinition ? "bg-[#CDFAD5]" : undefined}
            >
              {part}
            </span>
          ) : pinkWords.includes(part) ? (
            <span
              key={i}
              className={showIndicator ? "bg-[#FFCF96]" : undefined}
            >
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  }

  return (
    <div className="mb-10 w-[90dvw] max-w-[660px] rounded-xl bg-white px-5 py-8 text-xl shadow-lg">
      {HighlightMultiple(clue)}
    </div>
  );
}

export default ClueBox;
