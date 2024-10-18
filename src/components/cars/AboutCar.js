import Image from "next/image";
import StatusBar from "./StatusBar";
import Reviews from "./Reviews";

export default function AboutCar() {
  return (
    <aside className="w-80 p-6">
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
        <h1 className="text-lg text-white">Supra MK4 3.0 1993</h1>
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
