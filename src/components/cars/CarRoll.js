export default function CarRoll() {
  return (
    <div className="flex flex-row items-center justify-center relative w-64 h-16">
      <span className="text-cyan-50 absolute -left-2">{"<"}</span>
      <img
        src="/images/cars/gtr-r34.png"
        className="w-16 h-8 absolute left-4 top-1.5"
      ></img>
      <img
        src="/images/cars/gtr-r34.png"
        className="w-20 h-10 absolute left-8 top-2"
      ></img>
      <img src="/images/cars/gtr-r34.png" className="w-22 h-12 absolute"></img>
      <img
        src="/images/cars/gtr-r34.png"
        className="w-20 h-10 absolute right-8 top-2"
      ></img>
      <img
        src="/images/cars/gtr-r34.png"
        className="w-16 h-8 absolute right-4 top-1.5"
      ></img>
      <span className="text-cyan-50 absolute -right-2">{">"}</span>
    </div>
  );
}
