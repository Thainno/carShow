import Image from "next/image";
import StatusBar from "./StatusBar";
import Reviews from "./Reviews";

export default function AboutCar() {
  return (
    <aside className="w-[370px] h-[470px] absolute left-0 p-10 bg-slate-700 bg-opacity-15 rounded-r-2xl">
      <header>
        <picture className="flex flex-row gap-2">
          <Image
            src="/icons/logo/toyota/toyota-icon.svg"
            alt="Toyota logo"
            width={70}
            height={0}
          />
          <Image
            src="/icons/logo/toyota/toyota-name.svg"
            alt="Toyota name"
            width={100}
            height={0}
          />
        </picture>
        <h1 className="text-x text-white">Supra MK4 3.0 1993</h1>
      </header>
      <section className="flex flex-col gap-6 my-4 relative">
        <StatusBar />
        <StatusBar />
        <StatusBar />
        <StatusBar />
        <StatusBar />
      </section>
      <Reviews />
    </aside>
  );
}
