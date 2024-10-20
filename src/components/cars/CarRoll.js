export default function CarRoll() {
  return (
    <div className="flex flex-row items-center justify-center relative w-96 h-16">
      <img src="/icons/arrow-left.svg" className="w-4 absolute left-0"></img>

      {/*last car on the left*/}
      <img
        src="/images/cars/gtr-r34.png"
        className="w-16 h-8 absolute left-12 top-1.5 opacity-50"
      ></img>

      {/*first car on the left*/}
      <img
        src="/images/cars/gtr-r34.png"
        className="w-20 h-10 absolute left-16 top-3 z-10 opacity-80"
      ></img>

      {/*middle car*/}
      <img
        src="/images/cars/gtr-r34.png"
        className="w-22 h-12 absolute z-20"
      ></img>

      {/*first car on the right*/}
      <img
        src="/images/cars/gtr-r34.png"
        className="w-20 h-10 absolute right-16 top-3 z-10 opacity-80"
      ></img>

      {/*last car on the right*/}
      <img
        src="/images/cars/gtr-r34.png"
        className="w-16 h-8 absolute right-12 top-1.5 opacity-50"
      ></img>

      <img src="/icons/arrow-right.svg" className="w-4 absolute right-0"></img>
    </div>
  );
}
