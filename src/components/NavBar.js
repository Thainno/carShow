import Image from "next/image";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <header className="flex justify-between items-center h-24 text-white">
      <Image
        src="/images/logo.svg"
        width={200}
        height={96}
        alt="Logo CarShow"
      />
      <SearchBar />
      <nav>
        <ul className="flex gap-5">
          <li>01</li>
          <li>02</li>
          <li>03</li>
        </ul>
      </nav>
    </header>
  );
}
