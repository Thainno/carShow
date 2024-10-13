import Image from "next/image";

export default function AboutCar() {
  return (
    <aside className="bg-slate-400 w-72">
      <Image
        src="/icons/logo/toyota/toyota-icon.svg"
        alt="Toyota logo"
        width={80}
        height={0}
      />
      <Image
        src="/icons/logo/toyota/toyota-name.svg"
        alt="Toyota name"
        width={80}
        height={0}
      />
    </aside>
  );
}
