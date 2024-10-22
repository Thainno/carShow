import Image from "next/image";

export default function Car() {
  return (
    <div className="flex justify-center items-end w-full h-5/6">
      <Image
        src="/images/cars/supra.png"
        alt="Supra Mk4"
        width={750}
        height={0}
      />
    </div>
  );
}
