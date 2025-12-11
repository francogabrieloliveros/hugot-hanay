function Hint({ explanation, show, setShow, setShowPrev }) {
  return (
    <div
      className={`fixed right-0 bottom-5 left-0 z-10 flex ${show ? "" : "translate-y-[120%]"} flex-col items-center transition-all`}
    >
      <div className="w-[90dvw] max-w-[660px] rounded-4xl border-3 border-black bg-white p-8 shadow-[3px_5px_0_0_black]">
        <div className="flex justify-between">
          <img
            src="/return.svg"
            onClick={() => {
              setShow(false);
              setShowPrev(true);
            }}
            className="w-10 cursor-pointer"
          />
          <img
            src="/close.svg"
            onClick={() => setShow(false)}
            className="w-10 cursor-pointer"
          />
        </div>
        <div className="my-4">{explanation}</div>
      </div>
    </div>
  );
}

export default Hint;
