export default function StatusBar() {
  return (
    <div>
      <div className="flex flex-row justify-between text-white">
        <p>Potência</p>
        <p>400cv</p>
      </div>
      <div>
        <div className="bg-slate-500 h-2 w-[320px] absolute rounded-full"></div>
        <div className="bg-white h-2 w-24 absolute rounded-full"></div>
      </div>
    </div>
  );
}
