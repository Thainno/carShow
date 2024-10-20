import FunctionCar from "@/components/cars/FunctionCar.js";
import Car from "@/components/cars/Car";
import AboutCar from "@/components/cars/AboutCar";
import OptionsLeft from "@/components/layout/OptionsLeft";
import CarRoll from "@/components/cars/CarRoll";
import OptionsRight from "@/components/layout/OptionsRight";

export default function Supra() {
  return (
    <>
      <section className="w-screem h-screen">
        <div className="flex flex-row justify-center items-center mx-20 pt-28 h-5/6 relative">
          <AboutCar />
          <Car />
          <FunctionCar />
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
