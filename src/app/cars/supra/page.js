import Image from "next/image";

export default function Supra() {
  return (
    <>
      <section className="w-screem h-screen">
        <div className="flex flex-row justify-between px-9 pt-28 h-5/6">
          <div className="functions-cars bg-slate-400 w-1/5">FUNCTIONS</div>
          <div className="show-car bg-slate-600 w-3/5 flex items-center">
            <Image
              src="/images/cars/supra.png"
              alt="Supra Mk4"
              width={3440}
              height={0}
            />
          </div>
          <div className="about-car bg-slate-400 w-1/5">ABOUT THIS CAR</div>
        </div>
        <div className="flex flex-row items-center justify-between px-9 pt-4 h-1/6">
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
