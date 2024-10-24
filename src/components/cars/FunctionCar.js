import CarDashboard from "./CarDashboard";
import Pedals from "./Pedals";

export default function FunctionCar() {
  return (
    <aside className="w-80 h-4/6 absolute right-0 bg-slate-400 bg-opacity-25">
      <header>
        <nav className="flex justify-end text-white">
          <button>Custom</button>
        </nav>
      </header>
      <section className="p-0">
        <CarDashboard />
        <Pedals />
      </section>
    </aside>
  );
}
