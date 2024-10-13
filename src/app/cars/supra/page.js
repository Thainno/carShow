import Image from "next/image";

export default function Supra() {
  return (
    <>
      <section className="w-screem h-screen">
        <div className="flex flex-row justify-between px-9 pt-28 h-5/6 relative">
          <div className="functions-cars bg-slate-400 w-72">FUNCTIONS</div>
          <picture className="absolute w-[1294px] h-[528px] flex justify-center items-end">
            <Image
              src="/images/cars/supra.png"
              alt="Supra Mk4"
              width={900}
              height={0}
            />
          </picture>
          <div className="about-car bg-slate-400 w-72">ABOUT THIS CAR</div>
        </div>
        <div className="flex flex-row items-center justify-between px-9 h-1/6">
          <div>OPTIONS</div>
          <div className="flex flex-row items-center justify-center gap-4">
            <span className="text-cyan-50">{"<"}</span>
            <div className="w-16 h-16 bg-white"></div>
            <div className="w-16 h-16 bg-white"></div>
            <div className="w-16 h-16 bg-white"></div>
            <div className="w-16 h-16 bg-white"></div>
            <span className="text-cyan-50">{">"}</span>
          </div>
          <div>OPTIONS</div>
        </div>
      </section>
    </>
  );
}
