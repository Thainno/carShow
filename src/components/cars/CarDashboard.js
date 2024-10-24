export default function CarDashboard() {
  return (
    <div className="flex flex-row items-center h-64">
      <div className="flex items-center w-28 h-28 relative top-6 left-11">
        <img src="/images/car-dashboard/dash-rpm.svg"></img>
        <img
          src="/images/car-dashboard/arrow-rpm.svg"
          className="absolute"
        ></img>
      </div>

      <div className="flex items-center w-44 h-44 relative z-10">
        <img src="/images/car-dashboard/dash-speedometer.svg "></img>
        <img
          src="/images/car-dashboard/arrow-speedometer.svg"
          className="absolute"
        ></img>
      </div>

      <div className="flex items-center w-28 h-28 relative top-6 right-11">
        <img src="/images/car-dashboard/dash-gasoline.svg "></img>
        <img
          src="/images/car-dashboard/arrow-gasoline.svg"
          className="absolute"
        ></img>
      </div>
    </div>
  );
}
