import CarDashboard from "./CarDashboard";
import Pedals from "./Pedals";

export default function FunctionCar() {
  return (
    <aside className="w-[370px] h-[470px] absolute right-0 p-10 bg-slate-700 bg-opacity-15 rounded-l-2xl">
      <header>
        <nav className="flex justify-end text-white">
          <button className="absolute top-4">Custom</button>
        </nav>
      </header>
      <section className="flex flex-col gap-6">
        <CarDashboard />
        <Pedals />
      </section>
    </aside>
  );
}
