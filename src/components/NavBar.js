import Image from "next/image";

export default function NavBar() {
  return (
    <header className="flex justify-between items-center h-28 mx-24 text-white">
      <Image
        src="/images/logo.svg"
        width={200}
        height={96}
        alt="Logo CarShow"
      />
      <nav>
        <ul className="flex gap-5 text-base">
          <li>Galeria</li>
          <li>Sobre nós</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
}
