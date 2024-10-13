import FunctionCar from "@/components/FunctionCar.js";
import Car from "@/components/Car";
import AboutCar from "@/components/AboutCar";
import OptionsLeft from "@/components/OptionsLeft";
import CarRoll from "@/components/CarRoll";
import OptionsRight from "@/components/OptionsRight";

export default function Supra() {
  return (
    <>
      <section className="w-screem h-screen">
        <div className="flex flex-row justify-between px-9 pt-28 h-5/6 relative">
          <FunctionCar />
          <Car />
          <AboutCar />
        </div>
        <div className="flex flex-row items-center justify-between px-9 h-1/6">
          <OptionsLeft />
          <CarRoll />
          <OptionsRight />
        </div>
      </section>
    </>
  );
}
