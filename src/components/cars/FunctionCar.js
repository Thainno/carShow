export default function FunctionCar() {
  return (
    <aside className="w-80 absolute right-0">
      <header>
        <nav className="">
          <ul className="flex flex-row justify-center gap-4 text-white">
            <li className="flex items-center justify-center border-solid border-b-0 border-2 border-white w-36 h-8 rounded-t-lg">
              <a>Test drive</a>
            </li>
            <li className="flex items-center justify-center border-solid border-b-0 border-2 border-white w-36 h-8 rounded-t-lg">
              <a>Custom</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="p-0">
        <div className="flex flex-row justify-center relative h-64">
          <img
            src="/images/velocimetro.png"
            className="w-20 h-20 absolute top-28 left-0"
          ></img>
          <img
            src="/images/velocimetro.png"
            className="w-44 h-44 absolute top-8 left-8"
          ></img>
          <img
            src="/images/velocimetro.png"
            className="w-44 h-44 absolute top-8 right-8"
          ></img>
          <img
            src="/images/velocimetro.png"
            className="w-20 h-20 absolute top-28 right-0"
          ></img>
        </div>
        <div className="flex flex-row items-center justify-center">
          <img src="/images/pedais/embreagem.png" className="h-36"></img>
          <img src="/images/pedais/freio.png" className="h-36"></img>
          <img src="/images/pedais/acelerador.png" className="h-36"></img>
          <img src="/images/pedais/cambio.png" className="h-12"></img>
        </div>
      </section>
    </aside>
  );
}
