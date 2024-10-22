export default function CarDashboard() {
  return (
    <div className="flex flex-row justify-center items-center h-64">
      <div className="flex justify-center items-center w-28 h-28 relative top-6 left-8">
        <img
          src="/images/car-dashboard/dash-rpm.svg"
          className="absolute"
        ></img>
        <img
          src="/images/car-dashboard/arrow-rpm.svg"
          className="absolute"
        ></img>
      </div>
      <div className="flex justify-center items-center w-44 h-44 relative z-10">
        <img
          src="/images/car-dashboard/dash-speedometer.svg "
          className="absolute"
        ></img>
        <img
          src="/images/car-dashboard/arrow-speedometer.svg"
          className="absolute"
        ></img>
      </div>
      <div className="flex justify-center items-center w-28 h-28 relative top-6 right-8">
        <img
          src="/images/car-dashboard/dash-gasoline.svg "
          className="absolute"
        ></img>
        <img
          src="/images/car-dashboard/arrow-gasoline.svg"
          className="absolute"
        ></img>
      </div>
    </div>
  );
}
