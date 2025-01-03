import Image from "next/image";
import OutlineButton from "./OutlineButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex h-[5rem] items-center justify-between bg-[#0E1115] text-[#FBFBFB]">
      <div>
        <Link href="/">
          <Image
            src="/Logos.svg"
            alt="Logo"
            width={20}
            height={20}
            className="sm:hidden"
          />
          <Image
            src="/LogoDesktop.svg"
            alt="Logo"
            width={150}
            height={110}
            className="hidden sm:block"
          />
        </Link>
      </div>
      <div>
        <OutlineButton>Sign In</OutlineButton>
      </div>
    </nav>
  );
}
