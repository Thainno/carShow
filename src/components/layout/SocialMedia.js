import Image from "next/image";

export default function SocialMedia() {
  return (
    <div className="flex flex-row gap-3">
      <Image
        src="/images/social-media/github.svg"
        alt="Tainu's Github"
        width={25}
        height={25}
      />
      <Image
        src="/images/social-media/instagram.svg"
        alt="Tainu's instagram"
        width={25}
        height={25}
      />
      <Image
        src="/images/social-media/X.svg"
        alt="Tainu's X"
        width={25}
        height={25}
      />
    </div>
  );
}
