import Image from "next/image";

export default function Car() {
  return (
    <picture className="flex justify-center">
      <Image
        src="/images/cars/supra.png"
        alt="Supra Mk4"
        width={700}
        height={0}
      />
    </picture>
  );
}
