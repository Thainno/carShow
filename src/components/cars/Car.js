import Image from "next/image";

export default function Car() {
  return (
    <picture className="absolute w-[1294px] h-[528px] flex justify-center items-end">
      <Image
        src="/images/cars/supra.png"
        alt="Supra Mk4"
        width={800}
        height={0}
      />
    </picture>
  );
}
