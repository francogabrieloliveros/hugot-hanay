import ClueCount from "../assets/ClueCount.jsx";

function Won({ show, setShow, clueCount, clueTotal, end, setWordInd }) {
  return (
    <div
      className={`fixed right-0 bottom-5 left-0 z-10 flex ${show ? "" : "translate-y-[120%]"} flex-col items-center transition-all`}
    >
      <div className="flex h-[90dvh] w-[90dvw] max-w-[660px] flex-col items-center justify-center rounded-4xl border-3 border-black bg-white p-8 shadow-[3px_5px_0_0_black]">
        <ClueCount clueTotal={clueTotal} clueCount={clueCount} won={true} />
        <p className="oleo my-8 text-3xl">Nakuha mo!</p>
        <p className="my-8">{`${clueCount} tulong`}</p>
        {end ? (
          <button className="oleo my-8 cursor-pointer rounded-4xl border-2 border-black bg-[#F6FDC3] px-8 py-1.5 text-xl shadow-[2px_3px_0_0_black] transition-all hover:scale-105 active:scale-95">
            <a href="/">sunod na salita</a>
          </button>
        ) : (
          <button
            className="oleo my-8 cursor-pointer rounded-4xl border-2 border-black bg-[#F6FDC3] px-8 py-1.5 text-xl shadow-[2px_3px_0_0_black] transition-all hover:scale-105 active:scale-95"
            onClick={() => {
              setWordInd((prev) => prev + 1);
              setShow(false);
            }}
          >
            sunod na salita
          </button>
        )}
      </div>
    </div>
  );
}

export default Won;
