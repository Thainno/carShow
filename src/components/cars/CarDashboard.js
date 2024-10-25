export default function CarDashboard() {
  return (
    <div className="flex flex-row items-center justify-center h-48">
      <div className="flex items-center absolute w-32 left-10 top-24">
        <img src="/images/car-dashboard/dash-rpm.svg"></img>
        <img
          src="/images/car-dashboard/arrow-rpm.svg"
          className="absolute"
        ></img>
      </div>

      <div className="flex items-center absolute z-10 w-40 top-12">
        <img src="/images/car-dashboard/dash-speedometer.svg"></img>
        <img
          src="/images/car-dashboard/arrow-speedometer.svg"
          className="absolute"
        ></img>
      </div>

      <div className="flex items-center absolute w-32 right-10 top-24">
        <img src="/images/car-dashboard/dash-gasoline.svg "></img>
        <img
          src="/images/car-dashboard/arrow-gasoline.svg"
          className="absolute"
        ></img>
      </div>
    </div>
  );
}
