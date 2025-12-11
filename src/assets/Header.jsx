function Header() {
  return (
    <header className="mx-auto mb-8 flex w-[90dvw] max-w-[660px] items-center justify-between py-3">
      <h1 className="oleo mb-2 text-3xl">
        <a href="/">hugot hanay</a>
      </h1>
      <a href="/about">
        <img src="/info.svg" className="w-6" />
      </a>
    </header>
  );
}

export default Header;
