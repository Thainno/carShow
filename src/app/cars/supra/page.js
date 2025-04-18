import FunctionCar from "@/components/cars/FunctionCar.js";
import Car from "@/components/cars/Car";
import AboutCar from "@/components/cars/AboutCar";
import Credits from "@/components/layout/Credits";
import CarRoll from "@/components/cars/CarRoll";
import SocialMedia from "@/components/layout/SocialMedia";

export default function Supra() {
  return (
    <>
      <section className="w-screem h-screen">
        <div className="flex flex-row justify-center items-center pt-28 h-5/6 relative">
          <AboutCar />
          <Car />
          <FunctionCar />
        </div>
        <div className="flex flex-row items-center justify-around h-1/6">
          <Credits />
          <CarRoll />
          <SocialMedia />
        </div>
      </section>
    </>
  );
}
