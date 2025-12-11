function HomePage() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center p-5">
      <h1 className="oleo mb-2 text-6xl">hugot hanay</h1>
      <p className="mb-20 text-sm">
        Batay sa{" "}
        <a className="underline" href="https://www.minutecryptic.com/">
          Minute Cryptic
        </a>
      </p>

      <button className="oleo mb-8 cursor-pointer rounded-4xl border-2 border-black bg-[#FFCF96] px-8 py-1.5 text-2xl shadow-[2px_3px_0_0_black] transition-all hover:scale-105 active:scale-95">
        <a href="/game">umpisahan</a>
      </button>
      <button className="oleo mb-8 cursor-pointer rounded-4xl border-2 border-black bg-white px-6 py-1.5 text-2xl shadow-[2px_3px_0_0_black] transition-all hover:scale-105 active:scale-95">
        <a href="/about">impormasyon</a>
      </button>
      <a
        className="text-center text-sm underline"
        href="mailto:hugothanay@gmail.com?subject=Suhestiyon%20ng%20Palaisipan"
      >
        May naisip na salitang palaisipan? Magsumite ng suhestiyon.
      </a>
    </div>
  );
}

export default HomePage;
