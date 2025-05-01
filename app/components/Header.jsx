import React from "react";
import logo from "../../public/globe.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex items-center justify-between py-5">
      <Link href={"/"}>
        <Image alt="logo" src={logo} className="" width={30} height={30} />
      </Link>

      <main className="flex items-center justify-between gap-5 bg-transparent backdrop-blur-lg py-5 pl-20 pr-32 text-sm">
        <Link href={"/"} className="flex items-center justify-center gap-2">
          <span className="font-extrabold">00</span>
          <p className="font-extralight">HOME</p>
        </Link>

        <Link
          href={"../pages/destination"}
          className="flex items-center justify-center gap-2"
        >
          <span className="font-extrabold">01</span>
          <p className="font-extralight">DESTINATION</p>
        </Link>

        <Link
          href={"../pages/crew"}
          className="flex items-center justify-center gap-2"
        >
          <span className="font-extrabold">03</span>
          <p className="font-extralight">CREW</p>
        </Link>

        <Link
          href={"../pages/technology"}
          className="flex items-center justify-center gap-2"
        >
          <span className="font-extrabold">04</span>
          <p className="font-extralight">TECHNOLOGY</p>
        </Link>
      </main>
    </nav>
  );
};

export default Header;
