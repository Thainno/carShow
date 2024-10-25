export default function Pedals() {
  return (
    <div className="flex flex-col text-white">
      <div className="flex flex-row items-end justify-center gap-4">
        <div className="flex flex-col items-center">
          <img src="/images/pedals/clutch.png" className="h-24"></img>
          <span>Q</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/pedals/break.png" className="h-24"></img>
          <span>W</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/images/pedals/accelerator.png" className="h-24"></img>
          <span>E</span>
        </div>
      </div>
      <div className="flex flex-col items-end relative">
        <div className="flex flex-col items-center">
          <img src="/images/pedals/gearshift.png" className="h-12"></img>
          <span>Click</span>
        </div>
      </div>
    </div>
  );
}
