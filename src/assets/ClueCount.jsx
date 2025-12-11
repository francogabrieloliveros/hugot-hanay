function ClueCount({ clueCount, clueTotal, won }) {
  const placeHolder = new Array(clueTotal).fill(null);
  const circles = placeHolder.map((e, i) => (
    <div
      className={`mx-1 h-4 w-4 rounded-2xl ${won ? "border bg-[#CDFAD5]" : "bg-white"} ${i < clueCount ? undefined : "opacity-50"}`}
      key={i}
    ></div>
  ));
  return <div className="mb-12 flex">{circles}</div>;
}

export default ClueCount;
